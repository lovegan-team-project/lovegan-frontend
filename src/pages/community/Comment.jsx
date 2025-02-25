import React, { useEffect, useState } from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList';

const Comment = ({ onCommentCountChange, id }) => {

    const [list, setList] = useState([]);
    const [commentCount, setCommentCount] = useState(0); 

    useEffect(() => {
        const fetchComment = async () => {
            try {
                if (!id) {
                    console.error("게시물 ID가 없습니다.");
                    return;
                }
                
                const response = await fetch(`http://localhost:8000/community/getComment/${id}`)
                // console.log(response)
                const data = await response.json();

                if(!Array.isArray(data.comments)) {
                    console.error("서버에서 반환된 데이터가 배열이 아님:", data)
                    return;
                }

                // setList(data.comments);
                setList(data.comments);
                setCommentCount(data.commentCount);
                onCommentCountChange?.(data.commentCount);

                // console.log(data)
            } catch (error) {
                console.error('댓글 불러오는 중 오류 발생', error);
            }
        }
        
        fetchComment();
    }, [id]);

    const addList = (newComment) => {
        setList((prevList) => [...prevList, newComment]);
    };

    return (
        <div>
            <CommentForm addList={addList} id={id} />
            <CommentList list={list} id={id} />
        </div>
    );
};

export default Comment;