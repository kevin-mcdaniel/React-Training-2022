import React from 'react';
import PropTypes from 'prop-types';
import Stats from './Stats';
import Stopwatch from './Stopwatch';

const Header = ({players,title}) => {
  //const {players, title } = props; //destructuring a variable splits them into separate variables so you don't need to continue to keep using props.xxx  you can also do it in the function's parameters
    return (
      <header>
        <Stats 
            players = {players}
        />
        <h1>{ title }</h1>
        <Stopwatch />
      </header>
    );
  }

  Header.propTypes = {
    players: PropTypes.arrayOf(PropTypes.object),//specifiy what the array is composed of instead of just using PropTypes.array
    title: PropTypes.string
  }

  //will give a default value if it's missing
  Header.defaultProps = {
    title: "Scoreboard"
  }

  export default Header;
  