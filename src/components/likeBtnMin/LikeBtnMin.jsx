import React, { useState } from 'react';
import like from './like.svg';
import styled from 'styled-components';

// 스타일 정의
const LikeButtonMin = styled.img`
    cursor: pointer;
    width: 18px;
    height: 18px;
    margin-right: 4px;
    fill: ${(props) => (props.color === '#fff' ? '#fff' : '#F27830')};
    stroke: ${(props) => (props.stroke === '#333' ? '#333' : '#F27830')};

    &:hover path {
        fill: ${(props) => (props.color === '#fff' ? '#fff' : '#D8590E')};
        stroke: ${(props) => (props.stroke === '#333' ? '#939393' : '#D8590E')};
    }
`;

// 컴포넌트 정의
const LikeBtMin = () => {
    const [likeMinStates, setLikeMinStates] = useState('#fff');
    const [minStroke, setMinStroke] = useState('#333');

    const onChangeLikeMin = () => {
        setLikeMinStates((prevStates) => (prevStates === '#fff' ? '#F27830' : '#fff'));
        setMinStroke((prevStroke) => (prevStroke === '#333' ? '#939393' : '#333'));
    };

    return (
        <LikeButtonMin
            onClick={onChangeLikeMin}
            color={likeMinStates}
            stroke={minStroke}
            src={like}
            alt="좋아요"
        />
    );
};

export default LikeBtMin;
