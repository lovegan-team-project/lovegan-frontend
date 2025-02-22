import React, { useState } from 'react';
import S from './style'
import Like from '../main/images/like.svg'
import LikeClick from '../main/images/LikeClick.svg'
import { useNavigate } from 'react-router-dom';
import Image from '../main/images/Rectangle.png';


const ItemContainer3 = ({photoId}) => {
    const [like, setLike] = useState(false);
    const navigate = useNavigate()
    const toggleLike = () => setLike(!like);

    console.log("photoId:",photoId);

    return (
    <>    
        {Array.isArray(photoId) && photoId?.length > 0 && (
        <S.ProductPhotoWrapper>
            <div>
                <img 
                    src={photoId[0]?.url}
                    alt="상품이미지"
                    style={{width:"340px",height: "240px",borderRadius: "10px"}}
                />
            </div>
            <img onClick={toggleLike}
                className="like"
                src={like ? LikeClick : Like}
                alt="하트"
            />
        </S.ProductPhotoWrapper>        
    )}  
    
    </>
    );
};
export default ItemContainer3;