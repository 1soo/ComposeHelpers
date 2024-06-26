import React, { useState, useCallback, useEffect } from "react";
import styles from "./styles";
import PostItem from "./PostItem";
import PostModal from "./PostModal";

function PostList(props) {
    const [modalOn, setModalOn] = useState(false);
    // 게시글 배열
    const [recmArr, setRecmArr] = useState([]);
    const [askArr, setAskArr] = useState([]);
    // 작성 모달 or 수정 모달 판단 변수
    const [isCreate, setIsCreate] = useState(false);
    // 아이템 클릭시 모달에 띄울 게시글아이템 id
    const [postId, setPostId] = useState();

    // 저장할 postId값 초기화
    useEffect(()=>{
        
    }, []);

    // 모달 활성화 여부
    let ModalHandler = useCallback((event) => {
        setModalOn(modalOn => !modalOn);
    }, []);

    // 작성 버튼 핸들러
    function WriteBtnHandler(event) {
        setPostId();
        setIsCreate(true);
        setModalOn(true);
    }

    // 아이템 클릭 핸들러
    function ItemClickHandler(itemId) {
        setPostId(itemId);
        setIsCreate(false);
        setModalOn(true);
    }

    // 추천 게시글과 문의 게시글 분류
    useEffect(() => {
        let postArray = [];
        if (localStorage.getItem('postList')) {
            postArray = JSON.parse(localStorage.getItem('postList'));
            let arrPosts = postArray.filter((post) => post.isAsk);
            let recmPosts = postArray.filter((post) => !post.isAsk);
            setAskArr(arrPosts);
            setRecmArr(recmPosts);
        };

    }, [modalOn]);

    return (
        <div style={styles.mainContainer}>
            <div style={styles.mainTitle}>조립 헬퍼즈</div>
            <div style={styles.writeBtnBox}>
                <button style={styles.writeBtn} onClick={WriteBtnHandler}>글 작성하기</button>
            </div>
            <div style={styles.listBox}>
                <div style={styles.listTitle}>추천 게시글</div>
                <div style={styles.listArr}>
                    {recmArr.map((post) => {
                        return <PostItem key={post.postId} item={post} clickFunc={ItemClickHandler} />
                    })}
                </div>
            </div>
            <div style={styles.listBox}>
                <div style={styles.listTitle}>문의 게시글</div>
                <div style={styles.listArr}>
                    {askArr.map((post) => {
                        return <PostItem key={post.postId} item={post} clickFunc={ItemClickHandler} />
                    })}
                </div>
            </div>
            {modalOn && <PostModal modalHandler={ModalHandler} postId={postId} isCreate={isCreate} />}
        </div>
    )
}

export default PostList;