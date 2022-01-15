import React from "react";
import EncounterSelector from "./EncounterSelector";



const InitiativePanel = ({combatants, methods}) => {
    return(
        <div className="initiativePanel">
            <div>Initiative</div>
            
            <ul>
            
                {
                    combatants.map((player, i)=>{
                        return(
                            <li key={i}>
                                <span>{player.playerName} - Initiative:  {player.initRoll} </span>
                                <button onClick={()=>{ methods.updateInitiative(player.playerName, 10)}}>Edit</button>
                            </li> 
                        )           

                        

                    })
                    

                }
            </ul>
                <div>
                    <button>Add PC</button><button>Add NPC</button>
                </div>
                <EncounterSelector  addCombatants={methods.addCombatants} />
            </div>
    )
}

export default InitiativePanel