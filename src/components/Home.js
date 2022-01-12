import React from 'react';
import {Link} from 'react-router-dom';
import scoreboardImg from './img/score.png';
import calculatorImg from './img/calc.png';
import './css/home.css';


const Home = (props) => {
    console.log(props);
    return(
        <div className='homeScreen'>
        
        <p>Welcome to my react playground. I had originally had all of my learning projects in different repositories, but I decided to consolidate them into one and dress it up a little.</p>
        
        <div className='project'>
            <Link to="/scoreboard" className="projImg"><img src={scoreboardImg} alt="Scoreboard" /></Link>
            <div className="projDesc">
                <h1><Link to="/scoreboard">Scoreboard</Link></h1>
                <p>This is the main project developed from Team Treehouse's React Developer Track. I ran through this course earlier in the year to start to wrap my head around React.  There were a few other projects that I completed in this track, but I am incorporating some of those lessons(such as routing) into the main project.</p>
            </div>
        </div>

        <div className='project'>
            <Link to="/calculator" className="projImg"><img src={calculatorImg} alt="Calculator" /></Link>
            <div>
                <h1 className="projDesc"><Link to="/calculator">Calculator</Link></h1>
                <p>After running through the course on Team Treehouse, I wanted to do another project in react to keep hammering in the library. This is a basic calculator. I plan on cleaning up the code, enhancing it with memory as well as conversions and some other scientific calculator functionality</p>
            </div>
        </div>

        <div className='project'>
            <Link to="/initiative" className="projImg"><img src={calculatorImg} alt="Calculator" /></Link>
            <div>
                <h1 className="projDesc"><Link to="/initiative">Initiative Tracker</Link></h1>
                <p>Leaving the comfort of tutorials on my first personal react project.</p>
            </div>
        </div>

        </div>
    );
}

export default Home;