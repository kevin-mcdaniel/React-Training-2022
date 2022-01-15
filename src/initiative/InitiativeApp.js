/*
TODOs
Need a way to delay in a turn
array.splice()? idea const changeValuePosition = (arr, init, target) => {[arr[init],arr[target]] = [arr[target],arr[init]]; return arr}


*/

import React, { useState } from "react";
import EncounterSelector from "./components/EncounterSelector.js";
import CurrentPlayer from "./components/CurrentPlayer.js";
import './components/data/playerData.js';
import './components/css/initiativeApp.css'
import InitiativePanel from "./components/InitiativePanel.js";

const partyData = [
    {
        playerName: "Ibar",
        id:0,
        initRoll:0,
        initBonus: 2,
        statValue: 14,
        buffs:[
            {
                statusEffect:"+1 to AC",
                duration:3,
                remaining:3
            },
            {
                statusEffect:"+1 to Hit",
                duration:1,
                remaining:1
            }
         ],
        debuffs:[
            {
                statusEffect:"Blind",
                duration:3,
                remaining:3
            }
        ]
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



const [combatants, setCombatants ] = useState(partyData.concat(mobData));
const [currentRound, setCurrentRound] = useState(0);
const [playerData, setPlayerData] = useState({
    playerName: "Ibar",
    id:0,
    initRoll:0,
    initBonus: 2,
    statValue: 14,
    buffs:[
        {
            statusEffect:"+1 to AC",
            duration:3,
            remaining:3
        },
        {
            statusEffect:"+1 to Hit",
            duration:1,
            remaining:1
        }
     ],
    debuffs:[
        {
            statusEffect:"Blind",
            duration:3,
            remaining:3
        }
    ],
    nextPlayer:"Siban"
});

const getPlayerData = (index, plusone) => {
    let player = combatants[index];
    player.nextPlayer = combatants[plusone].playerName;
    return player;
}



const updateInitiative = (playerName, value) => {
    let updatedPlayers = combatants.map(
        activePlayer => activePlayer.playerName === playerName ? {...activePlayer, initRoll: value} : activePlayer
    )
   setCombatants(updatedPlayers)
}

const addCombatants = newCombatants =>{
    setCombatants([...combatants, ...newCombatants]);
}



const advanceRound = currentIndex =>{
    setCurrentRound(currentRound + 1);

}

    return(
       <div className="initiativeApp">
            <InitiativePanel combatants={combatants} methods={{addCombatants,updateInitiative}}  />
            
            <CurrentPlayer playerData={playerData} />
            
        </div>
        
    )
}

export default InitiativeApp