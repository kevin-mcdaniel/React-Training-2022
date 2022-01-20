import React from "react";
import "./css/roundPanel.css";

const RoundPanel = ({currentRound}) => {

    return (
        <div className="roundInfo">
            <div>Current Round</div>
            <div className="roundNumber">{currentRound}</div>
        </div>
    )
}

export default RoundPanel;


    