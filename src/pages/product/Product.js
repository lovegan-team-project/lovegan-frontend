import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import S from './style';
import SideMenuImage from './images/Rectangle 284.svg'
import { NavLink, Outlet, useLocation } from 'react-router-dom';


const Product = () => {

    window.scrollTo(0,0);
    
    // food 상품을 보일 때는 true, food 클릭 시 false => other 상품이 보임
    const [isOn, setIsOn] = useState(true);
    // 현재 경로 정보 가져오는 훅
    const location = useLocation();

    // onClick시 정렬 color 변경
    const [clickSort, setClickSort] = useState("like");

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
                
                <div className="toggleButtonFood" onClick={() => {setIsOn(!isOn)}}>FOOD</div>
                <div className="toggleButtonFood" onClick={() => {setIsOn(!isOn)}}>OTHER</div>
                <span className={`button ${isOn ? "foodActive" : "otherActive"}`}>{isOn ? "FOOD" : "OTHER"}</span>
                
            </S.ToggleContainer>
            <S.MainWrapper>
                <S.SideMenuWrapper>
                    <img src={SideMenuImage} alt='사이드메뉴바 이미지'></img>
                    <S.SideFilterWrapper> 
                        <div className='filterWrapper'><S.MainFilterButton>채소</S.MainFilterButton></div>
                        
                        <div className="filterWrapper">
                            <S.MainFilterButton>고기대용</S.MainFilterButton>                          
                        </div>

                        <div className='filterWrapper'>
                            <S.MainFilterButton>채식 반찬</S.MainFilterButton>
                        </div>
                    
                        <div className="filterWrapper">
                            <S.MainFilterButton>양념·가루</S.MainFilterButton>
                        </div>
                        <div className="filterWrapper">
                            <S.MainFilterButton>간식·과일·견과</S.MainFilterButton>
                        </div>
                        <div className="filterWrapper">
                            <S.MainFilterButton>쌀·잡곡·계란</S.MainFilterButton>
                        </div>
                        <div className="filterWrapper">
                            <S.MainFilterButton>간편식</S.MainFilterButton>
                        </div>
                        <div className="filterWrapper">
                            <S.MainFilterButton>음료</S.MainFilterButton>
                        </div>
                        <S.MainFilterButton>건강식품</S.MainFilterButton>
                       

                    </S.SideFilterWrapper>
                </S.SideMenuWrapper>
                <S.ProductWrapper>
                    <S.ProductHeader>
                        <S.ProductNum>총 500건</S.ProductNum>
                        <S.FilterWrapper>
                            <S.ProductTagWrapper>
                                {/* <S.NewButton onClick={(e)=>{setMenu(e.target.id)}}><p id='New'>NEW</p></S.NewButton>
                                <S.BestButton><p>BEST</p></S.BestButton>
                                <S.SaleButton><p>SALE</p></S.SaleButton> */}
                                {/* <NavLink to="new"><S.NewButton onClick={(e)=>{setMenu(e.target.id)}}><p id='New'>NEW</p></S.NewButton></NavLink> */}
                                <NavLink to="/product" className={ ({isActive}) => isActive && location.pathname === "/product" ? 'active' : 'normal'}><S.NewButton>NEW</S.NewButton></NavLink>
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
                    <Outlet />
                </S.ProductWrapper>
               
            </S.MainWrapper>
            
        </S.ProductContainer>
     
    );
};

export default Product;