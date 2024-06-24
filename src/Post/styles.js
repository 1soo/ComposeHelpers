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
    modalTitle:{
        width: "800px",
        height: "150px",
        margin: "0px auto",
        fontSize: "45px",
        lineHeight: "150px",
        borderBottom: "1px solid #999"
    },
    modalTitleInput:{
        width: "800px",
        height: "80px",
        margin: "0px auto",
        fontSize: "30px",
        borderBottom: "1px solid #999"
    },
    modalContent:{
        width: "1000px",
        height: "500px",
        margin: "0px auto"
    },
    modalContentInput:{
        width: "1000px",
        height: "500px",
        margin: "0px auto"
    },
    modalBtnContainer:{
        width: "800px",
        height: "120px",
        margin: "10px auto",
        textAlign: "center"
    },
    modalEditBtn:{
        width: "150px",
        height: "60px",
        margin: "20px 50px",
        fontSize: "20px",
        backgroundColor: "lightgreen"
    },
    modalDeleteBtn:{
        width: "150px",
        height: "60px",
        margin: "20px 50px",
        fontSize: "20px",
        backgroundColor: "lightcoral"
    },
    modalCreateBtn:{
        width: "150px",
        height: "60px",
        margin: "20px 50px",
        fontSize: "20px",
        backgroundColor: "lightgreen"
    },
    modalCancelBtn:{
        width: "150px",
        height: "60px",
        margin: "20px 50px",
        fontSize: "20px",
        backgroundColor: "lightskyvlue"
    }
}

export default styles;