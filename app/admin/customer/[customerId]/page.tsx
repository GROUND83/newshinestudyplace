//
"use client";

import React from "react";
import {
  editCustomer,
  getCustomerDetail,
  resetPassWordCustomer,
} from "../_component/actions";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import FormLabelWrap from "@/components/formLabelWrap";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import AlertDiglogWrap from "@/components/common/alertDialogWrap";
import AlertDiglogDeleteWrap from "@/components/common/alertDialogDeleteWrap";
const FormSchema = z.object({
  _id: z.string(),
  age: z.number(),
  eventAlram: z.boolean(),
  gender: z.string(),
  isDelete: z.boolean(),
  isTester: z.boolean(),
  is_black: z.boolean(),
  onsignalId: z.string().optional(),
  parentSent: z.boolean(),
  personalPolicy: z.boolean(),
  phone: z.string(),
  schoolGrade: z.number().optional(),
  schoolName: z.string().optional(),
  servicePolicy: z.boolean(),
  type: z.string(),
  userBirth: z.string(),
  userName: z.string(),
});
export default function Page({ params }: { params: { customerId: string } }) {
  const [loading, setLoading] = React.useState<any>(false);
  // const getDetail = async () => {
  //   let res = await getCustomerDetail(params.customerId);
  //   if (res.data) {
  //     //
  //     console.log("JSON.parse(res.data)", JSON.parse(res.data));
  //     serCustomer(JSON.parse(res.data));
  //   }
  // };
  // React.useEffect(() => {
  //   getDetail();
  // }, []);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {},
  });

  const fetchDataOptions = {
    detailId: params.customerId,
  };
  const {
    data: customerData,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["customerDetail", fetchDataOptions],
    queryFn: async () => {
      let res = await getCustomerDetail(params.customerId);
      if (res.data) {
        let reader = JSON.parse(res.data);
        console.log("JSON.parse(res.data)", JSON.parse(res.data));
        form.reset({
          _id: reader._id,
          type: reader.type,
          userName: reader.userName,
          gender: reader.gender,
          phone: reader.phone,
          age: reader.age,
          userBirth: reader.userBirth,
          eventAlram: reader.eventAlram,
          isDelete: reader.isDelete,
          isTester: reader.isTester,
          is_black: reader.is_black,
          onsignalId: reader.onsignalId,
          parentSent: reader.parentSent,
          personalPolicy: reader.personalPolicy,
          schoolGrade: Number(reader.schoolGrade) || undefined,
          schoolName: reader.schoolName || undefined,
          servicePolicy: reader.servicePolicy,
        });
        return reader;
      } else {
        return null;
      }
    },
    refetchOnMount: true,
  });
  async function onSubmit(values: z.infer<typeof FormSchema>) {
    console.log("values", values);
    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("values", JSON.stringify(values));

      // 코스프로파일에 모듈 .레슨이 있는지
      // 레슨에 집합교육이면 라이브서베이 설정 되었는지.
      // 코스프로 파일 선택 하면 eduForm 집학교육 or SOJT 확인 후 설문 배정
      //

      let res = await editCustomer(formData);
      console.log(res);
      if (res.data) {
        toast.success("고객 수정 성공하였습니다.");
        // router.push(`/admin/group`);
      } else {
        toast.error(res.error);
      }
    } catch (e: any) {
      toast.error(e);
      //
    } finally {
      setLoading(false);
    }
  }

  const clickPassWordReset = async () => {
    //
    console.log("비밀번호 초기화");
    let res = await resetPassWordCustomer(params.customerId);
    if (res.data) {
      //
      console.log("res.data", res.data);
      toast.success("비밀번호가 초기화 되었습니다.");
    }
    //
    if (res.error) {
      toast.error(`${res.error}`);
    }

    //
  };

  React.useEffect(() => {
    if (form?.formState.errors) {
      console.log("form.formState.errors", form.formState.errors);
    }
  }, [form?.formState]);

  if (isLoading) {
    return (
      <div className="w-full h-[calc(100vh-70px)] flex flex-col items-center justify-center">
        <Loader2 className=" animate-spin size-5" />
      </div>
    );
  }

  //
  return (
    <div>
      <ScrollArea className="h-[calc(100vh-70px)] flex flex-col">
        <div className="bg-white borderw-full flex flex-col items-start gap-2">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
              <div className="w-full grid grid-cols-12 gap-6 p-12">
                <FormField
                  control={form.control}
                  name="type"
                  render={({ field }) => (
                    <FormItem className=" col-span-3">
                      <FormLabelWrap title={"타입"} required={true} />
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="계정의 타입을 선택하세요." />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="일반">일반</SelectItem>
                          <SelectItem value="학생">학생</SelectItem>
                          <SelectItem value="샤인학원생">샤인학원생</SelectItem>
                        </SelectContent>
                      </Select>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className=" col-span-12 grid grid-cols-12 gap-6">
                  <FormField
                    control={form.control}
                    name="userName"
                    render={({ field: { value, onChange } }) => (
                      <FormItem className="flex flex-col col-span-4">
                        <FormLabelWrap title={"이름"} required={true} />
                        <Input
                          value={value || ""}
                          onChange={onChange}
                          placeholder="이름을 입력하세요."
                        />

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="gender"
                    render={({ field }) => (
                      <FormItem className=" col-span-4">
                        <FormLabelWrap title={"성별"} required={true} />
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="성별을 선택하세요." />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="남">남</SelectItem>
                            <SelectItem value="여">여</SelectItem>
                          </SelectContent>
                        </Select>

                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field: { value, onChange } }) => (
                      <FormItem className="flex flex-col col-span-4">
                        <FormLabelWrap title={"전화번호"} required={true} />
                        <Input
                          value={value || ""}
                          onChange={onChange}
                          placeholder="전화번호를 입력하세요."
                        />
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="col-span-12 grid grid-cols-12 gap-6">
                  <FormField
                    control={form.control}
                    name="userBirth"
                    render={({ field: { value, onChange } }) => (
                      <FormItem className="flex flex-col col-span-4">
                        <FormLabelWrap title={"생일"} required={true} />
                        <Input
                          value={value || ""}
                          onChange={onChange}
                          placeholder="전화번호를 입력하세요."
                        />
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="age"
                    render={({ field: { value, onChange } }) => (
                      <FormItem className="flex flex-col col-span-4">
                        <FormLabelWrap title={"나이"} required={true} />
                        <Input
                          type="number"
                          value={value || undefined}
                          onChange={(e) => {
                            console.log("Value", e.target.value);
                            form.setValue("age", Number(e.target.value));
                          }}
                          placeholder="나이를 입력하세요."
                        />
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                {form.getValues("type") !== "일반" && (
                  <div className=" col-span-12 grid grid-cols-12 gap-6">
                    <FormField
                      control={form.control}
                      name="schoolName"
                      render={({ field: { value, onChange } }) => (
                        <FormItem className="flex flex-col col-span-4">
                          <FormLabelWrap title={"학교"} required={true} />
                          <Input
                            disabled={form.getValues("type") === "일반"}
                            value={value || ""}
                            onChange={onChange}
                            placeholder="학교를 입력하세요."
                          />
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="schoolGrade"
                      render={({ field }) => (
                        <FormItem className=" col-span-4">
                          <FormLabelWrap title={"학년"} required={true} />
                          <Select
                            disabled={form.getValues("type") === "일반"}
                            onValueChange={field.onChange}
                            defaultValue={field.value?.toString() || undefined}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="학년을 선택하세요." />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="1">1</SelectItem>
                              <SelectItem value="2">2</SelectItem>
                              <SelectItem value="3">2</SelectItem>
                            </SelectContent>
                          </Select>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                )}
                <div className=" col-span-12">
                  <FormField
                    control={form.control}
                    name="onsignalId"
                    render={({ field: { value, onChange } }) => (
                      <FormItem className="flex flex-col col-span-3">
                        <FormLabelWrap title={"푸쉬아이디"} required={false} />
                        <Input
                          disabled
                          value={value || ""}
                          onChange={onChange}
                          placeholder="푸쉬아이디를 입력하세요."
                        />
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className=" col-span-12 grid grid-cols-12 gap-6">
                  <FormField
                    control={form.control}
                    name="personalPolicy"
                    render={({ field }) => (
                      <FormItem className="flex flex-col col-span-4">
                        <FormLabelWrap
                          title={"개인정보정책"}
                          required={false}
                        />

                        <FormControl>
                          <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="servicePolicy"
                    render={({ field }) => (
                      <FormItem className="flex flex-col col-span-4">
                        <FormLabelWrap title={"서비스정책"} required={false} />

                        <FormControl>
                          <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="parentSent"
                    render={({ field }) => (
                      <FormItem className="flex flex-col col-span-4">
                        <FormLabelWrap title={"부모알림"} required={false} />

                        <FormControl>
                          <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="isDelete"
                    render={({ field }) => (
                      <FormItem className="flex flex-col col-span-4">
                        <FormLabelWrap title={"삭제요청"} required={false} />
                        <FormDescription>
                          고객이 삭제요청시 ON됩니다.
                        </FormDescription>
                        <FormControl>
                          <Switch
                            disabled
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="is_black"
                    render={({ field }) => (
                      <FormItem className="flex flex-col col-span-4">
                        <FormLabelWrap title={"블랙계정"} required={false} />
                        <FormDescription>
                          블랙계정 사용시 계정은 사용하지 못합니다.
                        </FormDescription>
                        <FormControl>
                          <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="isTester"
                    render={({ field }) => (
                      <FormItem className="flex flex-col col-span-4">
                        <FormLabelWrap title={"출입티켓"} required={false} />
                        <FormDescription>
                          청소업체 계정에 사용하세요.
                        </FormDescription>
                        <FormControl>
                          <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className=" col-span-12 border-t border-b py-6 px-6 flex flex-row items-center  justify-end gap-6">
                <AlertDiglogDeleteWrap
                  btnTitle="고객삭제"
                  title="고객삭제"
                  description="고객을 삭제하면 관련된 데이터 모두 삭제됩니다."
                  onClick={() => clickPassWordReset()}
                />

                <AlertDiglogWrap
                  btnTitle="비밀번호 초기화"
                  title="비밀번호 초기화"
                  description="비밀번호를 shine1234로 초기화 합니다."
                  onClick={() => clickPassWordReset()}
                />
                {/* <Button type="button" variant={"defaultOutline"}>
                  비밀번호 초기화
                </Button> */}
                <Button type="submit">수정</Button>
              </div>
            </form>
          </Form>
        </div>
      </ScrollArea>
    </div>
  );
}
