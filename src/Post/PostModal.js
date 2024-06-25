import React, { useState, useEffect, useRef } from "react";
import styles from "./styles";

function PostModal(props) {
    // 수정 중인지 나타내는 변수
    const [EditProcess, setEditProcess] = useState(false);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [isAsk, setIsAsk] = useState(true);
    const [isComplete, setIsComplete] = useState(false);

    const isCreate = props.isCreate;
    const modalRef = useRef();

    useEffect(() => {
        modalRef.current.showModal();
        // 아이템 클릭 시
        if (props.item) {
            setTitle(props.item.title);
            setContent(props.item.content);
            setIsAsk(props.item.isAsk);
            setIsComplete(props.item.isComplete)
        }
        // 작성 버튼 클릭 시
        else {
            setTitle("");
            setContent("");
            setIsAsk(true);
        }

        return (() => {
            // 모달 창 종료시 실행하고 싶은 코드
        })
    }, [props.item])

    // 등록 버튼 핸들러
    // div 안에 input 태그, 라디오 태그를 사용해서 입력값 받기
    // postId를 제외한 값을 객체로 저장해서 PostList.js의 CreateHandler 호출
    function EntryHandler(event) {

        if (!title.trim() || !content.trim()) {
            alert("제목과 내용을 모두 입력하세요.");
            return;
        }

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
            postId: props.item.postId,
            title: title,
            content: content,
            isAsk: props.item.isAsk,
            isComplete: props.item.isComplete
        }
        props.BtnHandlerSet.editHandler(editItem);
        setEditProcess(false);
    }

    // 수정 취소 버튼 핸들러
    function EditCancelHandler(event) {
        setEditProcess(false);
    }

    // 삭제 버튼 핸들러
    function DeleteHandler(event) {
        props.BtnHandlerSet.deleteHandler(props.item.postId);
    }

    //해결 버튼 핸들러
    function EditSolveHandler(event) {
        setIsComplete((prevIsComplete) => {
            const newIsComplete = !prevIsComplete;
            let editItem = {
                postId: props.item.postId,
                title: title,
                content: content,
                isAsk: isAsk,
                isComplete: newIsComplete
            };
            props.BtnHandlerSet.editHandler(editItem);
            setEditProcess(false);
            return newIsComplete;
        });
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
                    onClick={EditSolveHandler}
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

    let partsModal =
        <div id="partsModal" style={styles.partsModal}>
            <h3>부품 정보</h3>

            <div className="partsList" style={styles.partsList}>
               
                    <button style={styles.partBtn}>CPU</button>
                

               
                    <button style={styles.partBtn}>그래픽카드</button>
               

             
                    <button style={styles.partBtn}>메인보드</button>
             

               
                    <button style={styles.partBtn}>메모리</button>
                

            
                    <button style={styles.partBtn}>파워</button>
               

               
                    <button style={styles.partBtn}>쿨러</button>
             
            </div>

            <div className="buttonContainer" style={styles.buttonContainer}>
                <button className="closeInfoBtn" style={styles.closeInfoBtn}>정보 접기</button>
            </div>
        </div>


    // 제목, 내용, 문의/추천 여부
    let titleOutput, isAskOutput, contentOutput;
    if (isCreate || EditProcess) {
        titleOutput = <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="제목을 입력하세요"
            style={styles.modalTitleInput}
        />;
        isAskOutput = (isCreate || EditProcess) ? (
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
            </>) : null;
        contentOutput = <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="내용을 입력하세요"
            style={styles.modalContentInput} />;
    } else {
        titleOutput = title;
        contentOutput = content;
    }


    return (
        <>
            <dialog ref={modalRef} style={styles.modalContainer}>
                <div style={styles.modalBox}>
                    <div id="itemTitle" style={styles.modalTitle}>
                        {titleOutput}
                    </div>
                    {isAskOutput && (
                        <div style={styles.modalOption}>
                            {isAskOutput}
                        </div>
                    )}
                    <div id="itemContent" style={styles.modalContent}>
                        {contentOutput}
                        <button id="modalPartsBtn" style={styles.modalPartsBtn}>부품 정보</button>
                    </div>
                    <div style={styles.modalBtnContainer}>
                        {buttonOutput}
                    </div>
                </div>

                {partsModal}
            </dialog>


           
        </>
    )
}

export default PostModal;