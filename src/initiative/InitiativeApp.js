/*
TODOs
Need a way to delay in a turn
array.splice()? idea const changeValuePosition = (arr, init, target) => {[arr[init],arr[target]] = [arr[target],arr[init]]; return arr}


*/

import React, { useState } from "react";
import EncounterSelector from "./components/EncounterSelector.js";
import './components/data/playerData.js';
const playerData = [
    {
        playerName: "Ibar",
        id:0,
        initRoll:0,
        initBonus: 2,
        statValue: 14,
        buffs:[],
        debuffs:[]
    },
    {
        playerName: "Siban",
        initRoll:0,
        initBonus: 4,
        statValue: 18,
        buffs:[],
        debuffs:[]
    },
    {
        playerName: "Lia",
        initRoll:0,
        initBonus: 3,
        statValue: 16,
        buffs:[],
        debuffs:[]
    },
    {
        playerName: "Nessa",
        initRoll:0,
        initBonus: 0,
        statValue: 10,
        buffs:[],
        debuffs:[]
    }
]

const mobData = [
    {
        playerName: "Monster 1",
        id:0,
        initRoll:0,
        initBonus: 0,
        statValue: 10,
        buffs:[],
        debuffs:[]
    },
    {
        playerName: "Monster 2",
        id:1,
        initRoll:0,
        initBonus: 2,
        statValue: 14,
        buffs:[],
        debuffs:[]
    },
    {
        playerName: "Monster 3",
        id:2,
        initRoll:0,
        initBonus: -1,
        statValue: 8,
        buffs:[],
        debuffs:[]
    },
    {
        playerName: "Monster 4",
        id:3,
        initRoll:0,
        initBonus: 5,
        statValue: 20,
        buffs:[],
        debuffs:[]
    }
]




const InitiativeApp = () =>{

const [combatants, setCombatants ] = useState(playerData.concat(mobData));

const updateInitiative = (playerName, value) => {
    let updatedPlayers = combatants.map(
        activePlayer => activePlayer.playerName === playerName ? {...activePlayer, initRoll: value} : activePlayer
    )
   setCombatants(updatedPlayers)
}

const addCombatants = newCombatants =>{
    setCombatants([...combatants, ...newCombatants]);
}


    return(
       
        <div className="initiative">
        <div>Initiative</div>
        
        <ul>
        
            {
                combatants.map((player, i)=>{
                    return(
                        <li key={i}>
                            <span>{player.playerName} - Initiative:  {player.initRoll} </span>
                            <button onClick={()=>{ updateInitiative(player.playerName, 10)}}>Edit</button>
                        </li> 
                    )           

                    

                })
                

            }
        </ul>
            <div>
                <button>Add PC</button><button>Add NPC</button>
            </div>
            <EncounterSelector addCombatants={addCombatants} />
        </div>
    )
}

export default InitiativeApp