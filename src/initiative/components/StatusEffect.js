import React, {useState} from "react";
import './css/statusEffect.css';
import Modal from "./Modal";
//Going to move buff/debuff buttons/modal to initiative component instead of player component

const StatusEffect = ({statusType, statusList}) => {
    if(statusList.length){
        return(

            <div>
                
                <div className="statusHeader">
                    <div>Current {(statusType === "buff") ? "Buff" : "Debuff"}s</div>
                    
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
                
            </div>
        )
    } else {
        return <></>
    }
    
    
}

export default StatusEffect;