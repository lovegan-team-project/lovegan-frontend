import React, { useState } from 'react';
import S from './style';
import UserImg2 from './image/UserImg2.png';
import { useSelector } from 'react-redux';

// parentId=null, onReply
const CommentForm = ( {addList, author, addReply} ) => {
    const [contetnvalue, setContentValue] = useState('');
    
    // const now = new Date();   
    const currentUser = useSelector((state) => state.user.currentUser);

    const handleChange  = (e) => {
        setContentValue(e.target.value);   
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(contetnvalue.trim()) {
            const newComment = {
                // author: currentUser.nickname,
                content: contetnvalue, // 입력한 댓글 내용
                // 대댓글 저장 배열
                // replies: [],
                // createAt: new Date().toISOString(),
            };

            // if(parentId) {
            //     addReply(parentId, newComment);
            // } else {
            //     addList(newComment);
            // }
            
            // addList(newComment)
            setContentValue('');
            await fetch("http://localhost:8000/community/addComment", {
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify({newComment})
            })
                .then((res) => res.json())
                .then((res) => {
                    console.log(res);
                })
                .catch((error) => {
                    console.error("Error:", error);
                    alert("오류가 발생했습니다.");
                });

            // console.log('Parent ID:', author);
            // console.log('addReply Function:', addReply);
            console.log('New Comment:', newComment);
        }
    }
    
    return (
        <S.typing>
            <img src={UserImg2} alt='유저프로필' />
            {/* onSubmit={handleSubmit} */}
            <form>
                <span className='box'>
                    <input 
                        className='commentInput'
                        type="text"
                        value={contetnvalue}
                        onChange={handleChange}
                        placeholder={'칭찬과 격려의 댓글은 작성자에게 큰 힘이 됩니다 :)'}
                    />
                </span>
                <button onClick={handleSubmit} type="submit" className='submitBt' disabled={!contetnvalue.trim()}>
                    입력
                </button>
            </form>
        </S.typing>
    );
};

export default CommentForm;