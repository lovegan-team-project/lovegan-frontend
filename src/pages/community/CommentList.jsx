import React, { useState } from 'react';
import S from './style';
import UserImg2 from './image/UserImg2.png';
import LikeBtMin from './LikeBtMin';
import { useSelector } from 'react-redux';

const CommentList = ({ list, setList }) => {
    // 댓글 id별로 대댓글 작성 폼 표시
    const [replyVisible, setReplyVisible] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const currentUser = useSelector((state) => state.user.currentUser);
    const limitedList = list.slice(0,10);

    // 대댓글 폼 토글 함수
    const toggleReplyForm = (commentId) => {
        setReplyVisible((prev) => ({
            ...prev,
            [commentId]: !prev[commentId],
        }));
    };

    // 작성 시간 경과 계산하는 함수
    const timeAgo = (writeDate) => {
        const now = new Date();
        const elapsed = Math.trunc((now.getTime() - writeDate.getTime()) / 1000); // 초 단위로 차이 계산

        if (elapsed < 60) {
            return `${elapsed}초 전`;
        } else if (elapsed < 3600) {
            const minutes = Math.trunc(elapsed / 60);
            return `${minutes}분 전`;
        } else if (elapsed < 86400) {
            const hours = Math.trunc(elapsed / 3600);
            return `${hours}시간 전`;
        } else {
            const days = Math.trunc(elapsed / 86400);
            return `${days}일 전`;
        }
    };

    

    const addReply = async (parentId, content) => {

        if (!content.trim()) return;
        if (!currentUser || !currentUser._id) {
            alert("로그인이 필요합니다.");
            return;
        };
        
        try {
            const response = await fetch("http://localhost:8000/community/addReply", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    parentId,
                    userId: currentUser.intro,  // 로그인한 사용자 ID
                    content
                }),
            });

            const result = await response.json();
            console.log("대댓글 추가 결과:", result);
            if (result.success) {
                const newReply = {
                    _id: result.reply._id,
                    user: { nickname: currentUser.nickname },
                    content,
                    createAt: new Date(),
                };

                // 대댓글을 현재 UI에 즉시 추가
                setList((prevList) => 
                    prevList.map(comment =>
                        comment._id === parentId
                            ? { ...comment, replies: [...(comment.replies || []), newReply] }
                            : comment
                    )
                );
            }
        } catch (error) {
            console.error("대댓글 추가 실패:", error);
        }
    };

    return (
        <S.CommentListStyle className="comment-list">
                {list.map((comment) => (
                    <div key={comment._id} className="comment-row">
                        {comment.content && comment.content.trim() && (
                        <div className='comment-inRow'>
                            <div className='comment-row-user'>
                                <img src={UserImg2} alt='' className='comment-row-img'/>
                                <div className='comment-row-user-between'>
                                    <div className="comment-id">{comment.user.nickname}</div>
                                    <div className="comment-content">{comment.content}</div>
                                </div>
                            </div>
                            <S.dtInfo_1>
                                <div className="comment-date">{timeAgo(new Date(comment.createAt))}</div>
                                <span>·</span>
                                <LikeBtMin />
                                <p>좋아요</p>
                                <span>·</span>
                                <p className='replyClick' onClick={() => toggleReplyForm(comment._id)}>답글 달기</p>
                                <span>·</span>
                                <p>신고</p>
                            </S.dtInfo_1>

                        {/* 대댓글 작성 폼 */}
                        {replyVisible[comment._id] && (
                            <S.replyTyping className="replyTyping">
                                <div className='reply-div'>
                                    <img src={UserImg2} alt='' className='comment-row-img' />
                                    <form
                                        className='reply-form'
                                        onSubmit={(e) => {
                                            e.preventDefault();
                                            const replyContent = e.target.elements.replyInput.value.trim();
                                            if (replyContent) {
                                                addReply(comment._id, replyContent);
                                                e.target.reset(); // 입력 필드 초기화
                                                setReplyVisible((prev) => ({
                                                    ...prev,
                                                    [comment.id] : false, // 입력 후 댓글창 닫기
                                                }));
                                            }
                                        }}
                                    >
                                        <input type="text" placeholder="답글 입력" className="reply-input" name='replyInput'></input>
                                        <button type="submit" className="reply-submit">입력</button>
                                    </form>
                                </div>
                            </S.replyTyping>
                        )}
                        
                        {/* 대댓글 리스트 */}
                        {comment.replies && comment.replies.length > 0 && (
                        <div className='replies'>
                            {comment.replies.map((reply) => (
                                <div key={reply._id} className='comment-row reply-row'>
                                    <div className='comment-row-user'>
                                        <img src={UserImg2} alt='' className='comment-row-img' />
                                        <div className='comment-row-user-between'>
                                            <div className="comment-id">{reply.user?.nickname || "익명"}</div>
                                            <div className="comment-content">{reply.content}</div>
                                        </div>
                                    </div>
                                    <S.dtInfo_1>
                                        <div className="comment-date">{timeAgo(reply.createAt)}</div>
                                        <span>·</span>
                                        <LikeBtMin />
                                        <p>좋아요</p>
                                        <span>·</span>
                                        <p>신고</p>
                                    </S.dtInfo_1>
                                </div>
                            ))}
                        </div>
                        )}
                    </div>
                    )}
                </div>  
            ))}
        </S.CommentListStyle>
    );
};

export default CommentList;