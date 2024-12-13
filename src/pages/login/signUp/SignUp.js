import React, { useState } from 'react';
import logo from './icons/lovegan_logo 1.svg';
import kakao from './icons/kakao.svg';
import naver from './icons/naver.svg';
import google from './icons/google.svg';
import attention from './icons/attention.svg';
import right from './icons/right.svg';
import S from './style';
import { useNavigate } from 'react-router-dom';
import CheckboxButton from '../../../components/checkbox/CheckboxButton';
import { useForm } from 'react-hook-form';


const SignUp = () => {

    // react-hook-form
    const { register, handleSubmit, getValues, formState: {errors}} = useForm({mode : "onchange"});

    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{8,}$/;

    const resendCode = () => {

    }

    const navigate = useNavigate();

    const signUpClick = () => {
        
    }

    const clickToLogin = () => {
        navigate('/login')
    }
    const clickToMain = () => {
        navigate('/')
    }

    const [allChecked, setAllChecked] = useState(false);
    const [isChecked, setIsChecked] = useState({
        age : false,
        terms : false,
        privacy : false,
        marketing : false,
        sms : false
    })
    const handleAllChecked = () => {
        setAllChecked(!allChecked);
        setIsChecked({
            age : !allChecked,
            terms : !allChecked,
            privacy : !allChecked,
            marketing : !allChecked,
            sms : !allChecked
        })
    }
    const handleEachChecked = (key) => {
        const updatedChecked = { ...isChecked, [key]: !isChecked[key] };
        setIsChecked(updatedChecked); 
        setAllChecked(Object.values(updatedChecked).every((value) => value));
    };
    
    return (
        <div>
            <S.Form onSubmit={handleSubmit((data) => {
                if (!isChecked.age || !isChecked.terms || !isChecked.privacy) {
                    alert("필수 항목을 동의해주세요");
                    return;
                }
                console.log("회원가입 데이터 : ", data)
                navigate('/signIn');
            })}>
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
                        <S.EmailInput placeholder='이메일' id='email' name='email' type='text'
                            {...register("email", {
                                required : true,
                            })}
                        />
                        @
                        <S.EmailDropDown defaultValue="default">
                            <option value="default" disabled hidden>선택해주세요</option>
                            <option value="네이버">naver.com</option>
                            <option value="구글">google.com</option>
                            <option value="카카오">kakao.com</option>
                        </S.EmailDropDown>
                        {errors?.email?.type === 'required' && (
                            <S.ConfirmMessage>비밀번호를 입력해주세요.</S.ConfirmMessage>
                        )}
                    </S.EmailContainer>
                    <S.EmailButton>이메일 인증하기</S.EmailButton>
                    <S.EmailCertifyBox>
                        <div>이메일로 받은 인증코드를 입력해주세요.</div>
                        <S.CertifyCodeContainer>
                            <S.CertifyCode placeholder='인증코드 6자리'></S.CertifyCode>
                            <S.EmailConfirm>확인</S.EmailConfirm>
                        </S.CertifyCodeContainer>
                        <S.ReCertifyCode>
                            <img src={attention}/>
                            <S.NoEmail>이메일을 받지 못하셨나요?</S.NoEmail>
                            <S.ResendCode onClick={resendCode}>이메일 재전송하기</S.ResendCode>
                        </S.ReCertifyCode>

                    </S.EmailCertifyBox>
                    <S.Email>전화번호</S.Email>
                    <S.EmailContainer>
                        <S.PhoneInput placeholder='전화번호'></S.PhoneInput>
                        
                    </S.EmailContainer>
                    <S.EmailButton>전화번호 인증하기</S.EmailButton>
                    <S.EmailCertifyBox>
                        <div>문자로 받은 인증코드를 입력해주세요.</div>
                        <S.CertifyCodeContainer>
                            <S.CertifyCode placeholder='인증코드 6자리'></S.CertifyCode>
                            <S.EmailConfirm>확인</S.EmailConfirm>
                        </S.CertifyCodeContainer>
                        <S.ReCertifyCode>
                            <img src={attention}/>
                            <S.NoEmail>문자를 받지 못하셨나요?</S.NoEmail>
                            <S.ResendCode onClick={resendCode}>문자 재전송하기</S.ResendCode>
                        </S.ReCertifyCode>
                    </S.EmailCertifyBox>
                    <S.Password>비밀번호</S.Password>
                    <S.PasswordInputContainer>
                        영문, 숫자, 기호(*!@#)를 포함한 8자 이상의 비밀번호를 입력해주세요.
                        <S.PasswordInput placeholder='비밀번호' type='password' id='password' name='password' 
                            {...register("password", {
                                required : true,
                                pattern : {
                                  value : passwordRegex,
                                }
                              })}
                        />
                        {errors?.password?.type === 'required' && (
                            <S.ConfirmMessage>비밀번호를 입력해주세요.</S.ConfirmMessage>
                        )}
                        {errors?.password?.type === 'pattern' && (
                            <S.ConfirmMessage>소문자, 숫자, 특수문자 각 하나씩 포함한 8자리 이상이여야 합니다. *!@#만 사용가능</S.ConfirmMessage>
                        )}
                    </S.PasswordInputContainer>

                    <S.Password>비밀번호 확인</S.Password>
                    <S.PasswordInput placeholder='비밀번호' type='password'
                        {...register("passwordConfirm", {
                            required : true,
                            validate : {
                              matchPassword : (value) => {
                                  const { password } = getValues();
                                  let isMatch = password == value;
                                  console.log(value, password, isMatch);
                                  return isMatch;
                              }
                            }
                          })}
                    />
                    {errors?.passwordConfirm && (
                        <S.ConfirmMessage>비밀번호를 확인해주세요.</S.ConfirmMessage>
                    )}

                    <S.Nickname>닉네임</S.Nickname>
                    <S.NicknameInputContainer>
                        다른 유저와 겹치지 않도록 입력해주세요. (2~20자)
                        <S.NicknameInput placeholder='별명 (2~20자)'></S.NicknameInput>
                    </S.NicknameInputContainer>

                    <S.Agree>약관 동의</S.Agree>
                    <S.AgreeContainer>
                        <S.AllAgree>
                            <label>
                                <input type="checkbox" checked={allChecked} onChange={handleAllChecked}/>전체동의
                                <span>선택항목에 대한 동의 포함</span>
                            </label>
                        </S.AllAgree>
                        <S.AgreeDivider></S.AgreeDivider>
                        <S.EachAgree>
                            <S.AgreeLabel>
                                <input type="checkbox" checked={isChecked.age} onChange={()=>handleEachChecked('age')} required />만 14세 이상입니다
                                <S.Required>(필수)</S.Required>
                            </S.AgreeLabel>
                            <S.AgreeLabel>
                                <input type="checkbox" checked={isChecked.terms} onChange={()=>handleEachChecked('terms')} required/>이용약관
                                <S.Required>(필수)</S.Required>
                                <img src={right} />
                            </S.AgreeLabel>
                            <S.AgreeLabel>
                                <input type="checkbox" checked={isChecked.privacy} onChange={()=>handleEachChecked('privacy')} required/>개인정보수집 및 이용동의
                                <S.Required>(필수)</S.Required>
                                <img src={right} />
                            </S.AgreeLabel>
                            <S.AgreeLabel>
                                <input type="checkbox" checked={isChecked.marketing} onChange={()=>handleEachChecked('marketing')} />개인정보 마케팅 활용 동의
                                <S.Option>(선택)</S.Option>
                                <img src={right} />
                            </S.AgreeLabel>
                            <S.AgreeLabel>
                                <input type="checkbox" checked={isChecked.sms} onChange={()=>handleEachChecked('sms')} />이벤트, 쿠폰 및 SMS 등 수신
                                <S.Option>(선택)</S.Option>
                            </S.AgreeLabel>
                            {/* <CheckboxButton variant={"white"} shape={"round"} boxSize={"size"} checked={"isChecked"} onChange={"handleCheckedBoxChange"} checkColor={"checkColor"} />
                                만 14세 이상입니다. */}
                            
                            
                        </S.EachAgree>
                    </S.AgreeContainer>
                    <S.SignUpButton type="submit" onClick={signUpClick}>회원가입하기</S.SignUpButton>
                    <S.ToLoginContainer>
                        <S.IsHaveId>이미 아이디가 있으신가요?</S.IsHaveId>
                        <S.ToLogin onClick={clickToLogin}>로그인하기</S.ToLogin>
                    </S.ToLoginContainer>
                </S.Wrapper>
            </S.Form>
            
        </div>
    );
};

export default SignUp;