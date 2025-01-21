import React, { useEffect, useState } from 'react';
import S from './style.js';
import Star from '../main/images/star.svg';
import ItemContainer2 from './ItemContainer2.js';
import { useNavigate } from 'react-router-dom';

const New = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
        
        const getProduct = async () => {
            const response = await fetch(`http://localhost:8000/product/get?tag=SALE`)
            const datas = await response.json();
            setProducts(datas)
        }
        
        useEffect(()=>{
            getProduct()
        },[])

    return (
        <S.ProductMainContainer>
                    
                        {products.map((product) => (
                            <S.ItemContainerWrapper>
                                <React.Fragment key={product._id}>
                                <ItemContainer2 />
                                <S.ItemClickDiv onClick={() => navigate("/details")}>
                                <S.ItemTitle>{product.title}</S.ItemTitle>
                                <S.ItemExplain>{product.description}</S.ItemExplain>
                                <S.ItemPrice>
                                    <S.Discount>{product.discount}%</S.Discount>{(product.price * (1 - product.discount / 100)).toLocaleString()}원
                                    <S.OriginPrice>{`${product.price.toLocaleString()}원`}</S.OriginPrice>
                                </S.ItemPrice>
                                <S.ItemStar>
                                    <img src={Star} alt="star" />
                                    {product.star}
                                    <S.Review>({product.review})</S.Review>
                                    </S.ItemStar>
                                    <S.ItemTagWrapper><S.Tag>{product.tag}</S.Tag></S.ItemTagWrapper>
                                </S.ItemClickDiv>
                                </React.Fragment>
                            </S.ItemContainerWrapper>
                        ))}
                    
                        
                    {/*   
                    <S.ProductRowItemContainer>
                        <S.ProductItemContainer >
                            <ItemContainer2 />
                            <div onClick={()=> navigate("/details")}>
                                <S.ItemTitle>상품명</S.ItemTitle>
                                <S.ItemExplain>상품 한 줄 설명</S.ItemExplain>
                                <S.ItemPrice><S.Discount>00%</S.Discount>할인가(원)<S.OriginPrice>정상가(원)</S.OriginPrice></S.ItemPrice>
                                <S.ItemStar><img src={Star} alt='star'></img>별점 평균<S.Review>(리뷰 개수)</S.Review></S.ItemStar>
                            </div>
                            <S.ItemTagWrapper><S.Tag>NEW</S.Tag></S.ItemTagWrapper>
                        </S.ProductItemContainer>
                        <S.ProductItemContainer>
                            <ItemContainer2 />
                            <S.ItemTitle>상품명</S.ItemTitle>
                            <S.ItemExplain>상품 한 줄 설명</S.ItemExplain>
                            <S.ItemPrice><S.Discount>00%</S.Discount>할인가(원)<S.OriginPrice>정상가(원)</S.OriginPrice></S.ItemPrice>
                            <S.ItemStar><img src={Star} alt='star'></img>별점 평균<S.Review>(리뷰 개수)</S.Review></S.ItemStar>
                            <S.ItemTagWrapper><S.Tag>NEW</S.Tag></S.ItemTagWrapper>
                        </S.ProductItemContainer>
                        <S.ProductItemContainer>
                            <ItemContainer2 />
                            <S.ItemTitle>상품명</S.ItemTitle>
                            <S.ItemExplain>상품 한 줄 설명</S.ItemExplain>
                            <S.ItemPrice><S.Discount>00%</S.Discount>할인가(원)<S.OriginPrice>정상가(원)</S.OriginPrice></S.ItemPrice>
                            <S.ItemStar><img src={Star} alt='star'></img>별점 평균<S.Review>(리뷰 개수)</S.Review></S.ItemStar>
                            <S.ItemTagWrapper><S.Tag>NEW</S.Tag></S.ItemTagWrapper>
                        </S.ProductItemContainer>
                    </S.ProductRowItemContainer>
                    <S.ProductRowItemContainer>
                        <S.ProductItemContainer>
                            <ItemContainer2 />
                            <S.ItemTitle>상품명</S.ItemTitle>
                            <S.ItemExplain>상품 한 줄 설명</S.ItemExplain>
                            <S.ItemPrice><S.Discount>00%</S.Discount>할인가(원)<S.OriginPrice>정상가(원)</S.OriginPrice></S.ItemPrice>
                            <S.ItemStar><img src={Star} alt='star'></img>별점 평균<S.Review>(리뷰 개수)</S.Review></S.ItemStar>
                            <S.ItemTagWrapper><S.Tag>NEW</S.Tag></S.ItemTagWrapper>
                        </S.ProductItemContainer>
                        <S.ProductItemContainer>
                            <ItemContainer2 /> 
                            <S.ItemTitle>상품명</S.ItemTitle>
                            <S.ItemExplain>상품 한 줄 설명</S.ItemExplain>
                            <S.ItemPrice><S.Discount>00%</S.Discount>할인가(원)<S.OriginPrice>정상가(원)</S.OriginPrice></S.ItemPrice>
                            <S.ItemStar><img src={Star} alt='star'></img>별점 평균<S.Review>(리뷰 개수)</S.Review></S.ItemStar>
                            <S.ItemTagWrapper><S.Tag>NEW</S.Tag></S.ItemTagWrapper>
                        </S.ProductItemContainer>
                        <S.ProductItemContainer>
                            <ItemContainer2 />
                            <S.ItemTitle>상품명</S.ItemTitle>
                            <S.ItemExplain>상품 한 줄 설명</S.ItemExplain>
                            <S.ItemPrice><S.Discount>00%</S.Discount>할인가(원)<S.OriginPrice>정상가(원)</S.OriginPrice></S.ItemPrice>
                            <S.ItemStar><img src={Star} alt='star'></img>별점 평균<S.Review>(리뷰 개수)</S.Review></S.ItemStar>
                            <S.ItemTagWrapper><S.Tag>NEW</S.Tag></S.ItemTagWrapper>
                        </S.ProductItemContainer>
                    </S.ProductRowItemContainer>
                    <S.ProductRowItemContainer>
                        <S.ProductItemContainer>
                            <ItemContainer2 />
                            <S.ItemTitle>상품명</S.ItemTitle>
                            <S.ItemExplain>상품 한 줄 설명</S.ItemExplain>
                            <S.ItemPrice><S.Discount>00%</S.Discount>할인가(원)<S.OriginPrice>정상가(원)</S.OriginPrice></S.ItemPrice>
                            <S.ItemStar><img src={Star} alt='star'></img>별점 평균<S.Review>(리뷰 개수)</S.Review></S.ItemStar>
                            <S.ItemTagWrapper><S.Tag>NEW</S.Tag></S.ItemTagWrapper>
                        </S.ProductItemContainer>
                        <S.ProductItemContainer>
                            <ItemContainer2 />
                            <S.ItemTitle>상품명</S.ItemTitle>
                            <S.ItemExplain>상품 한 줄 설명</S.ItemExplain>
                            <S.ItemPrice><S.Discount>00%</S.Discount>할인가(원)<S.OriginPrice>정상가(원)</S.OriginPrice></S.ItemPrice>
                            <S.ItemStar><img src={Star} alt='star'></img>별점 평균<S.Review>(리뷰 개수) </S.Review></S.ItemStar>
                            <S.ItemTagWrapper><S.Tag>NEW</S.Tag></S.ItemTagWrapper>
                        </S.ProductItemContainer>
                        <S.ProductItemContainer>
                            <ItemContainer2 />
                            <S.ItemTitle>상품명</S.ItemTitle>
                            <S.ItemExplain>상품 한 줄 설명</S.ItemExplain>
                            <S.ItemPrice><S.Discount>00%</S.Discount>할인가(원)<S.OriginPrice>정상가(원)</S.OriginPrice></S.ItemPrice>
                            <S.ItemStar><img src={Star} alt='star'></img>별점 평균<S.Review>(리뷰 개수) </S.Review></S.ItemStar>
                            <S.ItemTagWrapper><S.Tag>NEW</S.Tag></S.ItemTagWrapper>                        
                        </S.ProductItemContainer>
                    </S.ProductRowItemContainer>
                    */}
                    
                </S.ProductMainContainer>
    );
};

export default New;