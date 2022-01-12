import React from "react";
import { useState } from "react/cjs/react.development";

const Combatants = () =>{
    <div>

    </div>
}

export default Combatants;


const App = () =>{
   const [users, setUsers] = useState([
        {
            userName: "Bob",
            age: 30
        },
        {
            userName: "Bill",
            age: 27
        },
    ]);

const changeAge = (userName, age) => {
    let updatedAges = users.map(
        currentUser => 
            currentUser.userName === userName ? 
                {...currentUser, age: age} : 
                currentUser
    )
    setUsers(updatedAges)
}

    <div>
        <ul>
        {
            users.map((user, i)=>{
                <li>Name: {user.userName} Age: {user.age} <button onClick={changeAge(24)}>Change Age</button></li>
            })
        }
        </ul>
    </div>
}