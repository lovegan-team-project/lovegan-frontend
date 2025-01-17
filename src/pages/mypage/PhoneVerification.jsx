import React, { useState, useEffect } from 'react';
import S from './style.js';
import AS from './accountStyle.js';

const PhoneVerification = ({ initialPhone, email }) => {
    console.log("initialPhone: "+initialPhone);
    console.log("email: " + email);
    const [phone, setPhone] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [isVerifying, setIsVerifying] = useState(false);
    const [verificationCode, setVerificationCode] = useState('');
    const [timer, setTimer] = useState(180); // 3분 타이머
    const [expired, setExpired] = useState(false);
    
    useEffect(() => {
        console.log("Updated phone: " + phone);
        if (initialPhone) {
            setPhone(initialPhone);
            console.log("Phone initialized: " + initialPhone);
        }
    }, [initialPhone]); // phone이 변경될 때마다 로그 출력
    
    console.log("phone: "+phone); 
    useEffect(() => {
        let interval;
        if (isVerifying && timer > 0) {
            interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
        } else if (timer === 0) {
            setExpired(true);
            setIsVerifying(false);
        }
        return () => clearInterval(interval);
    }, [isVerifying, timer]);

    const handleEditPhone = () => {
        setIsEditing(true);
        setIsVerifying(false);
    };

    const handleVerifyPhone = async () => {
        setIsEditing(true);
        setIsVerifying(true);
        setExpired(false);
        setVerificationCode('');
        setTimer(180);
        try {
            const response = await fetch('http://localhost:8000/user/send-verification', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ phoneNumber: phone }),
            });
    
            const data = await response.json();
            if (response.ok) {
                alert('인증번호가 전송되었습니다.');
            } else {
                alert(`오류: ${data.message}`);
            }
        } catch (error) {
            console.error('Error sending verification code:', error);
            alert('인증번호 전송에 실패했습니다.');
        }
    };

    const handleSendVerificationAgain = async () => {
        setTimer(180);
        setExpired(false);
       
    };

    const handleCompleteVerification = async () => {
        if (expired) {
            alert('인증 시간이 만료되었습니다. 인증번호를 다시 요청해 주세요.');
            return;
        }
        try {
            const response = await fetch('http://localhost:8000/user/verify-code', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    phoneNumber: phone,
                    code: verificationCode
                }),
            });
    
            const data = await response.json();
            if (response.ok) {
                alert('인증이 완료되었습니다.');
                setIsEditing(false);
                setIsVerifying(false);
            } else {
                alert(`오류: ${data.message}`);
            }
        } catch (error) {
            console.error('Error verifying code:', error);
            alert('서버 오류로 인증에 실패했습니다.');
    }
    };

    const formatTimer = () => {
        const minutes = Math.floor(timer / 60);
        const seconds = timer % 60;
        return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    };

    return (
        <>
            <AS.InputContainer>
                <div className="top-content">
                    <span className="title">휴대폰 본인 인증</span>
                    {isEditing ? (
                        !isVerifying ? (
                            <button className="save" onClick={handleVerifyPhone}>
                                인증
                            </button>
                        ) : (
                            <button className="save" onClick={handleSendVerificationAgain}>
                                인증번호 재전송
                            </button>
                        )
                    ) : (
                        <button className="modify" onClick={handleEditPhone}>
                            수정
                        </button>
                    )}
                </div>
                <input
                    className={isEditing ? 'unlock' : 'lock'}
                    type="text"
                    value={phone}
                    disabled={!isEditing}
                    onChange={(e) => setPhone(e.target.value)}
                />
            </AS.InputContainer>
            {isVerifying && (
                <AS.InputContainer>
                    <div style={{ position:'relative', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <input
                            className="unlock"
                            type="text"
                            value={verificationCode}
                            placeholder='인증번호 입력'
                            onChange={(e) => setVerificationCode(e.target.value)}
                        />
                        <button style={{position: 'absolute', right: '18px'}} className="verify" onClick={handleCompleteVerification}>
                            인증
                        </button>
                        <span style={{ position: 'absolute', right: '68px', color: '#F25050' }}>{formatTimer()}</span>
                    </div>
                    {expired && <p style={{ color: '#F25050' }}>인증 시간이 만료되었습니다. 인증번호를 다시 요청해 주세요.</p>}
                </AS.InputContainer>
            )}
        </>
    );
};

export default PhoneVerification;
