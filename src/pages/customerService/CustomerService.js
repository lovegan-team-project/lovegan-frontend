import React, { useEffect, useState } from 'react';
import S from './style';
import { NavLink, Outlet, useSearchParams } from 'react-router-dom';
import Register from './Register';
import Notice from './Notice';
import RegisterComplete from './RegisterComplete';
import Arrow from './Arrow';

const CustomerService = () => {

    // 화면 랜더링시 맨위로 이동
    window.scrollTo(0,0);

    return (
        <>
            <S.Container>
                <S.Wrapper>
                    <div className='tabMenu'>
                        <h1>고객센터</h1>
                        <ul>
                        <S.TabButtonContainer>
                            <NavLink className={({ isActive }) => (isActive ? "navlink active" : "navlink")} to="/customerService/notice">공지사항</NavLink>
                        </S.TabButtonContainer>
                        <S.TabButtonContainer>
                            <NavLink className={({ isActive }) => (isActive ? "navlink active" : "navlink")} to="/customerService/faq" style={{borderTop:"none"}}>자주하는 질문</NavLink>
                        </S.TabButtonContainer>
                        <S.TabButtonContainer>
                            <NavLink className={({ isActive }) => (isActive ? "navlink active" : "navlink")} to="/customerService/quest" style={{borderTop:"none"}}>1:1 문의</NavLink>
                        </S.TabButtonContainer>
                        </ul>
                    </div>

                    <div className='Content'>
                        <Outlet></Outlet>
                    </div>

                    
                    

                </S.Wrapper>
            </S.Container>
        </>
        
    );
};

export default CustomerService;
