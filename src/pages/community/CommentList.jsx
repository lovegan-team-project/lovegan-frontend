import React, { useState } from 'react';
import S from './style';
import UserImg2 from './image/UserImg2.png';
import LikeBtMin from './LikeBtMin';
import { useSelector } from 'react-redux';

const CommentList = ({ list, setList }) => {
    // 댓글 id별로 대댓글 작성 폼 표시
    const [replyVisible, setReplyVisible] = useState([]);
    const [replyContent, setReplyContent] = useState(""); // 상태 정의
    const currentUser = useSelector((state) => state.user.currentUser);
    // const [isOpen, setIsOpen] = useState(false);
    // const [openReplies, setOpenReplies] = useState({}); // 답글 달기 버튼 활성화
    // const limitedList = list.slice(0,10);

    // 대댓글 폼 토글 함수
    const toggleReplyForm = (commentId) => {
        setReplyVisible((prev) => ({
            ...prev,
            [commentId]: !prev[commentId],
            // [commentId]: false, 
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

    const addReply = async (commentId, content) => {

        if (!replyContent[commentId] || !replyContent[commentId].trim()) {
            return;
        }
        if (!currentUser || !currentUser._id) {
            alert("로그인이 필요합니다.");
            return;
        }
        
        console.log("현재 사용자 정보:", currentUser);
        
        try {
            const response = await fetch("http://localhost:8000/community/addReply", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    parentCommentId: commentId, // 부모 댓글 ID
                    userId: currentUser.nickname || "익명",
                    content: replyContent[commentId],
                })
            });
            
            const result = await response.json();
            console.log("대댓글 추가 결과:", result);

            if (result.success) {
                const newReply = {
                    user: result.reply.user.nickname || "익명", // 익명이면 "익명" 유지
                    content: replyContent[commentId],
                    createAt: new Date(),
                };
                
                // 대댓글을 현재 UI에 즉시 추가
                setList((prevList) => {
                    return prevList.map(comment =>
                        comment._id === commentId
                            ? { ...comment, replies: [...comment.replies, newReply] }
                            : comment
                    );
                });
            }
            // 입력값 및 폼 닫기
            setReplyContent((prev) => ({ ...prev, [commentId]: "" }));
            
            setReplyVisible((prev) => ({ ...prev, [commentId]: false }));
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
                                <p className='replyClick' onClick={() => toggleReplyForm(comment._id)}>
                                    {replyVisible[comment._id] ? "답글 닫기" : "답글 달기"}
                                </p>
                                <span>·</span>
                                <p>신고</p>
                            </S.dtInfo_1>

                        {/* 대댓글 작성 폼 */}
                        {replyVisible[comment._id] && (
                            <S.replyTyping>
                                <div className="reply-div">
                                    <img src={UserImg2} alt="" className="comment-row-img" />
                                    <form
                                        className="reply-form"
                                        onSubmit={(e) => {
                                            e.preventDefault();
                                            addReply(comment._id);
                                        }}
                                    >
                                        <input
                                            type="text"
                                            value={replyContent[comment._id] || ""}
                                            onChange={(e) =>
                                                setReplyContent((prev) => ({
                                                    ...prev,
                                                    [comment._id]: e.target.value,
                                                }))
                                            }
                                            placeholder="답글 입력"
                                            className="reply-input"
                                        />
                                        <button type="submit" className="reply-submit">
                                            입력
                                        </button>
                                    </form>
                                </div>
                            </S.replyTyping>
                        )}
                        
                        {/* 대댓글 리스트 */}
                        {comment.replies && comment.replies.length > 0 && (
                        <div className="replies">
                            {comment.replies.map((reply) => (
                                <div key={reply._id} className="comment-row reply-row">
                                    <div className="comment-row-user">
                                        <img src={UserImg2} alt="" className="comment-row-img" />
                                        <div className="comment-row-user-between">
                                            <div className="comment-id">{reply.user.nickname || "익명"}</div>
                                            <div className="comment-content">{reply.content}</div>
                                        </div>
                                    </div>
                                    <S.dtInfo_1>
                                        <div className="comment-date">{timeAgo(new Date(reply.createAt))}</div>
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