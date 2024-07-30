import KakaoMap from "@/component/kakaoMap";
import Image from "next/image";

const back1 =
  "https://imagedelivery.net/8GmAyNHLnOsSkmaGEU1nuA/79cfc850-66e3-4bb4-bb2d-25682a3f1f00/public";
const appstore =
  "https://imagedelivery.net/8GmAyNHLnOsSkmaGEU1nuA/33b426d9-bca0-41a7-e833-61d8f233d500/public";

const googleplay =
  "https://imagedelivery.net/8GmAyNHLnOsSkmaGEU1nuA/1ee5b3ed-534e-41a6-9f17-217c12d27000/public";
const aSeat =
  "https://imagedelivery.net/8GmAyNHLnOsSkmaGEU1nuA/78eb0000-13af-41ae-748e-cc8154c38e00/public";
const bSeat =
  "https://imagedelivery.net/8GmAyNHLnOsSkmaGEU1nuA/3d23418d-26ef-4362-b3ab-60a3fa96b200/public";
const cSeat =
  "https://imagedelivery.net/8GmAyNHLnOsSkmaGEU1nuA/159973de-d17e-4f05-d01f-a20bcd8c0700/public";

const lounge =
  "https://imagedelivery.net/8GmAyNHLnOsSkmaGEU1nuA/159973de-d17e-4f05-d01f-a20bcd8c0700/public";
const food1 =
  "https://imagedelivery.net/8GmAyNHLnOsSkmaGEU1nuA/fe5ab640-e9bb-4605-7c3c-79b0270af900/public";
const shoes1 =
  "https://imagedelivery.net/8GmAyNHLnOsSkmaGEU1nuA/7da6cb66-c385-4801-9aca-b3c1e1888300/public";
