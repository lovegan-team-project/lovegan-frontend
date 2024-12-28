import React, { useEffect, useState } from 'react';
// import cmUser1 from './image/cmUser1.svg';
// import S from './style';
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
            // 대댓글 저장 배열
            replies : []
            },
            // {
            // userid: 'user2',
            // content: '',
            // date: new Date().toISOString(),
            // updateFlag: true,
            // // 대댓글 저장 배열
            // replies : []
            // },
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
    };

    // 리스트를 업데이트(수정, 삭제 할 경우)하는 함수
    // const updateList = updatedList => {
    //     setList(updatedList);
    // };


    return (
        <div>
            <CommentForm addList={addList}/>
            <CommentList list={list} addReply={addReply} />
            {/* updateList={updateList} */}
        </div>
    );
};

export default Comment;