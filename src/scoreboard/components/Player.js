import React, {PureComponent} from "react";
import PropTypes from "prop-types"
import Counter from "./Counter";
import Crown from "./Crown";

class Player extends PureComponent{

  //when using PropTypes in a class common to put it at the top using the static keyword: With Static you don't need to instantiate the class.
  static propTypes = {
    changeScore: PropTypes.func,
    removePlayer: PropTypes.func,
    name:PropTypes.string,
    score: PropTypes.number,
    id: PropTypes.number.isRequired,//throw a console warning if missing
    index:PropTypes.number
  }

  //purecomponent is a more performant version of component. Implements a lifecycle method called shouldComponentUpdate to check if a rerender is required
  render(){
    //to destructure in a class you need to do a varaible assignment
      const {
        name,
        id,
        score,
        index,
        removePlayer,
        changeScore,
        highScore
      }=this.props;
      return (
        <div className="player">
          <span className="player-name">
            <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
            <Crown highScore = {highScore} />
            { name }
            
          </span>
    
          <Counter 
              score = {score}
              id = {id}
              index = {index}
              changeScore = {changeScore}
          />
        </div>
      );
    }
  }

  export default Player;