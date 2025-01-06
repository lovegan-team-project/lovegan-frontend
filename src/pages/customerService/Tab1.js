import React, { useEffect, useState } from 'react';
import S from './style';
import { Link } from 'react-router-dom';
import Arrow from './Arrow';

const Tab1 = () => {
    const [notice,setNotice]= useState([]); // 데이터를 배열에 저장
    const [page,setPage] = useState(1); // 페이지
    const limit = 13; // 한페이지에 보여질 목록
    const offset = (page-1)*limit; //시작점과 끝점을 구하는 offset

    useEffect(()=>{
        // 데이터 받아오는 로직
        const getNotice = async() => {
            try{
                const response = await fetch("http://localhost:8000/customer/notice");
                console.log(response);
                if(!response.ok){
                    throw new Error("네트워크 응답이 실패했습니다.");
                }
                const datas = await response.json();
                console.log(datas)

                // 시간 흐름 역순으로
                const sortedData = datas.sort((a, b) => new Date(b.date) - new Date(a.date));
                setNotice(sortedData);
            }
            catch(error){
                console.error("API 호출 오류:",error);
            }
        }
        getNotice();
    },[])

    const postData = (notice) => {
        if(notice){
            let result = notice.slice(offset,offset+limit);
            return result;
        }
    }
    

    return (
            <S.Wrap>
                <S.Div>
                    <S.H2>공지사항</S.H2>
                    <S.P>Lovegan의 새로운 소식들 유용한 정보들을 한곳에서 확인하세요.</S.P>
                </S.Div>

                <S.T_wrapper>
                    <table>
                        <thead>
                            <tr>
                                <td>번호</td>
                                <td>제목</td>
                                <td>작성자</td>
                                <td>작성일</td>
                            </tr>
                        </thead>

                        <tbody>
                            {postData(notice).map((item)=>(
                                <tr key={item.no}>
                                    <td>{item.no}</td>
                                    <td><Link to={`/customerService/notice/${item.no}`}>{item.title}</Link></td>
                                    <td>{item.writer}</td>
                                    <td>{item.date}</td>
                                </tr>
                            ))}
                            
                        </tbody>
                    </table>

                    <S.A_Div>
                        <Arrow limit={limit} page={page} totalPosts={notice.length} setPage={setPage}></Arrow>
                    </S.A_Div>
                </S.T_wrapper>
            </S.Wrap>
    );
};

export default Tab1;