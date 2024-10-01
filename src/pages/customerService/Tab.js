import React, { useState } from 'react';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';
import S from './style'

const Tab = () => {
    const[actionTab,setActionTab]= useState('tab1');

    return (
        <div>
            <S.Wrapper>
                <div className='tabMenu'>
                    <h1>고객센터</h1>
                    <ul>
                    <S.TabButtonContainer>
                        <S.TabButton onClick={()=>{setActionTab('tab1')}}>공지사항</S.TabButton>
                    </S.TabButtonContainer>
                    <S.TabButtonContainer>
                        <S.TabButton style={{borderTop:"none"}} onClick={()=>{setActionTab('tab2')}}>자주하는 질문</S.TabButton>
                    </S.TabButtonContainer>
                    <S.TabButtonContainer>
                        <S.TabButton style={{borderTop:"none"}} onClick={()=>{setActionTab('tab3')}}>1:1 문의</S.TabButton>
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
            
            
        </div>
    );
};

export default Tab;