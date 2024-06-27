import React, { useRef } from "react";
import Parts from "../Parts/Parts";

function PostView(props){
    const partsRef = useRef();

    const postList = props.items;
    const selectpostList = postList.filter((post)=>post.postId === props.postId)[0]

    return(
        <div className="modal">
            <div className="viewContainer">
                <h1 className="title">{selectpostList.title}</h1>
                <div className="division-line"></div>
                <div className="content">{selectpostList.content}</div>
                <div className="parts">
                    <Parts EditOrCreate={false} ref={partsRef} postId={props.postId} />
                </div>
                <div className="reply">댓글</div>
                <button className="closeBtn" onClick={props.closeViewModal}>&times;</button>
            </div>
        </div>
    )
}

export default PostView;