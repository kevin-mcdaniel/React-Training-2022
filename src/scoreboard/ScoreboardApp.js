import React, { Component } from 'react';
import Header from './components/Header';
import Player from './components/Player';
import AddPlayerForm from './components/AddPlayerForm';
import './scoreboard.css';


  


class ScoreboardApp extends Component {
  state = {
    players: [
      {
        name: "Eric",
        score: 0,
        id: 1
      },
      {
        name: "Tracy",
        score: 0,
        id: 2
      },
      {
        name: "Ashley",
        score: 0,
        id: 3
      },
      {
        name: "James",
        score: 0,
        id: 4
      }
    ]
  };

  prevPlayerId = 4;


  handleScoreChange = (index, delta) => {
     this.setState( prevState => ({
      score: prevState.players[index].score += delta
    })); 
  }

  handleAddPlayer = (name) =>{
    this.setState( prevState => {
      return {
        players: [ 
          ...prevState.players,
          {
            name, //in es2016 if name and value match, don't need to type it twice
            score:0,
            id: this.prevPlayerId +=1
          }
        ]
      }
    })
  }

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  determineHighScore = (playerScore) =>{
    //if Total Points are > 0 do your thing

    const totalPoints = this.state.players.reduce((total, player) => {
        return total + player.score
    }, 0);

    if (totalPoints > 0){
      let highScore = 0;


      /* 
      BETTER WAY
      const scores = this.state.players.map( p => p.score );
      const highScore = Math.max(...scores);
      if (highScore) {
        return highScore;
      } 
      return null; */

      for(var i = 0; i < this.state.players.length; i++){
        if(highScore < this.state.players[i].score){
            highScore = this.state.players[i].score
        }
      }
      
      return playerScore === highScore ?  true :  false
      
    } else {
      return false
    }
    
    
  }

  render() {
    return (
      <div className="scoreboard">
        <Header 
          title="Scoreboard" 
          players={this.state.players} 
        />
  
        {/* Players list add index to find the correct player index in teh array*/}
        {this.state.players.map( (player, index) =>
          <Player 
            name={player.name}
            id={player.id}
            index = {index}
            key={player.id.toString()}
            score = {player.score} 
            changeScore = {this.handleScoreChange}
            removePlayer={this.handleRemovePlayer}
            highScore={this.determineHighScore(player.score)}           
          />
        )}
        <AddPlayerForm
          addPlayer={this.handleAddPlayer}
         />
      </div>
    );
  }
}

export default ScoreboardApp;
