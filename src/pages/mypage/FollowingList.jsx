import React, { useEffect, useState } from 'react';
import FS from './followStyle.js';
import profile1 from './images/profile1.png'
import profile2 from './images/profile2.png'
import profile3 from './images/profile3.png'
import profile4 from './images/profile4.png'
import profile5 from './images/profile5.png'
import profile6 from './images/profile6.png'
import more from './icons/more.svg';
import { useSelector } from 'react-redux';

const FollowingList = () => {
    const currentUser = useSelector((state) => state.user.currentUser);

    const [myFollowing, setMyFollowing] = useState([]);
    const [isMyFollowingUpdate, setIsMyFollowingUpdate] = useState(false);

    const getMyFollowing = async (email) => {
        try {
            // console.log("getShippingList: " + email);
            // console.log(email)
            const response = await fetch(`http://localhost:8000/user/getMyFollowing`, {
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
                    setMyFollowing(data.myFollowing); // 배송지 목록 상태 업데이트
                    setIsMyFollowingUpdate(true);
                } else {
                    alert(data.message);
                }
            } else {
                alert(response.status);
            }
        } catch (error) {
            console.error("Error fetching following list:", error);
            alert(`내 팔로잉을 불러오는 데 오류가 발생했습니다. (${error.message})`);
        }
    }

    const [picturePath, setPicturePath] = useState('');

    useEffect(() => {
        if (currentUser && currentUser.picturePath && currentUser.pictureName) {
            setPicturePath(`http://localhost:8000${currentUser.picturePath}/${currentUser.pictureName}`);
        }
    }, [currentUser]);

    useEffect(() => {
        if (currentUser?.email) { // currentUser가 null이 아닐 때만 실행
            getMyFollowing(currentUser.email);
        }
      }, [currentUser, isMyFollowingUpdate])


    return (
        <>
            <FS.FollowHeader>
                <div>사용자 정보</div>
                <div>마지막 접속일</div>
                <div>최근 업로드</div>
            </FS.FollowHeader>
            {myFollowing.length > 0 ? (
                myFollowing.map((user, index) => (
                    <FS.FollowData key={index}>
                        <div className='profile-img-wrapper'>
                            <img src={picturePath || '/default-profile.png'} alt={user.nickname} />
                        </div>
                        <div>{user.nickname}</div>
                        <div>{user.intro}</div>
                        <div>{user.lastLogin || '2024년 10월 24일'}</div>
                        <div className='wrapper'>
                            <span>{user.lastUpload || '2024년 10월 20일'}</span>
                            <img src={more} alt="더 보기" />
                        </div>
                    </FS.FollowData>
                ))
            ) : (
                <div>팔로잉한 사용자가 없습니다.</div>
            )}
        </>
    );
};

export default FollowingList;