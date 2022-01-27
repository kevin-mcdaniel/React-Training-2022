import React, {useState} from "react";
import CurrentPlayerHeader from "./CurrentPlayerHeader";
import StatusEffect from "./StatusEffect";
import Modal from "./Modal";
import './css/currentPlayer.css';

const CurrentPlayer = ({playerData, currentRound, methods}) => {
    const [show, setShow] = useState(false);
    const [effectType, setEffectType] = useState("");
    const [effectDesc, setEffectDesc] = useState("");
    const [effectDuration, setEffectDuration] = useState("");
    //{playerName, id, initRoll, initBonus, statValue, buffs, debuffs}
    return(
        <div className="currentPlayer">
            <CurrentPlayerHeader playerName={playerData.playerName} nextPlayer={playerData.nextPlayer} currentRound={currentRound}   />
            <div className="buffPanel">
                                    <button onClick={() => setShow(true)}>Add Status Effect</button>
                                </div>
            <div className="statusEffects">
            
                <StatusEffect statusType={"buff"} statusList={playerData.buffs} />
                <StatusEffect statusType={"debuff"} statusList={playerData.debuffs} />
            </div>
            <div>
                <button onClick={methods.advanceRound}>Next Turn</button>
            </div>
            <Modal onClose={() => setShow(false)} show={show} title="Add Status Effect">
                    <div className="fields">
                        <div className="field">
                            <input 
                                type="radio" 
                                id="rdobuff" 
                                name="statustype" 
                                onClick={()=>{setEffectType("buff")}}
                            />
                            <label htmlFor="rdobuff">Buff:</label>
                        </div>
                        <div className="field">
                            <input 
                                type="radio" 
                                id="rdodebuff" 
                                name="statustype"
                                onClick={()=>{setEffectType("debuff")}} 
                                
                            />
                            <label htmlFor="rdodebuff">Debuff:</label> 
                        </div>
                    </div>
                    <div className="fields">
                        <div className="field">
                            <label htmlFor="effectdesc">Effect:</label>
                            <input 
                                type="text" 
                                name="buffdesc" 
                                id="buffdesc"
                                value={effectDesc}
                                onChange={(e) => setEffectDesc(e.target.value)}
                            />
                        </div>
                        <div className="field">
                            <label htmlFor="effectduration">Duration:</label>
                            <input 
                                type="text" 
                                name="duration" 
                                id="buffduration"
                                value={effectDuration}
                                onChange={(e) => setEffectDuration(e.target.value)}
                            />
                        </div>
                        <button onClick={() => {
                            
                            
                            methods.addStatusEffect(playerData.id, effectType, { statusEffect:effectDesc,remaining:parseInt(effectDuration)})
                            
                            }
                        }>Add Status Effect</button>
                    </div>
            </Modal>
        </div>
        
    )
    
}

export default CurrentPlayer;

