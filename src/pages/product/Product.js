import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import S from './style';
import Star from '../main/images/star.svg';
import Rectangle from '../main/images/Rectangle.png'
import SideMenuImage from './images/Rectangle 284.svg'
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import ItemContainer from '../main/ItemContainer';
import ItemContainer2 from './ItemContainer2';


const Product = () => {

    window.scrollTo(0,0);

    const [products, setProducts] = useState([]);
    const [clickSort, setClickSort] = useState("like");

    
    const getProduct = async () => {
        const response = await fetch(`http://localhost:8000/product/get`)
        const datas = await response.json();
        setProducts(datas);
               
    
    }
            
            
    useEffect(()=>{
        getProduct()
    },[])
    

    const [selectedFilter, setSelectedFilter] = useState(null);
    const navigate = useNavigate();
    const location = useLocation(); // 현재 URL 가져오기

    const handleFilterClick = (filter) => {
        const urlMap = {
            '채소': 'vege',
            '고기대용': 'meat',
            '채식반찬': 'vegeSide',
            '양념가루': 'spice',
            '간식': 'snacks',
            '계란': 'eggs',
            '간편식': 'fastfood',
            '음료': 'drinks',
            '건강식품': 'healthfood',

        };

        const newPath = urlMap[filter] || '';

        const basePaths = ['/product/new', '/product/best', '/product/sale', '/product'];
        const currentBasePath = basePaths.find((base) => location.pathname.startsWith(base)) || '/product/new';
    
        // 중복 URL 방지: 현재 경로가 이미 필터 경로와 일치하는지 확인
        if (location.pathname === `${currentBasePath}/${newPath}`) {
            console.log(`${filter} 필터가 이미 적용됨`);
            return;
        }
    
        setSelectedFilter(filter);
    
        // URL 변경
        navigate(`${currentBasePath}/${newPath}`);
    };

    
    // food 상품을 보일 때는 true, food 클릭 시 false => other 상품이 보임
    const [isOn, setIsOn] = useState(true);
    // 현재 경로 정보 가져오는 훅

    // onClick시 정렬 color 변경
    

    useEffect(()=>{
        setClickSort("like")
    },[setClickSort])
 
    useEffect(() => {
        Aos.init(); 
    }, []);

   

    return (
       
        <S.ProductContainer data-aos="fade-in">
            <S.ProductTitle>PRODUCT</S.ProductTitle>
            <S.ProductSubTitle>자연을 품은, 모두를 위한 비건 라이프스타일의 시작입니다.</S.ProductSubTitle>
            <S.ToggleContainer>
                
                <div className="toggleButtonFood" onClick={() => {setIsOn(!isOn); navigate("/product")}}>FOOD</div>
                <div className="toggleButtonFood" onClick={() => {setIsOn(!isOn); navigate("/other")}}>OTHER</div>
                <span className={`button ${isOn ? "foodActive" : "otherActive"}`}>{isOn ? "FOOD" : "OTHER"}</span>
                
            </S.ToggleContainer>
           
            <S.MainWrapper>
                <S.SideMenuWrapper>
                    <img src={SideMenuImage} alt='사이드메뉴바 이미지'></img>
                    <S.SideFilterWrapper> 
                        <div className='filterWrapper'>
                            <S.MainFilterButton
                                onClick={() => handleFilterClick('채소')}
                                className={selectedFilter === '채소' ? 'active' : ''}
                            >채소
                            </S.MainFilterButton>
                        </div>
                        
                        <div className="filterWrapper">
                            <S.MainFilterButton
                                onClick={() => handleFilterClick('고기대용')}
                                className={selectedFilter === '고기대용' ? 'active' : ''}
                            >고기대용</S.MainFilterButton>                          
                        </div>

                        <div className='filterWrapper'>
                            <S.MainFilterButton
                                onClick={() => handleFilterClick('채식반찬')}
                                className={selectedFilter === '채식반찬' ? 'active' : ''}
                                
                            >채식 반찬</S.MainFilterButton>
                        </div>
                    
                        <div className="filterWrapper">
                            <S.MainFilterButton
                                onClick={() => handleFilterClick('양념가루')}
                                className={selectedFilter === '양념가루' ? 'active' : ''}
                            
                            >양념·가루</S.MainFilterButton>
                        </div>
                        <div className="filterWrapper">
                            <S.MainFilterButton
                                onClick={() => handleFilterClick('간식')}
                                className={selectedFilter === '간식' ? 'active' : ''}
                            
                            >간식·과일·견과</S.MainFilterButton>
                        </div>
                        <div className="filterWrapper">
                            <S.MainFilterButton
                                onClick={() => handleFilterClick('계란')}
                                className={selectedFilter === '계란' ? 'active' : ''}
                            
                            >쌀·잡곡·계란</S.MainFilterButton>
                        </div>
                        <div className="filterWrapper">
                            <S.MainFilterButton
                                onClick={() => handleFilterClick('간편식')}
                                className={selectedFilter === '간편식' ? 'active' : ''}
                            >간편식</S.MainFilterButton>
                        </div>
                        <div className="filterWrapper">
                            <S.MainFilterButton
                                onClick={() => handleFilterClick('음료')}
                                className={selectedFilter === '음료' ? 'active' : ''}
                            >음료</S.MainFilterButton>
                        </div>
                        <S.MainFilterButton
                            onClick={() => handleFilterClick('건강식품')}
                            className={selectedFilter === '건강식품' ? 'active' : ''}
                        >건강식품</S.MainFilterButton>
                       

                    </S.SideFilterWrapper>
                </S.SideMenuWrapper>
                <S.ProductWrapper>
                    {/* <S.ProductHeader>
                        <S.ProductNum>총 {products.length}건</S.ProductNum>
                        <S.FilterWrapper>
                            <S.ProductTagWrapper>
                                <NavLink to="/product/new" className={ ({isActive}) => isActive ? 'active' : 'normal'}><S.NewButton>NEW</S.NewButton></NavLink>
                                <NavLink to="/product/best" className={ ({isActive}) => isActive ? 'active' : 'normal'}><S.BestButton>BEST</S.BestButton></NavLink>
                                <NavLink to="/product/sale" className={ ({isActive}) => isActive ? 'active' : 'normal'}><S.SaleButton>SALE</S.SaleButton></NavLink>
                            </S.ProductTagWrapper>
                            <S.ProductSortWrapper>
                                <button className={clickSort === "like" ? "active" : "normal"} onClick={()=>{setClickSort("like")}}><p>좋아요순</p></button>
                                <button className={clickSort === "review" ? "active" : "normal"} onClick={()=>{setClickSort("review")}}><p>리뷰순</p></button>
                                <button className={clickSort === "amount" ? "active" : "normal"} onClick={()=>{setClickSort("amount")}}><p>판매량순</p></button>
                                <button className={clickSort === "lowCost" ? "active" : "normal"} onClick={()=>{setClickSort("lowCost")}}><p>낮은가격순</p></button>
                                <button className={clickSort === "highCost" ? "active" : "normal"} onClick={()=>{setClickSort("highCost")}}><p>높은가격순</p></button>
                            </S.ProductSortWrapper>
                        </S.FilterWrapper>
                    </S.ProductHeader> */}
                    <Outlet/>
                    
                </S.ProductWrapper>

                

                {/* <S.ProductWrapper>
                    <S.ProductHeader>
                        <S.ProductNum>총 {products.length}건</S.ProductNum>
                        <S.FilterWrapper>
                            <S.ProductTagWrapper>
                                <NavLink to="/product/new" className={ ({isActive}) => isActive ? 'active' : 'normal'}><S.NewButton>NEW</S.NewButton></NavLink>
                                <NavLink to="/product/best" className={ ({isActive}) => isActive ? 'active' : 'normal'}><S.BestButton>BEST</S.BestButton></NavLink>
                                <NavLink to="/product/sale" className={ ({isActive}) => isActive ? 'active' : 'normal'}><S.SaleButton>SALE</S.SaleButton></NavLink>
                            </S.ProductTagWrapper>
                            <S.ProductSortWrapper>
                                <button className={clickSort === "like" ? "active" : "normal"} onClick={()=>{setClickSort("like")}}><p>좋아요순</p></button>
                                <button className={clickSort === "review" ? "active" : "normal"} onClick={()=>{setClickSort("review")}}><p>리뷰순</p></button>
                                <button className={clickSort === "amount" ? "active" : "normal"} onClick={()=>{setClickSort("amount")}}><p>판매량순</p></button>
                                <button className={clickSort === "lowCost" ? "active" : "normal"} onClick={()=>{setClickSort("lowCost")}}><p>낮은가격순</p></button>
                                <button className={clickSort === "highCost" ? "active" : "normal"} onClick={()=>{setClickSort("highCost")}}><p>높은가격순</p></button>
                            </S.ProductSortWrapper>
                        </S.FilterWrapper>
                    </S.ProductHeader>
                    <Outlet/>
                    
                </S.ProductWrapper> */}
               
            </S.MainWrapper>
            
        </S.ProductContainer>
     
    );
    
};

export default Product;