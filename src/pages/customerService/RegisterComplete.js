import React, { useEffect, useState } from 'react';
import S from './style';
import { Link, useNavigate, useParams } from 'react-router-dom';
import useInput from '../../hooks/useInput';

const RegisterComplete = () => {
    const navigate = useNavigate();

    // 상태관리 변수 -> 의존성 배열 추가
    const [isQuestUpdate,setIsQuestUpdate] = useState(false);

    // edit 상태 관리
    const [isEdit, setIsEdit] = useState(false);

    // edit를 handling하는 함수
    const handleIsEdit = () => {
        setIsEdit(!isEdit);
    }

    const [quest,setQuest] = useState({});
    const {id} = useParams();
    const [value,onchangeValue,setValue] = useInput({ title: '', contents: '' });

    useEffect(()=>{
        const getQuest = async()=>{
            try{
                const response = await fetch("http://localhost:8000/customer/quest")
                // console.log(response)
                if(!response){
                    throw new Error('네트워크 응답이 실패했습니다.');
                }
                const data = await response.json();
                // console.log(data)

                // 데이터를 가져온 후, 해당 id에 맞는 질문을 찾아서 상태에 저장
                const selectedQuest = data.find((item)=> item.no === parseInt(id));

                // 만약 selectedQuest가 있다면
                if (selectedQuest) {
                    setQuest(selectedQuest);
                    
                    // input의 value에 저장
                    setValue({
                        title: selectedQuest.title,
                        contents: selectedQuest.contents,
                    });
                }
            }
            catch(error){
                console.error('Api호출 오류',error);
            }
        }
        getQuest();
    },[id,isQuestUpdate]);
    // id와 isQuestUpdate의 상태가 바뀔때마다 다시 가져옴

    // 수정하는 함수
    const handleIsUpdate = async() => {
        try{
            await fetch("http://localhost:8000/customer/update",{
                method:"PUT",
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    ...value,
                    title: value.title,
                    contents: value.contents,
                    no: quest.no
                })
            }
                
            );
            
            
        }
        catch(error){
            console.log("API호출 오류:",error)
        }
    };

    
    // 삭제하는 함수
    const handleIsRemove = async() => {
        if(window.confirm("정말 삭제하시겠습니까?")){
            await fetch("http://localhost:8000/customer/delete",{
                method: "DELETE",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({
                    no: quest.no
                })
            })
            .then((res)=>{
                console.log("리스폰스 받기",res);
                if(res.ok){
                    setIsQuestUpdate(!isQuestUpdate);
                    navigate("/customerService/quest");
                }
            }
            )
            .catch((error)=>console.error("삭제요청 오류:", error));
        }
    };

    


    return (
        <div>
            <S.NoticeWrapper>
                <h1>1:1 문의</h1>
                <p>궁금하신 점을 마음껏 물어보세요.</p>

                <S.NTable>
                    <S.NTbody>
                        {quest && (
                            <>
                                <S.NTr>
                                    <S.NTd>번호</S.NTd>
                                    <S.NTd>{quest.no}</S.NTd>
                                </S.NTr>

                                <S.NTr>
                                    <S.NTd>제목</S.NTd>
                                    {isEdit ? (<S.NTd><input style={{width:"100%"}}className='update_title' type='text' value={value.title} onChange={onchangeValue}/></S.NTd>) : (<S.NTd>{quest.title}</S.NTd>)}
                                    
                                </S.NTr>

                                <S.NTr>
                                    <S.NTd>작성자</S.NTd>
                                    <S.NTd>{quest.writer}</S.NTd>
                                </S.NTr>

                                <S.NTr>
                                    <S.NTd>작성일</S.NTd>
                                    <S.NTd>{quest.date}</S.NTd>
                                </S.NTr>

                                <S.NTr>
                                    {isEdit ? (<S.NTd colSpan={"2"}><textarea className='update_contents' style={{width: "100%",height:"550px",marginTop:"20px",marginLeft:"-10px",padding: "10px",border:"none"}} type='text' value={value.contents} onChange={onchangeValue}/></S.NTd>) : (<S.NTd colSpan={"2"}>{quest.contents}</S.NTd>)}
                                    
                                </S.NTr>
                            </>
                        )}
                    </S.NTbody>
                </S.NTable>

                {isEdit ? (<S.BDiv>
                    <S.NButton onClick={handleIsUpdate} className='modi' style={{float:"left"}}>확인</S.NButton>
                    <S.NButton onClick={handleIsEdit} className='del' style={{float:"left", marginLeft: "10px"}}>취소</S.NButton>
                    <Link to="/customerService/quest"><S.NButton>목록</S.NButton></Link>
                </S.BDiv>) : (
                    <S.BDiv>
                    <S.NButton onClick={handleIsEdit} className='modi' style={{float:"left"}}>수정</S.NButton>
                    <S.NButton onClick={handleIsRemove} className='del' style={{float:"left", marginLeft: "10px"}}>삭제</S.NButton>
                    <Link to="/customerService/quest"><S.NButton>목록</S.NButton></Link>
                </S.BDiv>
                )}


                

                
            </S.NoticeWrapper>
        </div>
    );
};

export default RegisterComplete;