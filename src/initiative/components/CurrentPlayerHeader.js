import React from "react";
import './css/currentPlayerHeader.css';

const CurrentPlayerHeader = ({playerName, nextPlayer}) => {
    return(
        <div className="playerHeader">
            <div>
                <div className="playerName">{playerName}</div>
                <div className="upNext">Up Next: {nextPlayer} </div>
            </div>
            <div className="roundInfo">
                <div>Current Round</div>
                <div className="roundNumber">0</div>
            </div>
            
        </div>
    )

}


export default CurrentPlayerHeader;
