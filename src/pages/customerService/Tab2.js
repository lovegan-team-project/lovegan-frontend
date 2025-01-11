import React, { useEffect, useState } from 'react';
import S from './style';
import { Link } from 'react-router-dom';
import Arrow from './Arrow';

const Tab2 = () => {
    const [faq, setFaq] = useState([]);
    const [page, setPage] = useState(1);
    const limit = 13; 
    const offset = (page - 1) * limit;

    // 열림/닫힘 상태를 관리하는 상태 (각 항목의 `no` 기반)
    const [activeItem, setActiveItem] = useState(null);

    useEffect(() => {
        const getFaq = async () => {
            try {
                const response = await fetch("http://localhost:8000/customer/faq");
                console.log(response);
                if (!response.ok) {
                    throw new Error("네트워크 응답이 실패했습니다.");
                }
                const datas = await response.json();
                console.log(datas);

                // no 내림차순
                const sortedData = datas.sort((a,b)=> b.no - a.no);

                setFaq(sortedData);
            } catch (error) {
                console.error("API 호출 오류:", error);
            }
        };
        getFaq();
    }, []);

    const postData = (faq) => {
        if (faq) {
            return faq.slice(offset, offset + limit);
        }
        return [];
    };

    // 토글 함수: 클릭한 항목의 `no`를 저장하거나 초기화
    const toggleAnswer = (no) => {
        setActiveItem((prev) => (prev === no ? null : no));
    };

    return (
        <S.Wrap>
            <S.Div>
                <S.H2>자주하는 질문</S.H2>
                <S.P>고객님들이 가장 자주하시는 질문을 모았습니다.</S.P>
            </S.Div>

            <S.T_wrapper>
                <table className='faqTable'>
                    <thead>
                        <tr>
                            <td>번호</td>
                            <td>제목</td>
                        </tr>
                    </thead>

                    <tbody>
                        {postData(faq).map((item) => (
                            <tr key={item.no} onClick={() => toggleAnswer(item.no)}>
                                <td>{item.no}</td>
                                <td>
                                    <S.faqDiv className={`click ${activeItem === item.no ? 'active' : ''}`}>
                                        {item.title}
                                        <div className="answer">
                                            {item.contents}
                                        </div>
                                    </S.faqDiv>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>

                <S.A_Div>
                    <Arrow limit={limit} page={page} totalPosts={faq.length} setPage={setPage}></Arrow>
                </S.A_Div>
            </S.T_wrapper>
        </S.Wrap>
    );
};

export default Tab2;
