import React, { useState } from "react";
import './PostMain.css';
import logo from './img/logo.png';

// 헤더 컴포넌트
function Header(props){
    function MenuClickHandler(event){
        document.querySelectorAll('#menu').forEach((element)=>{
            element.style.borderBottom = 'none';
        });
        event.target.style.borderBottom = '2px solid blue';
        if(event.target.innerText === '문의'){
            props.MenuChangeHandler(true);
        }else{
            props.MenuChangeHandler(false);
        }
    }

    return(
        <div id='header'>
            <div id="imgBox"><img src={logo} alt="logo"></img></div>
            <div id="menu" onClick={MenuClickHandler} style={{borderBottom:'2px solid blue'}}>문의</div>
            <div id="menu" onClick={MenuClickHandler} >추천</div>
        </div>
    )
}

// 문의 게시글 컴포넌트
function AskSection(props){ 
     
    return(
        <>
            <div id="askSection">
                <div id="title">Not Completed...</div>
                <div id="listContainer">
                    <PostItem />
                    <PostItem />
                    <PostItem />
                    <PostItem />
                </div>
            </div>
            <div id="askSection">
                <div id="title">Completed!</div>
                <div id="listContainer">
                    <PostItem />
                    <PostItem />
                    <PostItem />
                    <PostItem />
                </div>
            </div>
        </>
    )
}

// 추천 게시글 컴포넌트
function RecommendSection(props){
    
    return (
        <div id="recmSection">
            <div id="title">Recommend!</div>
            <div id="listContainer">
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
            </div>
        </div>
    )
}

// 게시글 아이템
function PostItem(props){

    function getDate(){
        let now = new Date();
        let year = now.getFullYear();
        let month = now.getMonth() + 1;
        let date = now.getDate();
        return year + '.' + month + '.' + date;
    }

    let itemObject = {
        title: '제목입니다!',
        content: '내용입니다!',
        date: getDate(),
        viewCnt: 5,
        commentCnt: 10,
        topComment: '제일 상단의 댓글입니다.'
    }

    return(
        <div id="postItem">
              <div id="itemTitle">{itemObject.title}</div>
              <div id="itemContent">{itemObject.content}</div>
              <div id="itemDate">{itemObject.date}</div>
              <div id="itemViewNCommentCnt">{'조회수 ' + itemObject.viewCnt + '회 | 댓글 ' + itemObject.commentCnt + '개'}</div>
              <div id="itemTopComment">{itemObject.topComment}</div>
        </div>
    )
}

// 메인 컴포넌트
function PostMain(props){
    const [isAsk, setIsAsk] = useState(true);

    function MenuChangeHandler(bool){
        setIsAsk(bool);
    }

    return(
        <>
            <Header MenuChangeHandler={MenuChangeHandler} />
            <div id="main">
                {(isAsk) ? <AskSection /> : <RecommendSection />}
            </div>
        </>
    )
}

export default PostMain;