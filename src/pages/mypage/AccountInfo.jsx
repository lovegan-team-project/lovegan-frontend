import React from 'react';
import S from './style.js';
import AS from './accountStyle.js';
import user from './images/user_default.svg';

const AccountInfo = () => {
    return (
        <>
            <S.ContentTitle>회원정보 수정</S.ContentTitle>
            <AS.ProfileContainer>
                <div>
                    <AS.ProfileImageWrapper>
                        <AS.ProfileImage src={user} alt="유저 프로필" />
                    </AS.ProfileImageWrapper>
                    <div style={{width: "100%", display: "flex", justifyContent: "center", marginTop: "10px"}}>
                        <S.SmallButton>프로필 사진 변경</S.SmallButton>
                    </div>
                </div>
                <AS.InfoContainer>
                    <AS.LoginInfoWrapper>
                        <span className='title'>로그인 방식</span><span className='sub'>일반/카카오/구글/네이버</span>
                    </AS.LoginInfoWrapper>
                    <AS.Notice>* 저장하지 않으면 수정사항이 반영되지 않습니다.</AS.Notice>
                    <AS.InputContainer>
                        <div className='top-content'><span className='title'>닉네임</span><button className='modify'>수정</button></div>
                        <input className='lock' type="text" value="조용한라이프"/>
                    </AS.InputContainer>
                    <AS.InputContainer>
                        <div className='top-content'><span className='title'>한 줄 소개</span><button className='save'>저장</button></div>
                        <input className='unlock' type="text" value="조용한라이프"/>
                    </AS.InputContainer>
                    <AS.InputContainer>
                        <div className='top-content'><span className='title'>이메일</span></div>
                        <input className='lock' type="text" value="cyaein@gmail.com"/>
                        <p>* 이메일을 변경하시려면 고객센터로 문의해 주세요.</p>
                    </AS.InputContainer>
                    <AS.InputContainer>
                        <div className='top-content'><span className='title'>휴대폰 본인 인증</span><button className='modify'>수정</button></div>
                        <input className='lock' type="text" value="01093400031"/>
                    </AS.InputContainer>
                </AS.InfoContainer>
            </AS.ProfileContainer>
        </>
    );
};

export default AccountInfo;