import React, { useState, useEffect, useRef } from "react";
import styles from "./styles";

function PostModal(props) {
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

    // 부품 정보 창
    const [partsOn, setPartsOn] = useState(false);

    // 생성 버튼인지 게시글 클릭인지 여부
    const isCreate = props.isCreate;
    // 모달 Ref
    const modalRef = useRef();

    // 컴포넌트 생성시 값들 초기화
    useEffect(() => {
        modalRef.current.showModal();
        // 아이템 클릭 시
        if (!props.isCreate) {
            if(JSON.parse(localStorage.getItem('postList'))){
                setPostItem(JSON.parse(localStorage.getItem('postList')).filter((post)=>post.postId === props.postId)[0]);
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
            date: date,
            content: content,
            isAsk: isAsk,
            isComplete: isComplete
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
            postId: postItem.postId,
            title: title,
            date: date,
            content: content,
            isAsk: postItem.isAsk,
            isComplete: postItem.isComplete
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
        props.BtnHandlerSet.deleteHandler(postItem.postId);
    }

    //해결 버튼 핸들러
    function EditSolveHandler(event) {
        setIsComplete((prevIsComplete) => {
            const newIsComplete = !prevIsComplete;
            let editItem = {
                postId: postItem.postId,
                title: title,
                date: date,
                content: content,
                isAsk: isAsk,
                isComplete: newIsComplete
            };
            props.BtnHandlerSet.editHandler(editItem);
            setEditProcess(false);
            return newIsComplete;
        });
    }

    // 부품 정보 열기 버튼 핸들러
    function PartOpenHandler(event) {
        setPartsOn(true);
    }

    // 부품 정보 닫기 버튼 핸들러
    function PartCloseHandler(event) {
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
                <div className="partsBox" style={styles.partsBox}>
                    <label style={styles.partsLabel}>
                        <span style={styles.partsTitle}>CPU</span>
                        <input type="text" style={styles.partsText} />
                    </label>
                </div>

                <div className="partsBox" style={styles.partsBox}>
                    <label style={styles.partsLabel}>
                        <span style={styles.partsTitle}>그래픽카드</span>
                        <input type="text" style={styles.partsText} />
                    </label>
                </div>

                <div className="partsBox" style={styles.partsBox}>
                    <label style={styles.partsLabel}>
                        <span style={styles.partsTitle}>메인보드</span>
                        <input type="text" style={styles.partsText} />
                    </label>
                </div>

                <div className="partsBox" style={styles.partsBox}>
                    <label style={styles.partsLabel}>
                        <span style={styles.partsTitle}>메모리</span>
                        <input type="text" style={styles.partsText} />
                    </label >
                </div>

                <div className="partsBox" style={styles.partsBox}>
                    <label style={styles.partsLabel}>
                        <span style={styles.partsTitle}>파워</span>
                        <input type="text" style={styles.partsText} />
                    </label>
                </div>

                <div className="partsBox" style={styles.partsBox}>
                    <label style={styles.partsLabel}>
                        <span style={styles.partsTitle}>쿨러</span>
                        <input type="text" style={styles.partsText} />
                    </label>
                </div>
            </div>

            <div className="buttonContainer" style={styles.buttonContainer}>
                <button className="closeInfoBtn" style={styles.closeInfoBtn} onClick={PartCloseHandler}>정보 접기</button>
            </div>
        </div>

    let viewModal =
        <div id="partsModal" style={styles.partsModal}>
            <h3>부품 정보</h3>

            <div className="partsList" style={styles.partsList}>
                <div className="partsBox" style={styles.partsBox}>
                    <label style={styles.partsLabel}>
                        <span style={styles.partsTitle}>CPU</span>
                    </label>
                </div>

                <div className="partsBox" style={styles.partsBox}>
                    <label style={styles.partsLabel}>
                        <span style={styles.partsTitle}>그래픽카드</span>
                    </label>
                </div>

                <div className="partsBox" style={styles.partsBox}>
                    <label style={styles.partsLabel}>
                        <span style={styles.partsTitle}>메인보드</span>
                    </label>
                </div>

                <div className="partsBox" style={styles.partsBox}>
                    <label style={styles.partsLabel}>
                        <span style={styles.partsTitle}>메모리</span>
                    </label >
                </div>

                <div className="partsBox" style={styles.partsBox}>
                    <label style={styles.partsLabel}>
                        <span style={styles.partsTitle}>파워</span>
                    </label>
                </div>

                <div className="partsBox" style={styles.partsBox}>
                    <label style={styles.partsLabel}>
                        <span style={styles.partsTitle}>쿨러</span>
                    </label>
                </div>
            </div>

            <div className="buttonContainer" style={styles.buttonContainer}>
                <button className="closeInfoBtn" style={styles.closeInfoBtn} onClick={PartCloseHandler}>정보 접기</button>
            </div>
        </div>


    // 제목, 내용, 문의/추천 여부
    let titleOutput, isAskOutput, contentOutput, dateOutput, partsOutput;
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
        
        partsOutput = partsModal;
    } else {
        titleOutput = title;
        contentOutput = content;
        dateOutput = <div style={styles.modalDate}>
                        작성일: {date}
                    </div>;
        partsOutput = viewModal;
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
                <div style={styles.modalReplyContainer}>

                </div>
                <div style={styles.modalBtnContainer}>
                    {buttonOutput}
                </div>
            </div>
            {partsOn && partsOutput}
        </dialog>
    )
}

export default PostModal;