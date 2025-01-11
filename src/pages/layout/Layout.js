import React from 'react';
import {ReactComponent as LogoBlack} from './images/logo-black.svg';
import { Link, NavLink, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import S from './style';
import { useState } from "react";
import Search from './images/search.svg'

const Layout = () => {

    // 검색 창에서 돋보기 버튼을 눌렀을 때 search 페이지로 이동
    const navigate = useNavigate();
    const location = useLocation();
    const pathsWithHeader = [
        "/", "/brand", "/product","/product/vege", "/product/new", "/product/new/vege", "/product/sale", "/product/best","/diary", "/community", 
        "/community/CommunityFollow","/community/CommunityAllDt", "/community/CommunityFollowDt", "/details", "/signIn", "/findId", "/findPW", "/resetPW","/customerService",
        "/search", "/product/new/drinks", "/product/new/eggs", "/product/new/fastfood", "/product/new/healthfood", "/product/new/meat", "/product/new/spice", "/product/new/snacks", "/product/new/vegeSide",
        "/product/drinks", "/product/eggs", "/product/fastfood", "/product/healthfood", "/product/meat", "/product/spice", "/product/snacks", "/product/vegeSide",
        "/mypage/activity/posts", "/mypage/activity/follow", "/mypage/activity/likes", "/mypage/activity/scrap", "/mypage/activity/couponbook",
        "/mypage/shopping/orders", "/mypage/shopping/reviews", "/mypage/shopping/inquiries", "/mypage/settings/shippings", "/mypage/settings/accountInfo", "/mypage/settings/changePassword",
        "/customerService/notice","/customerService/faq","/customerService/quest","/customerService/quest/register"
    ];

    const [searchTerm, setSearchTerm] = useState();
    
    // const showHeader = pathsWithHeader.includes(location.pathname);

    const params = useParams();
    
    const showHeader = () => {
        const { id } = params; // id가 URL에 있으면 id를 추출
      
        // /customerService/notice/:id 형식일 때
        if (location.pathname.includes("/customerService/notice/","/customerService/quest/") && id) {
          return true;
        }
      
        // 기타 경로
        return pathsWithHeader.includes(location.pathname);
      };

    
    const handleSearch = () => {
        if (searchTerm) {
            // search에 query가 searchTerm인곳으로 navigate
            navigate(`/search?query=${searchTerm}`);
        }
    };

    const isMypage = location.pathname.startsWith('/mypage');
    const isRestaurantPage = location.pathname.startsWith('/restaurant');


    return (
        <>
        <S.Wrapper>
                {showHeader && !isRestaurantPage &&
                <S.Header>
                    <S.HeaderContainer>
                        {/* 메인로고 환경변수 {} */}
                        <Link to={"/"}><img className='logo' src={process.env.PUBLIC_URL + "/images/main/lovegan_logo_main.png"} alt="메인로고" /></Link>
                        <S.NavContainer>
                            <NavLink to={"/brand"}>BRAND</NavLink>
                            <NavLink to={"/product"}>PRODUCT</NavLink>
                            <NavLink to={"/restaurant"}>RESTAURANT</NavLink>
                            <NavLink to={"/diary"}>DIARY</NavLink>
                            <NavLink to={"/community"}>COMMUNITY</NavLink>
                        </S.NavContainer>
                        <S.ButtonWrapper>
                            <S.InputWrapper>
                                <form onSubmit={(e) => {
                                e.preventDefault(); // 폼 기본 동작 방지
                                    handleSearch(); // 검색 실행
                                }}>
                                    <S.Input type='text' placeholder='  검색어를 입력하세요' onChange={(e)=>setSearchTerm(e.target.value)} onKeyDown={(e)=>{
                                    // input에서 엔터키 눌렀을 때 search 페이지로 이동
                                    // query로 input에 있는 searchTerm을 전달
                                    if(e.key==="Enter"){
                                        navigate(`/search?query=${searchTerm}`)
                                    }
                                }}></S.Input>
                                <S.InputButton onClick={()=>{handleSearch()}}>
                                    <img className="search" src={Search}></img>
                                </S.InputButton>
                                </form>
                            </S.InputWrapper>
                            
                            <S.ButtonWrapper>
                                <S.Login><Link to={"/login"}>로그인</Link></S.Login>
                                <S.SignupButton>
                                    <NavLink to={"/signUp"}>회원가입</NavLink>
                                </S.SignupButton>
                            </S.ButtonWrapper>
                        </S.ButtonWrapper>
                    </S.HeaderContainer>
                </S.Header>
                }

                <S.Main isMypage={isMypage}>
                    <S.Container style={{ width: isRestaurantPage ? '100vw' : '1420px' }}>
                        <Outlet />
                    </S.Container>
                </S.Main>

                {/* {showHeader && 
                    <S.Main1>
                        <S.Container>
                            <Outlet/>
                        </S.Container>
                    </S.Main1>
                }


                {!showHeader && 
                    <S.Main2>
                        <Outlet/>
                    </S.Main2>
                }
             */}
          
                <S.Footer>
                    <S.Container>
                        {/* <Link to={"/customerService"}>고객센터</Link> */}
                        <S.logoWrapper><LogoBlack /></S.logoWrapper>
                        <S.TopContent>이용약관 ㅣ 개인정보처리방침 ㅣ <Link to={"/customerService/notice"}>고객센터</Link></S.TopContent>
                        <S.MainContent>
                            <S.TextBoxWrapper>
                                <S.TextBox2>법인명 : LOVEgan ㅣ 대표자 : 000 ㅣ 사업자 등록번호 : 000-00-00000</S.TextBox2>
                                <S.TextBox2>사업장 소재지 : 서울 강남구 테헤란로 146 | 서울 사무소 : 서울 강남구 테헤란로 146 신한은행 건물 4층</S.TextBox2>
                            </S.TextBoxWrapper>
                            <S.ContactWrapper>
                                <S.Contact>
                                    <div className='title'>Email</div>
                                    <div className='content'>customer@lovegan.co.kr</div>
                                </S.Contact>
                                <S.Contact>
                                    <div className='title'>Fax</div>
                                    <div className='content'>02-538-0021</div>
                                </S.Contact>
                            </S.ContactWrapper>
                        </S.MainContent>

                        <div className='bottom'>
                            COPYRIGHT ⓒ LOVEgan. ALL RIGHTS RESERVED.
                        </div>
                    </S.Container>
                </S.Footer>
            
            
        </S.Wrapper>
    </>
    );
};

export default Layout;     