import React, { useState } from 'react';
import S from './postsStyle.js';
import PostLikes from './PostLikes.jsx';
import ProductLikes from './ProductLikes.jsx';
import RestaurantLikes from './RestaurantLikes.jsx';


const Likes = () => {
    const [activeTab, setActiveTab] = useState('posts');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <>
            <S.ContentTitle>좋아요</S.ContentTitle>
            <S.FilterWrapper>
                <S.FilterList>
                    <div onClick={() => handleTabClick('product')} className={activeTab === 'product' ? 'active' : ''}>상품</div>
                    <div onClick={() => handleTabClick('restaurant')} className={activeTab === 'restaurant' ? 'active' : ''}>식당</div>
                    <div onClick={() => handleTabClick('posts')} className={activeTab === 'posts' ? 'active' : ''}>게시물</div>
                </S.FilterList>
                <S.ContentDivider></S.ContentDivider>
            </S.FilterWrapper>
            <div>
                {activeTab === 'product' && <ProductLikes />}
                {activeTab === 'restaurant' && <RestaurantLikes />}
                {activeTab === 'posts' && <PostLikes /> }
            </div>
        </>
    );
};

export default Likes;