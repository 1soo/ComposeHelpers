import React, { useState } from "react";
import styles from "../Post/styles";

function Parts(props){
    const [cpu, setCpu] = useState("");
    const [gpCard, setGpCard] = useState("");
    const [mainBoard, setMainBoard] = useState("");
    const [memory, setMemory] = useState("");
    const [power, setPower] = useState("");
    const [cooler, setCooler] = useState("");

    function cpuChangeHandler(event) {
        setCpu(event.target.value);
    }

    function mainBoardChangeHandler(event) {
        setMainBoard(event.target.value);
    }

    function gpCardChangeHandler(event) {
        setGpCard(event.target.value);
    }

    function memoryChangeHandler(event) {
        setMemory(event.target.value);
    }

    function powerChangeHandler(event) {
        setPower(event.target.value);
    }

    function coolerChangeHandler(event) {
        setCooler(event.target.value);
    }

    return(
        <div id="partsModal" style={styles.partsModal}>
            <h3>부품 정보</h3>

            <div className="partsList" style={styles.partsList}>
                <div className="partsBox" style={styles.partsBox}>
                    <label style={styles.partsLabel}>
                        <span style={styles.partsTitle}>CPU</span>
                        {props.EditOrCreate && <input type="text" style={styles.partsText} value={cpu} onChange={cpuChangeHandler}/>}
                    </label>
                </div>

                <div className="partsBox" style={styles.partsBox}>
                    <label style={styles.partsLabel}>
                        <span style={styles.partsTitle}>그래픽카드</span>
                        {props.EditOrCreate && <input type="text" style={styles.partsText} value={gpCard} onChange={gpCardChangeHandler}/>}
                    </label>
                </div>

                <div className="partsBox" style={styles.partsBox}>
                    <label style={styles.partsLabel}>
                        <span style={styles.partsTitle}>메인보드</span>
                        {props.EditOrCreate && <input type="text" style={styles.partsText} value={mainBoard} onChange={mainBoardChangeHandler}/>}
                    </label>
                </div>

                <div className="partsBox" style={styles.partsBox}>
                    <label style={styles.partsLabel}>
                        <span style={styles.partsTitle}>메모리</span>
                        {props.EditOrCreate && <input type="text" style={styles.partsText} value={memory} onChange={memoryChangeHandler}/>}
                    </label >
                </div>

                <div className="partsBox" style={styles.partsBox}>
                    <label style={styles.partsLabel}>
                        <span style={styles.partsTitle}>파워</span>
                        {props.EditOrCreate && <input type="text" style={styles.partsText} value={power} onChange={powerChangeHandler}/>}
                    </label>
                </div>

                <div className="partsBox" style={styles.partsBox}>
                    <label style={styles.partsLabel}>
                        <span style={styles.partsTitle}>쿨러</span>
                        {props.EditOrCreate && <input type="text" style={styles.partsText} value={cooler} onChange={coolerChangeHandler}/>}
                    </label>
                </div>
            </div>

            <div className="buttonContainer" style={styles.buttonContainer}>
                <button className="closeInfoBtn" style={styles.closeInfoBtn} onClick={props.partCloseHandler} >정보 접기</button>
                {props.EditOrCreate && props.completeBtn}
            </div>
        </div>
    )
}

export default Parts;
