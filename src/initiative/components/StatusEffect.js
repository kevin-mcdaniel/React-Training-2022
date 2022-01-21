import React from "react";
import './css/statusEffect.css';

const getHeader = (statusType) => (statusType === "buff") ? "Current Buffs" : "Current Debuffs";
const addButton = (statusType) => (statusType === "buff") ? <button>Add Buff</button> : <button>Add Debuff</button>;
const StatusEffect = ({statusType, statusList}) => {
    
return(

        <div>
            <div className="statusHeader">
                <div>{ getHeader(statusType) }</div>
                <div>{ addButton(statusType) }</div>
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
    
}

export default StatusEffect;