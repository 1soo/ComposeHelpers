import React, { useState } from 'react';
import styles from "../Post/styles";

function CommentItem(props) {
    const comment = props.comment;
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState();

    const handleEditClick = () => {
        setEditText(comment.text);
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        props.onEdit(comment.commentId, editText);
        setIsEditing(false);
    };

    const handleCancelClick = () => {
        setIsEditing(false);
        setEditText(comment.text);
    };

    const handleDeleteClick = () => {
        props.onDelete(comment.commentId);
    };

    return (
        <div style={styles.commentContainer}>
            {isEditing ? (
                <>
                    <input 
                        type="text" 
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)} 
                        style={styles.commentEdit}
                    />
                    <button onClick={handleSaveClick} style={styles.editButton}>저장</button>
                    <button onClick={handleCancelClick} style={styles.deleteButton}>취소</button>
                </>
            ) : (
                <>
                    <div style={styles.commentDetails}>
                        <img src = {require('../img/avatar-icon.png')} alt="Avatar" style={styles.commentAvatar} />
                        <div style={styles.commentTextContainer}>
                            <div style={styles.commentDate}>{comment.date}</div>
                            <div style={styles.commentText}>{comment.text}</div>
                        </div>
                    </div>
                    <div style={styles.commentActions}>
                        <button onClick={handleEditClick} style={styles.editButton}>수정</button>
                        <button onClick={handleDeleteClick} style={styles.deleteButton}>삭제</button>
                    </div>
                </>
            )}
        </div>
    );
}

export default CommentItem;
