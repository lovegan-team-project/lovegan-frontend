import React from 'react';
import S from './style';
import { Link } from 'react-router-dom';

const RegisterComplete = () => {
    return (
        <div>
            <S.NoticeWrapper>
                <h1>1:1 문의</h1>
                <p>궁금하신 점을 마음껏 물어보세요.</p>

                <S.NTable>
                    <S.NTbody>
                        <S.NTr>
                            <S.NTd>번호</S.NTd>
                            <S.NTd>1</S.NTd>
                        </S.NTr>

                        <S.NTr>
                            <S.NTd>제목</S.NTd>
                            <S.NTd>배송 관련 문의드립니다.</S.NTd>
                        </S.NTr>

                        <S.NTr>
                            <S.NTd>작성자</S.NTd>
                            <S.NTd>비건사랑</S.NTd>
                        </S.NTr>

                        <S.NTr>
                            <S.NTd>작성일</S.NTd>
                            <S.NTd>2024.08.01 12:00</S.NTd>
                        </S.NTr>

                        <S.NTr>
                            <S.NTd colSpan={"2"}>배송관련 문의드립니다.</S.NTd>
                        </S.NTr>
                    </S.NTbody>
                </S.NTable>

                <S.BDiv>
                    <S.NButton className='modi' style={{float:"left"}}>수정</S.NButton>
                    <S.NButton className='del' style={{float:"left", marginLeft: "10px"}}>삭제</S.NButton>
                    <Link to="/customerService/quest"><S.NButton>목록</S.NButton></Link>
                </S.BDiv>
            </S.NoticeWrapper>
        </div>
    );
};

export default RegisterComplete;