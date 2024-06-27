import React, { useState, useEffect } from "react";
import './PostMain.css';
import Header from './Header';

function AskSection({ items }) {
    const notCompletedItems = items.filter(item => !item.completed && item.section === 'ask');
    const completedItems = items.filter(item => item.completed && item.section === 'ask');

    return (
        <>
            <div id="askSection">
                <div id="title">Not Completed...</div>
                <div id="listContainer">
                    {notCompletedItems.map((item, index) => <PostItem key={index} item={item} />)}
                </div>
            </div>
            <div id="askSection">
                <div id="title">Completed!</div>
                <div id="listContainer">
                    {completedItems.map((item, index) => <PostItem key={index} item={item} />)}
                </div>
            </div>
        </>
    );
}

function RecommendSection({ items }) {
    const recommendItems = items.filter(item => item.section === 'recommend');
    
    return (
        <div id="recmSection">
            <div id="title">Recommend!</div>
            <div id="listContainer">
                {recommendItems.map((item, index) => <PostItem key={index} item={item} />)}
            </div>
        </div>
    );
}

function AddPostModal({ onClose, onAdd }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [isCompleted, setIsCompleted] = useState(false);
    const [section, setSection] = useState('ask');

    function getDate() {
        let date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        return `${year}.${month}.${day}`;
    }

    function handleAddPost() {
        const newItem = {
            title:title,
            content:content,
            date: getDate(),
            commentCnt: 0,
            topComment: '',
            completed: isCompleted,
            section:section
        };
        onAdd(newItem);
        onClose();
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>새 게시글 추가</h2>
                <label>제목:</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                <label>내용:</label>
                <textarea value={content} onChange={(e) => setContent(e.target.value)}></textarea>
                <label>섹션:</label>
                <select value={section} onChange={(e) => setSection(e.target.value)}>
                    <option value="ask">문의</option>
                    <option value="recommend">추천</option>
                </select>
                <button onClick={handleAddPost}>추가</button>
            </div>
        </div>
    );
}

function PostItem({ item }) {
    return (
        <div id="postItem">
            <div id="itemTitle">{item.title}</div>
            <div id="itemContent">{item.content}</div>
            <div id="itemDate">{item.date}</div>
            <div id="itemCommentCnt">{'댓글 ' + item.commentCnt + '개'}</div>
            <div id="itemTopComment">{item.topComment}</div>
        </div>
    );
}

function PostMain(props) {
    const [isAsk, setIsAsk] = useState(true);
    const [items, setItems] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const storedItems = localStorage.getItem('items');
        if (storedItems) {
            setItems(JSON.parse(storedItems));
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

    return (
        <>
            <Header MenuChangeHandler={MenuChangeHandler} openModal={openModal} />
            <div id="main">
                {isAsk ? <AskSection items={items} /> : <RecommendSection items={items} />}
                {isModalOpen && <AddPostModal onClose={closeModal} onAdd={handleAddPost} />}
            </div>
        </>
    );
}

export default PostMain;
