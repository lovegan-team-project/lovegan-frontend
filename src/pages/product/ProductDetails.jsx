import React from 'react';
import S from './style';
import Narrow from './images/icon.png'
import MainPic from './images/productdetailMain.png'
import MainSubPic from './images/Rectangle 340.png'
import SubPic from './images/Rectangle 341.png'
import Star from './images/star.png'
const ProductDetails = () => {
    window.scrollTo(0,0);
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
                        <S.OrderDetailContainer>
                            <S.ProductDeliveryDetail>
                                <S.DeliveryTitle>배송</S.DeliveryTitle>
                                    <S.DeliveryDetails>
                                    <S.DeliverySubtitle>일반배송</S.DeliverySubtitle>
                                    <S.DeliveryPrice>3,000원(40,000원 이상 무료배송)평일 20시 이전 주문시 당일 출고</S.DeliveryPrice>
                                    <S.DeliverySubtitle>특급배송</S.DeliverySubtitle>
                                    <S.DeliveryExpressPrice>4,000원 추가(80,000원 이상 무료배송)<div>11시 이전 주문시 당일 도착. 20시 이전 주문 시 내일 새벽 도착</div></S.DeliveryExpressPrice>
                                    </S.DeliveryDetails>
                            </S.ProductDeliveryDetail>
                                <S.ProductBenefitDetail>
                                    <S.BenefitTitle>혜택</S.BenefitTitle>
                                    <S.BenefitDetail>-</S.BenefitDetail>
                                </S.ProductBenefitDetail>
                                <S.ProductComponentDetail>
                                    <S.ComponentTitle>구성</S.ComponentTitle>
                                    <S.ComponentDetail>상품 구성 설명</S.ComponentDetail>
                                </S.ProductComponentDetail>
                                <S.ProductOptionDetail>
                                    <S.OptionTitle>옵션 선택</S.OptionTitle>
                                    <select>
                                        <option>상품 A</option>
                                        <option>상품 B</option>
                                        <option>상품 C</option>
                                    </select>
                                </S.ProductOptionDetail>
                                <S.OptionResultBox>
                                    <S.OptionProductName>상품 A</S.OptionProductName>
                                </S.OptionResultBox>
                        </S.OrderDetailContainer>
                        <S.OrderPriceWrapper>
                            <div >주문금액</div>
                            <S.OrderTotalPrice>65,800원</S.OrderTotalPrice>
                        </S.OrderPriceWrapper>
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