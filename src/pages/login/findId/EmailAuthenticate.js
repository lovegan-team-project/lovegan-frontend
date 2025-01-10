import React from 'react';
import S from './style';
import { useNavigate } from 'react-router-dom';

const EmailAuthenticate = () => {
    const navigate = useNavigate();
    const clickToResetPW = () => {
        navigate('/resetPW')
    }
    return (
        <S.Wrapper>
            <S.FindId>비밀번호 재설정</S.FindId>
            <S.PhoneAuthenticate>이메일 인증</S.PhoneAuthenticate>
            <S.Divider></S.Divider>
            <S.ContentWrapper>
                <S.InputTitle>가입하신 이메일</S.InputTitle>
                <S.SubmitWrapper>
                    <S.SubmitInput type='text' placeholder='이메일을 입력해주세요.'></S.SubmitInput>
                    <S.SubmitBtn>인증번호 전송</S.SubmitBtn>
                </S.SubmitWrapper>
                <S.InputTitle>이메일로 받은 인증번호</S.InputTitle>
                <S.SubmitWrapper>
                    <S.SubmitInput type='text' placeholder='인증번호 입력'></S.SubmitInput>
                    <S.SubmitBtn>인증번호 확인</S.SubmitBtn>
                </S.SubmitWrapper>
            </S.ContentWrapper>
            
            <S.FindIdBtn onClick={clickToResetPW}>비밀번호 재설정</S.FindIdBtn>
        </S.Wrapper>
    );
};

export default EmailAuthenticate;