import React, { useEffect, useState } from 'react';
import S from './style.js';
import Star from '../main/images/star.svg';
import ItemContainer2 from './ItemContainer2.js';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';


const New = () => {
    const [products, setProducts] = useState([]);
    // const location = useLocation();
    const navigate = useNavigate();
    // const clickSort = location.state?.clickSort;
  
        
        const getProduct = async () => {
            const response = await fetch(`http://localhost:8000/product/get?tag=NEW`)
            const datas = await response.json();
            setProducts(datas);
           

        }
        
        
        useEffect(()=>{
            getProduct()
        },[])

    return (
      
        <Outlet />

                
    );
};

export default New;