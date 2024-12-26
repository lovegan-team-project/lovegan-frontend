import React from 'react';
import S from './style';
import { useNavigate } from 'react-router-dom';
import Rectangle from './images/Rectangle.png'
import Product01 from './images/product01.svg'
import Product02 from './images/product02.svg'
import Product03 from './images/product03.svg'
import Product04 from './images/product04.svg'
import ItemContainer from './ItemContainer';

const Vege = () => {
    const navigate = useNavigate();

    return (
        <S.TagItemWrapper>
            <ItemContainer
                title="아보카도"
                description="유기농 아보카도 3+1 개입"
                price="8,700원"
                image={Product01}
                onNavigate={() => navigate("/details")}
            />
            <ItemContainer
                title="방울토마토"
                description="유기농 방울토마토 500g"
                price="7,990원"
                image={Product02}
                onNavigate={() => navigate("/details")}
            />
            <ItemContainer
                title="마늘"
                description="유기농 마늘 4개입"
                price="9,990원"
                image={Product03}
                onNavigate={() => navigate("/details")}
            />
            <ItemContainer
                title="브로콜리"
                description="유기농 브로콜리 500g"
                price="12,990원"
                image={Product04}
                onNavigate={() => navigate("/details")}
            />
        </S.TagItemWrapper>
    );
};

export default Vege;