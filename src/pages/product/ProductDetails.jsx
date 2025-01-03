import React, { useState } from 'react';
import S from './style';
import Narrow from './images/icon.png'
import MainPic from './images/productdetailMain.png'
import MainSubPic from './images/Rectangle 340.png'
import SubPic from './images/Rectangle 341.png'
import Star from './images/star.png'
import X from './images/X.png'
import Like from './images/icon (6).png'
import LikeClick from '../main/images/LikeClick.svg'
import ProductDetailPic from './images/ProductDetailPic.png'
const ProductDetails = () => {
    
    // window.scrollTo(0,0);
    const [like, setLike] = useState(false);
    
    const toggleLike = () => setLike(!like);
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
                            <div>주문금액</div>
                            <S.OrderTotalPrice>65,800원</S.OrderTotalPrice>
                            
                        </S.OrderPriceWrapper>
                        <S.ProductDetailCartButton>장바구니</S.ProductDetailCartButton>
                        <S.ProductDetailBuyButton>바로구매</S.ProductDetailBuyButton>
                    </S.DetailContainer>
                </S.DetailMainWrapper>

            </S.ProductDetailContainer>
                
            <S.ProductDetailBar>
            <S.BarProductInfo>상품정보</S.BarProductInfo>
            <S.BarReivew>리뷰<span>152</span></S.BarReivew>
            <S.BarQnA>문의<span>23</span></S.BarQnA>
            <S.BarDeliveryAndRefund>배송/환불</S.BarDeliveryAndRefund>
            <S.BarSimilarProduct>비슷한 상품</S.BarSimilarProduct>
            </S.ProductDetailBar>
            <S.ProductOptionCheckContainer>
                <S.ProductPicContainer>
                    <S.ProductPicWrapper><img src={ProductDetailPic} alt="pic1" /></S.ProductPicWrapper>
                    <S.ProductPicWrapper><img src={ProductDetailPic} alt="pic2" /></S.ProductPicWrapper>
                    <S.ProductPicWrapper><img src={ProductDetailPic} alt="pic3" /></S.ProductPicWrapper>
                </S.ProductPicContainer>
                
                <S.PayOptionBox>
                <S.ProductOptionDetail2>
                    <div>옵션 선택</div> 
                    <select>
                        <option>상품 A</option>
                        <option>상품 B</option>
                        <option>상품 C</option>
                    </select>
                </S.ProductOptionDetail2>
                <S.MiniOption>
                    <div><S.MiniProductName>상품 A</S.MiniProductName><S.XButton><img src={X}alt="x" /></S.XButton></div>
                    <S.MiniButtonPriceWrapper>
                        <S.AmountWrapper><button>-</button><span>1</span><button>+</button></S.AmountWrapper>
                        <S.MiniPrice>65,800원</S.MiniPrice>
                    </S.MiniButtonPriceWrapper>
                </S.MiniOption>
                <S.TotalPayWrapper>
                    <S.OrderPriceWrapper2>
                        <div>주문금액</div>
                        <S.OrderTotalPrice>65,800원</S.OrderTotalPrice>

                    </S.OrderPriceWrapper2>
                    <S.MiniButtonWrapper>
                        <S.LikeDiv><img src={like ? LikeClick : Like} onClick={toggleLike} className='like'></img></S.LikeDiv>                        
                        <S.ProductDetailCartButton2>장바구니</S.ProductDetailCartButton2>
                        <S.ProductDetailBuyButton2>바로구매</S.ProductDetailBuyButton2>

                    </S.MiniButtonWrapper>




                </S.TotalPayWrapper>
                </S.PayOptionBox>
                
                
                

                

            </S.ProductOptionCheckContainer>
        </>
    );
};

export default ProductDetails;