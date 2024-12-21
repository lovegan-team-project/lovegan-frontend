import React, { useState } from 'react';
import S from './style';
import UserImg2 from './image/UserImg2.png';

// parentId=null, onReply
const CommentForm = ( {addList, parentId=null, addReply} ) => {

    // 유저 이미지 랜덤하게 보여주기
    // const images = [
    //     './image/cmUser1.svg',
    //     './image/cmUser2.svg',
    //     './image/UserImg2.png'
    // ]
    // 유저 이미지 랜덤하게 보여주기 위한 함수
    // const getRandomImgae = () => {
    //     const randomIndex = Math.floor(Math.random() * images.length);
    //     return images[randomIndex];
    // }

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
                content: value,
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

            // 날짜 반환
            // const formmatedDate = writeDate.toLocaleTimeString('ko-KR');

            // 현재 시간 기준으로 작성 날짜 반환(초 단위 차이 계산)
            // const elpased = Math.trunc((now.getTime() - writeDate.getTime()) / 1000); 
            // const timeAgo = (elapsed) => {
            //     if (elapsed < 60) {
            //         return `${elapsed}초 전`;
            //     } else if (elapsed < 3600) {
            //         const minutes = Math.trunc(elapsed / 60);
            //         return `${minutes}분 전`;
            //     } else if (elapsed < 86400) {
            //         const hours = Math.trunc(elapsed / 3600);
            //         return `${hours}시간 전`;
            //     } else {
            //         const days = Math.trunc(elapsed / 86400);
            //         return `${days}일 전`;
            //     }
            // };

            // addList({
            //     // userImage : getRandomImgae(),
            //     id : Date.now(),
            //     userid : "유저 닉네임",
            //     content : value,
            //     date : writeDate,
            //     // 대댓글 -> 부모 Id 포함
            //     // parentId : parentId,
            //     updateFlag : true
            // });

            // if(parentId) {
            //     onReply(addList);
            // } else {
            //     addList(addList);
            // }
            
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