"use client";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
dayjs.locale("ko");

export const columns: ColumnDef<any>[] = [
  {
    accessorKey: "type",
    header: ({ column }) => {
      return (
        <div className="flex flex-col items-start justify-center text-left ">
          <Button
            variant="ghost"
            className="  p-0 text-xs"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            상태
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      return (
        <div className=" text-left ">
          <Badge
            className="font-normal"
            // variant={"thirdOutline"}
            variant={
              row.getValue("type") === "일반"
                ? "defaultOutline"
                : row.getValue("type") === "학생"
                ? "secondOutline"
                : "thirdOutline"
            }
          >
            {row.getValue("type")}
          </Badge>
        </div>
      );
    },
  },
  {
    accessorKey: "userName",
    header: ({ column }) => {
      return (
        <div className="flex flex-col items-start justify-center text-left ">
          <Button
            variant="ghost"
            className="  p-0 text-xs"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            이름/전화번호
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      return (
        <div className=" text-left ">
          <p className=" text-sm">{row.getValue("userName")}</p>
          <p className="text-neutral-500  text-xs">{row.original?.phone}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "age",
    header: ({ column }) => {
      return (
        <div className="flex flex-col items-start justify-center text-left ">
          <Button
            variant="ghost"
            className="  p-0 text-xs"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            나이/생년월일
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      return (
        <div className=" text-left ">
          <p className=" text-sm">{row.getValue("age")}</p>
          <p className="text-neutral-500  text-xs">{row.original?.userBirth}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "schoolName",
    header: ({ column }) => {
      return (
        <div className="flex flex-col items-start justify-center text-left ">
          <Button
            variant="ghost"
            className="  p-0 text-xs"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            학교/학년
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      return (
        <div className=" text-left ">
          {row.getValue("schoolName") ? (
            <>
              <p className=" text-sm">{row.getValue("schoolName")}</p>
              <p className="text-neutral-500  text-xs">
                {row.original?.schoolGrade}학년
              </p>
            </>
          ) : (
            <p>-</p>
          )}
        </div>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => {
      return (
        <div className="text-center">
          <Button
            variant="ghost"
            className=" p-0 text-xs"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            생성일
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      return (
        <div className="text-center">
          <p className="text-xs">
            {dayjs(row.getValue("createdAt")).format("YYYY/MM/DD HH:mm(dd)")}
          </p>
        </div>
      );
    },
  },
  {
    accessorKey: "isDelete",
    header: ({ column }) => {
      return (
        <div className="flex flex-col items-start justify-center text-left ">
          <Button
            variant="ghost"
            className="  p-0 text-xs"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            삭제요청
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      return (
        <div className=" text-left ">
          {row.getValue("isDelete") ? (
            <Badge
              className="font-normal"
              // variant={"thirdOutline"}
              variant={"destructive"}
            >
              삭제요청
            </Badge>
          ) : (
            <p>-</p>
          )}
        </div>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return (
        <div className=" text-right">
          <Button variant="outline" size="sm" asChild>
            <Link href={`/admin/customer/${row.original._id}`}>
              <MagnifyingGlassIcon className="size-4" />
            </Link>
          </Button>
        </div>
      );
    },
  },
];
