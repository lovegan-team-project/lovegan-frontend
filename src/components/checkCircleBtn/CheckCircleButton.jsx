import React, { useState } from 'react';
import { ReactComponent as CheckCircleIcon } from './check-circle.svg';
import styled from 'styled-components';

const CheckCircle = styled(CheckCircleIcon)`
    cursor: pointer;
    opacity: 1;
    path {
        fill: ${(props) =>
            props.clicked
                ? props.hover ? '#D8590E' : '#F27830'
                : props.hover ? 'rgba(141, 141, 141, 0.5)' : 'rgba(141, 141, 141)'};
    }
    stroke: ${(props) => (props.clicked ? 'none' : 'none')};
    stroke-width: ${(props) => (props.clicked ? '0' : '1px')};
    &:hover {
        path {
            fill: ${(props) =>
                props.clicked
                    ? '#D8590E'
                    : 'rgba(141, 141, 141)'};
        }
    }
`;

const CheckCircleButton = () => {
    const [clicked, setClicked] = useState(false);
    const [hover, setHover] = useState(false);

    const toggleClick = () => setClicked((prev) => !prev);
    const toggleHover = (isHovering) => setHover(isHovering);

    return (
        <CheckCircle
            clicked={clicked}
            hover={hover}
            onClick={toggleClick}
            onMouseEnter={() => toggleHover(true)}
            onMouseLeave={() => toggleHover(false)}
        />
    );
};

export default CheckCircleButton;