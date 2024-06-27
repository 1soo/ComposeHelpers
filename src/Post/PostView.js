import React from "react";
import CommentList from '../Comment/CommentList';

function PostView(props, onAddComment){
    const postList = props.items;
    const selectpostList = postList.filter((post)=>post.postId === props.postId)[0]
    console.log(selectpostList)

    return(
        <div className="modal">
            <div className="viewContainer">
                <div className="title">
                    <h1 id="title">
                        {selectpostList.title}
                    </h1>
                </div>
                <div className="content">{selectpostList.content}</div>
                <div className="parts">
                <table>
                        <tr>
                            <th>항목</th>
                            <th>상세 정보</th>
                        </tr>
                        <tr>
                            <td>CPU</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>메인보드</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>메모리</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>그래픽카드</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>SSD</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>파워</td>
                            <td></td>
                        </tr>
                    </table>
                </div>
                {/* 댓글 */}
                <div className="reply">
                    <CommentList postId={props.postId} onAddComment={onAddComment} />
                </div>
                <button className="closeBtn" onClick={props.closeViewModal}>&times;</button>
            </div>
        </div>
    )
}

export default PostView;