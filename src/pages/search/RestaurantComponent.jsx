import React from 'react';
import star from './img/star.svg';
import S from './style';


const RestaurantComponent = () => {
    return (
        <S.RestaurantWrap>
            <div></div>
            <div>
                <p>식당명</p>
                <div><img src={star} alt="star" />&nbsp;<span>4.8</span><span>(122)</span></div>
            </div>
            <p>간단히 비건 음식 먹으며 책 읽거나 작업하기..</p>
        </S.RestaurantWrap>
    );
};

export default RestaurantComponent;