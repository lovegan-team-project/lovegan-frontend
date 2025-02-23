import React, { useState } from 'react';
import S from './style';
import Like from './images/like.svg'
import LikeClick from './images/LikeClick.svg'
import { useNavigate } from 'react-router-dom';
import Star from './images/star.svg';

const ItemContainer = ({ title, description, price,star,review, onNavigate, photoId }) => {
    const [like, setLike] = useState(false);

    const toggleLike = () => setLike(!like);

    return (
        <S.ItemContainer>
            <div className="mainPhotoWrapper">
                <div>
                    <img 
                        src={photoId?.url}
                        alt="상품이미지"
                        style={{width:"340px",height: "240px",borderRadius: "10px"}}
                    />
                </div>
                <img onClick={toggleLike}
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
                    <img src={Star} alt="star" />{star}<S.Review>({review})</S.Review>
                </S.ItemStar>
            </div>
        </S.ItemContainer>
    );
};
export default ItemContainer;