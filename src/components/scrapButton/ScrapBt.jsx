import React, { useEffect, useState } from 'react';
import { ReactComponent as ScrapIcon } from './scrap.svg';
import styled from 'styled-components';

// scrap 버튼 스타일
const ScrapButton = styled(ScrapIcon)`
    cursor: pointer;
    opacity: 1;
    path {
        fill: ${(props) =>
            props.clicked
                ? props.hover ? '#D8590E' : '#F27830'
                : props.hover ? 'rgba(255, 255, 255, 0.5)' : 'rgba(255, 255, 255, 0.2)'};
    }
    stroke: ${(props) => (props.clicked ? 'none' : '#fff')};
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

const ScrapBt = ({postId, isScrapped}) => {
    const [clicked, setClicked] = useState(isScrapped);
    const [hover, setHover] = useState(false);

    // 스크랩 상태 변경 시 서버에 반영
    const toggleClick = async () => {
        setClicked((prev) => !prev);
        try {
            // 서버에서 스크랩 추가/삭제 처리 (예시)
            const response = await fetch(`/community/scrap`, {
                method: clicked ? 'DELETE' : 'POST', // 클릭된 상태에 따라 추가/삭제
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ postId: postId }),
            });
            if (!response.ok) {
                throw new Error('스크랩 상태 업데이트 실패');
            }
            // 서버 응답에 따라 추가 작업이 필요할 수 있습니다
        } catch (error) {
            console.error('스크랩 처리 오류:', error);
            // 에러 발생 시 상태 원복
            setClicked((prev) => !prev);
        }
    };

    const toggleHover = (isHovering) => setHover(isHovering);

    useEffect(() => {
        setClicked(isScrapped); // 초기 상태 설정
    }, [isScrapped]);

    return (
        <ScrapButton
            clicked={clicked}
            hover={hover}
            onClick={toggleClick}
            onMouseEnter={() => toggleHover(true)}
            onMouseLeave={() => toggleHover(false)}
        />
    );
};

export default ScrapBt;
