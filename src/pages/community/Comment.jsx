import React, { useEffect, useState } from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList';

const Comment = ({ onAddComment }) => {

    const [list, setList] = useState([]);
    // componentDidMount 역할을 하는 useEffect
    useEffect(() => {
        setList([
            {
            userid: 'user1',
            content: '',
            date: new Date().toISOString(),
            updateFlag: true,
            replies : [] // 대댓글 저장 배열
            },
        ]);
    }, []); // 빈 배열을 두 번째 인자로 전달하면 컴포넌트가 처음 렌더링될 때 한 번만 실행

    // 리스트에 아이템(댓글)을 추가하는 함수
    const addList = (obj) => {
        setList(prevList => [...prevList, obj]);
        if(onAddComment) {
            onAddComment();
        }
      };

    // 대댓글 추가 함수
    const addReply = (parentId, reply) => {
        setList(prevList =>
            prevList.map(comment => 
                comment.id === parentId 
                ? {...comment, replies : [...comment.replies, reply]} 
                : comment
            )
        );

        if(onAddComment){
            onAddComment();
        }
    };

    // useEffect(() => {
    //     const fetchComment = async () => {
    //         try {
    //             const response = await fetch("http://localhost:8000/comment/");
    //             if (!response.ok) {
    //                 throw new Error('Failed to fetch comments');
    //             }
    //             const data = await response.json();
    //             setList(data.content); // 댓글 목록을 상태에 저장
    //         } catch (error) {
    //             console.error('comment 연결 실패:', error);
    //         }
    //     };
    //     fetchComment();
    // }, []); // 빈 배열을 두 번째 인자로 전달하면 컴포넌트가 처음 렌더링될 때 한 번만 실행

    // // 리스트에 아이템(댓글)을 추가하는 함수
    // const addList = async (newComment) => {
        
    //     try {
    //         const response = await fetch("http://localhost:8000/comment", {
    //             method : 'POST',
    //             headers : {
    //                 'Content-Type' : 'application/json',
    //             },
    //             body : JSON.stringify(newComment)
    //         });
    //         if (!response.ok) {
    //             throw new Error('comment fetch 연결 실패');
    //         }
    //         const addedComment = await response.json();
    //         setList(prevList => [...prevList, addedComment.comment]); // 새로운 댓글을 목록에 추가
    //         if (onAddComment) onAddComment();
    //     } catch (error) {
    //         console.error('Failed to add comment:', error);
    //     }
    //   };
        

    // 대댓글 추가 함수
    // const addReply = async (parentId, reply) => {
    //     try {
    //         const response = await fetch(`${"http://localhost:8000/community/comment"}/${parentId}/replies`, {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(reply),
    //         });
    //         if (!response.ok) {
    //             throw new Error('Failed to add reply');
    //         }

    //         const updatedComment = await response.json();
    //         setList(prevList =>
    //             prevList.map(comment =>
    //                 comment.id === parentId
    //                     ? { ...comment, replies: [...comment.replies, updatedComment.reply] }
    //                     : comment
    //             )
    //         );
    //         if (onAddComment) onAddComment();
    //     } catch (error) {
    //         console.error('Failed to add reply:', error);
    //     }
    // };

    return (
        <div>
            <CommentForm addList={addList}/>
            <CommentList list={list}  />
            {/* addReply={addReply} */}
            {/* updateList={updateList} */}
        </div>
    );
};

export default Comment;