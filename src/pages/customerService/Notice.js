import React from 'react';
import S from './style';
import { Link } from 'react-router-dom';

const Notice = () => {
    return (
        <>
            <S.NoticeWrapper>
                <h1>공지사항</h1>
                <p>Lovegan의 새로운 소식들 유용한 정보들을 한 곳에서 확인하세요.</p>

                <S.NTable>
                    <S.NTbody>
                        <S.NTr>
                            <S.NTd>번호</S.NTd>
                            <S.NTd>13</S.NTd>
                        </S.NTr>

                        <S.NTr>
                            <S.NTd>제목</S.NTd>
                            <S.NTd>[안내] 고객님들께 안내드립니다.</S.NTd>
                        </S.NTr>

                        <S.NTr>
                            <S.NTd>작성자</S.NTd>
                            <S.NTd>Lovegan</S.NTd>
                        </S.NTr>

                        <S.NTr>
                            <S.NTd>작성일</S.NTd>
                            <S.NTd>2024.08.01</S.NTd>
                        </S.NTr>

                        <S.NTr>
                            <S.NTd colSpan={"2"}>내용내용내용</S.NTd>
                        </S.NTr>
                    </S.NTbody>
                </S.NTable>

                <S.BDiv>
                    <Link to="/customerService/notice"><S.NButton>목록</S.NButton></Link>
                </S.BDiv>
            </S.NoticeWrapper>
        </>
    );
};

export default Notice;