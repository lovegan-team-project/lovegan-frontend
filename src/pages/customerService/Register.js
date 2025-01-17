import React from 'react';
import S from './style';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useInput from '../../hooks/useInput';
import { useDispatch, useSelector } from 'react-redux';


const Register = () => {
    const { register, handleSubmit, getValues, formState: { isSubmitted, isSubmitting, errors}} = useForm({mode : "onchange"});

    const previousUrl = useSelector((state) => state.user.previousUrl);
    const currentUser = useSelector((state) => state.user.currentUser);
    const isLogin = useSelector((state) => state.user.isLogin);

    const dispatch = useDispatch();

    const [value,onChangeValue,setValue] = useInput();

    // 정규식
    const titleRegex = /^.{10,}$/;
    const contentsRegex = /^.{10,}$/;

    const navigate = useNavigate();
    
    console.log(currentUser);

    return (
        <>
            <S.NoticeWrapper>
                <h1>1:1 문의</h1>
                <p>궁금하신 점을 마음껏 물어보세요.</p>
                <form className='noticeForm' onSubmit={handleSubmit(async(data)=>{
                        const latestNo = data.length > 0 ? Math.max(...data.map(item => item.no)) : 0;
                        const newNo = latestNo + 1;
                        if(window.confirm("등록하시겠습니까?")){
                            await fetch("http://localhost:8000/customer/form",{
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                no: newNo,
                                title: data.title,
                                writer: currentUser.nickname,
                                contents: data.contents,
                            })
                        })
                        .then((res)=>res.json())
                        .then((res)=>{
                            if(res.registerSuccess){
                                    navigate("/customerService/quest")
                                }
                                else{
                                    alert("등록에 실패하였습니다.")
                                }
                        })
                        }
                        

                    })}>
                    <S.NButton style={{marginLeft:"1292px"}}>등록하기</S.NButton>

                    <S.NTable>
                        <S.NTbody>

                            <S.NTr>
                                <S.NTd>제목</S.NTd>
                                <S.NTd><input name='title' style={{width: "90%"}} type='text' placeholder='제목을 작성해주세요.' 
                                {...register("title",{
                                    required: true,
                                    pattern: {
                                        value: titleRegex,
                                    }
                                })}
                                />
                                {errors?.title?.type === 'required' && (
                                    <p className='confirmMessage'>제목을 입력해주세요.</p>
                                )}
                                {errors?.title?.type === 'pattern' && (
                                    <p className='confirmMessage'>제목을 10글자 이상 입력해주세요.</p>
                                )}
                                </S.NTd>
                            </S.NTr>

                            <S.NTr>
                                <S.NTd>작성자</S.NTd>
                                <S.NTd>{currentUser.nickname}</S.NTd>
                            </S.NTr>

                            <S.NTr>
                                <S.NTd colSpan={"2"}><textarea name='contents' style={{width: "100%",height:"550px",marginTop:"20px",marginLeft:"-10px",padding: "10px",border:"none"}}placeholder="내용을 작성해주세요."
                                {...register("contents",{
                                    required: true,
                                    pattern:{
                                        value: contentsRegex,
                                    }
                                })}
                                />
                                {errors?.contents?.type === 'required' && (
                                    <p className='confirmMessage'>내용을 입력해주세요.</p>
                                )}
                                {errors?.contents?.type === 'pattern' && (
                                    <p className='confirmMessage'>내용을 10글자 이상 입력해주세요.</p>
                                )}
                                </S.NTd>
                            </S.NTr>
                        </S.NTbody>
                    </S.NTable>
                </form>
            </S.NoticeWrapper>
        </>
    );
};

export default Register;