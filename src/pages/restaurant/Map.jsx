import React from 'react';
import S from './style';

// 지도 패키지 import
import { MapContainer, TileLayer } from 'react-leaflet';
import "leaflet/dist/leaflet.css";


const Map = ({ showNearRestaurant, showRestaurantDetail, handleRestaurantDetailClick }) => {
    // 레스토랑 예시 데이터
    const restaurantList = [
        {
            id: 1,
            name: "식당명 1",
            status: "영업중",
            rating: 4.8,
            reviews: 122,
            restaurantLocation: "서울특별시 강남구",
            image: "https://via.placeholder.com/100",
            detailImage: "https://via.placeholder.com/200",
            menu: [{ name: "메뉴명", description: "대표 메뉴", price: "가격" }]
        },
        {
            id: 2,
            name: "식당명 2",
            status: "영업 종료",
            rating: 4.8,
            reviews: 122,
            restaurantLocation: "서울특별시 강남구",
            image: "https://via.placeholder.com/100",
            detailImage: "https://via.placeholder.com/200",
            menu: [{ name: "메뉴명", description: "대표 메뉴", price: "가격" }]
        },
        {
            id: 3,
            name: "식당명 3",
            status: "영업중",
            rating: 4.8,
            reviews: 122,
            restaurantLocation: "서울특별시 강남구",
            image: "https://via.placeholder.com/100",
            detailImage: "https://via.placeholder.com/200",
            menu: [{ name: "메뉴명", description: "대표 메뉴", price: "가격" }]
        },
        {
            id: 4,
            name: "식당명 4",
            status: "영업중",
            rating: 4.8,
            reviews: 122,
            restaurantLocation: "서울특별시 강남구",
            image: "https://via.placeholder.com/100",
            detailImage: "https://via.placeholder.com/200",
            menu: [{ name: "메뉴명", description: "대표 메뉴", price: "가격" }]
        },
        {
            id: 5,
            name: "식당명 5",
            status: "영업중",
            rating: 4.8,
            reviews: 122,
            restaurantLocation: "서울특별시 강남구",
            image: "https://via.placeholder.com/100",
            detailImage: "https://via.placeholder.com/200",
            menu: [{ name: "메뉴명", description: "대표 메뉴", price: "가격" }]
        },
    ]

    return (
        <S.MapContainer>
            <S.MapDiv>
                {/* 검색창 구현 */}
                <S.SearchContainer>
                    <S.SearchInput type="text" placeholder="검색어를 입력하세요" />
                </S.SearchContainer>

                {/* 지도 구현 */}
                <MapContainer center={[37.497942, 127.027621]} zoom={13} style={{height: "100%", width: "100%"}}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                </MapContainer>

                {/* 주변 레스토랑 목록과 상세 정보 영역 */}
                {showNearRestaurant && (
                    <S.NearRestaurantContainer>
                        {/* 레스토랑 목록 */}
                        <S.NearRestaurantList>
                            {restaurantList.map((restaurant) => (
                                <S.RestaurantCard key={restaurant.id} onClick={() => handleRestaurantDetailClick(restaurant) }>
                                    <S.RestaurantImage src={restaurant.image} alt="비건 식당 이미지" />
                                        <div>
                                            <h4>{restaurant.name}</h4>
                                            <p>{restaurant.status}</p>
                                            <p>⭐ {restaurant.rating} ({restaurant.reviews})</p>
                                            <p>{restaurant.restaurantLocation}</p>
                                        </div>
                                </S.RestaurantCard>
                            ))}
                            <S.PageList>
                                <span>1</span>
                                <span>2</span>
                                <span>3</span>
                                <span>4</span>
                                <span>5</span>
                            </S.PageList>
                        </S.NearRestaurantList>
                    </S.NearRestaurantContainer>
                )}
            </S.MapDiv>
        </S.MapContainer>
    );
};

export default Map;