import React, { useEffect, useState } from 'react';
import PS from './postsStyle.js';
import S from './style.js';
import my_post1 from './images/post1.png';
import my_post2 from './images/post2.png';
import my_post3 from './images/post3.png';
import my_post4 from './images/post4.png';
import my_post5 from './images/post5.png';
import { useSelector } from 'react-redux';

const Posts = () => {
    const currentUser = useSelector((state) => state.user.currentUser);

    const [myPosts, setMyPosts] = useState([]);
    const [isMyPostsUpdate, setIsMyPostsUpdate] = useState(false);

    const getMyPosts = async () => {
        const response = await fetch("http://localhost:8000/getMyPosts")
        const datas = await response.json();
        setMyPosts(datas);
    }

    useEffect(() => {
        getMyPosts()
      }, [isMyPostsUpdate])


    return (
        <>
            <S.ContentTitle>게시물</S.ContentTitle>
            <div>
                <PS.ContentWrapper>
                    <PS.Content>
                        <img src={my_post1} alt="" />
                        <span>24.11.01</span>
                        <p className='post-title'>제목</p>
                    </PS.Content>
                    <PS.Content>
                        <img src={my_post2} alt="" />
                        <span>24.11.01</span>
                        <p className='post-title'>제목</p>
                    </PS.Content>
                    <PS.Content>
                        <img src={my_post3} alt="" />
                        <span>24.11.01</span>
                        <p className='post-title'>제목</p>
                    </PS.Content>
                    <PS.Content>
                        <img src={my_post4} alt="" />
                        <span>24.11.01</span>
                        <p className='post-title'>제목</p>
                    </PS.Content>
                    <PS.Content>
                        <img src={my_post5} alt="" />
                        <span>24.11.01</span>
                        <p className='post-title'>제목</p>
                    </PS.Content>
                </PS.ContentWrapper>
            </div>
        </>
    );
};

export default Posts;