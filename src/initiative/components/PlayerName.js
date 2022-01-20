import React from "react";

const PlayerName = ({playerName, nextPlayer}) =>{

    return(
        <div>
            <div className="playerName">{playerName}</div>
            <div className="upNext">Up Next: {nextPlayer} </div>
        </div>
    )
}

export default PlayerName;