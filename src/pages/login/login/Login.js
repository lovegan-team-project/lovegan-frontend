import React from 'react';
import logo from './icons/lovegan_logo 1.svg';
import kakao from './icons/kakao.svg';
import naver from './icons/naver.svg';
import google from './icons/google.svg';
import S from './style';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();

    const clickToSignUp = () => {
        navigate('/signUp')
    }
    const completeLogin = () => {
        navigate('/')
    }
    const clickToMain = () => {
        navigate('/')
    }
    return (
        <div>
            <S.Wrapper>
                <S.Logo src={logo} alt="로고" onClick={clickToMain}/>
                
                <div>
                    <S.Login placeholder='아이디를 입력해주세요'></S.Login>
                    <S.Password placeholder='비밀번호를 입력해주세요'></S.Password>
                </div>
                <S.FoundIdAndPassword>
                    <S.FoundId>아이디 찾기</S.FoundId>
                    <S.Line></S.Line>
                    <S.FoundPW>비밀번호 재설정</S.FoundPW>
                </S.FoundIdAndPassword>

                <S.Button>
                    <S.LoginButton onClick={completeLogin}>로그인</S.LoginButton>
                    <S.SignUpButton onClick={clickToSignUp}>회원가입</S.SignUpButton>
                    <div>
                        <S.Divider></S.Divider>
                        <S.DividerFont>간편 로그인/회원가입</S.DividerFont>
                    </div>
                    <S.Kakao>
                        <div>
                            <img src={kakao} />카카오로 시작하기
                        </div>
                    </S.Kakao>
                    <S.Naver>
                        <div>
                            <img src={naver} />네이버로 시작하기 
                        </div>
                    </S.Naver>
                    <S.Google>
                        <div>
                            <img src={google} />구글로 시작하기
                        </div>
                    </S.Google>
                </S.Button>
            </S.Wrapper>
        </div>
    );
};

export default Login;