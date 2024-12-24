import React, { useState } from 'react';
import S from './style';
import UserImg2 from './image/UserImg2.png';

// parentId=null, onReply
const CommentForm = ( {addList, parentId=null, addReply} ) => {
    const [value, setValue] = useState('');
    
    // const now = new Date();   

    const handleChange  = (e) => {
        setValue(e.target.value);   
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(value.trim()) {
            // 현재 작성 시간을 동적으로 생성
            // const writeDate = new Date();
            const newComment = {
                id: Date.now(),
                userid: '유저 닉네임',
                content: value, // 입력한 댓글 내용
                date: new Date().toISOString(),
                updateFlag: true,
                // 대댓글 저장 배열
                replies: [],
            };

            if(parentId) {
                addReply(parentId, newComment);
            } else {
                addList(newComment);
            }

            // console.log(`작성 시간: ${writeDate}`);
            setValue('');
            console.log('Parent ID:', parentId);
            console.log('addReply Function:', addReply);
            console.log('New Comment:', newComment);
        }
    }
    
    return (
        <S.typing>
            <img src={UserImg2} alt='유저프로필' />
            <form onSubmit={handleSubmit}>
                <span className='box'>
                    <input 
                        type="text"
                        className='int'
                        placeholder={
                            parentId 
                            ? '대댓글 입력' 
                            : '칭찬과 격려의 댓글은 작성자에게 큰 힘이 됩니다 :)'}
                        onChange={handleChange}
                        value={value}
                    />
                </span>
                <button type="submit" className='submitBt' disabled={!value.trim()}>
                    입력
                </button>
            </form>
        </S.typing>
    );
};

export default CommentForm;