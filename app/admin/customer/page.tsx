import TableWrap from "@/components/common/tableWrap";
import { columns } from "./_component/columns";
import { getMoreData } from "./_component/actions";

export default function Home() {
  return (
    <div className="w-full ">
      <TableWrap
        columns={columns}
        getMoreData={getMoreData}
        subMenu={false}
        placeHolder="고객명, 전화번호을 검색하세요."
        searchShow={true}
        height="h-[calc(100vh-170px)]"
      />
    </div>
  );
}
