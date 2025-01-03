import React, { useState } from 'react';
import plus from './icons/plus.svg';
import checkSmall from './icons/check-small.svg';

const FollowButton = ({ initialFollowing = false }) => {
    const [isFollowing, setIsFollowing] = useState(initialFollowing);

    // 상태를 토글하는 함수
    const toggleFollow = () => setIsFollowing(!isFollowing);

    return (
        <button
            className={isFollowing ? 'following-btn' : 'follow-back-btn'}
            onClick={toggleFollow}
        >
            {isFollowing ? '팔로잉' : '맞팔로우'}
            <img src={isFollowing ? checkSmall : plus} alt="" />
        </button>
    );
};

export default FollowButton;
