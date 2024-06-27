import React, { useState, useEffect, useRef } from "react";

function PostView(props){
    const postList = props.items;
    const selectpostList = postList.filter((post)=>post.postId === props.postId)[0]
    console.log(selectpostList)

    return(
        <div className="modal">
            <div className="viewContainer">
                <h1 className="title">{selectpostList.title}</h1>
                <div class="division-line"></div>
                <div className="content">{selectpostList.content}</div>
                <div className="parts">부품</div>
                <div className="reply">댓글</div>
                <button className="closeBtn" onClick={props.closeViewModal}>&times;</button>
            </div>
        </div>
    )
}

export default PostView;