import React, { useState } from 'react';
import { LikeButtonCmAll } from './style';
import like from './image/like.svg';

const LikeBt = () => {

    const [likeClick, setLikeClick] = useState("#fff")    
    const [likeStroke, setLikeStroke] = useState("#333")
    const likeColor = () => {
        setLikeClick(prevColor => (prevColor === '#fff' ? '#F27830' : '#fff'))
        setLikeStroke(prevStroke => (prevStroke === '#333' ? '#939393' : '#333'))
    }

    return (
        <LikeButtonCmAll src={like} alt='likeButton' onClick={likeColor} color={likeClick} stroke={likeStroke}/>
    );
};

export default LikeBt;