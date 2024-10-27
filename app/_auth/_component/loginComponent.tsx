"use client";
import React, { Suspense } from "react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { LockClosedIcon } from "@heroicons/react/24/outline";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { authenticate } from "./actions";

const formSchema = z.object({
  email: z.string().email({ message: "이메일을 입력하세요." }),
  password: z.string(),
});
const LoginWrap = () => {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const searchParams = useSearchParams();

  //
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  async function onSubmit(data: z.infer<typeof formSchema>) {
    // console.log("data", data);
    try {
      setLoading(true);
      let formData = new FormData();

      formData.append("email", data.email);
      formData.append("password", data.password);
      formData.append("role", "admin");
      formData.append("callbackUrl", "/admin");

      //
      let res = await authenticate(formData);
      console.log("res", res);
      if (res) {
        console.log("res", res);
        let resdata = JSON.parse(res);
        if (resdata.passwrod) {
          toast.error(resdata.passwrod);
        }
      } else {
        console.log("res", res);

        console.log("이동");
        router.push("/admin");
      }
    } catch (e: any) {
      console.log("ee,", e);
      toast.error(e);
    } finally {
      setLoading(false);
    }
  }
  return (
    <main className="flex h-screen flex-col items-center justify-center bg-neutral-100 ">
      <div className=" container mx-auto flex flex-col items-center ">
        <div className="flex flex-col items-center gap-12    border p-6 lg:p-12 rounded-md bg-white  w-full lg:w-1/2">
          {/* <Logo /> */}

          <p className="text-2xl font-bold">관리자 로그인</p>

          <Form {...form}>
            <form
              className="flex flex-col gap-6 w-full "
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="이메일을 입력하세요."
                        type="email"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="비밀번호를 입력하세요."
                        type="password"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="mt-6" disabled={loading}>
                {loading ? (
                  <Loader2 className="size-4 animate-spin" />
                ) : (
                  <p>관리자 로그인</p>
                )}
              </Button>
            </form>
          </Form>
          <section className="flex flex-row items-center gap-3  px-6  mt-24 h-6">
            <Button asChild variant="outline">
              <Link href={"/"}>홈</Link>
            </Button>
          </section>
        </div>
      </div>
    </main>
  );
};

export default LoginWrap;
