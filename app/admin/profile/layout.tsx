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
        <p>프로필</p>
      </div>

      <div className="flex flex-col  bg-neutral-100">{children}</div>
    </div>
  );
}
