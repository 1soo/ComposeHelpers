import React from "react";
import styles from "../Post/styles";

function Parts(props){

    return(
        <div id="partsModal" style={styles.partsModal}>
            <h3>부품 정보</h3>

            <div className="partsList" style={styles.partsList}>
                <div className="partsBox" style={styles.partsBox}>
                    <label style={styles.partsLabel}>
                        <span style={styles.partsTitle}>CPU</span>
                        {props.EditOrCreate && <input type="text" style={styles.partsText} />}
                    </label>
                </div>

                <div className="partsBox" style={styles.partsBox}>
                    <label style={styles.partsLabel}>
                        <span style={styles.partsTitle}>그래픽카드</span>
                        {props.EditOrCreate && <input type="text" style={styles.partsText} />}
                    </label>
                </div>

                <div className="partsBox" style={styles.partsBox}>
                    <label style={styles.partsLabel}>
                        <span style={styles.partsTitle}>메인보드</span>
                        {props.EditOrCreate && <input type="text" style={styles.partsText} />}
                    </label>
                </div>

                <div className="partsBox" style={styles.partsBox}>
                    <label style={styles.partsLabel}>
                        <span style={styles.partsTitle}>메모리</span>
                        {props.EditOrCreate && <input type="text" style={styles.partsText} />}
                    </label >
                </div>

                <div className="partsBox" style={styles.partsBox}>
                    <label style={styles.partsLabel}>
                        <span style={styles.partsTitle}>파워</span>
                        {props.EditOrCreate && <input type="text" style={styles.partsText} />}
                    </label>
                </div>

                <div className="partsBox" style={styles.partsBox}>
                    <label style={styles.partsLabel}>
                        <span style={styles.partsTitle}>쿨러</span>
                        {props.EditOrCreate && <input type="text" style={styles.partsText} />}
                    </label>
                </div>
            </div>

            <div className="buttonContainer" style={styles.buttonContainer}>
                <button className="closeInfoBtn" style={styles.closeInfoBtn} onClick={props.partCloseHandler}>정보 접기</button>
            </div>
        </div>
    )
}

export default Parts;
