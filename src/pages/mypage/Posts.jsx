import React from 'react';
import S from './postsStyle.js';
import my_post1 from './images/post1.png';
import my_post2 from './images/post2.png';
import my_post3 from './images/post3.png';
import my_post4 from './images/post4.png';
import my_post5 from './images/post5.png';

const Posts = () => {
    return (
        <>
            <S.ContentTitle>게시물</S.ContentTitle>
            <div>
                <S.ContentWrapper>
                    <S.Content>
                        <img src={my_post1} alt="" />
                        <span>24.11.01</span>
                        <p className='post-title'>제목</p>
                    </S.Content>
                    <S.Content>
                        <img src={my_post2} alt="" />
                        <span>24.11.01</span>
                        <p className='post-title'>제목</p>
                    </S.Content>
                    <S.Content>
                        <img src={my_post3} alt="" />
                        <span>24.11.01</span>
                        <p className='post-title'>제목</p>
                    </S.Content>
                    <S.Content>
                        <img src={my_post4} alt="" />
                        <span>24.11.01</span>
                        <p className='post-title'>제목</p>
                    </S.Content>
                    <S.Content>
                        <img src={my_post5} alt="" />
                        <span>24.11.01</span>
                        <p className='post-title'>제목</p>
                    </S.Content>
                </S.ContentWrapper>
            </div>
        </>
    );
};

export default Posts;