import React, { useState } from 'react';
import S from './style';
import UserImg2 from './image/UserImg2.png';
import LikeBtMin from './LikeBtMin';

// addReply
const CommentList = ({ list,  addReply }) => {
    // 댓글 id별로 대댓글 작성 폼 표시
    const [replyVisible, setReplyVisible] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    // 댓글을 5개까지만 보여주기
    const limitedList = list.slice(0,11);

    // 대댓글 폼 토글 함수
    const toggleReplyForm = (commentId) => {
        setReplyVisible((prev) => ({
            ...prev,
            [commentId]: !prev[commentId],
        }));
        setIsOpen((prev) => ({
            ...prev,
            [commentId]: true, // 클릭하면 항상 입력창이 열리도록 설정
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

    return (
        <S.CommentListStyle className="comment-list">
            {/* index */}
            {limitedList.map((item) => (
                <div key={item.id} className="comment-row">
                    {item.content.trim() && (
                    <div className='comment-inRow'>
                        <div className='comment-row-user'>
                            <img src={UserImg2} alt='' className='comment-row-img'/>
                            <div className='comment-row-user-between'>
                                <div className="comment-id">{item.userid && typeof item.userid === 'string' ? item.userid : '알 수 없음'}</div>
                                <div className="comment-content">{item.content && typeof item.content === 'string' ? item.content : '내용 없음'}</div>
                            </div>
                        </div>
                        <S.dtInfo_1>
                            <div className="comment-date">{timeAgo(new Date(item.date))}</div>
                            <span>·</span>
                            <LikeBtMin />
                            <p>좋아요</p>
                            <span>·</span>
                            <p className='replyClick' onClick={() => toggleReplyForm(item.id)}>답글 달기</p>
                            <span>·</span>
                            <p>신고</p>
                        </S.dtInfo_1>

                        {/* 대댓글 작성 폼 */}
                        {replyVisible[item.id] && (
                            <S.replyTyping className="replyTyping">
                                <div className='reply-div'>
                                    <img src={UserImg2} alt='' className='comment-row-img' />
                                    <form
                                        className='reply-form'
                                        onSubmit={(e) => {
                                            e.preventDefault();
                                            const replyContent = e.target.elements.replyInput.value.trim();
                                            if (replyContent) {
                                                addReply(item.id, {
                                                    id: Date.now(),
                                                    userid: '닉네임1',
                                                    content: replyContent,
                                                    date: new Date().toISOString(),
                                                });
                                                e.target.reset(); // 입력 필드 초기화
                                                setReplyVisible((prev) => ({
                                                    ...prev,
                                                    [item.id] : false, // 입력 후 댓글창 닫기
                                                }));
                                            }
                                        }}
                                    >
                                        <input
                                            type="text"
                                            name="replyInput"
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
                        {item.replies && item.replies.length > 0 && (
                            <div className='replies'>
                                {item.replies.map((reply) => (
                                    <div
                                        key={reply.id}
                                        className='comment-row reply-row'
                                    >
                                        <div className='comment-row-user'>
                                            <img src={UserImg2} alt='' className='comment-row-img'/>
                                            <div className='comment-row-user-between'>
                                                <div className="comment-id">{reply.userid && typeof reply.userid === 'string' ? reply.userid : '알 수 없음'}</div>
                                                <div className="comment-content">{reply.content && typeof reply.content === 'string' ? reply.content : '내용'}</div>
                                            </div>
                                        </div>
                                        <S.dtInfo_1>
                                            <div className="comment-date">{timeAgo(new Date(item.date))}</div>
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