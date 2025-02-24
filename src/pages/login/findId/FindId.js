import React, { useState } from 'react';
import S from './style';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const FindId = () => {

    const { register, handleSubmit, watch, getValues, formState: {errors, isSubmitted}, trigger} = useForm({mode : "onchange"});

    const navigate = useNavigate();

    const phoneNumber = watch("phone", "");
    const [code, setCode] = useState("");
    const [isCodeSent, setIsCodeSent] = useState(false);
    const [isVerified, setIsVerified] = useState(false);
    const [timer, setTimer] = useState(180);
    const [isFindId, setIsfindId] = useState(false);
    const [email, setEmail] = useState("");

    const formatTimer = () => {
        const minutes = Math.floor(timer / 60);
        const seconds = timer % 60;
        return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    };

    const requestCode = async () => {
        console.log("전화번호", phoneNumber)
        try{
            const response = await fetch("http://localhost:8000/user/findId", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({phoneNumber})

            })
            const res = await response.json();
            console.log("응답 : ", res);
            if(res.success){
                console.log("아이디 찾기 성공")
                try {
                    const response = await fetch("http://localhost:8000/user/send-verification", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ phoneNumber, email : res.email })
                    });
        
                    const data = await response.json();
                    console.log("이메일", data.email)
                    if (data.success) {
                        alert("인증번호가 전송되었습니다.");
                        setIsCodeSent(true);
                        setEmail(data.email)
                    } else {
                        alert("인증번호 전송 실패: " + data.message);
                    }
                } catch (error) {
                    console.error("인증번호 요청 오류:", error);
                    alert("서버 오류 발생");
                }
            }
            else{
                alert(res.message);
            }
        }
        catch(error){
            console.error("전화번호 찾기 오류 : ", error);
            alert("서버 오류 발생")
        }
        
    }
    const verifyCode = async () => {
        console.log("전송할 데이터 : ", {phoneNumber, code})
        try {
            const response = await fetch("http://localhost:8000/user/signup-verify-code", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ phoneNumber, code: code.toString().trim() })
            });

            const data = await response.json();
            if (data.success) {
                alert("인증 성공!");
                setIsVerified(true);
            } else {
                alert("인증 실패: " + data.message);
            }
        } catch (error) {
            console.error("인증번호 검증 오류:", error);
            alert("서버 오류 발생");
        }
    }

    const clickFindIdBtn = () => {
        if(isVerified){
            setIsfindId(true)
        }
    }

    const clickToLogin = () => {
        navigate('/login')
    }

    const clickToFindPW = () => {
        navigate('/findPW')
    }
    
    return (
        <S.Wrapper>
            <S.FindId>아이디 찾기</S.FindId>
                { !isFindId && (
                    <>
                    <S.PhoneAuthenticate>휴대폰 인증</S.PhoneAuthenticate>
                    <S.Divider></S.Divider>
                    <S.ContentWrapper>
                        <S.InputTitle>가입하신 전화번호</S.InputTitle>
                        <S.SubmitWrapper>
                            <S.SubmitInput type='text' placeholder='전화번호를 입력해주세요. ( - 제외)' id='phone' 
                                    {...register("phone", {
                                        required : true,
                                        pattern : {
                                            value : /^\d{10,11}$/
                                        }
                                    })} />
                            <S.SubmitBtn onClick={requestCode} disabled={isCodeSent}>인증번호 전송</S.SubmitBtn>
                        </S.SubmitWrapper>
                        <S.InputTitle>문자로 받은 인증번호</S.InputTitle>
                        <S.SubmitWrapper>
                            <S.SubmitInput type='text' placeholder='인증번호 입력' value = {code} onChange={(e) => setCode(e.target.value)}></S.SubmitInput>
                            <S.SubmitBtn onClick={verifyCode}>인증번호 확인</S.SubmitBtn>
                        </S.SubmitWrapper>
                    </S.ContentWrapper>
                    <S.FindIdBtn isVerified={isVerified} onClick={clickFindIdBtn}>아이디 찾기</S.FindIdBtn>
                    </>
                    
                )}
                { isFindId && (
                    <>
                    <S.PhoneAuthenticate>아이디</S.PhoneAuthenticate>
                    <S.Divider></S.Divider>
                    <S.ContentWrapper>
                        <S.IdContainer>{email}</S.IdContainer>
                    </S.ContentWrapper>
                    <S.ButtonContainer>
                        <S.Btn onClick={clickToLogin}>로그인</S.Btn>
                        <S.Btn onClick={clickToFindPW}>비밀번호 찾기</S.Btn>
                    </S.ButtonContainer>
                    
                    </>
                )}  
        </S.Wrapper>
    );
};

export default FindId;