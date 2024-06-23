import React, { useState, useEffect } from "react";
import styles from "./styles";

function PostModal(props){
    // 수정 중인지 나타내는 변수
    const [EditProcess, setEditProcess] = useState(false);

    const isCreate = props.isCreate;
    useEffect(()=>{
        // 아이템 클릭 시
        if(props.item){
            document.querySelector('#itemTitle').innerHTML = props.item.title;
            document.querySelector('#itemContent').innerHTML = props.item.content;
        }
        // 작성 버튼 클릭 시
        else{
            // 인풋태그 넣어주세요!
            document.querySelector('#itemTitle').innerHTML = '제목 인풋태그';
            document.querySelector('#itemContent').innerHTML = '내용 인풋태그 or Textarea';
        }

        return (()=>{
            // 모달 창 종료시 실행하고 싶은 코드
        })
    }, [])

    // 등록 버튼 핸들러
    // div 안에 input 태그, 라디오 태그를 사용해서 입력값 받기
    // postId를 제외한 값을 객체로 저장해서 PostList.js의 CreateHandler 호출
     function EntryHandler(event){
        let listItem = {
            postId: 0,
            title: '테스트입니다~',
            content: '테스트 내용입니다~',
            isAsk: true,
            isComplete: false
        }
        props.BtnHandlerSet.createHandler(listItem);
    }

    // 수정 버튼 핸들러
    // 수정 버튼 클릭 시 div 안은 input 태그로 바뀌어야하고, value는 받아온 item의 각 해당하는 값이 된다.
    function EditHandler(event){
        document.querySelector('#itemTitle').innerHTML = '원래 제목 값을 value로 가지는 인풋태그';
        document.querySelector('#itemContent').innerHTML = '원래 내용 값을 value로 가지는 인풋태그 or Textarea';
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
    }

    // 수정 취소 버튼 핸들러
    function EditCancelHandler(event){
        setEditProcess(false);
    }

    // 삭제 버튼 핸들러
    function DeleteHandler(event){
        props.BtnHandlerSet.deleteHandler(props.item.postId);
    }    

    return(
        <div style={styles.modalContainer}>
            <div style={styles.modalBox}>
                <div id="itemTitle" style={styles.modalTitle}></div>
                <div id="itemContent" style={styles.modalContent}></div>
                <div style={styles.modalBtnContainer}>
                    {
                        isCreate
                        ?
                            <>
                                <button onClick={EntryHandler} style={styles.modalCreateBtn}>등록</button>
                                <button onClick={props.modalHandler} style={styles.modalCancelBtn}>취소</button>
                            </>
                        :
                            EditProcess
                            ?
                                <>
                                    <button onClick={EditCompleteHandler} style={styles.modalEditBtn}>수정 완료</button>
                                    <button onClick={EditCancelHandler} style={styles.modalCancelBtn}>취소</button>
                                </>
                            :   
                                <>
                                    <button onClick={EditHandler} style={styles.modalEditBtn}>수정</button>
                                    <button onClick={DeleteHandler} style={styles.modalDeleteBtn}>삭제</button>
                                    <button onClick={props.modalHandler} style={styles.modalCancelBtn}>닫기</button>
                                </>   
                    } 
                </div>
                
            </div>
        </div>
    )
}

export default PostModal;