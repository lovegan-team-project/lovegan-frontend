import React, { useEffect, useState } from 'react';
import S from './style';
import { useNavigate } from 'react-router-dom';
import Img from './images/Rectangle.png'
import Product01 from './images/product01.svg'
import Product02 from './images/product02.svg'
import Product03 from './images/product03.svg'
import Product04 from './images/product04.svg'
import ItemContainer from './ItemContainer.js';

const Vege = () => {
    const navigate = useNavigate();

    const [products, setProducts] = useState([]);

    const getProduct = async () => {
        const response = await fetch('http://localhost:8000/product/get')
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
                image={Img} //이미지 스키마 추가 해야함
                onNavigate={() => navigate("/details")}
            />
            ))}
        </S.TagItemWrapper>
    );
};

export default Vege;