const shoes =
  "https://imagedelivery.net/8GmAyNHLnOsSkmaGEU1nuA/7da6cb66-c385-4801-9aca-b3c1e1888300/public";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-white">
      <div className="container mx-auto ">
        <header className="flex flex-col items-center justify-center  h-[80px]  w-full  relative  lg:px-0 px-6  ">
          <div className=" flex flex-row items-center justify-between w-full px-3">
            <div className="flex flex-row items-center">
              <div className="relative flex ">
                <Image
                  src={"/logo.svg"}
                  className="relative object-contain "
                  alt="Next.js Logo"
                  width={40}
                  height={40}
                  priority
                />
              </div>
              <div className="ml-2 text-emerald-800">
                <h1 className="text-sm">샤IN독서실</h1>
                <p className="text-sm">샤인스터디플레이스</p>
              </div>
            </div>
          </div>
        </header>
        <div className=" flex flex-col items-center justify-center w-full h-[80vh]">
          <p className="text-4xl font-black lg:text-6xl text-emerald-800">
            전용 어플리케이션 출시
          </p>
          <p className="mt-12">
            결제, 입퇴실 인증, 기록까지 편하게 이용해보세요.
          </p>
          <div className="flex flex-row items-center gap-3 mt-12">
            <Image src={appstore} width={80} height={80} alt="app store" />
            <Image src={googleplay} width={80} height={80} alt="googleplay" />
          </div>
          <div className="flex flex-row items-center justify-center px-12 py-3 mt-12 mb-24 rounded-full bg-emerald-500">
            <p className="font-bold text-white">뉴샤IN독서실</p>
            <p className="text-white">을 검색해보세요.</p>
          </div>
        </div>
        <div className=" flex flex-col items-center justify-between w-full gap-12 py-24">
          <h2 className="text-4xl font-bold text-black">운영안내</h2>
          <div className="flex flex-col items-center gap-3">
            <p className=" text-indigo-500">
              고등학생 이상 이용가능, 단 샤인학원생 예외
            </p>

            <p className=" text-black text-2xl">운영시간</p>
            <p className=" text-black text-2xl">08:00AM ~ 01:00AM</p>
            <p className=" text-black text-2xl">연중무휴</p>
            <p className=" text-black ">
              시스템 정비시 공지 후 휴무 할수 있습니다.
            </p>
          </div>
        </div>
        <div className="container flex flex-col items-center gap-12 py-24">
          <h2 className="text-4xl font-bold text-black">요금안내</h2>
          <div className="grid w-full grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-12 ">
            <div className="flex flex-col items-center justify-between col-span-1 overflow-hidden  bg-neutral-50 border">
              <Image src={aSeat} width={500} height={300} alt="독서실이미지" />
              <div className="flex flex-col items-start flex-1 w-full p-3">
                <h2 className="p-6 text-2xl font-bold text-black">A석</h2>
                <div className="flex flex-row items-center justify-between w-full p-6 mt-3">
                  <p className="font-bold text-black ">가격</p>
                  <p className="font-bold text-black ">일반(샤인학원생)</p>
                </div>
                <div className="flex flex-row items-center justify-between w-full p-6 border-b">
                  <p className="text-light ">1일석</p>
                  <p className="text-light ">10,000원(8,000원)</p>
                </div>
                <div className="flex flex-row items-center justify-between w-full p-6 border-b">
                  <p className="text-light ">15일석</p>
                  <p className="text-light ">100,000원(80,000원)</p>
                </div>
                <div className="flex flex-row items-center justify-between w-full p-6 ">
                  <p className="text-light ">30일석</p>
                  <p className="text-light ">180,000원(150,000원)</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-between col-span-1 overflow-hidden  bg-neutral-50 border">
              <Image src={bSeat} width={500} height={300} alt="독서실이미지" />
              <div className="flex flex-col items-start flex-1 w-full p-3">
                <h2 className="p-6 text-2xl font-bold text-black">B석</h2>
                <div className="flex flex-row items-center justify-between w-full p-6 mt-3">
                  <p className="font-bold text-black ">가격</p>
                  <p className="font-bold text-black ">일반(샤인학원생)</p>
                </div>
                <div className="flex flex-row items-center justify-between w-full p-6 border-b">
                  <p className="text-light ">1일석</p>
                  <p className="text-light ">9,000원(7,000)원</p>
                </div>
                <div className="flex flex-row items-center justify-between w-full p-6 border-b">
                  <p className="text-light ">15일석</p>
                  <p className="text-light ">90,000원(70,000)원</p>
                </div>
                <div className="flex flex-row items-center justify-between w-full p-6 ">
                  <p className="text-light ">30일석</p>
                  <p className="text-light ">160,000원(130,000)원</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-between col-span-1 overflow-hidden  bg-neutral-50 border">
              <Image src={cSeat} width={500} height={300} alt="독서실이미지" />
              <div className="flex flex-col items-start flex-1 w-full p-3">
                <h2 className="p-6 text-2xl font-bold text-black">C석</h2>
                <div className="flex flex-row items-center justify-between w-full p-6 mt-3">
                  <p className="font-bold text-black ">가격</p>
                  <p className="font-bold text-black ">일반(샤인학원생)</p>
                </div>
                <div className="flex flex-row items-center justify-between w-full p-6 border-b">
                  <p className="text-light ">1일석</p>
                  <p className="text-light ">8,000원(6,000원)</p>
                </div>
                <div className="flex flex-row items-center justify-between w-full p-6 border-b">
                  <p className="text-light ">15일석</p>
                  <p className="text-light ">80,000원(60,000원)</p>
                </div>
                <div className="flex flex-row items-center justify-between w-full p-6 ">
                  <p className="text-light ">30일석</p>
                  <p className="text-light ">130,000원(100,000원)</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-between col-span-1 overflow-hidden  bg-neutral-50 border">
              <div className="flex flex-col items-start flex-1 w-full p-3">
                <h2 className="p-6 text-2xl font-bold text-black">시간제</h2>
                <div className="flex flex-row items-center justify-between w-full p-6 mt-3">
                  <p className="font-bold text-black ">가격</p>
                  <p className="font-bold text-black ">일반(샤인학원생)</p>
                </div>
                <div className="flex flex-row items-center justify-between w-full p-6 border-b">
                  <p className="text-light ">50시간 (이용기간 60일)</p>
                  <p className="text-light ">60,000원</p>
                </div>

                <div className="flex flex-col items-start justify-between w-full p-6 gap-2 ">
                  <p className="text-indigo-500 font-bold">
                    시간제 사용 시 주의사항
                  </p>
                  <p className="mt-3 text-sm text-indigo-500 text-light whitespace-pre-wrap">
                    시간제 이용시 비어있는 A,B,C석 모두 이용가능 합니다.
                  </p>
                  <p className="text-sm text-indigo-500 text-light">
                    이용가능 좌석이 없을 시에는 사용이 불가 혹은 대기 할 수
                    있습니다.
                  </p>
                  <p className="text-sm text-indigo-500 text-light">
                    사용 후 퇴실 처리를 하셔야 시간이 차감되지 않으며, 잠시 퇴실
                    시에도 반드시 책상을 비우셔야 합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container flex flex-col items-center  gap-12 py-24">
          <h2 className=" text-4xl font-bold text-black">시설안내</h2>
          <div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-6 ">
            <div className="flex flex-row items-center justify-between col-span-1   bg-neutral-50 border">
              <div className="flex-1 relative">
                <Image
                  src={lounge}
                  className=" object-contain"
                  width={300}
                  height={300}
                  alt="독서실이미지"
                />
              </div>
              <div className="flex flex-col items-center flex-1 w-full ">
                <h2 className="text-xl font-bold text-black">라운지</h2>

                <div className="flex flex-col items-center w-full ">
                  <p className="text-light ">공용 프린터</p>
                  <p className="text-light ">공용 컴퓨터 2대</p>
                </div>
              </div>
            </div>
            <div className="grid w-full grid-cols-1 gap-12 ">
              <div className="flex flex-row items-center justify-between col-span-1   bg-neutral-50 border">
                <div className="flex-1 relative">
                  <Image
                    src={food1}
                    width={300}
                    height={300}
                    alt="독서실이미지"
                  />
                </div>
                <div className="flex flex-col items-center flex-1 w-full p-3">
                  <h2 className="text-xl font-bold text-black">푸드룸</h2>

                  <div className="flex flex-col items-center w-full p-6 ">
                    <p className="text-light ">냉장고</p>
                    <p className="text-light ">전자레인지</p>
                    <p className="text-light ">원두커피머신</p>
                    <p className="text-light ">개인 컵 살균기</p>
                    <p className="text-light ">정수기</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid w-full grid-cols-1 gap-12 ">
              <div className="flex flex-row items-center justify-between col-span-1   bg-neutral-50 border">
                <div className="flex-1 relative">
                  <Image
                    src={shoes}
                    width={300}
                    height={300}
                    alt="독서실이미지"
                  />
                </div>
                <div className="flex flex-col items-center flex-1 w-full p-3">
                  <h2 className="text-xl font-bold text-black">사물함</h2>
                </div>
              </div>
            </div>
            <div className="grid w-full grid-cols-1 gap-12 ">
              <div className="flex flex-row items-center justify-between col-span-1   bg-neutral-50 border">
                <div className="flex-1 relative">
                  <Image
                    src={shoes1}
                    width={300}
                    height={300}
                    alt="독서실이미지"
                  />
                </div>
                <div className="flex flex-col items-center flex-1 w-full p-3">
                  <h2 className="text-xl font-bold text-black">신발장</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section
        id="address"
        className="flex flex-col items-center justify-start w-full"
      >
        <div className="container flex flex-col items-center justify-start flex-1 gap-12 ">
          <h2 className="text-3xl font-bold">찾아오는길</h2>
          <div className="w-full h-[500px] relative">
            <KakaoMap />
          </div>
          <p className="mt-6 ">제주시 연북로 638 2층</p>
          <h2 className="mt-12 text-3xl font-bold ">문의</h2>
          <p>064.723.3015</p>
        </div>
      </section>
      <footer className=" flex flex-col items-center w-full px-12 mt-24 bg-neutral-100  py-24 border-t wf">
        <div className="flex flex-col items-start justify-end w-full  divide-y divide-gray-500 lg:items-center">
          <div className="flex flex-col items-start py-2 text-xs text-gray-500 lg:items-center lg:flex-row">
            <p>샤IN독서실</p>
            <p className="lg:ml-3">대표 김호성</p>
            <p className="lg:ml-3">228-91-01740</p>
            <p className="lg:ml-3">제주특별자치도 제주시 연북로 638 2층</p>
            <a
              target="_blank"
              href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=1461101863"
              className=" lg:ml-3"
            >
              통신판매업신고번호
            </a>
            <p className="lg:ml-3">064.723.3015</p>
          </div>
          <div className="flex flex-col items-start py-2 text-xs text-gray-500 lg:items-center lg:flex-row">
            <p>샤인스터디플레이스</p>
            <p className="lg:ml-3">대표 김호성</p>
            <p className="lg:ml-3">146-11-01863</p>
            <p className="lg:ml-3">제주특별자치도 제주시 연북로 638 2층</p>
            <a
              target="_blank"
              href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=2289101740"
              className="lg:ml-3"
            >
              통신판매업신고번호
            </a>
            <p className="lg:ml-3">064.723.3015</p>
          </div>
        </div>
        <p className="text-xs text-gray-500">
          copyright{" "}
          <script>
            today = new Date() yyy = today.getFullYear() document.write(yyy)
          </script>
          &copy;샤IN독서실 All rights reserved.
        </p>
      </footer>
    </main>
  );
}
