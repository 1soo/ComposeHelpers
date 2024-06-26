import React, { useState, useEffect } from "react";
import CommentItem from './CommentItem';
import styles from "../Post/styles";

function CommentList(props) {
    const [commentId, setCommentId] = useState(0);
    const [text, setText] = useState("");
    const [comments, setComments] = useState([]);
    const postId = props.postId;  // 게시글 ID

    // 댓글 ID 초기화
    useEffect(() => {
        let allCommentList = JSON.parse(localStorage.getItem('commentList')) || [];
        
        if (allCommentList.length !== 0) {
            setCommentId(allCommentList[allCommentList.length - 1].commentId + 1);
            setComments(allCommentList);

        } else {
            setCommentId(0);
            setComments([]);
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

        localStorage.setItem('commentList', JSON.stringify(commentArray));  
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
        let updatedComments = comments.map(comment => {
            if (comment.commentId === id) {
                return { 
                    ...comment, 
                    text: newText, 
                    date: getDate() 
                };
            }
            return comment;
        });
        setComments(updatedComments);
        localStorage.setItem('commentList', JSON.stringify(updatedComments));  
    };

    const DeleteCommentHandler = (id) => {
        let commentArray = comments.filter(comment => comment.commentId !== id);
        setComments(commentArray);
        localStorage.setItem('commentList', JSON.stringify(commentArray));  
    };

    return(
        <>
            <div style={styles.modalReplyListContainer}>
                {comments
                    .filter(comment => comment.postId === postId)
                    .map((comment) => (
                        <CommentItem 
                            key={comment.commentId} 
                            comment={comment} 
                            onEdit={EditCommentHandler}
                            onDelete={DeleteCommentHandler}
                        />
                    ))}
            </div>
            <div style={styles.modalReplyInputContainer}>
                <textarea 
                    placeholder="댓글을 입력하세요"
                    value={text}
                    onChange={(e) => setText(e.target.value)} 
                    style={styles.modalReplyInput}
                />
                <button style={styles.modalReplyInputBtn} onClick={CreateHandler}>
                    댓글 작성
                </button>
            </div>
        </>
    );
}

export default CommentList;
