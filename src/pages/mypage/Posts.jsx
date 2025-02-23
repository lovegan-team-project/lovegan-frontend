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
                    // console.log(data.myPosts);
                } else {
                    alert(data.message);
                }
            } else {
                alert(response.status);
            }
        } catch (error) {
            console.error("Error fetching shipping list:", error);
            alert(`내 게시물을 불러오는 데 오류가 발생했습니다. (${error.message})`);
        }
    }

    useEffect(() => {
        if (currentUser?.email) { // currentUser가 null이 아닐 때만 실행
            console.log(currentUser.email);
            getMyPosts(currentUser.email);
        }
      }, [currentUser, isMyPostsUpdate])

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // 1월이 0이므로 +1 후 두 자리 변환
        const day = String(date.getDate()).padStart(2, '0'); // 두 자리 변환
        return `${year}.${month}.${day}`;
    };

    return (
        <>
            <S.ContentTitle>게시물</S.ContentTitle>
            <div>
                <PS.ContentWrapper>
                    {myPosts.length > 0 ? (
                        myPosts.map((post, index) => (
                            <PS.Content key={post._id || index}>
                                {/* <img src={post.imageUrl || my_post1} alt="게시물 이미지" /> */}
                                <img src={my_post1} alt="게시물 이미지" /> {/* 기본 이미지 사용 */}
                                <span>{formatDate(post.createdAt)}</span>
                                <p className='post-title'>{post.title}</p>
                            </PS.Content>
                        ))
                    ) : (
                        <p>작성한 게시물이 없습니다.</p>
                    )}
                </PS.ContentWrapper>
            </div>
        </>
    );
};

export default Posts;