import React, { useEffect, useState } from 'react';
import plus from './icons/plus.svg';
import checkSmall from './icons/check-small.svg';

const FollowButton = ({ userId, targetUserId }) => {
    const [isFollowing, setIsFollowing] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // 사용자의 팔로우 상태를 가져오는 함수
        const checkFollowStatus = async () => {
            try {
                const response = await fetch(`http://localhost:8000/user/follow-status`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ userId, targetUserId }), // targetUserId 추가
                });
                if (response.ok) {
                    const data = await response.json();
                    setIsFollowing(data.isFollowing);
                }
            } catch (error) {
                console.error('팔로우 상태 확인 중 오류 발생:', error);
            }
        };
    
        if (userId && targetUserId) { // 두 값이 존재할 때만 실행
            checkFollowStatus();
        }
    }, [userId, targetUserId]);

    const toggleFollow = async () => {
        if (loading) return;
        setLoading(true);
    
        try {
            const response = await fetch(`http://localhost:8000/user/toggle-follow`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userId, targetUserId }), // targetUserId 추가
            });
    
            if (response.ok) {
                const data = await response.json();
                setIsFollowing(data.isFollowing);
            } else {
                console.error('팔로우 요청 실패:', response.status);
            }
        } catch (error) {
            console.error('팔로우 변경 중 오류 발생:', error);
        } finally {
            setLoading(false);
        }
    };    

    return (
        <button
            className={isFollowing ? 'following-btn' : 'follow-back-btn'}
            onClick={toggleFollow}
            disabled={loading}
        >
            {isFollowing ? '팔로잉' : '맞팔로우'}
            <img src={isFollowing ? checkSmall : plus} alt="" />
        </button>
    );
};

export default FollowButton;
