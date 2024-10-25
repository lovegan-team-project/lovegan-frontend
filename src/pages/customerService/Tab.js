import React, { useEffect, useState } from 'react';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';
import S from './style'; 
import Arrow from './Arrow';

const Tab = () => {
    // onClick시 탭 이동
    const[actionTab,setActionTab]= useState('tab1');

    useEffect(()=>{
        setActionTab('tab1')
    },[setActionTab])

    // onClick시 버튼 색 변경
    const [clickColor,setClickColor] = useState('notice');

    useEffect(()=>{
        setClickColor('notice')
    },[setClickColor])

    return (
        <>
            <S.Wrapper>
                <div className='tabMenu'>
                    <h1>고객센터</h1>
                    <ul>
                    <S.TabButtonContainer>
                        <S.TabButton className={clickColor === "notice" ? "active" : ""} onClick={()=>{setActionTab('tab1');setClickColor('notice')}}>공지사항</S.TabButton>
                    </S.TabButtonContainer>
                    <S.TabButtonContainer>
                        <S.TabButton className={clickColor === "faq" ? "active" : ""} style={{borderTop:"none"}} onClick={()=>{setActionTab('tab2');setClickColor('faq')}}>자주하는 질문</S.TabButton>
                    </S.TabButtonContainer>
                    <S.TabButtonContainer>
                        <S.TabButton className={clickColor === "inquiry" ? "active" : ""} style={{borderTop:"none"}} onClick={()=>{setActionTab('tab3');setClickColor('inquiry')}}>1:1 문의</S.TabButton>
                    </S.TabButtonContainer>
                    </ul>
                </div>

                <div className='Content'>
                    <div style={{ display: actionTab === 'tab1' ? 'block' : 'none' }}>
                        <Tab1 />
                    </div>
                    <div style={{ display: actionTab === 'tab2' ? 'block' : 'none' }}>
                        <Tab2 />
                    </div>
                    <div style={{ display: actionTab === 'tab3' ? 'block' : 'none' }}>
                        <Tab3 />
                    </div>
                </div>

                
                

            </S.Wrapper>

            

            
            <S.A_Div>
                <Arrow></Arrow>
            </S.A_Div>
            
            
        </>
    );
};

export default Tab;