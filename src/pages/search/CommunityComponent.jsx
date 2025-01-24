import React from 'react';
import S from './style';

const CommunityComponent = ({communityData}) => {
    return (
        
        (communityData.length > 0 && (communityData.slice(0,3).map(item => (
        <S.CommunityWrap>
            <div></div>
            <h2>{item.title}</h2>
            <h3>{item.author}</h3>
            <span>스크랩 {item.scrapCount}</span> &nbsp;
            <span>좋아요 {item.likeCount}</span> &nbsp;
            <span>댓글 </span> &nbsp;
            <span>조회수 {item.viewCount}</span>
        </S.CommunityWrap> 
        ))))
    );
};

export default CommunityComponent;