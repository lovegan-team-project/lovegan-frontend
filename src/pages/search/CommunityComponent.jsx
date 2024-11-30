import React from 'react';
import S from './style';

const CommunityComponent = () => {
    return (
        <S.CommunityWrap>
            <div></div>
            <h2>게시물 제목</h2>
            <h3>유저 닉네임</h3>
            <span>스크랩 24</span> &nbsp;
            <span>좋아요 80</span> &nbsp;
            <span>댓글 604</span> &nbsp;
            <span>조회수 713</span>
        </S.CommunityWrap> 
    );
};

export default CommunityComponent;