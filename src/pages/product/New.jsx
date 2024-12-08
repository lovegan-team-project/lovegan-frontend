import React from 'react';
import S from './style';
import Star from '../main/images/star.svg';
import Like from '../main/images/like.svg';
import { Navigate, NavLink, useNavigate } from 'react-router-dom';
const New = () => {
    const navigate = useNavigate();
    return (

                <S.ProductMainContainer>
                    <S.ProductRowItemContainer>
                        <S.ProductItemContainer onClick={()=> navigate("/details")}>
                            <S.ItemImgWrapper></S.ItemImgWrapper>
                            <S.ItemTitle>상품명</S.ItemTitle>
                            <S.ItemExplain>상품 한 줄 설명</S.ItemExplain>
                            <S.ItemPrice><S.Discount>00%</S.Discount>할인가(원)<S.OriginPrice>정상가(원)</S.OriginPrice></S.ItemPrice>
                            <S.ItemStar><img src={Star} alt='star'></img>별점 평균<S.Review>(리뷰 개수)</S.Review></S.ItemStar>

                            <S.ItemTagWrapper><S.Tag>NEW</S.Tag></S.ItemTagWrapper>
                        </S.ProductItemContainer>
                        <S.ProductItemContainer>
                            <S.ItemImgWrapper></S.ItemImgWrapper>
                            <S.ItemTitle>상품명</S.ItemTitle>
                            <S.ItemExplain>상품 한 줄 설명</S.ItemExplain>
                            <S.ItemPrice><S.Discount>00%</S.Discount>할인가(원)<S.OriginPrice>정상가(원)</S.OriginPrice></S.ItemPrice>
                            <S.ItemStar><img src={Star} alt='star'></img>별점 평균<S.Review>(리뷰 개수)</S.Review></S.ItemStar>
                            <S.ItemTagWrapper><S.Tag>NEW</S.Tag></S.ItemTagWrapper>
                        </S.ProductItemContainer>
                        <S.ProductItemContainer>
                            <S.ItemImgWrapper></S.ItemImgWrapper>
                            <S.ItemTitle>상품명</S.ItemTitle>
                            <S.ItemExplain>상품 한 줄 설명</S.ItemExplain>
                            <S.ItemPrice><S.Discount>00%</S.Discount>할인가(원)<S.OriginPrice>정상가(원)</S.OriginPrice></S.ItemPrice>
                            <S.ItemStar><img src={Star} alt='star'></img>별점 평균<S.Review>(리뷰 개수)</S.Review></S.ItemStar>
                            <S.ItemTagWrapper><S.Tag>NEW</S.Tag></S.ItemTagWrapper>
                        </S.ProductItemContainer>
                    </S.ProductRowItemContainer>
                    <S.ProductRowItemContainer>
                        <S.ProductItemContainer>
                            <S.ItemImgWrapper></S.ItemImgWrapper>
                            <S.ItemTitle>상품명</S.ItemTitle>
                            <S.ItemExplain>상품 한 줄 설명</S.ItemExplain>
                            <S.ItemPrice><S.Discount>00%</S.Discount>할인가(원)<S.OriginPrice>정상가(원)</S.OriginPrice></S.ItemPrice>
                            <S.ItemStar><img src={Star} alt='star'></img>별점 평균<S.Review>(리뷰 개수)</S.Review></S.ItemStar>
                            <S.ItemTagWrapper><S.Tag>NEW</S.Tag></S.ItemTagWrapper>
                        </S.ProductItemContainer>
                        <S.ProductItemContainer>
                            <S.ItemImgWrapper></S.ItemImgWrapper>
                            <S.ItemTitle>상품명</S.ItemTitle>
                            <S.ItemExplain>상품 한 줄 설명</S.ItemExplain>
                            <S.ItemPrice><S.Discount>00%</S.Discount>할인가(원)<S.OriginPrice>정상가(원)</S.OriginPrice></S.ItemPrice>
                            <S.ItemStar><img src={Star} alt='star'></img>별점 평균<S.Review>(리뷰 개수)</S.Review></S.ItemStar>
                            <S.ItemTagWrapper><S.Tag>NEW</S.Tag></S.ItemTagWrapper>
                        </S.ProductItemContainer>
                        <S.ProductItemContainer>
                            <S.ItemImgWrapper></S.ItemImgWrapper>
                            <S.ItemTitle>상품명</S.ItemTitle>
                            <S.ItemExplain>상품 한 줄 설명</S.ItemExplain>
                            <S.ItemPrice><S.Discount>00%</S.Discount>할인가(원)<S.OriginPrice>정상가(원)</S.OriginPrice></S.ItemPrice>
                            <S.ItemStar><img src={Star} alt='star'></img>별점 평균<S.Review>(리뷰 개수)</S.Review></S.ItemStar>
                            <S.ItemTagWrapper><S.Tag>NEW</S.Tag></S.ItemTagWrapper>
                        </S.ProductItemContainer>
                    </S.ProductRowItemContainer>
                    <S.ProductRowItemContainer>
                        <S.ProductItemContainer>
                            <S.ItemImgWrapper></S.ItemImgWrapper>
                            <S.ItemTitle>상품명</S.ItemTitle>
                            <S.ItemExplain>상품 한 줄 설명</S.ItemExplain>
                            <S.ItemPrice><S.Discount>00%</S.Discount>할인가(원)<S.OriginPrice>정상가(원)</S.OriginPrice></S.ItemPrice>
                            <S.ItemStar><img src={Star} alt='star'></img>별점 평균<S.Review>(리뷰 개수)</S.Review></S.ItemStar>
                            <S.ItemTagWrapper><S.Tag>NEW</S.Tag></S.ItemTagWrapper>
                        </S.ProductItemContainer>
                        <S.ProductItemContainer>
                            <S.ItemImgWrapper></S.ItemImgWrapper>
                            <S.ItemTitle>상품명</S.ItemTitle>
                            <S.ItemExplain>상품 한 줄 설명</S.ItemExplain>
                            <S.ItemPrice><S.Discount>00%</S.Discount>할인가(원)<S.OriginPrice>정상가(원)</S.OriginPrice></S.ItemPrice>
                            <S.ItemStar><img src={Star} alt='star'></img>별점 평균<S.Review>(리뷰 개수) </S.Review></S.ItemStar>
                            <S.ItemTagWrapper><S.Tag>NEW</S.Tag></S.ItemTagWrapper>
                        </S.ProductItemContainer>
                        <S.ProductItemContainer>
                            <S.ItemImgWrapper></S.ItemImgWrapper>
                            <S.ItemTitle>상품명</S.ItemTitle>
                            <S.ItemExplain>상품 한 줄 설명</S.ItemExplain>
                            <S.ItemPrice><S.Discount>00%</S.Discount>할인가(원)<S.OriginPrice>정상가(원)</S.OriginPrice></S.ItemPrice>
                            <S.ItemStar><img src={Star} alt='star'></img>별점 평균<S.Review>(리뷰 개수)</S.Review></S.ItemStar>
                            <S.ItemTagWrapper><S.Tag>tag</S.Tag></S.ItemTagWrapper>
                        </S.ProductItemContainer>
                    </S.ProductRowItemContainer>
                    
                </S.ProductMainContainer>
           
    );
};

export default New;