import React, { useState } from 'react';
import like from './like.svg';
import styled from 'styled-components';

// like 버튼
const LikeButtonCmAll = styled.img`
    cursor: pointer;
    width: fit-content;
    height: fit-content;
    fill: ${(props) => props.color === '#fff' ? '#fff' : '#F27830'};
    stroke: ${(props) => props.stroke === '#8D8D8D' ? '#8D8D8D' : '#F27830'};

    &:hover path{
        fill: ${(props) => props.color === "#fff" ? "#F27830" : "#D8590E"};
        stroke: ${(props) => props.stroke === '#8D8D8D' ? '#F27830' : '#D8590E'};
    }
`

const LikeBt = () => {
    // const [likeBt, setLikeBt] = useState(true)
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