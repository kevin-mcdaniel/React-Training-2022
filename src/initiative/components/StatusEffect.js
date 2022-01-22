import React, {useState} from "react";
import './css/statusEffect.css';
import Modal from "./Modal";


const StatusEffect = ({statusType, statusList}) => {
    const [show, setShow] = useState(false);
    const buffText = (statusType === "buff") ? "Buff" : "Debuff";
    return(

            <div>
                <div className="statusHeader">
                    <div>Current {buffText}s</div>
                    <div>
                        <button onClick={() => setShow(true)}>Add {buffText}</button>
                    </div>
                </div>
                <ul className="statusList">
                    {
                        statusList.map(({statusEffect, remaining},i)=>{
                            return(
                                <li key={i}>
                                    <div>{statusEffect}</div>
                                    <div>{remaining}</div>
                                </li>
                            )
                        })

                    }
                </ul>
                <Modal onClose={() => setShow(false)} show={show} title={`Add ${buffText}`}>
                    <div className="fields">
                        <div className="field">
                            <label>Effect:</label>
                            <input type="text" name="effect" />
                        </div>
                        <div className="field">
                            <label>Duration:</label>
                            <input type="text" name="duration" />
                        </div>
                        <button>Add {buffText}</button>
                    </div>
                </Modal>
            </div>
        )
    
}

export default StatusEffect;