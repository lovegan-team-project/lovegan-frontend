import React, { useState } from 'react';
import S from './style';
import scrap from './img/scrap.svg'
import unscrap from './img/unscrap.svg'

const CommunityComponent = ({communityData}) => {
    const [scraps,setScraps] = useState(Array(communityData.length).fill(false));

    const toggleScrap = (index) => {
        setScraps((prevScraps) => {
            const newScraps = [...prevScraps]; // 기존 배열 복사
            newScraps[index] = !newScraps[index]; // 특정 인덱스만 변경
            return newScraps;
        });
    };
    return (
        
        (communityData.length > 0 && (communityData.slice(0,3).map((item,index) => (
        <S.CommunityWrap key={index}>
            <div>
                    <img
                        onClick={() => toggleScrap(index)} // 해당 인덱스만 변경
                        className="scrap"
                        src={scraps[index] ? scrap : unscrap}
                        alt="스크랩"
                    />
            </div>
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