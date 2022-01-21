import React from "react";
import EncounterSelector from "./EncounterSelector";
import "./css/initiativePanel.css";
import Combatants from "./Combatants";



const InitiativePanel = ({combatants, methods, currentPlayer}) => {
    
    return(
        <div className="initiativePanel">
            <div>Initiative</div>
            <ul className="combatantInitiative">
            
                {
                    
                    combatants.map((player, i)=>{
                        
                        return(
                            <li key={i} className={currentPlayer.playerName === player.playerName ? "active" : ""}>
                                <div>{player.playerName}</div>
                                <div>{player.initRoll} </div>
                                <button onClick={()=>{ methods.updateInitiative(player.playerName, 10)}}>Edit</button>
                            </li> 
                        )           

                        

                    })
                    

                }
            </ul>
                <div>
                    <button onClick={methods.advanceRound}>Next Turn</button>
                </div>
                <EncounterSelector  addCombatants={methods.addCombatants} />
                <Combatants />
            </div>
    )
}

export default InitiativePanel