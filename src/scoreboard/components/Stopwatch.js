import React, {Component} from "react";


class Stopwatch extends Component{

    state = {
        isRunning: false,
        elapsedTime: 0,
        previousTime: 0
    }

    handleStopwatch = () => {
        this.setState({isRunning: !this.state.isRunning})
        if(!this.state.isRunning){
            console.log('starting')
            this.setState({previousTime: Date.now()})
        } 
    }

    handleReset = ()  => {
        this.setState({elapsedTime:0})
    }

    componentDidMount() {
        this.intervalID = setInterval(() => this.tick(), 100)
    }

    componentWillUnmount() {
        //clear anything that needs to be cleard when unmounting - otherwise setInterval would continue to run and cause a memory leak
        clearInterval(this.intervalID)
    }

    tick = () => {
        if(this.state.isRunning){
            const now = Date.now();
            this.setState(prevState => ({
                previousTime: now,
                elapsedTime:prevState.elapsedTime + (now - prevState.previousTime)
            }))
        }
    }

    render(){
        let seconds = Math.floor(this.state.elapsedTime / 1000)
        return(
            <div className="stopwatch">
                <h2>Stopwatch</h2>
                <span className="stopwatch-time">{seconds}</span>

                <button onClick={this.handleStopwatch}>{this.state.isRunning ? "Stop" : "Start"}</button>
                
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}

export default Stopwatch
