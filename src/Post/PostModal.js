import React, { useState, useEffect, useRef } from "react";
import styles from "./styles";
import Parts from "../Parts/Parts";
import CommentList from "../Comment/CommentList";

function PostModal(props) {
    // 다음에 저장할 게시글 아이템 id
    const [nextPostId, setNextPostId] = useState(0);
    // 수정 중인지 여부
    const [EditProcess, setEditProcess] = useState(false);
    // 게시글 아이템
    const [postItem, setPostItem] = useState();
    // 게시글 아이템 데이터
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [isAsk, setIsAsk] = useState(true);
    const [isComplete, setIsComplete] = useState(false);
    const [date, setDate] = useState("");

    // 부품 정보 창 활성화 여부
    const [partsOn, setPartsOn] = useState(false);

    // 부품 정보 저장
    const [partObj, setPartObj] = useState();

    // 생성 버튼인지 게시글 클릭인지 여부
    const isCreate = props.isCreate;
    // 모달 Ref
    const modalRef = useRef();

    // 컴포넌트 생성시 값들 초기화
    useEffect(() => {
        modalRef.current.showModal();

        let postList = [];
        if(localStorage.getItem('postList')){
            postList = JSON.parse(localStorage.getItem('postList'));
            if(postList.length !== 0){
                setNextPostId(postList[postList.length-1].postId + 1);
            }else{
                localStorage.clear();
            }
        }

        // 아이템 클릭 시
        if (!props.isCreate) {
            if(postList){
                setPostItem(postList.filter((post)=>post.postId === props.postId)[0]);
            }else{
                alert('localStorage에 해당 데이터가 저장되어 있지 않습니다.');
            }
        }
        // 작성 버튼 클릭 시
        else {
            setTitle("");
            setContent("");
            setIsAsk(true);
            setIsComplete(false);
        }

        return (() => {
            // 모달 창 종료시 실행하고 싶은 코드
        })
    }, [])

    // postItem 설정하면 해당 데이터들 반영
    useEffect(()=>{
        if(postItem){
            setTitle(postItem.title);
            setDate(postItem.date);
            setContent(postItem.content);
            setIsAsk(postItem.isAsk);
            setIsComplete(postItem.isComplete);
        }
    }, [postItem]);

    // 현재 날짜 반환 함수
    function getDate() {
        let date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        return `${year}.${month}.${day}`;
    }

    // 등록 버튼 핸들러
    function EntryHandler(event) {
        if (!title.trim() || !content.trim()) {
            alert("제목과 내용을 모두 입력하세요.");
            return;
        }
        if(!partObj){
            alert('부품 정보를 모두입력하세요!');
            return;
        }

        // 게시글 저장
        let listItem = {
            postId: nextPostId,
            title: title,
            date: getDate(),
            content: content,
            isAsk: isAsk,
            isComplete: isComplete
        }

        let postList = [];
        if(localStorage.getItem('postList')){
            postList = JSON.parse(localStorage.getItem('postList'));
        }

        postList.push(listItem);
        localStorage.setItem('postList', JSON.stringify(postList));
        setNextPostId(nextPostId + 1);

        // 부품 정보 저장
        let partsList = [];

        if(localStorage.getItem("partsList")) {
            partsList = JSON.parse(localStorage.getItem("partsList"));
        }

        partsList.push(partObj);
        localStorage.setItem("partsList", JSON.stringify(partsList));
        props.modalHandler();
    }

    // 수정 버튼 핸들러
    function EditHandler(event) {
        setEditProcess(true)
    }

    // 수정 완료 버튼 핸들러
    function EditCompleteHandler(event) {
        if (!title.trim() || !content.trim()) {
            alert("제목과 내용을 모두 입력하세요.");
            return;
        }

        let editItem = {
            postId: postItem.postId,
            title: title,
            date: date,
            content: content,
            isAsk: isAsk,
            isComplete: isComplete
        }

        let postArray = [];
        if (localStorage.getItem('postList')) {
            postArray = JSON.parse(localStorage.getItem('postList'));
            postArray.forEach((post, index) => {
                if (post.postId === editItem.postId) {
                    postArray[index] = editItem;
                }
            });
            localStorage.setItem('postList', JSON.stringify(postArray));
        }
        setEditProcess(false);
    }

    // 수정 취소 버튼 핸들러
    function EditCancelHandler(event) {
        setEditProcess(false);
    }

    // 삭제 버튼 핸들러
    function DeleteHandler(event) {
        let postArray = [];
        let partsArray = [];

        if (localStorage.getItem("postList") ) {
            postArray = JSON.parse(localStorage.getItem("postList"));
            localStorage.setItem("postList", JSON.stringify(postArray.filter((postValue) => postValue.postId !== postItem.postId)));
            
        }
        if(localStorage.getItem('partsList')){
            partsArray = JSON.parse(localStorage.getItem('partsList'));
            localStorage.setItem('partsList', JSON.stringify(partsArray.filter((partValue) => partValue.postId !== postItem.postId)));
        }

        // 댓글 삭제
        let allCommentList = JSON.parse(localStorage.getItem('commentList')) || [];
        allCommentList = allCommentList.filter(comment => comment.postId !== postItem.postId);
        localStorage.setItem('commentList', JSON.stringify(allCommentList));

        props.modalHandler();
    }

    // 부품 정보 열기 버튼 핸들러
    function PartOpenHandler(event) {
        setPartsOn(true);
    }

    // 부품 정보 닫기 버튼 핸들러
    function PartCloseHandler(event) {
        setPartsOn(false);
    }

    // 부품 정보 저장 핸들러
    function PartInputSaveHandler(parts){
        parts.postId = nextPostId;
        setPartObj(parts);
        setPartsOn(false);
    }

    // 버튼 종류
    let buttonOutput;
    if (isCreate) {
        buttonOutput =
            <>
                <button onClick={EntryHandler} style={styles.modalCreateBtn}>등록</button>
                <button onClick={props.modalHandler} style={styles.modalCancelBtn}>취소</button>
            </>
    } else if (EditProcess) {
        buttonOutput = (
            <>
                <button
                    onClick={(e)=>setIsComplete(!isComplete)}
                    style={isComplete ? styles.modalNonsolveBtn : styles.modalSolveBtn}>
                    {isComplete ? "미해결" : "해결"}
                </button>
                <button onClick={EditCompleteHandler} style={styles.modalEditBtn}>수정 완료</button>
                <button onClick={EditCancelHandler} style={styles.modalCancelBtn}>취소</button>
            </>
        );
    } else {
        buttonOutput =
            <>
                <button onClick={EditHandler} style={styles.modalEditBtn}>수정</button>
                <button onClick={DeleteHandler} style={styles.modalDeleteBtn}>삭제</button>
                <button onClick={props.modalHandler} style={styles.modalCancelBtn}>닫기</button>
            </>
    }

    // 제목, 내용, 문의/추천 여부
    let titleOutput, isAskOutput, contentOutput, dateOutput, commentOutput;
    if (isCreate || EditProcess) {
        titleOutput = <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="제목을 입력하세요"
            style={styles.modalTitleInput}
        />;
        isAskOutput =<div style={styles.modalOption}>
                        <label>
                            <input
                                type="radio"
                                name="isAsk"
                                value={true}
                                checked={isAsk === true}
                                onChange={() => setIsAsk(true)}
                            />
                            문의
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="isAsk"
                                value={false}
                                checked={isAsk === false}
                                onChange={() => setIsAsk(false)}
                            />
                            추천
                        </label>
                    </div>;
            
        contentOutput = <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="내용을 입력하세요"
            style={styles.modalContentInput} />;
        
        
        
    } else {
        titleOutput = title;
        contentOutput = content;
        dateOutput = <div style={styles.modalDate}>
                        작성일: {date}
                    </div>;
        commentOutput = <div style={styles.modalReplyContainer}>
                        <CommentList 
                            postId={props.postId}
                        />
                    </div>
    }

    return (
        <dialog ref={modalRef} style={styles.modalContainer}>
            <div style={styles.modalBox}>
                <div id="itemTitle" style={styles.modalTitle}>
                    {titleOutput}
                </div>
                {dateOutput}
                {isAskOutput} 
                <div id="itemContent" style={styles.modalContent}>
                    <div style={{ width: '470px' }}>
                        {contentOutput}
                    </div>
                    <button id="modalPartsBtn" style={styles.modalPartsBtn} onClick={PartOpenHandler}>
                        부품 정보
                    </button>
                </div>
                {commentOutput}
                <div style={styles.modalBtnContainer}>
                    {buttonOutput}
                </div>
            </div>
            {partsOn && <Parts EditOrCreate={isCreate || EditProcess} postId={props.postId} partCloseHandler={PartCloseHandler} PartInputSaveHandler={PartInputSaveHandler}/>}
        </dialog>
    )
}

export default PostModal;