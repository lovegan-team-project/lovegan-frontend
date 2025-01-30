import React, { useState } from 'react';
import star from './img/star.svg';
import S from './style';
import scrap from './img/scrap.svg'
import unscrap from './img/unscrap.svg'


const RestaurantComponent = ({restaurantData}) => {
    const [scraps,setScraps] = useState(Array(restaurantData.length).fill(false));

    const toggleScrap = (index) => {
        setScraps((prevScraps) => {
            const newScraps = [...prevScraps]; // 기존 배열 복사
            newScraps[index] = !newScraps[index]; // 특정 인덱스만 변경
            return newScraps;
        });
    };

    return (
        (restaurantData.length > 0 && (restaurantData.slice(0,3).map((item,index) => (
        <S.RestaurantWrap key={index}>
            <div>
                    <img
                        onClick={() => toggleScrap(index)} // 해당 인덱스만 변경
                        className="scrap"
                        src={scraps[index] ? scrap : unscrap}
                        alt="스크랩"
                    />
            </div>
            <div>
                <p>{item.name}</p>
                <div><img src={star} alt="star" />&nbsp;<span>{item.rating}</span><span>({item.review_count})</span></div>
            </div>
            <p>{item.restaurant_description}</p>
        </S.RestaurantWrap>
        ))) )
    );
};

export default RestaurantComponent;