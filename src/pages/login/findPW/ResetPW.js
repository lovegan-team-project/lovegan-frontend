import React from 'react';
import S from './style';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';

const ResetPW = () => {
    const location = useLocation();
    const { phoneNumber } = location.state || {};

    const { register, handleSubmit, watch, getValues, formState: {errors, isSubmitted}, trigger} = useForm({mode : "onchange"});
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{8,}$/;
    const newPW = watch("newPassword", "");
    const confirmPW = watch("confirmPassword", "");
    const changePassword = async (data) => {
        try{
            const response = await fetch("http://localhost:8000/user/reset-password", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    newPW : data.newPassword, 
                    confirmPW : data.confirmPassword,
                    phoneNumber : phoneNumber
                })

            })
            const res = await response.json();
            console.log("데이터 확인 : ", res)
        }
        catch(error){

        }
    }
    return (
        <S.Wrapper>
            <S.Reset>비밀번호 재설정</S.Reset>
            <S.Notice>비밀번호는 3개월마다 변경하시는 것을 권장합니다.</S.Notice>
            <S.Divider></S.Divider>
            <S.ContentWrapper>
                <S.Subtitle>새 비밀번호</S.Subtitle>
                <span>영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.</span>
                <S.NewPWInput type="text" placeholder="새롭게 설정할 비밀번호를 입력해주세요." id='newPassword' name='newPassword' 
                            {...register("newPassword", {
                                required : true,
                                pattern : {
                                  value : passwordRegex,
                                }
                              })}></S.NewPWInput>
                <S.Subtitle>새 비밀번호 확인</S.Subtitle>
                <S.NewPWInput type="text" placeholder="새 비밀번호 확인" id='confirmPassword' name='confirmPassword' 
                            {...register("confirmPassword", {
                                required : true,
                                pattern : {
                                  value : passwordRegex,
                                }
                              })}></S.NewPWInput>
            </S.ContentWrapper>
            <S.ResetBtn onClick={handleSubmit(changePassword)}>완료</S.ResetBtn>
        </S.Wrapper>
    );
};

export default ResetPW;