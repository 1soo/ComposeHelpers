import React, { useState, useEffect, forwardRef, useImperativeHandle } from "react";

const Parts = forwardRef((props, ref) =>{
    // 부품 state 변수
    const [cpu, setCpu] = useState("");
    const [gpCard, setGpCard] = useState("");
    const [mainBoard, setMainBoard] = useState("");
    const [memory, setMemory] = useState("");
    const [power, setPower] = useState("");
    const [cooler, setCooler] = useState("");

    useImperativeHandle(ref, ()=>({
        getValue: () => {
            let parts = {
                cpu: cpu,
                gpCard: gpCard,
                mainBoard: mainBoard,
                memory: memory,
                power: power,
                cooler: cooler
            }
            return parts;
        }
    }));

    useEffect(()=>{
        if(props.EditOrCreate){
            document.querySelectorAll('.parts input').forEach((element) => {
                element.setAttribute('disabled', true);
            });
        }else{
            let savedParts = localStorage.getItem('parts');
            if(savedParts){
                let parts = JSON.parse(savedParts).filter((part)=>part.postId, props.postItem.postId)[0];
                setCpu(parts.cpu);
                setGpCard(parts.gpCard);
                setMainBoard(parts.mainBoard);
                setMemory(parts.memory);
                setPower(parts.power);
                setCooler(parts.cooler);
            }
        }
    }, []);

    // 부품 인풋 change 핸들러
    function PartInputHandler(event){
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

    return(
            <>
                <label>부품 정보</label>
                <table className="parts">
                    <tbody>
                        <tr>
                            <td>CPU</td>
                            <td><input type="text" id='cpu' value={cpu} onChange={PartInputHandler} /></td>
                        </tr>
                        <tr>
                            <td>그래픽카드</td>
                            <td><input type="text" id='gpCard' value={gpCard} onChange={PartInputHandler} /></td>
                        </tr>
                        <tr>
                            <td>메인보드</td>
                            <td><input type="text" id='mainBoard' value={mainBoard} onChange={PartInputHandler} /></td>
                        </tr>
                        <tr>
                            <td>메모리</td>
                            <td><input type="text" id='memory' value={memory} onChange={PartInputHandler} /></td>
                        </tr>
                        <tr>
                            <td>파워</td>
                            <td><input type="text" id='power' value={power} onChange={PartInputHandler} /></td>
                        </tr>
                        <tr>
                            <td>쿨러</td>
                            <td><input type="text" id='cooler' value={cooler} onChange={PartInputHandler} /></td>
                        </tr>
                    </tbody>
                </table>
            </>
    )
})
export default Parts;
