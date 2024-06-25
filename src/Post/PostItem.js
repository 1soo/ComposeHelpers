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
        props.clickFunc(item.postId);
    }

    return(
        <>
            <div style={styles.itemBox} onMouseOver={ItemHoverHandler} onClick={onClickHandler}> 
                <div style={styles.itemTitle}>{item.title}</div>
                <div style={styles.itemDate}>{props.item.date}</div>
                <div style={styles.itemContent}>{item.content}</div>
                {item.isAsk && 
                    <div style={item.isComplete ? styles.itemStatusComplete 
                                                : styles.itemStatusIncomplete}>
                        {item.isComplete?'해결 완료!':'아직 해결되지 않았어요 !'}
                    </div>
                }
            </div>
        </>
    )
}

export default PostItem;