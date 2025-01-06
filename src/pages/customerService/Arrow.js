import React, { useEffect, useState } from 'react';
import S from './style';
import left from './img/left.svg';
import right from './img/right.svg';

const Arrow = ({ totalPosts, limit, page, setPage }) => {
    const numPages = Math.ceil(totalPosts / limit);
    const [nextClick, setNextClick] = useState("one");

    // 페이지 그룹의 시작 번호와 끝 번호 계산
    const firstNum = Math.floor((page - 1) / 5) * 5 + 1;
    const lastNum = Math.min(firstNum + 4, numPages); // 마지막 번호는 전체 페이지 수를 넘지 않음

    // 페이지 변경 시 버튼 상태 초기화
    useEffect(() => {
        setNextClick(`page${page}`); // 현재 페이지에 해당하는 버튼 선택
    }, [page]);

    return (
        <>
            <S.nextPage>
    {/* 이전 버튼 */}
    <img
        className='left'
        src={left}
        onClick={() => {
            if (page > 1) {
                setPage(page - 1); // 현재 페이지가 1보다 클 때만 페이지를 감소
            }
        }}
        disabled={page === 1} // 페이지가 1일 때 버튼 비활성화
        alt="Previous"
    />
    
    {/* 페이지 번호 버튼 */}
    {Array.from({ length: lastNum - firstNum + 1 }).map((_, i) => {
        const currentPage = firstNum + i;
        return (
            <button
                key={currentPage}
                className={nextClick === `page${currentPage}` ? "click" : "unClick"}
                onClick={() => {
                    setPage(currentPage);
                    setNextClick(`page${currentPage}`);
                }}
                aria-current={page === currentPage ? "page" : null}
            >
                {currentPage}
            </button>
        );
    })}

    {/* 다음 버튼 */}
    <img
        className='right'
        src={right}
        onClick={() => {
            if (page < numPages) {
                setPage(page + 1); // 현재 페이지가 마지막 페이지보다 작을 때만 증가
            }
        }}
        disabled={page === numPages} // 마지막 페이지에서 버튼 비활성화
        alt="Next"
    />
</S.nextPage>

        </>
    );
};

export default Arrow;
