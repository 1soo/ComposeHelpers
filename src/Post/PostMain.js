import React, { useState, useEffect, useRef } from "react";
import './PostMain.css';
import Header from './Header';
import Parts from "../Parts/Parts";

function AskSection({ items, openViewModal }) {
    const notCompletedItems = items.filter(item => !item.completed && item.section === 'ask');
    const completedItems = items.filter(item => item.completed && item.section === 'ask');

    return (
        <>
            <div id="askSection">
                <div id="title">Not Completed...</div>
                <div id="listContainer">
                    {notCompletedItems.map((item, index) => <PostItem key={item.postId} item={item} openViewModal={openViewModal} />)}
                </div>
            </div>
            <div id="askSection">
                <div id="title">Completed!</div>
                <div id="listContainer">
                    {completedItems.map((item, index) => <PostItem key={item.postId} item={item} openViewModal={openViewModal} />)}
                </div>
            </div>
        </>
    );
}

function RecommendSection({ items, openViewModal }) {
    const recommendItems = items.filter(item => item.section === 'recommend');
    
    return (
        <div id="recmSection">
            <div id="title">Recommend!</div>
            <div id="listContainer">
                {recommendItems.map((item, index) => <PostItem key={item.postId} item={item} openViewModal={openViewModal} />)}
            </div>
        </div>
    );
}

function AddPostModal({ onClose, onAdd, postId, setPostId }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [isCompleted, setIsCompleted] = useState(false);
    const [section, setSection] = useState('ask');

    const partsRef = useRef();

    function getDate() {
        let date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        return `${year}.${month}.${day}`;
    }

    function handleAddPost() {
        const newItem = {
            postId: postId,
            title:title,
            content:content,
            date: getDate(),
            commentCnt: 0,
            topComment: '',
            completed: isCompleted,
            section:section
        };
        onAdd(newItem);

        let partsList = [];
        let storedParts = localStorage.getItem('parts');
        if(storedParts){
            partsList = JSON.parse(storedParts);
        }
        let parts = {...partsRef.current.getValue(), postId: postId};
        partsList.push(parts);
        localStorage.setItem('parts', JSON.stringify(partsList));

        setPostId(postId + 1);
        onClose();
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>새 게시글 추가</h2>
                <div className="inputBox">
                    <label>제목</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                    <label>내용</label>
                    <textarea value={content} onChange={(e) => setContent(e.target.value)}></textarea>
                    <label>게시글 구분</label>
                    <input type="radio" value={section} onChange={(e) => setSection('ask')} checked={section === 'ask'} /> 문의 게시글
                    <input type="radio" value={section} onChange={(e) => setSection('recommend')} checked={section === 'recommend'} /> 추천 게시글
                    <Parts EditOrCreate={false} ref={partsRef} />
                </div>
                <button onClick={handleAddPost}>작성 완료</button>
            </div>
        </div>
    );
}

function PostItem({ item, openViewModal }) {
    return (
        <div id="postItem" onClick={openViewModal}>
            <div id="itemTitle">{item.title}</div>
            <div id="itemContent">{item.content}</div>
            <div id="itemDate">{item.date}</div>
            <div id="itemCommentCnt">{'댓글 ' + item.commentCnt + '개'}</div>
            <div id="itemTopComment">{item.topComment}</div>
        </div>
    );
}

function PostView(props){

    return(
        <div className="modal">
            <div className="viewContainer">
                <div className="title">제목</div>
                <div className="content">내용</div>
                <div className="parts">
                    
                </div>
                <div className="reply">댓글</div>
                <button className="closeBtn" onClick={props.closeViewModal}>&times;</button>
            </div>
        </div>
    )
}

function PostMain(props) {
    const [isAsk, setIsAsk] = useState(true);
    const [items, setItems] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [viewModal, setViewModal] = useState(false);
    const [postId, setPostId] = useState(0);

    useEffect(() => {
        const storedItems = localStorage.getItem('items');
        if (storedItems) {
            setItems(JSON.parse(storedItems));
            if(JSON.parse(storedItems).length > 0) {
                setPostId(JSON.parse(storedItems)[JSON.parse(storedItems).length-1].postId + 1);
            } else {
                setPostId(0);
            }
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items));
    }, [items]);

    function MenuChangeHandler(bool) {
        setIsAsk(bool);
    }

    function handleAddPost(newItem) {
        setItems([...items, newItem]);
    }

    function openModal() {
        setIsModalOpen(true);
    }

    function closeModal() {
        setIsModalOpen(false);
    }

    function openViewModal(){
        setViewModal(true);
    }

    function closeViewModal(){
        setViewModal(false);
    }

    return (
        <>
            <Header MenuChangeHandler={MenuChangeHandler} openModal={openModal} />
            <div id="main">
                {isAsk ? <AskSection items={items} openViewModal={openViewModal}/> : <RecommendSection items={items} openViewModal={openViewModal}/>}
                {isModalOpen && <AddPostModal onClose={closeModal} onAdd={handleAddPost} postId={postId} setPostId={setPostId} />}
                {viewModal && <PostView closeViewModal={closeViewModal} />}
            </div>
        </>
    );
}

export default PostMain;
