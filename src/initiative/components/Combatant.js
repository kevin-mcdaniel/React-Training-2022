import react from "react";

const Combatant = ({playerName, key}) =>{
    return (
        <div>
            <div>{playerName}</div>
            <div>
                <span>Initiative</span>
                <div></div>
            </div>
        </div>
    )

}

export default Combatant