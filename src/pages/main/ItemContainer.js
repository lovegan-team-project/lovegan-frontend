import React, { useState } from 'react';
import S from './style';
import Like from './images/like.svg'
import LikeClick from './images/LikeClick.svg'
import { useNavigate } from 'react-router-dom';
import Star from './images/star.svg';

const ItemContainer = ({ title, description, price, image, onNavigate }) => {
    const [like, setLike] = useState(false);

    const toggleLike = () => setLike(!like);

    return (
        <S.ItemContainer>
            <div onClick={toggleLike} className="mainPhotoWrapper">
                <img src={image} alt={title} />
                <img
                    className="like"
                    src={like ? LikeClick : Like}
                    alt="하트"
                />
            </div>
            <div onClick={onNavigate}>
                <S.ItemTitle>{title}</S.ItemTitle>
                <S.ItemExplain>{description}</S.ItemExplain>
                <S.ItemPrice>{price}</S.ItemPrice>
                <S.ItemStar>
                    <img src={Star} alt="star" />4.9<S.Review>(+999)</S.Review>
                </S.ItemStar>
            </div>
        </S.ItemContainer>
    );
};
export default ItemContainer;