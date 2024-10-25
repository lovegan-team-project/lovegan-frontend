import React from 'react';
import star from './img/star.svg';
import S from './style';

const FoodComponent = () => {
    return (
        <S.FoodWrap>
            <div></div>
            <h2>상품명</h2>
            <h3>상품 한 줄 설명</h3>
            <h4>가격(원)</h4>
            <h5><img src={star} alt="star" />별점 평균(리뷰 개수)</h5>
        </S.FoodWrap>
    );
};

export default FoodComponent;