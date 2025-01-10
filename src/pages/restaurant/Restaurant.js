import React, { useEffect, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

const Restaurant = () => {
    const [isMapReady, setIsMapReady] = useState(false);

    useEffect(() => {
        console.log(window);
        // 카카오 맵 API가 로드되었는지 확인
        if (window.kakao) {
            setIsMapReady(true);
        } else {
            console.log("카카오 맵 API 로드 실패");
        }
    }, []);

    return (
        <div style={{ height: "85vh" }}>
            {isMapReady ? (
                <Map
                    id="map"
                    center={{ lat: 37.497942, lng: 127.027621 }}
                    style={{ width: "100%", height: "100%"}}
                    level={3}
                >
                    <MapMarker position={{ lat: 33.55635, lng: 126.795841 }} />
                </Map>
            ) : (
                <div>지도 로딩 중...</div>
            )}
        </div>
    );
};

export default Restaurant;


