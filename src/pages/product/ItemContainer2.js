import React, { useState } from 'react';
import S from './style'
import Like from '../main/images/like.svg'
import LikeClick from '../main/images/LikeClick.svg'
import { useNavigate } from 'react-router-dom';
import Image from '../main/images/Rectangle.png';


const ItemContainer2 = () => {
    const [like, setLike] = useState(false);

    const toggleLike = () => setLike(!like);

    return (
        <>
            <S.ProductPhotoWrapper>
                <img src={Image} />
                <img  onClick={toggleLike}
                    className="like"
                    src={like ? LikeClick : Like}
                    alt="하트"
                />
            </S.ProductPhotoWrapper>
        </>
    );
};
export default ItemContainer2;