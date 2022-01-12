import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import CalculatorApp from './calculator/CalculatorApp';
import ScoreboardApp from './scoreboard/ScoreboardApp';
import InitiativeApp from './initiative/InitiativeApp';


const App = () =>(

    <div className="main">
     <Header />
      <Routes>
        {
          
          <>
           
            <Route path="/" exact element={<Home />} />
            <Route path="/scoreboard" element={<ScoreboardApp />} />
            <Route path="/calculator" element={<CalculatorApp />} />
            <Route path="/initiative" element={<InitiativeApp />} />
          </>
        }
      </Routes>
    </div>

);

export default App;