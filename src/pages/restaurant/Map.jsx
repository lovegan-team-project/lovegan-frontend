import React, { useEffect, useState } from 'react';
import S from './style';
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { Icon } from '@iconify/react/dist/iconify.js';

const RestaurantMap = ({
    showNearRestaurant, 
    showScrapRestaurant, 
    showLatelyRestaurant,
    selectedRestaurant, 
    handleRestaurantDetailClick, 
    handleNearRestaurantClick, 
    handleScrapRestaurantClick, 
    handleLatelyRestaurantClick 
}) => {

    // 상세 페이지를 표시/숨기기 위한 상태
    const [showDetailPage, setShowDetailPage] = useState(false);

    // 현재 활성화된 탭을 관리하는 상태 (정보, 메뉴, 리뷰)
    const [activeTab, setActiveTab] = useState('정보');

    // 선택된 레스토랑 정보가 있을 때 상세 페이지 표시
    useEffect(() => {
        if (selectedRestaurant) {
            setShowDetailPage(true); // 선택된 식당이 있으면 상세 페이지 표시
        } else {
            setShowDetailPage(false); // 선택된 식당이 없으면 상세 페이지 숨김
        }
    }, [selectedRestaurant]);

    // 주변 레스토랑 목록 닫기
    const closeRestaurantList = () => {
        handleNearRestaurantClick(false); // 부모 컴포넌트에서 상태 업데이트
    };

    // 스크랩 레스토랑 목록 닫기
    const closeScrapList = () => {
        handleScrapRestaurantClick(false); // 부모 컴포넌트에서 상태 업데이트
    };

    // 최근 레스토랑 목록 닫기
    const closeLatelyList = () => {
        handleLatelyRestaurantClick(false); // 부모 컴포넌트에서 상태 업데이트
    };

    // 상세 페이지 닫기
    const closeDetailPage = () => {
        setShowDetailPage(false); // 상세 페이지 닫기
        handleRestaurantDetailClick(null); // 부모에게 선택된 식당이 없음을 전달
    };

    // 탭 전환 함수
    const handleTabClick = (tab) => {
        setActiveTab(tab); // 클릭한 탭으로 상태를 업데이트
    };

    // 레스토랑 예시 데이터
    const restaurantList = [
        {
            id: 1,
            name: "식당명1",
            description: "식당 한 줄 소개",
            status: "영업중",
            rating: 4.8,
            reviews: 122,
            restaurantLocation: "서울특별시 강남구 현익빌딩 3층",
            lat: 37.497942,
            lng: 127.027621,
            image: "https://via.placeholder.com/100",
            detailImage: "https://via.placeholder.com/200",
            contact: "0000-0000-0000",
            website: "https://www.instagram.com",
            statusDetail: "휴무일 or 영업시작/종료 시각",
            menu: [
                { name: "대표 메뉴1", description: "메뉴 설명", price: "가격" },
                { name: "대표 메뉴2", description: "메뉴 설명", price: "가격" }
            ]
        },
        {
            id: 2,
            name: "식당명2",
            description: "식당 한 줄 소개",
            status: "영업중",
            rating: 4.8,
            reviews: 122,
            restaurantLocation: "서울특별시 강남구 현익빌딩 3층",
            lat: 37.497942,
            lng: 127.027621,
            image: "https://via.placeholder.com/100",
            detailImage: "https://via.placeholder.com/200",
            contact: "0000-0000-0000",
            website: "https://www.instagram.com",
            statusDetail: "휴무일 or 영업시작/종료 시각",
            menu: [
                { name: "대표 메뉴1", description: "메뉴 설명", price: "가격" },
                { name: "대표 메뉴2", description: "메뉴 설명", price: "가격" }
            ]
        },
        {
            id: 3,
            name: "식당명3",
            description: "식당 한 줄 소개",
            status: "영업중",
            rating: 4.8,
            reviews: 122,
            restaurantLocation: "서울특별시 강남구 현익빌딩 3층",
            lat: 37.497942,
            lng: 127.027621,
            image: "https://via.placeholder.com/100",
            detailImage: "https://via.placeholder.com/200",
            contact: "0000-0000-0000",
            website: "https://www.instagram.com",
            statusDetail: "휴무일 or 영업시작/종료 시각",
            menu: [
                { name: "대표 메뉴1", description: "메뉴 설명", price: "가격" },
                { name: "대표 메뉴2", description: "메뉴 설명", price: "가격" }
            ]
        },
        {
            id: 4,
            name: "식당명4",
            description: "식당 한 줄 소개",
            status: "영업중",
            rating: 4.8,
            reviews: 122,
            restaurantLocation: "서울특별시 강남구 현익빌딩 3층",
            lat: 37.497942,
            lng: 127.027621,
            image: "https://via.placeholder.com/100",
            detailImage: "https://via.placeholder.com/200",
            contact: "0000-0000-0000",
            website: "https://www.instagram.com",
            statusDetail: "휴무일 or 영업시작/종료 시각",
            menu: [
                { name: "대표 메뉴1", description: "메뉴 설명", price: "가격" },
                { name: "대표 메뉴2", description: "메뉴 설명", price: "가격" }
            ]
        },
        {
            id: 5,
            name: "식당명5",
            description: "식당 한 줄 소개",
            status: "영업중",
            rating: 4.8,
            reviews: 122,
            restaurantLocation: "서울특별시 강남구 현익빌딩 3층",
            lat: 37.497942,
            lng: 127.027621,
            image: "https://via.placeholder.com/100",
            detailImage: "https://via.placeholder.com/200",
            contact: "0000-0000-0000",
            website: "https://www.instagram.com",
            statusDetail: "휴무일 or 영업시작/종료 시각",
            menu: [
                { name: "대표 메뉴1", description: "메뉴 설명", price: "가격" },
                { name: "대표 메뉴2", description: "메뉴 설명", price: "가격" }
            ]
        },
        // 식당 데이터 추가 가능
    ];

    return (
        <S.MapContainer>
            <S.MapDiv>
                {/* 검색창 구현 - 검색창을 고정시켜 상단에 배치 */}
                <S.SearchContainer>
                    <S.SearchInput type="text" placeholder="검색어를 입력하세요" />
                </S.SearchContainer>

                {/* 카카오 지도 구현 */}
                <Map
                    center={{ lat: 37.497942, lng: 127.027621 }}
                    style={{ width: "100%", height: "100%", position: "relative" }}
                    level={3}
                >
                    {/* 식당 데이터 렌더링 및 마커 */}
                    {restaurantList.map((restaurant) => (
                        <MapMarker
                            key={restaurant.id}
                            position={{ lat: restaurant.lat, lng: restaurant.lng }}
                            onClick={() => {
                                handleRestaurantDetailClick(restaurant); // 클릭 시 레스토랑 정보 업데이트
                            }} 
                        >
                            <div style={{ padding: "5px", color: "#000" }}>{restaurant.name}</div>
                        </MapMarker>
                    ))}
                </Map>

                {/* 주변 레스토랑 목록 표시 */}
                {showNearRestaurant && (
                    <S.NearRestaurantContainer>
                        <S.HeaderContainer>
                            <p>주변 비건 식당</p>
                            <S.CloseButton onClick={closeRestaurantList}>
                                <Icon icon="material-symbols:close" />
                            </S.CloseButton>
                        </S.HeaderContainer>
                        <S.NearRestaurantList>
                            {restaurantList.map((restaurant) => (
                                <S.RestaurantCard
                                    key={restaurant.id}
                                    onClick={() => handleRestaurantDetailClick(restaurant)} // 클릭 시 상세 페이지 열림
                                >
                                    <div>
                                        <S.RestaurantTitle>{restaurant.name}</S.RestaurantTitle>
                                        <S.RestaurantDescription>{restaurant.description}</S.RestaurantDescription>
                                        <S.RestaurantStatus>
                                            <S.OpenStatus>{restaurant.status}</S.OpenStatus>
                                            <S.StarRating>⭐ {restaurant.rating} ({restaurant.reviews})</S.StarRating>
                                        </S.RestaurantStatus>
                                        <S.RestaurantLocation>{restaurant.restaurantLocation}</S.RestaurantLocation>
                                    </div>
                                    <S.RestaurantImage src={restaurant.image} alt="비건 식당 이미지" />
                                </S.RestaurantCard>
                            ))}
                        </S.NearRestaurantList>
                    </S.NearRestaurantContainer>
                )}

                {/* 스크랩 레스토랑 목록 표시 */}
                {showScrapRestaurant && (
                    <S.NearRestaurantContainer>
                        <S.HeaderContainer>
                            <p>스크랩한 식당</p>
                            <S.CloseButton onClick={closeScrapList}>
                                <Icon icon="material-symbols:close" />
                            </S.CloseButton>
                        </S.HeaderContainer>
                        <S.NearRestaurantList>
                            {restaurantList.map((restaurant) => (
                                <S.RestaurantCard
                                    key={restaurant.id}
                                    onClick={() => handleRestaurantDetailClick(restaurant)} // 클릭 시 상세 페이지 열림
                                >
                                    <div>
                                        <S.RestaurantTitle>{restaurant.name}</S.RestaurantTitle>
                                        <S.RestaurantDescription>{restaurant.description}</S.RestaurantDescription>
                                        <S.RestaurantStatus>
                                            <S.OpenStatus>{restaurant.status}</S.OpenStatus>
                                            <S.StarRating>⭐ {restaurant.rating} ({restaurant.reviews})</S.StarRating>
                                        </S.RestaurantStatus>
                                        <S.RestaurantLocation>{restaurant.restaurantLocation}</S.RestaurantLocation>
                                    </div>
                                    <S.RestaurantImage src={restaurant.image} alt="비건 식당 이미지" />
                                </S.RestaurantCard>
                            ))}
                        </S.NearRestaurantList>
                    </S.NearRestaurantContainer>
                )}

                {/* 최근 레스토랑 목록 표시 */}
                {showLatelyRestaurant && (
                    <S.NearRestaurantContainer>
                        <S.HeaderContainer>
                            <p>최근 본 식당</p>
                            <S.CloseButton onClick={closeLatelyList}>
                                <Icon icon="material-symbols:close" />
                            </S.CloseButton>
                        </S.HeaderContainer>
                        <S.NearRestaurantList>
                            {restaurantList.map((restaurant) => (
                                <S.RestaurantCard
                                    key={restaurant.id}
                                    onClick={() => handleRestaurantDetailClick(restaurant)} // 클릭 시 상세 페이지 열림
                                >
                                    <div>
                                        <S.RestaurantTitle>{restaurant.name}</S.RestaurantTitle>
                                        <S.RestaurantDescription>{restaurant.description}</S.RestaurantDescription>
                                        <S.RestaurantStatus>
                                            <S.OpenStatus>{restaurant.status}</S.OpenStatus>
                                            <S.StarRating>⭐ {restaurant.rating} ({restaurant.reviews})</S.StarRating>
                                        </S.RestaurantStatus>
                                        <S.RestaurantLocation>{restaurant.restaurantLocation}</S.RestaurantLocation>
                                    </div>
                                    <S.RestaurantImage src={restaurant.image} alt="비건 식당 이미지" />
                                </S.RestaurantCard>
                            ))}
                        </S.NearRestaurantList>
                    </S.NearRestaurantContainer>
                )}

                {/* 선택된 식당의 상세 정보 표시 */}
                {showDetailPage && selectedRestaurant && (
                    <S.DetailContainer>
                        <S.CloseButton onClick={closeDetailPage}>
                            <Icon icon="material-symbols:close" />
                        </S.CloseButton>
                        
                        {/* 레스토랑 대표 이미지 */}
                        <S.RestaurantDetailImage src={selectedRestaurant.detailImage} alt="레스토랑 상세 이미지" />
                        
                        {/* 레스토랑 이름 및 간단 설명 */}
                        <S.RestaurantInfo>
                            <h3>{selectedRestaurant.name}</h3>
                            <p>{selectedRestaurant.description}</p>
                        </S.RestaurantInfo>

                        {/* 탭 */}
                        <S.TabContainer>
                            <S.Tab 
                                active={activeTab === '정보'} 
                                onClick={() => handleTabClick('정보')}
                            >
                                정보
                            </S.Tab>
                            <S.Tab 
                                active={activeTab === '메뉴'} 
                                onClick={() => handleTabClick('메뉴')}
                            >
                                메뉴
                            </S.Tab>
                            <S.Tab 
                                active={activeTab === '리뷰'} 
                                onClick={() => handleTabClick('리뷰')}
                            >
                                리뷰
                            </S.Tab>
                        </S.TabContainer>

                        {/* 정보 탭 내용 */}
                        {activeTab === '정보' && (
                            <S.RestaurantDetails>
                                <S.InfoItem>
                                    <Icon icon="material-symbols:location-on" />
                                    {selectedRestaurant.restaurantLocation}
                                </S.InfoItem>
                                <S.InfoItem>
                                    <Icon icon="material-symbols:phone" />
                                    {selectedRestaurant.contact}
                                </S.InfoItem>
                                <S.InfoItem>
                                    <Icon icon="material-symbols:link" />
                                    <a href={selectedRestaurant.website}>웹사이트 방문</a>
                                </S.InfoItem>
                                <S.InfoItem>
                                    <Icon icon="material-symbols:tag" />
                                    단체 이용 가능, 무선 인터넷, 예약
                                </S.InfoItem>
                                <S.InfoItem>
                                    <Icon icon="material-symbols:info-outline" />
                                    영업 상태: {selectedRestaurant.statusDetail}
                                </S.InfoItem>
                                {/* 사진 그리드 */}
                                <S.PhotoGrid>
                                    <S.Photo src="https://via.placeholder.com/100" alt="사진 1" />
                                    <S.Photo src="https://via.placeholder.com/100" alt="사진 2" />
                                    <S.Photo src="https://via.placeholder.com/100" alt="사진 3" />
                                </S.PhotoGrid>
                            </S.RestaurantDetails>
                        )}

                        {/* 메뉴 탭 내용 */}
                        {activeTab === '메뉴' && (
                            <S.RestaurantDetails>
                                {selectedRestaurant.menu.map((item, index) => (
                                    <S.MenuItem key={index}>
                                        <div>
                                            <S.MenuTitle>{item.name}</S.MenuTitle>
                                            <S.MenuDescription>{item.description}</S.MenuDescription>
                                        </div>
                                        <S.MenuPrice>{item.price}</S.MenuPrice>
                                    </S.MenuItem>
                                ))}
                            </S.RestaurantDetails>
                        )}

                        {/* 리뷰 탭 내용 */}
                        {activeTab === '리뷰' && (
                            <S.RestaurantDetails>
                                {/* 예시 리뷰 데이터 */}
                                <S.ReviewItem>
                                    <S.ReviewUser>
                                        <Icon icon="material-symbols:person" />
                                        유저 닉네임
                                    </S.ReviewUser>
                                    <S.ReviewContent>
                                        분위기도 좋고 맛있었어요. 아이와 함께 가도 친절해서 다음에 또 방문하려고 합니다.
                                    </S.ReviewContent>
                                    <S.ReviewDate>23년 10월 28일</S.ReviewDate>
                                </S.ReviewItem>
                                {/* 리뷰 작성 버튼 */}
                                <S.WriteReviewButton>리뷰 작성하기</S.WriteReviewButton>
                            </S.RestaurantDetails>
                        )}
                    </S.DetailContainer>
                )}
            </S.MapDiv>
        </S.MapContainer>
    );
};

export default RestaurantMap;
