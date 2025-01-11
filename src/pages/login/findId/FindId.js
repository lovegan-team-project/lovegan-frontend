import React from 'react';
import S from './style';

const FindId = () => {

    
    return (
        <S.Wrapper>
            <S.FindId>아이디 찾기</S.FindId>
            <S.PhoneAuthenticate>휴대폰 인증</S.PhoneAuthenticate>
            <S.Divider></S.Divider>
            <S.ContentWrapper>
                <S.InputTitle>가입하신 전화번호</S.InputTitle>
                <S.SubmitWrapper>
                    <S.SubmitInput type='text' placeholder='전화번호를 입력해주세요. ( - 제외)'></S.SubmitInput>
                    <S.SubmitBtn>인증번호 전송</S.SubmitBtn>
                </S.SubmitWrapper>
                <S.InputTitle>문자로 받은 인증번호</S.InputTitle>
                <S.SubmitWrapper>
                    <S.SubmitInput type='text' placeholder='인증번호 입력'></S.SubmitInput>
                    <S.SubmitBtn>인증번호 확인</S.SubmitBtn>
                </S.SubmitWrapper>
            </S.ContentWrapper>
            
            <S.FindIdBtn>아이디 찾기</S.FindIdBtn>
        </S.Wrapper>
    );
};

export default FindId;