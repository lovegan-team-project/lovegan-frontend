import React, { useState } from 'react';
import like from './image/like.svg';
import { LikeButtonMin } from './style';

const LikeBtMin = () => {

    const [likeMinStates, setLikeMinStates] = useState('#fff');
    const [minStroke, setMinStroke] = useState('#333')

    const onChangeLikeMin = () => {
        setLikeMinStates(prevStates => (prevStates === '#fff' ? '#F27830' : '#fff'))
        setMinStroke(prevStroke => (prevStroke === '#333' ? '#939393' : '#333'))
    };

    return (
        <LikeButtonMin onClick={onChangeLikeMin} color={likeMinStates} stroke={minStroke} src={like} alt='좋아요' />
    );
};

export default LikeBtMin;