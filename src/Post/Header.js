import React from "react";
import logo from '../img/logo.png';

function Header(props) {
    function MenuClickHandler(event) {
        document.querySelectorAll('#menu').forEach((element) => {
            element.style.borderBottom = 'none';
        });
        event.target.style.borderBottom = '2px solid blue';
        if (event.target.innerText === '문의') {
            props.MenuChangeHandler(true);
        } else {
            props.MenuChangeHandler(false);
        }
    }

    return (
        <div id='header'>
            <div id="imgBox"><img src={logo} alt="logo"></img></div>
            <div id="menu" onClick={MenuClickHandler} style={{ borderBottom: '2px solid blue' }}>문의</div>
            <div id="menu" onClick={MenuClickHandler} >추천</div>
            <button className="addPostBtn" onClick={props.openModal}>새 게시글 추가</button>
        </div>
    );
}

export default Header;
