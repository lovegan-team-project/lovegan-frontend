import React from 'react';
import S from './style';
// import UserImg2 from './image/UserImg2.png';
import LikeBtMin from './LikeBtMin';
import { formatDistanceToNow } from 'date-fns';
import { ko } from 'date-fns/locale';

const CommentList = ({list}) => {

    // 댓글을 5개까지만 보여주기
    const limitedList = list.slice(0,6);

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
            {limitedList.map((item, index) => (
                <div key={index} className="comment-row">
                    {/* <img src={item.userImage || UserImg2} alt='' /> */}
                    <div>
                        <div className="comment-id">{item.userid}</div>
                        <div className="comment-content">{item.content}</div>
                        <S.dtInfo_1>
                            <div className="comment-date">{timeAgo(new Date(item.date))}</div>
                            {/* <p>1주</p> */}
                            <span>·</span>
                            <LikeBtMin />
                            <p>좋아요</p>
                            <span>·</span>
                            <p>답글 달기</p>
                            <span>·</span>
                            <p>신고</p>
                        </S.dtInfo_1>
                    </div>
                </div>
            ))}
        </S.CommentListStyle>
    );
};

export default CommentList;