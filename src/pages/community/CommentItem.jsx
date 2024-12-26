import React, { useState } from 'react';
import CommentForm from './CommentForm';

const CommentItem = () => {

    const [replyVisible, setReplyVisible] = useState(false);

    // 대댓글 작성 상태 관리
    const handleReply = replyContent => {
        const reply ={
            // 고유 id
            id : Date.now(),
            // 현재 로그인된 사용자
            userid : 'currentUser',
            content : replyContent,
            date : new Date().toISOString(), 
        };
        addReply(comment.id, reply);
        // 대댓글 폼 숨기기
        setReplyVisible(false);
    }
    
    return (
        <div>
            {/* 댓글 내용 */}
            <div>
                <p>{comment.userid}</p>
                {comment.content}
                ({comment.date})
            </div>

            {/* 대댓글 버튼 */}
            <button onClick={() => setReplyVisible(!replyVisible)}>
                {replyVisible ? '취소' : '답글달기'}
            </button>

            {/* 대댓글 작성 폼 */}
            {replyVisible && (
                <CommentForm addList={handleReply} placeholder="답글을 입력하세요."/>
            )}

            {/* 대댓글 리스트 */}
            {comment.replies.map(reply => (
                <CommentItem key={reply.id} comment={reply} addReply={addReply} />
            ))}
        </div>
    );
};

export default CommentItem;