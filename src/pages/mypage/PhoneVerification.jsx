import React, { useState, useEffect } from 'react';
import S from './style.js';
import AS from './accountStyle.js';

const PhoneVerification = ({ initialPhone }) => {
    const [phone, setPhone] = useState(initialPhone);
    const [isEditing, setIsEditing] = useState(false);
    const [isVerifying, setIsVerifying] = useState(false);
    const [verificationCode, setVerificationCode] = useState('');
    const [timer, setTimer] = useState(180); // 3분 타이머
    const [expired, setExpired] = useState(false);

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

    const handleVerifyPhone = () => {
        setIsEditing(true);
        setIsVerifying(true);
        setExpired(false);
        setVerificationCode('');
        setTimer(180);
        alert('인증번호가 전송되었습니다.');
    };

    const handleSendVerificationAgain = () => {
        setTimer(180);
        setExpired(false);
        alert('인증번호가 재전송되었습니다.');
    };

    const handleCompleteVerification = () => {
        if (expired) {
            alert('인증 시간이 만료되었습니다. 인증번호를 다시 요청해 주세요.');
            return;
        }
        alert('인증이 완료되었습니다.');
        setIsEditing(false);
        setIsVerifying(false);
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
