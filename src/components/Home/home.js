
import React, { Component } from 'react';
import './home.css';

import Game from '../Game/game';
import Welcome from './Welcome/welcome';


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            testData: "Start Test",
            name: "",
            playOn: false,
            playButton: "Begin Game"

        }
        this.testButton = this.testButton.bind(this)
        this.handleChange = this.handleChange.bind(this);
        this.beginPlay = this.beginPlay.bind(this);
        
    }

    testButton() {
        console.log("Clicking button")
        this.setState({
            testData: "Hello Team, Testing button to state state"
        })
    }

    beginPlay(bool) {
        if(this.state.playOn === false){
            let homeDiv = document.getElementById("nameLabel");
            homeDiv.remove();
        }
        this.setState ({
            playOn: bool,
            playButton: "New Game"
        })
        console.log("Clicked begin play");
        
        
    }

    handleChange(event) {
        console.log("The name value is " + this.state.name);
        this.setState({
            name: event.target.value
        });
      }
    
      handleSubmit(event) {
        // alert('A name was submitted: ' + this.state.name);
        console.log("A name was submitted " + this.state.name);
        event.preventDefault();
      }

    render() {

        return(
            <div className="Home">

            <div id="beginPlay">
                <div id="gameComponent" onSubmit={this.handleSubmit}>
                    <label id="nameLabel">
                        Enter Name:
                        <input type="text" value={this.state.name} onChange={this.handleChange} />
                    </label>
                    <input className="BeginPlayButton" type="submit" value={this.state.playButton} onClick={this.beginPlay.bind(null, true)}/>
                    {this.state.playOn ? <Game name={this.state.name}></Game> : <Welcome playOn={this.state.playOn}></Welcome>}

                </div> 
            </div>

            </div>



        )

    }
}

export default Home