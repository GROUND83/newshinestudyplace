import TableWrap from "@/components/common/tableWrap";
import { columns } from "./_component/columns";
import { getMoreData } from "./_component/actions";
import MobileTable from "@/components/common/mobileTable";
import { mobileColumns } from "./_component/mobileColumns";

export default function Home() {
  return (
    <div className="w-full ">
      <div className="w-full hidden sm:hidden md:block lg:block xl:block">
        <TableWrap
          columns={columns}
          getMoreData={getMoreData}
          subMenu={false}
          placeHolder="고객명, 전화번호을 검색하세요."
          searchShow={true}
          height="h-[calc(100vh-170px)]"
        />
      </div>
      <div className="w-full block xs:block  sm:block md:hidden lg:hidden">
        <MobileTable
          columns={mobileColumns}
          getMoreData={getMoreData}
          subMenu={false}
          placeHolder="고객명, 전화번호을 검색하세요."
          searchShow={true}
          height="h-[calc(100vh-240px)]"
        />
      </div>
    </div>
  );
}
