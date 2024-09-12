import React from 'react';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import S from './style';

const Layout = () => {
    // 검색 창에서 돋보기 버튼을 눌렀을 때 search 페이지로 이동
    const navigate = useNavigate();

    return (
        <div className='wrapper'>
            <S.Header>
                {/* 메인로고 환경변수 {} */}
                <Link to={"/"}><img src={process.env.PUBLIC_URL + "/images/main/lovegan_logo_main.png"} alt="메인로고" /></Link>
                <S.NavContainer>
                <NavLink to={"/brand"}>BRAND</NavLink>
                <NavLink to={"/product"}>PRODUCT</NavLink>
                <NavLink to={"/restaurant"}>RESTAURANT</NavLink>
                <NavLink to={"/diary"}>DIARY</NavLink>
                <NavLink to={"/community"}>COMMUNITY</NavLink>
                </S.NavContainer>
                
                <form action=""><S.Input type='text' placeholder='검색어를 입력하세요'/>
                    <S.InputButton type='button' onClick={()=>{navigate("/search")}}><img src={process.env.PUBLIC_URL + "/images/main/search.png"} alt="검색" /></S.InputButton>
                </form>
                   
                <Link to={"/login"}> <S.Login>로그인</S.Login></Link>
                <NavLink to={"/signUp"}>
                    <S.LoginButton>회원가입</S.LoginButton>
                </NavLink>
            </S.Header>

            <S.Main>
                <Outlet/>
            </S.Main>
            
            <S.Footer>
                {/* <Link to={"/customerService"}>고객센터</Link> */}
            </S.Footer>
            
        </div>
    );
};

export default Layout;