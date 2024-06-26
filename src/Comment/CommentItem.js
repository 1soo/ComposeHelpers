import React, { useState } from 'react';

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
        <div>
            {isEditing ? (
                <>
                    <input 
                        type="text" 
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)} 
                    />
                    <button onClick={handleSaveClick}>저장</button>
                    <button onClick={handleCancelClick}>취소</button>
                </>
            ) : (
                <>
                    <div>{comment.text}</div>
                    <div>{comment.date}</div>
                    <button onClick={handleEditClick}>수정</button>
                    <button onClick={handleDeleteClick}>삭제</button>
                </>
            )}
        </div>
    );
}

export default CommentItem;
