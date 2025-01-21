import React, { useEffect, useState } from 'react';
import S from './style.js';
import Star from '../main/images/star.svg';
import ItemContainer2 from './ItemContainer2.js';
import { useNavigate } from 'react-router-dom';

const ProductMain = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
        
        const getProduct = async () => {
            const response = await fetch(`http://localhost:8000/product/get`)
            const datas = await response.json();
            setProducts(datas);
           

        }
        console.log(products)
        
        useEffect(()=>{
            getProduct()
        },[])

    return (
        <S.ProductMainContainer>
                    
                        {products.map((product) => (
                            <S.ItemContainerWrapper key={product._id}>
                                <React.Fragment >
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
                </S.ProductMainContainer>
    );
};

export default ProductMain;