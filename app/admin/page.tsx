"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Page() {
  const pathname = usePathname();
  return (
    <main className="flex  flex-col items-start">
      <div className="p-6 w-full  ">
        <div className=" bg-white h-full border flex flex-col items-center gap-3 p-3 text-sm">
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
          <div className="w-full grid  grid-cols-9 lg:grid-cols-12 gap-3">
            <Link
              href={"/admin/notice"}
              className={`col-span-3 p-2 border w-full flex flex-col items-center  justify-center  h-24 rounded-md  ${
                pathname.startsWith("/admin/notice")
                  ? "bg-primary text-white"
                  : "bg-transparent"
              }`}
            >
              <p>공지사항</p>
            </Link>

            {/* <Link
              href={"/admin/complain"}
              className={`col-span-3 p-2 border w-full flex flex-col items-center  justify-center  h-24 rounded-md`}
            >
              <p>문의사항</p>
            </Link> */}

            {/* <Link
              href={"/admin/complain"}
              className={`col-span-3 p-2 border w-full flex flex-col items-center  justify-center  h-24 rounded-md`}
            >
              <p>주문내역</p>
            </Link> */}
            {/* <Link
              href={"/admin/complain"}
              className={`col-span-3 p-2 border w-full flex flex-col items-center  justify-center  h-24 rounded-md`}
            >
              <p>입실기록</p>
            </Link> */}
            {/* <Link
              href={"/admin/complain"}
              className={`col-span-3 p-2 border w-full flex flex-col items-center  justify-center  h-24 rounded-md`}
            >
              <p>좌석티켓</p>
            </Link> */}
            {/* <Link
              href={"/admin/complain"}
              className={`col-span-3 p-2 border w-full flex flex-col items-center  justify-center  h-24 rounded-md`}
            >
              <p>좌석</p>
            </Link> */}
            {/* <Link
              href={"/admin/complain"}
              className={`col-span-3 p-2 border w-full flex flex-col items-center  justify-center  h-24 rounded-md`}
            >
              <p>가격</p>
            </Link> */}
            <Link
              href={"/admin/customer"}
              className={`col-span-3 p-2 border w-full flex flex-col items-center  justify-center  h-24 rounded-md ${
                pathname.startsWith("/admin/customer")
                  ? "bg-primary text-white"
                  : "bg-transparent"
              }`}
            >
              <p>고객</p>
            </Link>
            {/* <Link
              href={"/admin/complain"}
              className={`col-span-3 p-2 border w-full flex flex-col items-center  justify-center  h-24 rounded-md`}
            >
              <p>로그기록</p>
            </Link> */}
            <Link
              href={"/admin/profile"}
              className={`col-span-3 p-2 border w-full flex flex-col items-center  justify-center  h-24 rounded-md ${
                pathname.startsWith("/admin/profile")
                  ? "bg-primary text-white"
                  : "bg-transparent"
              }`}
            >
              <p>프로필</p>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
