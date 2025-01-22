import React from 'react';
import star from './img/star.svg';
import S from './style';


const RestaurantComponent = ({restaurantData}) => {
    return (
        (restaurantData.length > 0 && (restaurantData.slice(0,3).map(item => (
        <S.RestaurantWrap>
            <div></div>
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