import React from 'react';
import check from './icons/check.svg'
import S from './style';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    const navigate = useNavigate();

    const clickToMain = () => {
        navigate('/');
    }
    const clickToLogin = () => {
        navigate('/login')
    }
    return (
        <div>
            <S.CompleteIcon>
                <img src={check} />
            </S.CompleteIcon>
            <S.SignUpComplete>회원가입 완료</S.SignUpComplete>
            <S.SignUpCompleteDetail>'닉네임(이메일)'의 회원가입이 성공적으로 완료되었습니다</S.SignUpCompleteDetail>
            <S.SignUpInfo>
                *회원가입 내역 확인 및 수정은&nbsp;<div>마이페이지 {'>'} 설정</div>에서 가능합니다.
            </S.SignUpInfo>
            <S.ClickButton>
                <S.MainButton onClick={clickToMain}>메인으로</S.MainButton>
                <S.LoginButton onClick={clickToLogin}>로그인</S.LoginButton>
            </S.ClickButton>
        </div>
    );
};

export default SignIn;