import React, { useState } from "react";
import styles from "../Post/styles";

function Parts(props){

    // 부품 state 변수
    const [cpu, setCpu] = useState("");
    const [gpCard, setGpCard] = useState("");
    const [mainBoard, setMainBoard] = useState("");
    const [memory, setMemory] = useState("");
    const [power, setPower] = useState("");
    const [cooler, setCooler] = useState("");

    // 부품 인풋 change 핸들러
    function PartInputChangeHandler(event){
        switch(event.target.id){
            case 'cpu':
                setCpu(event.target.value);
                break;
            case 'gpCard':
                setGpCard(event.target.value);
                break;
            case 'mainBoard':
                setMainBoard(event.target.value);
                break;
            case 'memory':
                setMemory(event.target.value);
                break;
            case 'power':
                setPower(event.target.value);
                break;
            case 'cooler':
                setCooler(event.target.value);
                break;
            default:
                break;
        }
    }

    // 입력 완료 버튼
    let completeOutPut = <button id="inputCompleteBtn" style={styles.completeOutPut} onClick={PartInputCompleteHandler}>입력 완료</button>

    // 입력 완료 버튼 핸들러
    function PartInputCompleteHandler(event){
        if (!cpu.trim() || !gpCard.trim() || !mainBoard.trim() || !memory.trim() || !power.trim() || !cooler.trim()) {
            alert("부품 정보를 모두 입력하세요.");
            return;
        }
        let partObj = {
            partId: 0,
            cpu: cpu,
            gpCard: gpCard,
            mainBoard: mainBoard,
            memory: memory,
            power: power,
            cooler: cooler
        }
        props.PartInputSaveHandler(partObj);
    }

    return(
        <div id="partsModal" style={styles.partsModal}>
            <h3>부품 정보</h3>

            <div className="partsList" style={styles.partsList}>
                <div className="partsBox" style={styles.partsBox}>
                    <label style={styles.partsLabel}>
                        <span style={styles.partsTitle}>CPU</span>
                        {props.EditOrCreate && <input type="text" id="cpu" style={styles.partsText} value={cpu} onChange={PartInputChangeHandler}/>}
                    </label>
                </div>

                <div className="partsBox" style={styles.partsBox}>
                    <label style={styles.partsLabel}>
                        <span style={styles.partsTitle}>그래픽카드</span>
                        {props.EditOrCreate && <input type="text" id="gpCard" style={styles.partsText} value={gpCard} onChange={PartInputChangeHandler}/>}
                    </label>
                </div>

                <div className="partsBox" style={styles.partsBox}>
                    <label style={styles.partsLabel}>
                        <span style={styles.partsTitle}>메인보드</span>
                        {props.EditOrCreate && <input type="text" id="mainBoard" style={styles.partsText} value={mainBoard} onChange={PartInputChangeHandler}/>}
                    </label>
                </div>

                <div className="partsBox" style={styles.partsBox}>
                    <label style={styles.partsLabel}>
                        <span style={styles.partsTitle}>메모리</span>
                        {props.EditOrCreate && <input type="text" id="memory" style={styles.partsText} value={memory} onChange={PartInputChangeHandler}/>}
                    </label >
                </div>

                <div className="partsBox" style={styles.partsBox}>
                    <label style={styles.partsLabel}>
                        <span style={styles.partsTitle}>파워</span>
                        {props.EditOrCreate && <input type="text" id="power" style={styles.partsText} value={power} onChange={PartInputChangeHandler}/>}
                    </label>
                </div>

                <div className="partsBox" style={styles.partsBox}>
                    <label style={styles.partsLabel}>
                        <span style={styles.partsTitle}>쿨러</span>
                        {props.EditOrCreate && <input type="text" id="cooler" style={styles.partsText} value={cooler} onChange={PartInputChangeHandler}/>}
                    </label>
                </div>
            </div>

            <div className="buttonContainer" style={styles.buttonContainer}>
                <button className="closeInfoBtn" style={styles.closeInfoBtn} onClick={props.partCloseHandler} >정보 접기</button>
                {props.EditOrCreate && completeOutPut}
            </div>
        </div>
    )
}

export default Parts;
