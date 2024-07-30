import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

const KAKAO_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APP_JS_KEY}&autoload=false`;
const shoes =
  "https://imagedelivery.net/8GmAyNHLnOsSkmaGEU1nuA/e5ac0d87-36dd-4781-7861-c1e7f4e04700/public";
export const metadata: Metadata = {
  title: "샤IN독서실",
  description: "제주 프리미엄 독서실 ",
  keywords: "샤인독서실, 샤인, 스터디 카페, 제주 독서실, 독서실, 아라동 독서실",
  openGraph: {
    images: [
      {
        url: shoes,
        alt: "제주 프리미엄 샤IN독서실",
      },
    ],
  },
  twitter: {
    images: [
      {
        url: shoes,
        alt: "제주 프리미엄 샤IN독서실",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}

        <Script src="https://developers.kakao.com/sdk/js/kakao.js" async />
        {/* <Script
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APP_JS_KEY}&autoload=false&libraries=services`}
        strategy="beforeInteractive"
      /> */}
        <Script
          strategy="beforeInteractive"
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APP_JS_KEY}&autoload=false`}
        />
        {/* <Script
          strategy="beforeInteractive"
          type="text/javascript"
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APP_JS_KEY}&autoload=false&libraries=services`}
        /> */}
      </body>
    </html>
  );
}
