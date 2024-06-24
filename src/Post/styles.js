const styles = {
    // 헤더 
    mainTitle:{
        width: "100%",
        height: "120px",
        color: "333",
        fontWeight: "bold",
        fontSize: "60px",
        textAlign: "center",
        lineHeight: "120px",
        borderBottom: "1px solid #555"
    },
    // 작성하기 버튼
    writeBtnBox:{
        width: "100%",
        height: "50px",
        textAlign: "right"
    },
    writeBtn:{
        width: "120px",
        height: "50px",
        lineHeight: "50px",
        marginTop: "10px",
        marginRight: "60px",
        backgroundColor: "lightgray",
    },
    // 게시글 목록
    listBox:{
        width: "100%",
        height: "360px",
        overflow: 'hidden'
    },
    listTitle:{
        width: "100%",
        height: "50px",
        fontSize: "30px",
        lineHeight: "50px",
        fontWeight: "bold",
        color: "#333"
    },
    listArr:{
        width: "100%",
        height: "310px",
        whiteSpace: "nowrap",
        overflow: "auto",
        overflowY: "hidden"
    },
    // 게시글 아이템
    itemBox:{
        display: "inline-block",
        border: "1px solid #999",
        borderRadius: "10%",
        width: "400px",
        height: "280px",
        margin: "5px 20px",
        textAlign: "center"
    },
    itemTitle:{
        width: "100%",
        height: "70px",
        lineHeight: "70px",
        fontSize: "30px",
        fontWeight: "bold"
    },
    itemContent:{
        width: "100%",
        height: "150px",
        lineHeight: "50px",
    },
    itemIsComplete:{
        width: "100%",
        height: "60px",
        lineHeight: "60px",
    },
    // 게시글 모달
    modalContainer: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: 'none',
        zIndex: 1000,
    },
    modalBox: {
        backgroundColor: 'white',
        borderRadius: '15px',  // 둥근 모서리
        width: '500px',
        padding: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',  // 그림자 추가
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        position: 'relative',
    },
    modalTitle:{
        fontSize: '20px',
        fontWeight: 'bold',
        marginBottom: '20px',
        textAlign: 'center',
    },
    modalTitleInput:{
        width: '100%',
        padding: '10px',
        fontSize: '16px',
        marginBottom: '10px',
        border: '1px solid #ced4da',
        borderRadius: '5px',
        boxSizing: 'border-box',
    },
    modalOption:{
        marginBottom: '20px',
        display: 'flex',
        justifyContent: 'space-around',
    },
    modalContent:{
        fontSize: '16px',
        marginBottom: '20px',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
    },
    modalContentInput:{
        width: '100%',
        padding: '10px',
        fontSize: '16px',
        height: '150px',
        resize: 'none',
        border: '1px solid #ced4da',
        borderRadius: '5px',
        flex: 1,
        boxSizing: 'border-box',
    },
    modalBtnContainer:{
        display: 'flex',
        justifyContent: 'flex-end',
        gap: '10px',
    },
    modalEditBtn:{
        backgroundColor: '#28a745',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        padding: '10px 20px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    },
    modalDeleteBtn:{
        backgroundColor: '#dc3545',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        padding: '10px 20px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    },
    modalCreateBtn:{
        backgroundColor: '#007BFF',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        padding: '10px 20px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    },
    modalCancelBtn:{
        backgroundColor: '#6c757d',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        padding: '10px 20px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    },
    modalSolveBtn:{
        backgroundColor: '#007BFF',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        padding: '10px 20px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    },
    modalNonsolveBtn:{
        backgroundColor: '#dc3545',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        padding: '10px 20px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    }
}

export default styles;