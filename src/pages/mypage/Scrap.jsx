import React from 'react';
import PS from './postsStyle.js';
import S from './style.js';
import post1 from './images/post1.png';
import post2 from './images/post2.png';
import post3 from './images/post3.png';
import post4 from './images/post4.png';
import post5 from './images/post5.png';
import ScrapBt from '../../components/scrapButton/ScrapBt.jsx';


const Scrap = () => {
    return (
        <>
            <S.ContentTitle>스크랩</S.ContentTitle>
            <PS.ContentWrapper>
                <PS.Content>
                    <div className='scrap-btn-wrapper'>
                        <ScrapBt />
                    </div>
                    <p className='post-user-nickname'>유저 닉네임</p>
                    <img src={post1} alt="" />
                    <p className='post-title'>제목</p>
                </PS.Content>
                <PS.Content>
                    <div className='scrap-btn-wrapper'>
                        <ScrapBt />
                    </div>
                    <p className='post-user-nickname'>유저 닉네임</p>
                    <img src={post2} alt="" />
                    <p className='post-title'>제목</p>
                </PS.Content>
                <PS.Content>
                    <div className='scrap-btn-wrapper'>
                        <ScrapBt />
                    </div>
                    <p className='post-user-nickname'>유저 닉네임</p>
                    <img src={post3} alt="" />
                    <p className='post-title'>제목</p>
                </PS.Content>
                <PS.Content>
                    <div className='scrap-btn-wrapper'>
                        <ScrapBt />
                    </div>
                    <p className='post-user-nickname'>유저 닉네임</p>
                    <img src={post4} alt="" />
                    <p className='post-title'>제목</p>
                </PS.Content>
                <PS.Content>
                    <div className='scrap-btn-wrapper'>
                        <ScrapBt />
                    </div>
                    <p className='post-user-nickname'>유저 닉네임</p>
                    <img src={post5} alt="" />
                    <p className='post-title'>제목</p>
                </PS.Content>
            </PS.ContentWrapper>
        </>
    );
};

export default Scrap;
