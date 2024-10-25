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
                            <S.UnderFilterButton>콩고기</S.UnderFilterButton>
                            <S.UnderFilterButton>밀고기</S.UnderFilterButton>
                            <S.UnderFilterButton>기타 고기대용</S.UnderFilterButton>
                          
                        </div>

                        <div className='filterWrapper'>
                            <S.MainFilterButton>채식 반찬</S.MainFilterButton>
                            <S.UnderFilterButton>채식 김치</S.UnderFilterButton>
                            <S.UnderFilterButton>김·해조</S.UnderFilterButton>
                            <S.UnderFilterButton>기타 채식 반찬</S.UnderFilterButton>
                        </div>
                    
                        <div className="filterWrapper">
                            <S.MainFilterButton>양념·가루</S.MainFilterButton>
                                <S.UnderFilterButton>양념</S.UnderFilterButton>
                                <S.UnderFilterButton>기름</S.UnderFilterButton>
                                <S.UnderFilterButton>엿·조청·꿀</S.UnderFilterButton>
                                <S.UnderFilterButton>곡식가루·채소가루</S.UnderFilterButton>
                                <S.UnderFilterButton>천일염·함초소금</S.UnderFilterButton>
                            
                        </div>
                        <div className="filterWrapper">
                            <S.MainFilterButton>간식·과일·견과</S.MainFilterButton>
                            <S.UnderFilterButton>베이커리</S.UnderFilterButton>
                            <S.UnderFilterButton>과자류</S.UnderFilterButton>
                            <S.UnderFilterButton>떡</S.UnderFilterButton>
                            <S.UnderFilterButton>과일</S.UnderFilterButton>
                            <S.UnderFilterButton>잼·스프레드</S.UnderFilterButton>
                            <S.UnderFilterButton>과일·과채 가공품</S.UnderFilterButton>
                            
                        </div>
                        <div className="filterWrapper">
                            <S.MainFilterButton>쌀·잡곡·계란</S.MainFilterButton>
                                <S.UnderFilterButton>맵쌀·찹쌀</S.UnderFilterButton>
                                <S.UnderFilterButton>잡곡</S.UnderFilterButton>
                                <S.UnderFilterButton>계란</S.UnderFilterButton>
                        
                        </div>
                        <div className="filterWrapper">
                            <S.MainFilterButton>간편식</S.MainFilterButton>
                                <S.UnderFilterButton>라면</S.UnderFilterButton>
                                <S.UnderFilterButton>국수·수제비류</S.UnderFilterButton>
                                <S.UnderFilterButton>선식·미숫가루</S.UnderFilterButton>
                                <S.UnderFilterButton>씨리얼·플레이크 </S.UnderFilterButton>
                                <S.UnderFilterButton>죽</S.UnderFilterButton>
                                <S.UnderFilterButton>즉석조리식품</S.UnderFilterButton>
                                <S.UnderFilterButton>기타 간편식</S.UnderFilterButton>
                            
                        </div>
                        <div className="filterWrapper">
                            <S.MainFilterButton>음료</S.MainFilterButton>
                                <S.UnderFilterButton>음료</S.UnderFilterButton>
                                <S.UnderFilterButton>두유</S.UnderFilterButton>
                                <S.UnderFilterButton>즙류</S.UnderFilterButton>
                                <S.UnderFilterButton>차류</S.UnderFilterButton>
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