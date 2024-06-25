import React, { useState, useEffect } from "react";
import CommentItem from './CommentItem';

function CommentList(props) {
    const [commentId, setCommentId] = useState(0);
    const [text, setText] = useState("");
    const [comments, setComments] = useState([]);
    const postId = props.postId;  // 게시글 ID

    // 댓글 ID 초기화
    useEffect(() => {
        let postList = JSON.parse(localStorage.getItem(postId));
        if (postList !== null && postList.length !== 0) {
            setComments(postList);
            setCommentId(postList[postList.length - 1].commentId + 1);
        }
    }, [postId]);

    const CreateHandler = () => {
        if (text.trim() === "") {
            alert("댓글을 입력하세요.");
            return;
        }

        let commentItem = {
            commentId: commentId,
            postId: postId,
            text: text,
            date: getDate()
        };

        let commentArray = [...comments, commentItem];
        setComments(commentArray);
        localStorage.setItem(postId, JSON.stringify(commentArray));  // 게시글 ID를 키로 사용
        setCommentId(commentId + 1);
        setText("");  // 댓글 작성 후 입력 필드 초기화
    };

    // 현재 날짜 반환 함수
    function getDate() {
        let date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        return `${year}.${month}.${day}`;
    }

    const EditCommentHandler = (id, newText) => {
        let commentArray = comments.map(comment => {
            if (comment.commentId === id) {
                return { 
                    ...comment, 
                    text: newText, 
                    date: getDate() 
                };
            }
            return comment;
        });
        setComments(commentArray);
        localStorage.setItem(postId, JSON.stringify(commentArray));  // 게시글 ID를 키로 사용
    };

    const DeleteCommentHandler = (id) => {
        let commentArray = comments.filter(comment => comment.commentId !== id);
        setComments(commentArray);
        localStorage.setItem(postId, JSON.stringify(commentArray));  // 게시글 ID를 키로 사용
    };

    return(
        <>
            <div>
                {comments.map((comment) => (
                    <CommentItem 
                        key={comment.commentId} 
                        comment={comment} 
                        onEdit={EditCommentHandler} 
                        onDelete={DeleteCommentHandler} 
                    />
                ))}
            </div>
            <div>
                <input 
                    type="text" 
                    placeholder="댓글을 입력하세요"
                    value={text}
                    onChange={(e) => setText(e.target.value)} 
                />
                <button onClick={CreateHandler}>
                    댓글 작성
                </button>
            </div>
        </>
    );
}

export default CommentList;
