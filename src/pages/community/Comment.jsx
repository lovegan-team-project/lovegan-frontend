// 각 게시글의 댓글, 대댓글을 눌렀을 때 따로 열리게 만들기
// 댓글/대댓글에 작은 좋아요, 댓글/대댓글 달기도
// 따로 만들기

import React, { useState } from 'react';
import cmUser1 from './image/cmUser1.svg';
import S from './style';

const Comment = () => {

        // 각 댓글별 좋아요 버튼 클릭 상태 (배열로 관리)
        // const [likeMinStates, setLikeMinStates] = useState(Array(comment.length).fill('#fff'));
        // const [likeSmallState, setLikeSmaillState] = useState(Array(comment.length).fill('#fff'));
    
        // 각 댓글별 답글 입력창 상태(열림/닫힘)
        // const [replyInput, setReplyInput] = useState(Array(comment.length).fill(false))
    
        // 각 댓글별 답글 내용 저장
        // const [replies, setReplies] = useState(Array(comment.length).fill(''));
    
        // 입력한 답글 내용 저장 (임시 저장)
        // const [replyTexts, setReplyTexts] = useState(Array(comment.length).fill(''));
    
        // 답글 보이고 안보이기
        // const [replyInputVisible, setReplyInputVisible] = useState(false);
    
        // 팔로우 버튼 색 변경 함수
        // const onChangeColor = () => {
            // setColorChange(prevColor => (prevColor === '#03A63C' ? '#fafafa' : '#03A63C'))
            // setTextColor(prevColor => (prevColor === '#fff' ? '#333' : '#fff'))
        // };
        
        // like 버튼 색변경 함수
        // const onChangeLike = () => {
            // setLikeColor(prevColor => (prevColor === '#fff' ? '#D8590E' : '#fff'))
        // };
        
        // scrap 버튼 색변경 함수
        // const onChangeScrap = () => {
            // setScrapColor(prevColor => (prevColor === '#fff' ? '#D8590E' : '#fff'))
        // };
    
        // 개별 댓글 좋아요 상태 변경 함수
        // const onChangeLikeMin = (index) => {
            // setLikeMinStates(prevStates => 
                // prevStates.map((color, i) => i === index ? (color === '#fff' ? '#D8590E' : '#fff') : color)
            // );
        // };
    
        // 개별 댓글 작은 좋아요 상태 변경 함수
        // const onChangeLikeSmall = (index) => {
            // setLikeSmaillState(prevStates => 
                // prevStates.map((color, i) => i === index ? (color === '#fff' ? '#D8590E' : '#fff') : color)
            // );
        // };
    
        // 답글 입력창 열기/닫기
        // const buttonReplyInput = (index) => {
            // setReplyInput(prevVisible => 
                // prevVisible.map((visible, i) => i === index ? !visible : visible)
            // );
        // };
    
        // 답글 입력 상태 저장
        // const handleReplyChange = (index, event) => {
            // const newReplies = [...replyTexts];
            // newReplies[index] = event.target.value;
            // setReplyTexts(newReplies);
    
            // const newReplyTexts = [...replyTexts];
            // newReplyTexts[index] = '';
            // setReplyTexts(newReplyTexts);
        // };
    
        // 입력된 답글을 저장하고 입력창 닫기
        // const submitReply = (index) => {
            // const newReplies = [...replies];
            // newReplies[index] = [...newReplies[index], replyTexts[index]]; // 해당 댓글에 답글 추가
            // setReplies(newReplies);
    
            // console.log(replyTexts[index])
    
            // 답글 창 닫기
            // setReplyInput(prevVisible => 
                // prevVisible.map((visible, i) => i === index ? false : visible)
            // );
    
            // 입력 필드 초기화
            // const newReplyTexts = [...replyTexts];
            // newReplyTexts[index] = '';
            // setReplyTexts(newReplyTexts);
        // };

        // const [commentValue, setCommentValue] = useState([])
        // const [text, setText] = useState("");
        // const [display, setDisplay] = useState(false)
        // const onSubmit = (e) => {
        //     e.preventDefault();
        //     setCommentValue(text);
        //     let data = {
        //         content : text,
        //         writer : 'write',
        //         postId : '1',
        //         responseTo : 'root',
        //         commentId : '1'
        //     }
        //     dispatchEvent(addComment())
        // };
        // // comment = input 값
        // const pushCommentList = () => {
        //     setCommentList([
        //         ...commentList,
        //         {
        //             id : commentList.length + 1,
        //             user : 'love_gan',
        //             content : content,
        //         },
        //     ]);
        // };

        // const [inputComment, setInputComment] = useState('');
        // const inputChange = (e) => {
        //     console.log(e)
        //     setInputComment(e.target.value)
        // }

    return (
        // <p onClick={() => buttonReplyInput(index)}>답글 달기</p>

        <div className='Modal'>
            <S.InputComment className='inputComment'>
                <img src={cmUser1}></img>
                <input
                    type="text"
                    placeholder="@유저 닉네임"
                    // onChange={(e) => inputChange(e)}
                />
                <button >입력</button>
            </S.InputComment>
        </div>

        // <S.Recomment1>
        //     <img src={cmUser1}></img>
        //         <div className='userInfo'>
        //             <div>유저 닉네임</div>
        //             <div className='userInfoIn'>
        //                 <S.goolbang>@유저 닉네임</S.goolbang>
        //                 <div className='writeComment'>댓글 내용</div>
        //             </div>
        //             <div className='postTime'>
        //                 <S.dtInfo1 className='dtInfo1'>
        //                     <p>작성 시간</p>
        //                     <span>·</span>
        //                     <LikeButtonMin src={like} alt='좋아요'/>
        //                     <p>좋아요</p>
        //                     <span>·</span>
        //                     <p >답글 달기</p>
        //                     <span>·</span>
        //                     <p>신고</p>
        //                 </S.dtInfo1>
        //             </div>
        //         </div>
        // </S.Recomment1>
    );
};

export default Comment;