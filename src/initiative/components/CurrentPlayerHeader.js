import React from "react";
import RoundPanel from "./RoundPanel";
import PlayerName from "./PlayerName";
import './css/currentPlayerHeader.css';

const CurrentPlayerHeader = ({playerName, nextPlayer, currentRound}) => {
    return(
        <div className="playerHeader">
            <PlayerName playerName={playerName} nextPlayer={nextPlayer} />
            
            <RoundPanel currentRound={currentRound} />
            
        </div>
    )

}


export default CurrentPlayerHeader;
