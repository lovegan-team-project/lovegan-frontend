import React from 'react';
import S from './style';
import { useNavigate } from 'react-router-dom';
import Rectangle from './images/Rectangle.png'
import ItemContainer from './ItemContainer';

const Vege = () => {
    const navigate = useNavigate();

    return (
        <S.TagItemWrapper>
            <ItemContainer
                title="아보카도"
                description="유기농 아보카도 3+1 개입"
                price="8,700원"
                image={Rectangle}
                onNavigate={() => navigate("/details")}
            />
            <ItemContainer
                title="방울토마토"
                description="유기농 방울토마토 500g"
                price="7,990원"
                image={Rectangle}
                onNavigate={() => navigate("/details")}
            />
            <ItemContainer
                title="옥수수"
                description="유기농 옥수수 2개입"
                price="9,990원"
                image={Rectangle}
                onNavigate={() => navigate("/details")}
            />
            <ItemContainer
                title="딸기"
                description="유기농 딸기 500g"
                price="12,990원"
                image={Rectangle}
                onNavigate={() => navigate("/details")}
            />
        </S.TagItemWrapper>
    );
};

export default Vege;