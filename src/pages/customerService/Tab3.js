import React, { useEffect, useState } from 'react';
import S from './style';
import { Link } from 'react-router-dom';
import BasicButton from '../../components/button/BasicButton';
import Arrow from './Arrow';

const Tab3 = () => {
    const [quest,setQuest] = useState([]);
    const [page,setPage] = useState(1);
    const limit = 13;
    const offset = (page-1)*limit;

    useEffect(()=> {
        const getQuest = async()=> {
            try{
                const response = await fetch("http://localhost:8000/customer/quest");
                console.log(response)
                if(!response){
                    throw new Error("네트워크 응답이 실패하였습니다.")
                }

                const datas = await response.json();
                console.log(datas)
                
                const sortedData = datas.sort((a,b)=> b.no - a.no);
                setQuest(sortedData);
            }
            catch(error){
                console.error("Api호출 오류",error);
            }
        }

        getQuest()
    },[])

    const postData = (quest) => {
        if(quest){
            // 페이지에 해당하는 개수 slice함
            let result = quest.slice(offset,offset+limit);
            return result;
        }
    }


    // onClick시 버튼 색 변경
    const [clickColor,setClickColor] = useState("color");

    useEffect(()=>{
        setClickColor("color")
    },[setClickColor])

    return (
            <S.Wrap>
                <S.Div>
                    <S.H2>1:1 문의</S.H2>
                    <S.P>고객님의 문의사항을 남겨주세요.</S.P>
                    <Link to="/customerService/quest/register"><S.C_Button className={clickColor === "color" ? "active" : ""} onClick={()=>{setClickColor("color")}}>글 작성</S.C_Button></Link>
                    
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
                            {postData(quest).map((item)=>(
                                <tr key={item.no}>
                                    <td>{item.no}</td>
                                    <td><Link to={`/customerService/quest/${item.no}`}>{item.title}</Link></td>
                                    <td>{item.writer}</td>
                                    <td>{item.date}</td>
                                </tr>
                            ))}
                            
                        </tbody>
                    </table>

                    <S.A_Div>
                        <Arrow limit={limit} page={page} totalPosts={quest.length} setPage={setPage}></Arrow>
                    </S.A_Div>
                </S.T_wrapper>

            </S.Wrap>
    );
};

export default Tab3;