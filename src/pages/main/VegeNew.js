import React from 'react';
import S from './style';
import Rectangle from './images/Rectangle.png'
import { useNavigate } from 'react-router-dom';
import ItemContainer from './ItemContainer';
import Product01 from './images/newProduct01.svg';
import Product02 from './images/newProduct02.svg';
import Product03 from './images/newProduct03.svg';
import Product04 from './images/newProduct04.svg';
const VegeNew = () => {
    const navigate = useNavigate();
    return (
        
        <S.TagItemWrapper>
        <ItemContainer
            title="상품명"
            description="상품 한 줄 설명"
            price="가격(원)"
            image={Product01}
            onNavigate={() => navigate("/details")}
        />
        <ItemContainer
           title="상품명"
           description="상품 한 줄 설명"
           price="가격(원)"
           image={Product02}
           onNavigate={() => navigate("/details")}
        />
        <ItemContainer
           title="상품명"
           description="상품 한 줄 설명"
           price="가격(원)"
           image={Product03}
           onNavigate={() => navigate("/details")}
        />
        <ItemContainer
           title="상품명"
           description="상품 한 줄 설명"
           price="가격(원)"
           image={Product04}
           onNavigate={() => navigate("/details")}
        />
    </S.TagItemWrapper>
    );
};

export default VegeNew;
