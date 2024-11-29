import React from 'react';
import S from './postsStyle.js';
import post1 from './images/post1.png';
import post2 from './images/post2.png';
import post3 from './images/post3.png';
import post4 from './images/post4.png';
import post5 from './images/post5.png';

const PostLikes = () => {
    return (
        <S.ContentWrapper>
            <S.Content>
                <p className='post-user-nickname'>유저 닉네임</p>
                <img src={post1} alt="" />
                <span>24.11.01</span>
                <p className='post-title'>제목</p>
            </S.Content>
            <S.Content>
                <p className='post-user-nickname'>유저 닉네임</p>
                <img src={post2} alt="" />
                <span>24.11.01</span>
                <p className='post-title'>제목</p>
            </S.Content>
            <S.Content>
                <p className='post-user-nickname'>유저 닉네임</p>
                <img src={post3} alt="" />
                <span>24.11.01</span>
                <p className='post-title'>제목</p>
            </S.Content>
            <S.Content>
                <p className='post-user-nickname'>유저 닉네임</p>
                <img src={post4} alt="" />
                <span>24.11.01</span>
                <p className='post-title'>제목</p>
            </S.Content>
            <S.Content>
                <p className='post-user-nickname'>유저 닉네임</p>
                <img src={post5} alt="" />
                <span>24.11.01</span>
                <p className='post-title'>제목</p>
            </S.Content>
        </S.ContentWrapper>
    );
};

export default PostLikes;