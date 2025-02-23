import React, { useEffect, useState } from 'react';
import FS from './followStyle.js';
import profile1 from './images/profile1.png'
import profile2 from './images/profile2.png'
import profile3 from './images/profile3.png'
import profile4 from './images/profile4.png'
import profile5 from './images/profile5.png'
import profile6 from './images/profile6.png'
import more from './icons/more.svg';
import plus from './icons/plus.svg';
import checkSmall from './icons/check-small.svg';
import FollowButton from './FollowButton.jsx';
import { useSelector } from 'react-redux';

const FollowerList = () => {

    const currentUser = useSelector((state) => state.user.currentUser);
    console.log(currentUser)

    const [myFollowers, setMyFollowers] = useState([]);
    const [isMyFollowersUpdate, setIsMyFollowersUpdate] = useState(false);

    const getMyFollowers = async (email) => {
        try {
            const response = await fetch(`http://localhost:8000/user/getMyFollowers`, {
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
                    setMyFollowers(data.myFollowers); // 배송지 목록 상태 업데이트
                    setIsMyFollowersUpdate(true);
                } else {
                    alert(data.message);
                }
            } else {
                alert(response.status);
            }
        } catch (error) {
            console.error("Error fetching followers list:", error);
            alert(`내 팔로워를 불러오는 데 오류가 발생했습니다. (${error.message})`);
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
            getMyFollowers(currentUser.email);
        }
      }, [currentUser, isMyFollowersUpdate])


    return (
        <>
            <FS.FollowHeader>
                <div>사용자 정보</div>
                <div>최근 업로드</div>
                <div>상태</div>
            </FS.FollowHeader>
            {myFollowers.length > 0 ? (
                myFollowers.map((follower, index) => (
                    <FS.FollowData key={index}>
                        <div className='profile-img-wrapper'>
                            <img src={picturePath} alt="프로필" />
                        </div>
                        <div>{follower.nickname}</div>
                        <div>{follower.intro || "소개 없음"}</div>
                        <div>{follower.lastUploadDate || "업로드 기록 없음"}</div>
                        <div className='wrapper'>
                            <FollowButton userId = {currentUser._id} targetUserId = {follower._id} />
                            <img src={more} alt="더보기" />
                        </div>
                    </FS.FollowData>
                ))
            ) : (
                <p>팔로워가 없습니다.</p>
            )}
        </>
    );
};

export default FollowerList;