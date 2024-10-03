"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import Link from "next/link";
// import { PlusIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import AuthProvider from "@/lib/authProvider";
import { ReactQueryClientProvider } from "@/lib/react-query/queryProvider";
import Image from "next/image";
import { Toaster } from "@/components/ui/sonner";

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
      <AuthProvider>
        <ReactQueryClientProvider>
          <div className="w-full h-screen flex flex-row items-start">
            <div className="w-[200px] bg-white h-full border-r flex flex-col items-center gap-3 p-3 text-sm">
              <div className="h-[50px] flex flex-col items-center justify-center">
                <Link href={"/"}>
                  <div className="flex flex-row items-center">
                    <div className="relative flex ">
                      <Image
                        src={"/logo.svg"}
                        className="relative object-contain "
                        alt="Logo"
                        width={30}
                        height={30}
                        priority
                      />
                    </div>
                    <div className="ml-2 text-emerald-800">
                      <h1 className="text-sm">샤IN독서실</h1>
                      <p className="text-sm">샤인스터디플레이스</p>
                    </div>
                  </div>
                </Link>
              </div>
              <Link
                href={"/admin/notice"}
                className={`p-2 border w-full flex flex-col items-center rounded-md ${
                  pathname.startsWith("/admin/notice")
                    ? "bg-primary text-white"
                    : "bg-transparent"
                }`}
              >
                <p>공지사항</p>
              </Link>
              <Link
                href={"/admin/complain"}
                className={`p-2 border w-full flex flex-col items-center rounded-md`}
              >
                <p>문의사항</p>
              </Link>
              <Link
                href={"/admin/complain"}
                className={`p-2 border w-full flex flex-col items-center rounded-md`}
              >
                <p>주문내역</p>
              </Link>
              <Link
                href={"/admin/complain"}
                className={`p-2 border w-full flex flex-col items-center rounded-md`}
              >
                <p>입실기록</p>
              </Link>
              <Link
                href={"/admin/complain"}
                className={`p-2 border w-full flex flex-col items-center rounded-md`}
              >
                <p>좌석티켓</p>
              </Link>
              <Link
                href={"/admin/complain"}
                className={`p-2 border w-full flex flex-col items-center rounded-md`}
              >
                <p>좌석</p>
              </Link>
              <Link
                href={"/admin/complain"}
                className={`p-2 border w-full flex flex-col items-center rounded-md`}
              >
                <p>가격</p>
              </Link>
              <Link
                href={"/admin/customer"}
                className={`p-2 border w-full flex flex-col items-center rounded-md ${
                  pathname.startsWith("/admin/customer")
                    ? "bg-primary text-white"
                    : "bg-transparent"
                }`}
              >
                <p>고객</p>
              </Link>
              <Link
                href={"/admin/complain"}
                className={`p-2 border w-full flex flex-col items-center rounded-md`}
              >
                <p>로그기록</p>
              </Link>
              <Link
                href={"/admin/profile"}
                className={`p-2 border w-full flex flex-col items-center rounded-md ${
                  pathname.startsWith("/admin/profile")
                    ? "bg-primary text-white"
                    : "bg-transparent"
                }`}
              >
                <p>프로필</p>
              </Link>
            </div>
            <div className="bg-neutral-100  h-full flex-1 ">{children}</div>
          </div>
        </ReactQueryClientProvider>
      </AuthProvider>
      <Toaster />
    </div>
  );
}
