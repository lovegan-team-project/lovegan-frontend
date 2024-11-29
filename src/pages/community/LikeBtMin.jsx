import React, { useState } from 'react';
import like from './image/like.svg';
import { LikeButtonMin } from './style';

const LikeBtMin = () => {

    const [likeMinStates, setLikeMinStates] = useState('#fff');

    const onChangeLikeMin = () => {
        setLikeMinStates(prevStates => (prevStates === '#fff' ? '#F27830' : '#fff'))
    };

    return (
        <LikeButtonMin onClick={onChangeLikeMin} color={likeMinStates} src={like} alt='좋아요' />
    );
};

export default LikeBtMin;