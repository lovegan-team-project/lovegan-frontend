import React, { useState, useEffect } from 'react';
import S from './style.js';
import AS from './accountStyle.js';
import user from './images/user_default.svg';
import PhoneVerification from './PhoneVerification.jsx';

const EditableInput = ({ 
    title, 
    value, 
    onSave, 
    editable = false, 
    hideButtons = false, 
    notice, 
    buttonLabel = { edit: "수정", save: "저장" },
}) => {
    const [inputValue, setInputValue] = useState(value);
    const [isEditing, setIsEditing] = useState(editable);

    const handleSave = () => {
        setIsEditing(false);
        if (onSave) onSave(inputValue);
    };

    return (
        <AS.InputContainer>
            <div className="top-content">
                <span className="title">{title}</span>
                {!hideButtons && (
                    isEditing ? (
                        <button className="save" onClick={handleSave}>{buttonLabel.save}</button>
                    ) : (
                        <button className="modify" onClick={() => setIsEditing(true)}>{buttonLabel.edit}</button>
                    )
                )}
            </div>
            <input
                className={isEditing ? 'unlock' : 'lock'}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                disabled={!isEditing}
            />
            {notice && <p>{notice}</p>}
        </AS.InputContainer>
    );
};

const AccountInfo = () => {
    const handleNicknameSave = (newNickname) => {
        console.log('Saved Nickname:', newNickname);
    };

    const handleIntroSave = (newIntro) => {
        console.log('Saved Intro:', newIntro);
    };

    return (
        <>
            <S.ContentTitle>회원정보 수정</S.ContentTitle>
            <AS.ProfileContainer>
                <div>
                    <AS.ProfileImageWrapper>
                        <AS.ProfileImage src={user} alt="유저 프로필" />
                    </AS.ProfileImageWrapper>
                    <div style={{ width: "100%", display: "flex", justifyContent: "center", marginTop: "10px" }}>
                        <S.SmallButton>프로필 사진 변경</S.SmallButton>
                    </div>
                </div>
                <AS.InfoContainer>
                    <AS.LoginInfoWrapper>
                        <span className="title">로그인 방식</span>
                        <span className="sub">일반/카카오/구글/네이버</span>
                    </AS.LoginInfoWrapper>
                    <AS.Notice>* 저장하지 않으면 수정사항이 반영되지 않습니다.</AS.Notice>
                    <EditableInput
                        title="닉네임"
                        value="조용한라이프"
                        onSave={handleNicknameSave}
                    />
                    <EditableInput
                        title="한 줄 소개"
                        value="여행과 책을 좋아하는 개발자"
                        onSave={handleIntroSave}
                    />
                    <EditableInput
                        title="이메일"
                        value="cyaein@gmail.com"
                        hideButtons={true}
                        notice="* 이메일을 변경하시려면 고객센터로 문의해 주세요."
                    />
                    <PhoneVerification initialPhone="01093400031" />
                </AS.InfoContainer>
            </AS.ProfileContainer>
        </>
    );
};

export default AccountInfo;
