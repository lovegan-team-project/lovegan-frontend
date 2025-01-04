import React, { useEffect, useState } from 'react';
import S from './style';
import { Link } from 'react-router-dom';
import Arrow from './Arrow';

const Tab1 = () => {
    const [notice,setNotice]= useState([]);

    useEffect(()=>{
        const getNotice = async() => {
            try{
                const response = await fetch("http://localhost:8000/customer/notice");
                console.log(response)
                if(!response.ok){
                    throw new Error("네트워크 응답이 실패했습니다.");
                }
                const datas = await response.json();
                console.log(datas)
                setNotice(datas);
            }
            catch(error){
                console.error("API 호출 오류:",error);
            }
        }
        getNotice();
    },[])
    

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
                            {notice.map((item)=>(
                                <tr key={item.no}>
                                    <td>{item.no}</td>
                                    <td><Link to={`/customer/notice/${item.no}`}>{item.title}</Link></td>
                                    <td>{item.writer}</td>
                                    <td>{item.date}</td>
                                </tr>
                            ))}
                            
                        </tbody>
                    </table>

                    <S.A_Div>
                        <Arrow></Arrow>
                    </S.A_Div>
                </S.T_wrapper>
            </S.Wrap>
    );
};

export default Tab1;