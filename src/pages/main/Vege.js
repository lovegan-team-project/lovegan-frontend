import React from 'react';
import S from './style';
import Product01 from './images/product01.svg';
import Product02 from './images/product02.svg';
import Product03 from './images/product03.svg';
import Product04 from './images/product04.svg';
import Star from './images/star.svg';
const Vege = () => {
    return (
        <S.TagItemWrapper>
            <S.ItemContainer>
                <img src={Product01} alt='아보카도'></img>
                <S.ItemTitle>아보카도</S.ItemTitle>
                <S.ItemExplain>유기농 아보카도 3+1 개입</S.ItemExplain>
                <S.ItemPrice>8,700원</S.ItemPrice>
                <S.ItemStar><img src={Star} alt='star'></img>4.9<S.Review>(+999)</S.Review></S.ItemStar>
            </S.ItemContainer>
            <S.ItemContainer>
                <img src={Product02} alt='방울토마토'></img>
                <S.ItemTitle>방울토마토</S.ItemTitle>
                <S.ItemExplain>유기농 방울토마토 500g</S.ItemExplain>
                <S.ItemPrice>7,990원</S.ItemPrice>
                <S.ItemStar><img src={Star} alt='star'></img>4.9<S.Review>(+999)</S.Review></S.ItemStar>
            </S.ItemContainer>
            <S.ItemContainer>
                <img src={Product03} alt='마늘'></img>
                <S.ItemTitle>마늘</S.ItemTitle>
                <S.ItemExplain>의성마늘 1kg</S.ItemExplain>
                <S.ItemPrice>38,990원</S.ItemPrice>
                <S.ItemStar><img src={Star} alt='star'></img>4.8<S.Review>(107)</S.Review></S.ItemStar>
            </S.ItemContainer>
            <S.ItemContainer>
                <img src={Product04} alt='브로콜리'></img>
                <S.ItemTitle>브로콜리</S.ItemTitle>
                <S.ItemExplain>유기농 브로콜리 300g</S.ItemExplain>
                <S.ItemPrice>4,990원</S.ItemPrice>
                <S.ItemStar><img src={Star} alt='star'></img>4.9<S.Review>(55)</S.Review></S.ItemStar>
            </S.ItemContainer>
        
            
        </S.TagItemWrapper>
    );
};

export default Vege;