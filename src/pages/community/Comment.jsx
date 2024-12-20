import React, { useEffect, useState } from 'react';
import cmUser1 from './image/cmUser1.svg';
import S from './style';
import CommentForm from './CommentForm';
import CommentList from './CommentList';

const Comment = ({ onAddComment }) => {

    // state를 관리하기 위한 useState 훅
    const [list, setList] = useState([]);

    // componentDidMount 역할을 하는 useEffect
    useEffect(() => {
        setList([{
            // userImage: '',
            userid: '',
            content: '',
            date: new Date().toISOString(),
            updateFlag: true
        }]);
    }, []); // 빈 배열을 두 번째 인자로 전달하면 컴포넌트가 처음 렌더링될 때 한 번만 실행

    // 리스트에 아이템을 추가하는 함수
    const addList = obj => {
        setList(prevList => [...prevList, obj]);
        if(onAddComment) {
            onAddComment();
        }
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