"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import Link from "next/link";
import { PlusIcon } from "lucide-react";
import { usePathname } from "next/navigation";
// import GroupData from "@/components/commonUi/groupData";
// import { MainTitleWrap, SubWrap } from "@/components/commonUi/mainTitleWrap";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <div>
      <div className="w-full bg-white border-b  px-3 flex flex-row items-center justify-between h-[70px]">
        {/* <GroupData /> */}
        <p>공지사항</p>
        {pathname === "/admin/group" && (
          <Button asChild size={"sm"}>
            <Link
              href={"/admin/group/new"}
              className="flex flex-row items-center gap-2"
            >
              <PlusIcon className="size-4" />
              학습그룹 생성
            </Link>
          </Button>
        )}
      </div>

      <div className="flex flex-col  bg-neutral-100">{children}</div>
    </div>
  );
}
