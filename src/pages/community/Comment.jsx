import React, { useEffect, useState } from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList';

const Comment = ({ onAddComment }) => {

    const [list, setList] = useState([]);

    useEffect(() => {
        const fetchComment = async () => {
            try {
                const response = await fetch("http://localhost:8000/community/getComment")
                // console.log(response)
                const data = await response.json();

                if(!Array.isArray(data)) {
                    console.error("서버에서 반환된 데이터가 배열이 아님:", data)
                    return;
                }

                setList(data);

                // console.log(data)
            } catch (error) {
                console.error('댓글 불러오는 중 오류 발생', error);
            }
        }
        
        fetchComment();
    }, []); // 빈 배열을 두 번째 인자로 전달하면 컴포넌트가 처음 렌더링될 때 한 번만 실행

    // console.log(list)

    // 리스트에 댓글을 추가하는 함수
    const addList = async (obj) => {
        try {
            const response = await fetch("http://localhost:8000/community/addComment")
            //     , {
            //     method : "POST",
            //     headers : { "Content-Type" : "application/json"},
            //     body : JSON.stringify(obj), // 서버로 새 데이터 전달
            // });

            if(!response.ok){
                throw new Error('댓글 저장 실패')
            }

            const saveComment = await response.json(); // 서버에 저장된 댓글 반환
            setList((prevList) => [...prevList, saveComment]); // 상태에 추가
            // if(onAddComment){
            //     onAddComment();
            // }
        } catch (error) {
            console.error('댓글 추가하는 중 오류 발생', error);
        }
      };

    // 대댓글 추가 함수
    const addReply = async (parentId, reply) => {
        try {
            const response = await fetch("http://localhost:8000/community/addReply")
            // , {
            //     method : "POST",
            //     headers : { "Content-Type" : "application/json"},
            //     body : JSON.stringify({parentId, reply}),
            // });

            if(!response.ok){
                throw new Error('대댓글 저장 실패');
            }
            console.log(response)

            const updatedParent = await response.json();
            setList((prevList) =>
                prevList.map((comment) => 
                    comment.id === parentId ? updatedParent : comment
            ));

            // if(onAddComment){
            //     onAddComment();
            // }
        } catch (error) {
            console.log('대댓글 추가하는 중 오류 발생', error)
        }
    };

    

    return (
        <div>
            <CommentForm addList={addList}/>
            <CommentList list={list} />
            {/* addReply={addReply} */}
            {/* updateList={updateList} */}
        </div>
    );
};

export default Comment;