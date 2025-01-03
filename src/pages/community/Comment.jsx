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

    return (
        <div>
            <CommentForm addList={addList}/>
            <CommentList list={list} addReply={addReply} />
            {/* updateList={updateList} */}
        </div>
    );
};

export default Comment;