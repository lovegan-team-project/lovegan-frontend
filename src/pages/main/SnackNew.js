import React, { useEffect, useState } from 'react';
import S from './style';
import Rectangle from './images/Rectangle.png';
import { useNavigate } from 'react-router-dom';
import ItemContainer from './ItemContainer';
import Img from './images/Rectangle.png'

const SnackNew = () => {
    const navigate = useNavigate();

    const [products, setProducts] = useState([]);

    const getProduct = async () => {
        const response = await fetch(`http://localhost:8000/product/get?categories=간식과일견과&tag=NEW`)
        const datas = await response.json();
        setProducts(datas)
    }

    useEffect(()=>{
        getProduct()
    },[])

    return (
        <S.TagItemWrapper>
            {products.slice(0,4).map((product)=>(
                <ItemContainer
                key={product._id}
                title={product.title}
                description={product.description}
                price={`${product.price.toLocaleString()}원`}
                star={product.star}
                review={product.review}
                image={Img} //이미지 스키마 추가 해야함
                onNavigate={() => navigate(`/details?id=${product._id}`)}
            />
            ))}
        </S.TagItemWrapper>
    );
};

export default SnackNew;