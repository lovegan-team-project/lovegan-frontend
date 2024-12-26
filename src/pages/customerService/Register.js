import React from 'react';
import S from './style';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';


const Register = () => {
    const { register, handleSubmit, getValues, formState: { isSubmitted, isSubmitting, errors}} = useForm({mode : "onchange"});
    return (
        <>
            <S.NoticeWrapper>
                <h1>1:1 문의</h1>
                <p>궁금하신 점을 마음껏 물어보세요.</p>
                <form onSubmit={handleSubmit}>
                    <S.NButton style={{marginLeft:"1292px"}}>등록하기</S.NButton>

                    <S.NTable>
                        <S.NTbody>
                            <S.NTr>
                                <S.NTd>번호</S.NTd>
                                <S.NTd>13</S.NTd>
                            </S.NTr>

                            <S.NTr>
                                <S.NTd>제목</S.NTd>
                                <S.NTd><input style={{width: "90%"}} type='text' placeholder='제목을 작성해주세요.'></input></S.NTd>
                            </S.NTr>

                            <S.NTr>
                                <S.NTd>작성자</S.NTd>
                                <S.NTd>비건사랑</S.NTd>
                            </S.NTr>

                            <S.NTr>
                                <S.NTd colSpan={"2"}><textarea style={{width: "100%",height:"550px",marginTop:"20px",marginLeft:"-10px",padding: "10px",border:"none"}}placeholder="내용을 작성해주세요."></textarea></S.NTd>
                            </S.NTr>
                        </S.NTbody>
                    </S.NTable>
                </form>
            </S.NoticeWrapper>
        </>
    );
};

export default Register;