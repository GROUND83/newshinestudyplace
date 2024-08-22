import TableWrap from "@/components/common/tableWrap";
import Image from "next/image";
import { columns } from "./_component/columns";
import { getMoreData } from "./_component/actions";

export default function Page() {
  return (
    <div className="w-full ">
      <TableWrap
        columns={columns}
        getMoreData={getMoreData}
        subMenu={false}
        placeHolder="공지사항을 검색하세요."
        searchShow={true}
        height="h-[calc(100vh-170px)]"
      />
    </div>
  );
}
