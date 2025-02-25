import React from 'react';
import logo from './icons/lovegan_logo 1.svg';
import kakao from './icons/kakao.svg';
import naver from './icons/naver.svg';
import google from './icons/google.svg';
import S from './style';
import { Navigate, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, setUserStatus } from '../../../modules/user';

const Login = () => {
    const { register, handleSubmit, getValues, formState: {errors, isSubmitted}, trigger} = useForm({mode : "onchange"});

    const navigate = useNavigate();

    const clickToSignUp = () => {
        navigate('/signUp')
    }
    const onSubmit = async (data) => {
        console.log(data)
        try{
            const response = await fetch("http://localhost:8000/user/login", {
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify({
                    email : data.id,
                    password : data.pw
                })
            })
            if(!response.ok){
                alert("아이디 또는 비밀번호를 확인해주세요")
            }
            const res = await response.json();
            console.log("서버 응답 : ", res)
            
            if(res.loginSuccess){
                let {user, accessToken, loginSuccess, message} = res; 
                dispatch(setUser(user))
                dispatch(setUserStatus(true))
                localStorage.setItem("token", accessToken)
                console.log(res.message, "성공 메세지");
                console.log("자동로그인 토큰 저장", accessToken)
            }
            else{
                console.log(res, "로그인 실패")
                console.log(res.message)
                
            }
        }
        catch(error){
            console.error(error)
        }
        
    }
    const clickToMain = () => {
        navigate('/')
    }
    const clickToFindId = () => {
        navigate('/findId')
    }
    const clickToFindPW = () => {
        navigate('/findPW')
    }
    const onInvalid = () => {
        console.log("유효성 검사 실패");
        trigger();
    }

    // 로그인 이후 로직
    const dispatch = useDispatch();
    const isLogin = useSelector((state) => state.user.isLogin);
    const currentUser = useSelector((state) => state.user.currentUser);

    if(isLogin){
        return (
            <>
                <Navigate to={"/"} replace={true}/>
            </>
            
        )
    }

    return (
        <div>
            <S.Form onSubmit={handleSubmit(onSubmit, onInvalid)} >
                <S.Wrapper>
                    <S.Logo src={logo} alt="로고" onClick={clickToMain}/>
                    
                    <div>
                        <S.Login placeholder='아이디를 입력해주세요' id='id' 
                            {...register("id", {
                                required : true,
                            })}
                        />
                        {isSubmitted&&errors?.id?.type === 'required' && (
                        <S.ConfirmMessage>아이디를 입력해주세요.</S.ConfirmMessage>
                        )}

                        <S.Password placeholder='비밀번호를 입력해주세요' id='pw' type='password'
                            {...register("pw", {
                                required : true,
                            })}
                        />
                        {isSubmitted&&errors?.pw?.type === 'required' && (
                        <S.ConfirmMessage>비밀번호를 입력해주세요.</S.ConfirmMessage>
                        )}
                    </div>
                    <S.FoundIdAndPassword>
                        <S.FoundId onClick={clickToFindId}>아이디 찾기</S.FoundId>
                        <S.Line></S.Line>
                        <S.FoundPW onClick={clickToFindPW}>비밀번호 재설정</S.FoundPW>
                    </S.FoundIdAndPassword>

                    <S.Button>
                        <S.LoginButton type='submit'>로그인</S.LoginButton>
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
                                <a href='http://localhost:8000/auth/naver'><img src={naver} />네이버로 시작하기 </a>
                            </div>
                        </S.Naver>
                        <S.Google>
                            <div>
                                <a href='http://localhost:8000/auth/google'><img src={google} />구글로 시작하기</a>
                            </div>
                        </S.Google>
                    </S.Button>
                </S.Wrapper>
            </S.Form>
        </div>
    );
};

export default Login;