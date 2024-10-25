import React, { useState } from 'react';
import S from './style';

// iconify 아이콘 import
import { Icon } from '@iconify/react';
import SideBar from './SideBar';
import Map from './Map'; 

const Restaurant = () => {

    // 주변 레스토랑 목록 보여주는 상태
    const [showNearRestaurant, setShowNearRestaurant] = useState(false); 

    // 레스토랑 상세 정보를 확인하기 위한 상태
    const [showRestaurantDetail, setShowRestaurantDetail] = useState(null);

    // 주변 레스토랑 목록 상태 변경
    const handleNearRestaurantClick = () => {
        // 버튼을 클릭할 때마다 상태가 true false가 번갈아가면서 바뀌는 코드
        setShowNearRestaurant(prevState => !prevState); 
    
        // 목록을 클릭한 경우 상세 정보 상태를 초기화
        setShowRestaurantDetail(null);
    };

    // 레스토랑 상세 정보 확인 상태 변경
    // 레스토랑 목록에서 이미지를 클릭했을 때 호출
    // 클릭한 해당 레스토랑의 데이터를 저장하고 상세 정보를 보여줌
    const handleRestaurantDetailClick = (restaurant) => {
        // 클릭한 레스토랑의 상세 정보를 저장하도록 한다
        setShowRestaurantDetail(restaurant); 
    };

    return (
        <S.MainContainer>
            {/* 메뉴 사이드바 구현 */}
            {/* 사이드바 구현, 상태와 핸들러 props로 전달 */}
            <SideBar onNearRestaurantClick={handleNearRestaurantClick} />

            {/* 지도 구현 */}
            {/* 지도 구현, 상태와 상태 변경 함수 props로 전달 */}
            <Map  
                showNearRestaurant={showNearRestaurant}
                showRestaurantDetail={showRestaurantDetail}
                handleRestaurantDetailClick={handleRestaurantDetailClick}  // ��스토�� 상세 정보 ���� 이���트 ��들러
            />
        </S.MainContainer>
    );
};

export default Restaurant;
