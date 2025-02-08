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
    // console.log(currentUser);

    const [myPosts, setMyPosts] = useState([]);
    const [isMyPostsUpdate, setIsMyPostsUpdate] = useState(false);

    const getMyPosts = async (email) => {
        try {
            // console.log("getShippingList: " + email);
            // console.log(email)
            const response = await fetch(`http://localhost:8000/community/getMyPosts`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: email }), // 이메일을 body에 포함
            });

            // 응답 상태가 성공적인 경우에만 JSON 파싱
            if (response.ok) {
                const data = await response.json();
                if (data.success) {
                    setMyPosts(data.myPosts); // 배송지 목록 상태 업데이트
                    setIsMyPostsUpdate(true);
                } else {
                    alert(data.message);
                }
            }
        } catch (error) {
            console.error("Error fetching shipping list:", error);
            alert(`내 게시물을 불러오는 데 오류가 발생했습니다. (${error.message})`);
        }
    }

    useEffect(() => {
        console.log(currentUser.email);  // currentUser.email 값 확인
        getMyPosts('cyaein@gmail.com');
        // if (currentUser && currentUser.email) {
            
        // } else {
        //     alert('사용자 이메일이 없습니다.');
        // }
      }, [currentUser, isMyPostsUpdate])

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