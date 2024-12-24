import React, { useEffect } from "react";

const KakaoMap = () => {
  useEffect(() => {
    const initializeMap = () => {
      if (!window.kakao || !window.kakao.maps) {
        console.error("Kakao Maps 객체가 초기화되지 않았습니다.");
        return;
      }

      console.log("Initializing Kakao Map...");
      const container = document.getElementById("map");
      if (!container) {
        console.error("지도 표시용 div(#map)를 찾을 수 없습니다.");
        return;
      }

      const options = {
        center: new window.kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
      };

      try {
        new window.kakao.maps.Map(container, options);
        console.log("Kakao Map 초기화 성공.");
      } catch (error) {
        console.error("Kakao Map 초기화 중 에러 발생:", error);
      }
    };

    // Kakao Maps SDK가 이미 로드된 경우
    if (document.querySelector("script[src*='dapi.kakao.com']")) {
      console.log("Kakao Maps SDK already loaded.");
      window.kakao.maps.load(() => {
        console.log("Kakao Maps SDK 초기화 완료.");
        initializeMap();
      });
      return;
    }

    // Kakao Maps SDK 스크립트 동적 로드
    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAOMAP_KEY}&autoload=false`;
    script.async = true;
    document.head.appendChild(script);

    console.log("Loading Kakao Maps SDK...");

    script.onload = () => {
      if (!window.kakao || !window.kakao.maps) {
        console.error("Kakao Maps SDK 로드 실패: window.kakao.maps 객체를 찾을 수 없습니다.");
        return;
      }

      window.kakao.maps.load(() => {
        console.log("Kakao Maps SDK 초기화 완료.");
        initializeMap();
      });
    };

    script.onerror = () => {
      console.error("Kakao Maps SDK 로드 중 에러가 발생했습니다.");
    };

    return () => {
      console.log("Removing Kakao Maps SDK script...");
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div
      id="map"
      style={{
        width: "500px",
        height: "400px",
      }}
    ></div>
  );
};

export default KakaoMap;
