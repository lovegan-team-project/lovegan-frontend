import React from 'react';
import S from './style.js';

const ChangePassword = () => {
    return (
        <>
            <S.ContentTitle>비밀번호 변경</S.ContentTitle>
            <div style={{marginTop: "20px"}}>
                <p style={{marginBottom: "40px"}}>회원님의 정보를 안전하게 보호하기 위해 현재 비밀번호를 다시 한 번 확인해주세요</p>
                <hr style={{border: "1px solid #d9d9d9", marginBottom: "40px"}}/>
                <S.PasswordTable>
                    <tr>
                        <td className='title'>아이디</td>
                        <td><input type="text" value={"cyaein@gmail.com"}/></td>
                    </tr>
                    <tr>
                        <td className='title'>현재 비밀번호<span>*</span></td>
                        <td><input type="password" placeholder='현재 비밀번호를 입력해주세요'/></td>
                    </tr>
                    <tr>
                        <td className='title'>새 비밀번호<span>*</span></td>
                        <td><input type="password" placeholder='새 비밀번호를 입력해주세요'/></td>
                    </tr>
                    <tr>
                        <td className='title'>새 비밀번호 확인<span>*</span></td>
                        <td><input type="password" placeholder='새 비밀번호를 다시 입력해주세요'/></td>
                    </tr>
                </S.PasswordTable>
                <div style={{display: 'flex', justifyContent: 'right'}}>
                    <S.PasswordChangeButton>확인</S.PasswordChangeButton>
                </div>
            </div>
        </>
    );
};

export default ChangePassword;