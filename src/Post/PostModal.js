import React, { useState, useEffect, useRef } from "react";
import styles from "./styles";

function PostModal(props){
    // 수정 중인지 나타내는 변수
    const [EditProcess, setEditProcess] = useState(false);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [isAsk, setIsAsk] = useState(true);

    const isCreate = props.isCreate;
    const modalRef = useRef();

    useEffect(()=>{
        modalRef.current.showModal();
        // 아이템 클릭 시
        if (props.item) {
            setTitle(props.item.title);
            setContent(props.item.content);
            setIsAsk(props.item.isAsk);
        }
        // 작성 버튼 클릭 시
        else {
            setTitle("");
            setContent("");
            setIsAsk(true);
        }

        return (()=>{
            // 모달 창 종료시 실행하고 싶은 코드
        })
    }, [props.item])

    // 등록 버튼 핸들러
    // div 안에 input 태그, 라디오 태그를 사용해서 입력값 받기
    // postId를 제외한 값을 객체로 저장해서 PostList.js의 CreateHandler 호출
     function EntryHandler(event){
        let listItem = {
            postId: 0,
            title: title,
            content: content,
            isAsk: isAsk,
            isComplete: false
        }
        props.BtnHandlerSet.createHandler(listItem);
    }

    // 수정 버튼 핸들러
    // 수정 버튼 클릭 시 div 안은 input 태그로 바뀌어야하고, value는 받아온 item의 각 해당하는 값이 된다.
    function EditHandler(event){
        setTitle(props.item.title);
        setContent(props.item.content);
        setEditProcess(true)
    }

    // 수정 완료 버튼 핸들러
    function EditCompleteHandler(event){
        let editItem = {
            postId: props.item.postId,
            title: '테스트입니다~',
            content: '수정된 내용입니다~',
            isAsk: props.item.isAsk,
            isComplete: props.item.isComplete
        }
        props.BtnHandlerSet.editHandler(editItem);
        setEditProcess(false);
        props.modalHandler();
    }

    // 수정 취소 버튼 핸들러
    function EditCancelHandler(event){
        setEditProcess(false);
    }

    // 삭제 버튼 핸들러
    function DeleteHandler(event){
        props.BtnHandlerSet.deleteHandler(props.item.postId);
        props.modalHandler();
    }    

    // 버튼 종류
    let buttonOutput;
    if(isCreate){
        buttonOutput = 
        <>
            <button onClick={EntryHandler} style={styles.modalCreateBtn}>등록</button>
            <button onClick={props.modalHandler} style={styles.modalCancelBtn}>취소</button>
        </>
    }else if(EditProcess){
        buttonOutput =
        <> 
            <button onClick={EditCompleteHandler} style={styles.modalEditBtn}>수정 완료</button>
            <button onClick={EditCancelHandler} style={styles.modalCancelBtn}>취소</button>
        </>
    }else{
        buttonOutput = 
        <>
            <button onClick={EditHandler} style={styles.modalEditBtn}>수정</button>
            <button onClick={DeleteHandler} style={styles.modalDeleteBtn}>삭제</button>
            <button onClick={props.modalHandler} style={styles.modalCancelBtn}>닫기</button>
        </>   
    }

    return(
        <dialog ref={modalRef}>
            <div id="itemTitle" style={styles.modalTitle}>
                {isCreate || EditProcess ? (
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="제목을 입력하세요"
                        style={styles.modalTitleInput}
                    />
                ) : (
                    title
                )}
            </div>
            <div style={styles.modalOption}>
                {isCreate || EditProcess ? (
                    <>
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
                    </>
                ) : (
                    <div>{isAsk ? "문의" : "추천"}</div>
                )}
            </div>
            <div id="itemContent" style={styles.modalContent}>
                {isCreate || EditProcess ? (
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="내용을 입력하세요"
                        style={styles.modalContentInput}
                    />
                ) : (
                    content
                )}
            </div>
            <div style={styles.modalBtnContainer}>
                {buttonOutput}
            </div>
        </dialog>
    )
}

export default PostModal;