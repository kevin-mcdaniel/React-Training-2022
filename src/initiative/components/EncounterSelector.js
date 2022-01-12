import React from "react";

const EncounterSelector = (props) =>{
    const encounterGroups = [
        {
            name:"Encounter 1",
            id:0,
            mobs:[
                {
                    playerName: "Monster 1",
                    initRoll:0,
                    initBonus: 0,
                    statValue: 10,
                    buffs:[],
                    debuffs:[]
                },
                {
                    playerName: "Monster 2",
                    initRoll:0,
                    initBonus: 2,
                    statValue: 14,
                    buffs:[],
                    debuffs:[]
                },
                {
                    playerName: "Monster 3",
                    initRoll:0,
                    initBonus: -1,
                    statValue: 8,
                    buffs:[],
                    debuffs:[]
                },
                {
                    playerName: "Monster 4",
                    initRoll:0,
                    initBonus: 5,
                    statValue: 20,
                    buffs:[],
                    debuffs:[]
                }
            ]
        },
        {
            name:"Encounter 2",
            id:1,
            mobs:[
                {
                    playerName: "Monster 5",
                    initRoll:0,
                    initBonus: 0,
                    statValue: 10,
                    buffs:[],
                    debuffs:[]
                },
                {
                    playerName: "Monster 6",
                    initRoll:0,
                    initBonus: 2,
                    statValue: 14,
                    buffs:[],
                    debuffs:[]
                },
                {
                    playerName: "Monster 7",
                    initRoll:0,
                    initBonus: -1,
                    statValue: 8,
                    buffs:[],
                    debuffs:[]
                },
                {
                    playerName: "Monster 8",
                    initRoll:0,
                    initBonus: 5,
                    statValue: 20,
                    buffs:[],
                    debuffs:[]
                }
            ]

        },
    ]
    // need to use IDs instead of names to prevent same name conflicts
    return(
        
        <select className="mySelect" onChange={(e) =>{
                const selectedEncounter = e.target.value;
                const mobElement = encounterGroups.filter(obj => {
                    return obj.id === parseInt(selectedEncounter)
                });
                console.log(mobElement.mobs);
                props.addCombatants(mobElement[0].mobs);
            }
        }>
            {
                encounterGroups.map((encounter) =>{
                    return(
                        <option key={encounter.id} value={encounter.id}>{encounter.name}</option>
                    )
                    
                }
                
                )
            }
        </select>
    )
}

export default EncounterSelector;