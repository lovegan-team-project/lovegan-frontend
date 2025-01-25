import React from 'react';
import star from './img/star.svg';
import S from './style';

const OtherComponent = ({otherData}) => {
    return (
        (otherData.length > 0 && (otherData.slice(0,4).map(item => (
        <S.OtherWrap>
            <div></div>
            <h2>{item.title}</h2>
            <h3>{item.description}</h3>
            <h4>{item.price}(원)</h4>
            <h5><img src={star} alt="star" />{item.star}({item.review})</h5>
        </S.OtherWrap>
        ))))
    );
};

export default OtherComponent;