import React, { useState } from 'react';
import S from './style';
import SideBar from './SideBar';
import Map from './Map'; 
import KakaoMap from './KakaoMap';

const Restaurant = () => {

    // 주변 레스토랑 목록 보여주는 상태
    const [showNearRestaurant, setShowNearRestaurant] = useState(false);
    
    // 스크랩 목록 보여주는 상태
    const [showScrapRestaurant, setShowScrapRestaurant] = useState(false);

    // 최근 목록 보여주는 상태
    const [showLatelyRestaurant, setShowLatelyRestaurant] = useState(false);

    // 레스토랑 상세 정보를 확인하기 위한 상태
    const [selectedRestaurant, setSelectedRestaurant] = useState(null);

    // 주변 레스토랑 목록 상태 변경
    const handleNearRestaurantClick = () => {
        setShowNearRestaurant((prevState) => !prevState); 
        setShowScrapRestaurant(false); // 스크랩 목록 숨기기
        setShowLatelyRestaurant(false); // 최근 목록 숨기기
        setSelectedRestaurant(null); // 목록 클릭 시 상세 정보 초기화
    };

    // 스크랩 레스토랑 목록 상태 변경
    const handleScrapRestaurantClick = () => {
        setShowScrapRestaurant((prevState) => !prevState); 
        setShowNearRestaurant(false); // 주변 목록 숨기기
        setShowLatelyRestaurant(false); // 최근 목록 숨기기
        setSelectedRestaurant(null); // 목록 클릭 시 상세 정보 초기화
    };

    // 최근 레스토랑 목록 상태 변경
    const handleLatelyRestaurantClick = () => {
        setShowLatelyRestaurant((prevState) => !(prevState));
        setShowNearRestaurant(false); // 주변 목록 숨기기
        setShowScrapRestaurant(false); // 스크랩 목록 숨기기
        setSelectedRestaurant(null); // 목록 클릭 시 상세 정보 초기화
    };

    // 레스토랑 상세 정보 확인 상태 변경
    const handleRestaurantDetailClick = (restaurant) => {
        setSelectedRestaurant(restaurant); // 클릭한 레스토랑 정보 저장
    };

    return (
        <S.MainContainer>
            {/* 사이드바에서 각 버튼 클릭 시 목록을 토글 */}
            <SideBar 
                onNearRestaurantClick={handleNearRestaurantClick} 
                onScrapRestaurantClick={handleScrapRestaurantClick}
                onLatelyRestaurantClick={handleLatelyRestaurantClick}
            />

            {/* 지도 컴포넌트에 상태 및 상태 변경 함수 전달 */}
            {/* <Map  
                showNearRestaurant={showNearRestaurant}
                showScrapRestaurant={showScrapRestaurant}
                showLatelyRestaurant={showLatelyRestaurant}
                selectedRestaurant={selectedRestaurant}
                handleNearRestaurantClick={handleNearRestaurantClick}
                handleScrapRestaurantClick={handleScrapRestaurantClick}
                handleLatelyRestaurantClick={handleLatelyRestaurantClick}
                handleRestaurantDetailClick={handleRestaurantDetailClick}
            /> */}

            <KakaoMap />
        </S.MainContainer>
    );
};

export default Restaurant;
