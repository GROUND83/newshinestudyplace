"use client";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

export default function Page() {
  return (
    <div className="w-full p-3 bg-white h-[calc(100vh-70px)]">
      <Button onClick={() => signOut()}>로그아웃</Button>
    </div>
  );
}
