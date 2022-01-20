import React from "react";
import RoundPanel from "./RoundPanel";
import PlayerName from "./PlayerName";
import './css/currentPlayerHeader.css';

const CurrentPlayerHeader = ({playerName, nextPlayer}) => {
    return(
        <div className="playerHeader">
            <PlayerName playerName={playerName} nextPlayer={nextPlayer} />
            
            <RoundPanel currentRound="1" />
            
        </div>
    )

}


export default CurrentPlayerHeader;
