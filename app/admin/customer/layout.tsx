"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { MoveLeft } from "lucide-react";

// import GroupData from "@/components/commonUi/groupData";
// import { MainTitleWrap, SubWrap } from "@/components/commonUi/mainTitleWrap";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  return (
    <div>
      <div className="w-full bg-white border-b  px-3 flex flex-row items-center justify-start h-[70px] gap-3">
        {/* <GroupData /> */}
        <Button onClick={() => router.back()}>
          <MoveLeft />
        </Button>
        {/* <Link href={"/admin"}>back</Link> */}
        <p className=" font-bold">고객관리</p>
        {/* {pathname === "/admin/group" && (
          <Button asChild size={"sm"}>
            <Link
              href={"/admin/group/new"}
              className="flex flex-row items-center gap-2"
            >
              <PlusIcon className="size-4" />
              학습그룹 생성
            </Link>
          </Button>
        )} */}
      </div>

      <div className="flex flex-col  bg-neutral-100">{children}</div>
    </div>
  );
}
