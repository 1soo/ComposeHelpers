const styles = {
    mainContainer:{
        paddingLeft: '40px',
        paddingRight: '40px',
    },
    // 헤더 
    mainTitle:{
        width: '100%',
        height: '100px',
        color: '333',
        // fontWeight: 'bold',
        fontSize: '60px',
        textAlign: 'center',
        lineHeight: '120px',
        borderBottom: '1px solid #555'
    },
    // 작성하기 버튼
    writeBtnBox:{
        textAlign: 'right',
        margin: '20px 0',
    },
    writeBtn:{
        padding: '10px 20px',
        fontSize: '16px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        backgroundColor: '#lightgray',
        cursor: 'pointer',
    },
    // 게시글 목록
    listBox:{
        width: '100%',
        height: '360px',
        overflowX: 'auto',
        overflowY: 'hidden',
        marginBottom: '20px',
        display: 'flex',
        flexDirection: 'column',
    },
    listTitle:{
        width: '100%',
        height: '50px',
        fontSize: '30px',
        lineHeight: '50px',
        fontWeight: 'bold',
        color: '#333'
    },
    listArr:{
        display: 'flex',
        flexWrap: 'nowrap',
        gap: '10px',
    },
    // 게시글 아이템
    itemBox:{
        backgroundColor: 'white',
        borderRadius: '15px',
        width: '300px',
        height: '190px',
        minWidth: '300px',
        minHeight: '180px',
        padding: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        margin: '10px 5px',
        wordWrap: 'break-word',
        overflowWrap: 'break-word',
    },
    itemTitle:{
        fontSize: '30px',
        fontWeight: 'bold',
        marginBottom: '5px',
        textAlign: 'center',
        wordWrap: 'break-word',
        overflowWrap: 'break-word',
    },
    itemDate: {
        fontSize: '14px',
        color: '#666',
        marginTop: '5px',
        marginBottom: '5px',
        textAlign: 'right',
    },
    itemContent:{
        fontSize: '20px',
        marginBottom: '10px',
        wordWrap: 'break-word',
        overflowWrap: 'break-word',
        display: '-webkit-box', 
        WebkitLineClamp: 4, //(보여줄 라인 수)
        WebkitBoxOrient: 'vertical', 
        overflow: 'hidden', 
        textOverflow: 'ellipsis',
        flexGrow: 1,
    },
    itemStatusComplete: {
        color: 'green',
        fontWeight: 'bold',
        fontSize: '18px',
        marginTop: '10px',
    },
    itemStatusIncomplete: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: '18px',
        marginTop: '10px',
    },

    // 게시글 모달
    modalContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: 'none',
    },
    modalBox: {
        position: 'relative',
        backgroundColor: 'white',
        borderRadius: '15px',  // 둥근 모서리
        width: '500px',
        height: '650px',
        padding: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',  // 그림자 추가
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
    },
    modalTitle:{
        fontSize: '20px',
        fontWeight: 'bold',
        marginBottom: '5px',
        textAlign: 'center',
    },
    modalTitleInput:{
        width: '100%',
        padding: '10px',
        fontSize: '16px',
        marginBottom: '5px',
        border: '1px solid #ced4da',
        borderRadius: '5px',
        boxSizing: 'border-box',
    },
    modalOption:{
        marginBottom: '10px',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
    },
    modalDate: {
        fontSize: '14px',
        color: '#666',
        marginTop: '10px',
        marginBottom: '5px',
        textAlign: 'right',
    },
    modalContent:{
        width: '100%',
        height: '300px',
        marginBottom: '10px',
        fontSize: '16px',
        display: 'flex',
        flexDirection: 'row',
        resize: 'none',
        border: '1px solid #ced4da',
        borderRadius: '5px',
        boxSizing: 'border-box',
        wordWrap: 'break-word',
        overflowWrap: 'break-word',
        borderCollapse: 'collapse'
    },
    modalContentInput:{
        width: '100%',
        height: '300px',
        padding: '10px',
        fontSize: '16px',
        resize: 'none',
        borderRadius: '5px',
        boxSizing: 'border-box',
        wordWrap: 'break-word',
        overflowWrap: 'break-word',
    },
    modalReplyContainer:{
        width: '100%',
        height: '220px',
        border: 'none',
    },
    modalBtnContainer:{
        position: 'absolute',
        bottom: '10px',
        right: '20px',
        width: '90%',
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
    },

    modalPartsBtn: {
        backgroundColor: 'rgb(51,51,51)',
        color: 'white',
        width: '30px',
        height: '300px',
    },

    partsList: {
        margin: "80px 0"
    },

    partsModal: {
        backgroundColor: '#CF9FFF',
        borderRadius: '15px',
        marginLeft: '10px',
        width: '200px',
        height: '690px',
        textAlign: 'center'
    },

    partsLabel: {
        display: "flex"
    },

    partsBox: {
        margin: "15px 0"
    },

    partsText: {
        backgroundColor: 'transparent',
        width: '100px',
        height: '25px',
        borderRadius: '15px',
        marginLeft: "auto"

    },
    buttonContainer: {
        marginTop: '100px'
    },

    closeInfoBtn: {
        backgroundColor: 'white',
        borderRadius: '15px',
        width: '100px',
        height: '50px',
        marginTop: "130px"
    },

    partsTitle: {
        marginLeft: "5px"
    },
    modalReplyListContainer: {
        width: '100%',
        height: '150px',
        overflowY: 'auto',
        backgroundColor: '#f9f9f9',
        borderRadius: '5px',
        border: '1px solid #ddd',
        marginBottom: '15px'
    },
    commentContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px',
        marginBottom: '10px',
        backgroundColor: '#fff',
        borderRadius: '5px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    },
    commentDetails: {
        display: 'flex',
        alignItems: 'center',
    },
    commentAvatar: {
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        marginRight: '10px',
    },
    commentTextContainer: {
        display: 'flex',
        flexDirection: 'column',
    },
    commentAuthor: {
        fontWeight: 'bold',
        fontSize: '14px',
    },
    commentDate: {
        fontSize: '12px',
        color: '#999',
    },
    commentText: {
        marginTop: '5px',
        fontSize: '14px',
    },
    commentActions: {
        display: 'flex',
        gap: '10px',
    },
    editButton: {
        backgroundColor: '#4CAF50',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        padding: '5px 10px',
        cursor: 'pointer',
    },
    deleteButton: {
        backgroundColor: '#f44336',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        padding: '5px 10px',
        cursor: 'pointer',
    },
    commentEdit:{
        marginRight: '175px'
    },
    modalReplyInputContainer:{
        position: 'relative',
        width: '100%',
        height: '70px'    
    },
    modalReplyInput:{
        width: '470px',
        height: '70px',
        resize: 'none',
        padding: '0px',
        border: '1px solid #ced4da',
        borderRadius: '5px',
    },
    modalReplyInputBtn:{
        position: 'absolute',
        right: '0px',
        width: '30px',
        height: '70px',
        resize: 'none',
        padding: '0px',
        border: '1px solid #00AE68',
        borderRadius: '5px',
        color: 'white',
        backgroundColor: '#00AE68',
        fontWeight: 'bold'
    },

    completeOutPut: {
        backgroundColor: 'white',
        borderRadius: '15px',
        width: '100px',
        height: '50px',
        marginTop: "130px"
    }
}

export default styles;