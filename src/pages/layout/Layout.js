import React from 'react';
import { ReactComponent as LogoWhite } from './images/logo-white.svg';
import { Link, NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import S from './style';

const Layout = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // 고정 경로 리스트
    const pathsWithHeader = ["/", "/brand", "/product", "/diary", "/community", "/details"];
    // 동적 경로: /mypage로 시작하는 모든 경로
    const dynamicPathsWithHeader = new RegExp("^/mypage");

    // 헤더 표시 여부 확인 함수
    const showHeader = (currentPath) => {
        return pathsWithHeader.includes(currentPath) || dynamicPathsWithHeader.test(currentPath);
    };

    const isHeaderVisible = showHeader(location.pathname); // 현재 경로로 체크

    return (
        <S.Wrapper>
            <S.Container>
                {isHeaderVisible && (
                    <S.Header>
                        {/* 메인 로고 */}
                        <Link to="/">
                            <img src={process.env.PUBLIC_URL + "/images/main/lovegan_logo_main.png"} alt="메인로고" />
                        </Link>
                        <S.NavContainer>
                            <NavLink to="/brand">BRAND</NavLink>
                            <NavLink to="/product">PRODUCT</NavLink>
                            <NavLink to="/restaurant">RESTAURANT</NavLink>
                            <NavLink to="/diary">DIARY</NavLink>
                            <NavLink to="/community">COMMUNITY</NavLink>
                        </S.NavContainer>
                        <form action="">
                            <S.Input
                                type="text"
                                placeholder="  검색어를 입력하세요"
                                onKeyDown={(e) => {
                                    // Enter 키를 눌렀을 때 search 페이지로 이동
                                    if (e.key === "Enter") {
                                        navigate("/search");
                                    }
                                }}
                            ></S.Input>
                            <S.InputButton onClick={() => navigate("/search")}></S.InputButton>
                        </form>
                        <Link to="/login">
                            <S.Login>로그인</S.Login>
                        </Link>
                        <NavLink to="/signUp">
                            <S.SignupButton>회원가입</S.SignupButton>
                        </NavLink>
                    </S.Header>
                )}
            </S.Container>

            {isHeaderVisible ? (
                <S.Main1>
                    <Outlet />
                </S.Main1>
            ) : (
                <S.Main2>
                    <Outlet />
                </S.Main2>
            )}

            <S.Footer>
                {/* 고객센터 링크 */}
                <S.logoWrapper>
                    <LogoWhite />
                </S.logoWrapper>
                <S.TextBox1>
                    <strong>
                        이용약관 ㅣ 개인정보처리방침 ㅣ <Link to="/customerService">고객센터</Link>
                    </strong>
                </S.TextBox1>
                <S.TextBoxWrapper>
                    <S.TextBox2>
                        법인명 : LOVEgan ㅣ 대표자 : 000 ㅣ 사업자 등록번호 : 000-00-00000 | 사업장 소재지 : 서울 강남구 테헤란로 146
                    </S.TextBox2>
                    <S.TextBox2>
                        서울 사무소 : 서울 강남구 테헤란로 146 신한은행 건물 4층 | 통신판매등록번호 : 2024--0901 ㅣ 개인정보관리책임자 : 000
                    </S.TextBox2>
                    <S.TextBox2>이메일 : customer@lovegan.co.kr ㅣ 팩스 : 02-538-0021</S.TextBox2>
                    <S.TextBox2>COPYRIGHT ⓒ LOVEgan. ALL RIGHTS RESERVED.</S.TextBox2>
                </S.TextBoxWrapper>
            </S.Footer>
        </S.Wrapper>
    );
};

export default Layout;
