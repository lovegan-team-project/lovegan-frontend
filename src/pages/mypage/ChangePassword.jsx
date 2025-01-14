import React, { useEffect, useState } from 'react';
import S from './style.js';
import { useSelector } from 'react-redux';

const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{8,}$/;

const ChangePassword = () => {
    const currentUser = useSelector((state) => state.user.currentUser);
    const [formData, setFormData] = useState({
        email: "",
        currentPassword: "",
        newPassword: "",
        confirmPassword: ""
    });

    // currentUser가 로딩 완료 후 email 업데이트
    useEffect(() => {
        if (currentUser) {
            setFormData((prev) => ({ ...prev, email: currentUser.email }));
        }
    }, [currentUser]);


    const [errors, setErrors] = useState({
        newPassword: "",
        confirmPassword: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validatePasswords = () => {
        let isValid = true;
        const newErrors = { newPassword: "", confirmPassword: "" };

        // 새 비밀번호 유효성 검사
        if (!passwordRegex.test(formData.newPassword)) {
            newErrors.newPassword = "비밀번호는 최소 8자 이상, 소문자, 숫자, 특수문자(!@#)를 포함해야 합니다.";
            isValid = false;
        }

        // 새 비밀번호와 확인 비밀번호 일치 여부 검사
        if (formData.newPassword !== formData.confirmPassword) {
            newErrors.confirmPassword = "새 비밀번호가 일치하지 않습니다.";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (e) => {
        if (!validatePasswords()) {
            alert("입력한 비밀번호를 다시 확인해주세요.");
            return;
        }

        e.preventDefault();
        try {
            const response = await fetch("http://localhost:8000/user/change-password", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            
            const result = await response.json();
            if (response.ok) {
                alert("비밀번호가 성공적으로 변경되었습니다.");
                
                // ✅ 모든 입력 필드 초기화
                setFormData({
                    email: currentUser.email,
                    currentPassword: "",
                    newPassword: "",
                    confirmPassword: ""
                });
            } else {
                alert(result.message || "비밀번호 변경에 실패했습니다.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("서버 오류가 발생했습니다.");
        }
    };
    

    return (
        <>
            <S.ContentTitle>비밀번호 변경</S.ContentTitle>
            <div style={{marginTop: "20px"}}>
                <p style={{marginBottom: "40px"}}>회원님의 정보를 안전하게 보호하기 위해 현재 비밀번호를 다시 한 번 확인해주세요</p>
                <hr style={{border: "1px solid #d9d9d9", marginBottom: "40px"}}/>
                <S.PasswordTable>
                    <tr>
                        <td className='title'>아이디</td>
                        <td><input type="text" name="email" value={formData.email} readOnly /></td>
                    </tr>
                    <tr>
                        <td className='title'>현재 비밀번호<span>*</span></td>
                        <td><input type="password" value={formData.currentPassword} name="currentPassword" placeholder='현재 비밀번호를 입력해주세요' onChange={handleChange} /></td>
                    </tr>
                    <tr>
                        <td className='title'>새 비밀번호<span>*</span></td>
                        <td>
                            <input type="password" value={formData.newPassword} name="newPassword" placeholder='새 비밀번호를 입력해주세요' onChange={handleChange} />
                            {errors.newPassword && <S.WarningText>{errors.newPassword}</S.WarningText>}
                        </td>
                    </tr>
                    <tr>
                        <td className='title'>새 비밀번호 확인<span>*</span></td>
                        <td>
                            <input type="password" value={formData.confirmPassword} name="confirmPassword" placeholder='새 비밀번호를 다시 입력해주세요' onChange={handleChange} />
                            {errors.confirmPassword && <S.WarningText>{errors.confirmPassword}</S.WarningText>}
                        </td>
                    </tr>
                </S.PasswordTable>
                <div style={{display: 'flex', justifyContent: 'right'}}>
                    <S.PasswordChangeButton onClick={handleSubmit}>확인</S.PasswordChangeButton>
                </div>
            </div>
        </>
    );
};

export default ChangePassword;
