"use client";
import { useEffect, useRef } from "react";
import "react-kakao-maps-sdk";
declare global {
  interface Window {
    kakao: any;
  }
}
const KakaoMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    window.kakao.maps.load(() => {
      const options = {
        //지도를 생성할 때 필요한 기본 옵션
        center: new window.kakao.maps.LatLng(33.4908499, 126.5457654), //지도의 중심좌표.
        level: 2, //지도의 레벨(확대, 축소 정도)
      };

      const map = new window.kakao.maps.Map(mapRef.current, options); //지도 생성 및 객체 리턴
    });
  }, []);

  return <div ref={mapRef} className="w-full h-[500px] "></div>;
};

export default KakaoMap;
