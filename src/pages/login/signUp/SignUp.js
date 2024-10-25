import React from 'react';
import logo from './icons/lovegan_logo 1.svg';
import kakao from './icons/kakao.svg';
import naver from './icons/naver.svg';
import google from './icons/google.svg';
import attention from './icons/attention.svg'
import S from './style';
import { useNavigate } from 'react-router-dom';
// import DropDown from '../../../components/dropdown/DropDown';
// import CheckboxButton from '../../../components/checkbox/CheckboxButton';

const SignUp = () => {

    // const emailOptions = [
    //     {value : "kakao", label : "kakao.com"},
    //     {value : "naver", label : "naver.com"},
    //     {value : "google", label : "gmail.com"}
    // ]

    const resendCode = () => {

    }

    const navigate = useNavigate();

    const signUpClick = () => {
        navigate('/signIn');
    }

    const clickToLogin = () => {
        navigate('/login')
    }
    const clickToMain = () => {
        navigate('/')
    }
    return (
        <div>
            
            <S.Wrapper>
                <S.Logo src={logo} alt="로고" onClick={clickToMain}/>
                <S.SignUp>회원가입</S.SignUp>
                <div>
                    <S.Divider></S.Divider>
                    <S.DividerFont>간편 회원가입</S.DividerFont>
                </div>
                <S.Button>
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
                <S.EmailDivider></S.EmailDivider>
                <S.Email>이메일</S.Email>
                <S.EmailContainer>
                    <S.EmailInput placeholder='이메일'></S.EmailInput>
                    @
                    <S.EmailDropDown placeholder='선택해주세요'>
                        {/* <DropDown options={emailOptions}  ></DropDown> */}
                    </S.EmailDropDown>
                </S.EmailContainer>
                <S.EmailButton>이메일 인증하기</S.EmailButton>
                <S.EmailCertifyBox>
                    <div>이메일로 받은 인증코드를 입력해주세요.</div>
                    <S.CertifyCode placeholder='인증코드 6자리'></S.CertifyCode>
                    <S.ReCertifyCode>
                        <img src={attention}/>
                        <S.NoEmail>이메일을 받지 못하셨나요?</S.NoEmail>
                        <S.ResendCode onClick={resendCode}>이메일 재전송하기</S.ResendCode>
                    </S.ReCertifyCode>
                </S.EmailCertifyBox>
                <S.Password>비밀번호</S.Password>
                <S.PasswordInputContainer>
                    영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.
                    <S.PasswordInput placeholder='비밀번호'></S.PasswordInput>
                </S.PasswordInputContainer>

                <S.Password>비밀번호 확인</S.Password>
                <S.PasswordInput placeholder='비밀번호'></S.PasswordInput>

                <S.Nickname>닉네임</S.Nickname>
                <S.NicknameInputContainer>
                    다른 유저와 겹치지 않도록 입력해주세요. (2~20자)
                    <S.NicknameInput placeholder='별명 (2~20자)'></S.NicknameInput>
                </S.NicknameInputContainer>

                <S.Agree>약관 동의</S.Agree>
                <S.AgreeContainer>
                    
                </S.AgreeContainer>
                <S.SignUpButton onClick={signUpClick}>회원가입하기</S.SignUpButton>
                <S.ToLoginContainer>
                    <S.IsHaveId>이미 아이디가 있으신가요?</S.IsHaveId>
                    <S.ToLogin onClick={clickToLogin}>로그인하기</S.ToLogin>
                </S.ToLoginContainer>
            </S.Wrapper>
        </div>
    );
};

export default SignUp;