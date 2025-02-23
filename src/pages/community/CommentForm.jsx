import React, { useEffect, useState } from 'react';
import S from './style';
import UserImg2 from './image/UserImg2.png';
import { useSelector } from 'react-redux';

const CommentForm = ({ addList, id }) => {
    const [contentvalue, setContentValue] = useState("");
    const [comment, setComments] = useState([]);
    const currentUser = useSelector((state) => state.user.currentUser);

    useEffect(() => {
        addList(comment);
    }, [comment]); // comments가 변경될 때마다 부모 컴포넌트로 전달

    const handleSubmit = async (e) => {
        e.preventDefault();
        setContentValue('');
        if(!contentvalue.trim()) return;

        if (!currentUser || !currentUser._id) { 
            alert("로그인이 필요합니다.");
            return;
        }

        const newComment = {
            content: contentvalue,
            postId : id, // 게시글 id 추가
            userId : currentUser._id,
        };  
        
        console.log("보낼 데이터 :", newComment);

        try {
            const response = await fetch("http://localhost:8000/community/addComment", {
                method : "POST",
                headers : { "Content-Type" : "application/json" },
                body : JSON.stringify(newComment),
            })

            if(!response.ok) throw new Error("댓글 저장 실패");

            const result = await response.json();
            console.log('서버 응답 : ', result);

            setContentValue("");

            addList((prevList) => [
                ...prevList, 
                { ...newComment, _id: result.newComment._id, createAt: new Date() }
            ]);

        } catch(error) {
            console.error("댓글 추가 중 오류:", error);
            alert("댓글을 추가하는 중 오류가 발생했습니다.");
        }
    }

    return (
        <S.typing>
            <img src={UserImg2} alt='유저프로필' />
            <form onSubmit={handleSubmit}>
                <span className='box'>
                    <input 
                        className='commentInput'
                        type="text"
                        value={contentvalue}
                        onChange={e => setContentValue(e.target.value)}
                        placeholder={'칭찬과 격려의 댓글은 작성자에게 큰 힘이 됩니다 :)'}
                    />
                </span>
                <button type="submit" className='submitBt' disabled={!contentvalue.trim()}>
                    입력
                </button>
            </form>
        </S.typing>
    );
};

export default CommentForm;