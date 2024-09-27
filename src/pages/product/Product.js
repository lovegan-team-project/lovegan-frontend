import React from 'react';
import S from './style';
import SideMenuImage from './images/Rectangle 284.svg'
const Product = () => {
    return (
        <S.ProductContainer>
            <S.ProductTitle>PRODUCT</S.ProductTitle>
            <S.ProductSubTitle>자연을 품은, 모두를 위한 비건 라이프스타일의 시작입니다.</S.ProductSubTitle>
            <S.ToggleContainer></S.ToggleContainer>
            <S.MainWrapper>
                <S.SideMenuWrapper>
                    <img src={SideMenuImage} alt='사이드메뉴바 이미지'></img>
                </S.SideMenuWrapper>
                <S.ProductWrapper>
                    <S.ProductHeader>
                        <S.ProductNum>총 500건</S.ProductNum>
                        <S.FilterWrapper>
                            <S.ProductTagWrapper>
                                <button>NEW</button>
                                <button>BEST</button>
                                <button>SALE</button>
                            </S.ProductTagWrapper>
                            <S.ProductSortWrapper>
                                <button>좋아요순</button>
                                <button>리뷰순</button>
                                <button>판매랑순</button>
                                <button>낮은가격순</button>
                                <button>높은가격순</button>
                            </S.ProductSortWrapper>
                        </S.FilterWrapper>

                    </S.ProductHeader>
                
                </S.ProductWrapper>
            </S.MainWrapper>
           
        </S.ProductContainer>
    );
};

export default Product;