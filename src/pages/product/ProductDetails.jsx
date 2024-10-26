import React from 'react';
import S from './style';
import Narrow from './images/icon.png'
import MainPic from './images/productdetailMain.png'
import MainSubPic from './images/Rectangle 340.png'
import SubPic from './images/Rectangle 341.png'
import Star from './images/star.png'
const ProductDetails = () => {
    return (
        <>
            <S.ProductDetailContainer>
                <S.TagContainer>
                    <span>채식 반찬</span><img src={Narrow}></img><span>기타 채식 반찬</span>
                </S.TagContainer>
                <S.DetailMainWrapper>
                    <S.ImgWrapper>
                        <S.MainImgWrapper>
                            <img src={MainPic} alt="" />
                        </S.MainImgWrapper>
                        <S.SubImgWrapper>
                            <img src={MainSubPic}></img>
                            <img src={SubPic}></img>
                            <img src={SubPic}></img>
                            <img src={SubPic}></img>
                            <img src={SubPic}></img>
                            <img src={SubPic}></img>
                        </S.SubImgWrapper>
                    
                    </S.ImgWrapper>
                    <S.DetailContainer>
                        <S.ProductDetailTitle>[상품명] 상품명</S.ProductDetailTitle>
                        <S.ProductExplain>상품 한 줄 설명</S.ProductExplain>
                        <S.ProductStarWrapper><img src={Star}></img><span className='ReviewScore'>4.0</span>점(<span className='ReviewAmount'>152</span>)</S.ProductStarWrapper>
                        <S.ProductPriceWrapper><S.DiscountRate>50%</S.DiscountRate><S.DiscountPrice>32,900원</S.DiscountPrice><S.OriginalPrice>65,800원</S.OriginalPrice></S.ProductPriceWrapper>
                    </S.DetailContainer>
                </S.DetailMainWrapper>

            </S.ProductDetailContainer>
                
            <S.ProductDetailBar>

            </S.ProductDetailBar>
            <S.ProductOptionCheckContainer>

            </S.ProductOptionCheckContainer>
        </>
    );
};

export default ProductDetails;