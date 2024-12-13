// 각 게시글의 댓글, 대댓글을 눌렀을 때 따로 열리게 만들기
// 댓글/대댓글에 작은 좋아요, 댓글/대댓글 달기도
// 따로 만들기

import React, { useEffect, useState } from 'react';
import cmUser1 from './image/cmUser1.svg';
import S from './style';
import CommentForm from './CommentForm';
import CommentList from './CommentList';

const Comment = () => {

    // state를 관리하기 위한 useState 훅
    const [list, setList] = useState([]);

    // componentDidMount 역할을 하는 useEffect
    useEffect(() => {
        setList([{
            userid: '1',
            content: '안녕하세요1',
            date: '1주',
            updateFlag: true
        }]);
    }, []); // 빈 배열을 두 번째 인자로 전달하면 컴포넌트가 처음 렌더링될 때 한 번만 실행

    // 리스트에 아이템을 추가하는 함수
    const addList = obj => {
        setList(prevList => [...prevList, obj]);
      };

    // 리스트를 업데이트하는 함수
    const updateList = updatedList => {
        setList(updatedList);
    };


    return (
        <div>
            <CommentForm addList={addList}/>
            <CommentList list={list} updateList={updateList}/>
        </div>
    );
};

export default Comment;