import React, { useState, useEffect } from 'react';
import S from './style.js';
import AS from './accountStyle.js';
import user from './images/user_default.svg';
import PhoneVerification from './PhoneVerification.jsx';
import { useSelector } from 'react-redux';

const EditableInput = ({ 
    title, 
    value, 
    onSave, 
    editable = false, 
    hideButtons = false, 
    notice, 
    buttonLabel = { edit: "수정", save: "저장" },
    apiUrl
}) => {
    const [inputValue, setInputValue] = useState(value);
    const [isEditing, setIsEditing] = useState(editable);

    const currentUser = useSelector((state) => state.user.currentUser);

    // value가 바뀔 때 inputValue 동기화
    useEffect(() => {
        setInputValue(value);
        // console.log("useEffect 동기화됨: " + value);
    }, [value]); 

    // console.log("전달됨: " + inputValue);
    
    const handleSave = async () => {
        setIsEditing(false);
        if (onSave) {
            try {
                const response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email: currentUser.email,
                        value: inputValue
                    })
                });
                const data = await response.json();
                if (response.ok) {
                    alert(data.message || '변경사항이 저장되었습니다.');
                    onSave(inputValue);
                } else {
                    alert('수정에 실패했습니다.');
                }
            } catch (error) {
                console.Console('error saving', error);
                alert('서버 오류로 저장하지 못했습니다.');
            }
        }
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
    const currentUser = useSelector((state) => state.user.currentUser);
    // console.log(currentUser.phone);

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
                        value={currentUser.nickname}
                        onSave={handleNicknameSave}
                        apiUrl="http://localhost:8000/user/change-nickname"
                    />
                    <EditableInput
                        title="한 줄 소개"
                        value={currentUser.intro}
                        onSave={handleIntroSave}
                        apiUrl="http://localhost:8000/user/change-intro"
                    />
                    <EditableInput
                        title="이메일"
                        value={currentUser.email}
                        hideButtons={true}
                        notice="* 이메일을 변경하시려면 고객센터로 문의해 주세요."
                    />
                    <PhoneVerification initialPhone={currentUser.phone} email={currentUser.email}/>
                </AS.InfoContainer>
            </AS.ProfileContainer>
        </>
    );
};
// 수정
export default AccountInfo;
