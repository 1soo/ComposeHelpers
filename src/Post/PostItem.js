import styles from "./styles";

function PostItem(props){
    // 전달받은 게시글 객체
    const item = props.item;

    // 아이템 오버 이벤트
    function ItemHoverHandler(event){
        event.target.style.cursor = "pointer";
    }

    // 아이템 클릭 핸들러
    function onClickHandler(event){
        props.clickFunc(item);
    }

    return(
        <>
            <div style={styles.itemBox} onMouseOver={ItemHoverHandler} onClick={onClickHandler}> 
                <div style={styles.itemTitle}>{item.title}</div>
                <div style={styles.itemContent}>{item.content}</div>
                {item.isAsk && <div style={styles.itemIsComplete}>{item.isComplete}</div>}
            </div>
        </>
    )
}

export default PostItem;