/* 
~~~-----------------------------------------------
TODOs
Need a way to delay in a turn
~~~-----------------------------------------------
*/ 

import React, { useState } from "react";
import Modal from "./components/Modal";
import EncounterSelector from "./components/EncounterSelector.js";
import CurrentPlayer from "./components/CurrentPlayer.js";
import "./components/data/playerData.js";
import "./components/css/initiativeApp.css";
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

const [show, setShow] = useState(false);

const [combatants, setCombatants ] = useState(partyData.concat(mobData));
const [currentRound, setCurrentRound] = useState(0);
const [playerIndex, setPlayerIndex] = useState(1);
const [currentPlayer, setCurrentPlayer] = useState({...combatants[0], nextPlayer:combatants[1].playerName});
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



const getNextPlayer = () => {
    let nextPlayerIndex = playerIndex + 1 < combatants.length - 1 ? playerIndex + 1 : 0; 
    setCurrentPlayer({...combatants[playerIndex], nextPlayer: combatants[nextPlayerIndex].playerName});
}

const decrementStatusEffect = () =>{
    combatants[playerIndex].buffs.forEach((statusEffect, i) => {
        if(statusEffect.remaining - 1 === 0){
            combatants[playerIndex].buffs.splice(i, 1);
        } else {
            statusEffect.remaining -= 1;
        }
    });

    combatants[playerIndex].debuffs.forEach((statusEffect, i) => {
        if(statusEffect.remaining - 1 === 0){
            combatants[playerIndex].debuffs.splice(i, 1);
        } else {
            statusEffect.remaining -= 1;
        }
    });
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
    decrementStatusEffect();

    if (playerIndex < combatants.length - 1){
        setPlayerIndex(playerIndex + 1);
        
    } else {
        setPlayerIndex(0)
    }
    
    getNextPlayer();
    
    
    if(playerIndex === 0){
        setCurrentRound(currentRound + 1) 
    }

}

    return(
       <div id="initiative" >
            <div className="initiativeApp">
            <InitiativePanel combatants={combatants} methods={{addCombatants,updateInitiative,advanceRound}} currentPlayer={currentPlayer}  />
            
            <CurrentPlayer playerData={currentPlayer} currentRound={currentRound} />
            </div>
            <button onClick={() => setShow(true)}>Show Modal</button>
            <Modal onClose={() => setShow(false)} show={show} title="This is the modal title">
                <p>This is content in the modal body</p>
            </Modal>
        </div>
        
    )
}

export default InitiativeApp