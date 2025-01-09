import React, { useEffect, useState } from 'react';
import S from './style';
import { Link, useParams } from 'react-router-dom';

const Notice = () => {
    const [notice,setNotice] = useState({});
    const {id} = useParams();

    useEffect(()=>{
        const getNotice = async() => {
            try {
                const response = await fetch('http://localhost:8000/customer/notice');
                if (!response.ok) {
                    throw new Error('네트워크 응답이 실패했습니다.');
                }
                const data = await response.json();
                // 데이터를 가져온 후, 해당 id에 맞는 공지사항을 찾아서 상태에 저장
                const selectedNotice = data.find((item) => item.no === parseInt(id));
                setNotice(selectedNotice);
            } catch (error) {
                console.error('API 호출 오류:', error);
            }
        };
        getNotice();
    },[id])

    return (
        <>
            <S.NoticeWrapper>
                <h1>공지사항</h1>
                <p>Lovegan의 새로운 소식들 유용한 정보들을 한 곳에서 확인하세요.</p>

                <S.NTable>
                    <S.NTbody>
                        {notice && (
                        <>
                        <S.NTr>
                            <S.NTd>번호</S.NTd>
                            <S.NTd>{notice.no}</S.NTd>
                        </S.NTr>

                        <S.NTr>
                            <S.NTd>제목</S.NTd>
                            <S.NTd>{notice.title}</S.NTd>
                        </S.NTr>

                        <S.NTr>
                            <S.NTd>작성자</S.NTd>
                            <S.NTd>{notice.writer}</S.NTd>
                        </S.NTr>

                        <S.NTr>
                            <S.NTd>작성일</S.NTd>
                            <S.NTd>{notice.date}</S.NTd>
                        </S.NTr>

                        <S.NTr>
                            <S.NTd colSpan={"2"}>{notice.contents}</S.NTd>
                        </S.NTr>
                        </>)
                        }
                        
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