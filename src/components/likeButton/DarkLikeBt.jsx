import React, { useState } from 'react';
import { ReactComponent as LikeIcon } from './like.svg';
import styled from 'styled-components';

// like 버튼 스타일
const DarkLikeButton = styled(LikeIcon)`
    cursor: pointer;
    opacity: 1;
    path {
        fill: ${(props) =>
            props.clicked
                ? props.hover ? '#D8590E' : '#F27830'
                : props.hover ? 'rgba(255, 255, 255, 0.5)' : 'rgba(255, 255, 255, 0.2)'};
    }
    stroke: ${(props) => (props.clicked
                                ? 'none'
                                : props.hover ? '#B3B3B3' : '#8D8D8D')};
    stroke-width: ${(props) => (props.clicked ? '0' : '1px')};
    &:hover {
        path {
            fill: ${(props) =>
                props.clicked
                    ? '#D8590E'
                    : 'rgba(255, 255, 255, 0.5)'};
        }
    }
`;

const DarkLikeBt = () => {
    const [clicked, setClicked] = useState(false);
    const [hover, setHover] = useState(false);

    const toggleClick = () => setClicked((prev) => !prev);
    const toggleHover = (isHovering) => setHover(isHovering);

    return (
        <DarkLikeButton
            clicked={clicked}
            hover={hover}
            onClick={toggleClick}
            onMouseEnter={() => toggleHover(true)}
            onMouseLeave={() => toggleHover(false)}
        />
    );
};

export default DarkLikeBt;
