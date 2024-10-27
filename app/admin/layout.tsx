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
            <div className="bg-neutral-100  h-full flex-1 ">{children}</div>
          </div>
        </ReactQueryClientProvider>
      </AuthProvider>
      <Toaster />
    </div>
  );
}
