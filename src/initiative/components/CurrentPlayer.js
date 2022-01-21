import React from "react";
import CurrentPlayerHeader from "./CurrentPlayerHeader";
import StatusEffect from "./StatusEffect";
import './css/currentPlayer.css';

const CurrentPlayer = ({playerData, currentRound}) => {
    //{playerName, id, initRoll, initBonus, statValue, buffs, debuffs}
    return(
        <div className="currentPlayer">
            <CurrentPlayerHeader playerName={playerData.playerName} nextPlayer={playerData.nextPlayer} currentRound={currentRound}   />
            
            <div className="statusEffects">
            
                <StatusEffect statusType={"buff"} statusList={playerData.buffs} />
                <StatusEffect statusType={"debuff"} statusList={playerData.debuffs} />
            </div>
        </div>
    )
    
}

export default CurrentPlayer;

