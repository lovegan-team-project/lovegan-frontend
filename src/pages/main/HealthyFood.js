import React from 'react';
import S from './style';
import Rectangle from './images/Rectangle.png';
import Star from './images/star.svg';
import Like from './images/like.svg'
import { useNavigate } from 'react-router-dom';
import ItemContainer from './ItemContainer';
const HealthyFood = () => {
    const navigate = useNavigate();
    return (
        <S.TagItemWrapper>
        <ItemContainer
            title="상품명"
            description="상품 한 줄 설명"
            price="가격(원)"
            image={Rectangle}
            onNavigate={() => navigate("/details")}
        />
        <ItemContainer
           title="상품명"
           description="상품 한 줄 설명"
           price="가격(원)"
           image={Rectangle}
           onNavigate={() => navigate("/details")}
        />
        <ItemContainer
           title="상품명"
           description="상품 한 줄 설명"
           price="가격(원)"
           image={Rectangle}
           onNavigate={() => navigate("/details")}
        />
        <ItemContainer
           title="상품명"
           description="상품 한 줄 설명"
           price="가격(원)"
           image={Rectangle}
           onNavigate={() => navigate("/details")}
        />
    </S.TagItemWrapper>

    );
};

export default HealthyFood;