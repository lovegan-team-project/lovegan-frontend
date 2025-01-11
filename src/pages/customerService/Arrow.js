import React, { useEffect, useState } from 'react';
import S from './style';
import left from './img/left.svg';
import right from './img/right.svg';

const Arrow = ({ totalPosts, limit, page, setPage }) => {
    // 페이지네이션 숫자: 전체페이지를 한페이지당 글 개수로 나눠서 올림해줌
    const numPages = Math.ceil(totalPosts / limit);

    // 사용자가 클릭한 버튼을 기억하는 상태값.
    const [nextClick, setNextClick] = useState("one");

    // 페이지 그룹의 시작 번호와 끝 번호 계산
    //  음의 정수 오는걸 방지하기 위해 floor사용
    const firstNum = Math.floor((page - 1) / 5) * 5 + 1;
    // 마지막 번호와 전체 번호 중 min값 반환
    const lastNum = Math.min(firstNum + 4, numPages); // 마지막 번호는 전체 페이지 수를 넘지 않음

    // 페이지 변경 시 버튼 상태 업데이트
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

                    // 클릭했을 때 함수 실행
                    onClick={() => {
                        if(page>1){
                            setPage(page-1); // 현재 페이지가 1보다 클 때만 페이지 감소
                        }
                    }}
                    disabled={page === 1} // 페이지가 1일 때 버튼 비활성화
                    alt="Previous"
                />
                
                {/* 페이지 번호 버튼 */}
                {/* array객체를 활용해서 현재 페이지의 가져와서, map으로 뿌려줌 */}
                {Array.from({ length: lastNum - firstNum + 1 }).map((_, i) => {
                    const currentPage = firstNum + i;
                    return (
                        <button
                            key={currentPage}
                            // 현재 페이지(currentPage)와 일치하면 "click" 클래스를 추가, 아니면 "unClick"
                            className={nextClick === `page${currentPage}` ? "click" : "unClick"}
                            onClick={() => {
                                // 페이지 번호를 업데이트
                                setPage(currentPage);
                                // 선택된 버튼을 업데이트
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
                        if(page<numPages){
                            setPage(page+1); // 현재 페이지가 마지막 페이지보다 작을 때만 증가
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
