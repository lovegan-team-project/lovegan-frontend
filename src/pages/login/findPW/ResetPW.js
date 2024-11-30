import React from 'react';
import S from './style';

const ResetPW = () => {
    return (
        <div>
            <S.Reset>비밀번호 재설정</S.Reset>
            <S.Notice>비밀번호는 3개월마다 변경하시는 것을 권장합니다.</S.Notice>
            <S.Divider></S.Divider>
            <S.ContentWrapper>
                <S.Subtitle>새 비밀번호</S.Subtitle>
                <span>영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.</span>
                <S.NewPWInput type="text" placeholder="새롭게 설정할 비밀번호를 입력해주세요."></S.NewPWInput>
                <S.Subtitle>새 비밀번호 확인</S.Subtitle>
                <S.NewPWInput type="text" placeholder="새 비밀번호 확인"></S.NewPWInput>
            </S.ContentWrapper>
            <S.ResetBtn>완료</S.ResetBtn>
        </div>
    );
};

export default ResetPW;