import React from "react";
import EncounterSelector from "./EncounterSelector";
import "./css/initiativePanel.css";


const InitiativePanel = ({combatants, methods, currentPlayer}) => {
    


    return(
        <div className="initiativePanel">
            <div>Initiative</div>
            <ul className="combatantInitiative">
            
                {
                    
                    combatants.map((player, i)=>{
                        
                        return(
                            <li key={i} className={currentPlayer.playerName === player.playerName ? "active" : ""}>
                                <div className="playerPanel">
                                    <div>{player.playerName}</div>
                                    <div>{player.initRoll} </div>
                                    <button onClick={()=>{ methods.updateInitiative(player.playerName, 10)}}>Edit</button>
                                </div>
                                
                            </li> 
                        )           
                    })
                    
                }
            </ul>
                
                <EncounterSelector  addCombatants={methods.addCombatants} />







            </div>

            
    )
}

export default InitiativePanel