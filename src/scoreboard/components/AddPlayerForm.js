import React, {Component} from "react";

class AddPlayerForm extends Component{

 /*    state = {
        value: ''
    } */

    //ref provides an easier and quicker way to access form elements
    //use controlled components to validate fields and rerender on every keystroke
    playerInput = React.createRef();

  /*   handleValueChange = (e) => {
        this.setState({value: e.target.value});
        console.log(this.state.value);
    } */

    /* handleSubmit = (e) =>{
        e.preventDefault();
        this.props.addPlayer(this.state.value);
        this.setState({value:''});//clear text field
    } */

    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.addPlayer(this.playerInput.current.value);
        e.currentTarget.reset();
    }

    render(){
        
        return(
            <form onSubmit={this.handleSubmit}>
                {/* <input
                    type="text"
                    placeholder="Enter a player's name"
                    value = {this.state.value}
                    onChange = {this.handleValueChange}
                /> */}
                <input
                    type="text"
                    placeholder="Enter a player's name"
                    ref = {this.playerInput}
                />
                <input
                    type="submit"
                    value="Add Player"
                />
            </form>
        );
    }

}

export default AddPlayerForm;