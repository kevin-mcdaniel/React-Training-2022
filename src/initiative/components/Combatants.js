import React, { useState } from "react";



const Combatants = () =>{
    
    const [mylist, setMyList] = useState([{name:"Bob", id:1},{name:"Bill", id:2},{name:"Ed", id:3} ]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentPlayer, setCurentPlayer] = useState(mylist[0]);
    
    
    const getNextUser = () => {
    
        if (currentIndex < mylist.length - 1){
            console.log("We're Fine Here");
            setCurrentIndex(currentIndex + 1);
            
        } else {
            setCurrentIndex(0)
        }
        
        setCurentPlayer(mylist[currentIndex]);
        console.log(mylist[currentIndex]);
        console.log(` ${currentIndex}`);
    }

    return(
        <div>
            <div>{currentPlayer.name} {currentPlayer.id}</div>
            <ul>
                {
                    mylist.map( (play) =>{
                        return(
                            <li key={play.id} className={play.id === currentPlayer.id ? "active" : "" }>{play.name}</li>    
                        )
                        
                    })
                }
            </ul>
            <button onClick={getNextUser}>Next</button>
        </div>
    )
}

export default Combatants;

