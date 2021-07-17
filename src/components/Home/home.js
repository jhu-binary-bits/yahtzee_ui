
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

            {/* Click the buttons to toggle the message <br/> */}
            {/* <button onClick={this.beginPlay.bind(null, true)}>Begin Game</button> */}

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

            

                {/* <h2>Welcome</h2>
                <div id="IntroParagraph">
                    
                    This is the Yahtzee++ project. This was created for the Software Engineering course
                    at Johns Hopkins University. Please enter your name and press "Begin Play" to start 
                    playing Yahtzee++.
                    
                </div>
                    

                <div id="beginPlay">
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Enter Name:
                            <input type="text" value={this.state.name} onChange={this.handleChange} />
                        </label>
                    <input className="BeginPlayButton" type="submit" value="Begin Play" onClick={this.beginPlay}/>
                </form>     

      
                </div>
                    <button className="TestButton" onClick={this.testButton}>Test Button</button>
                    <textarea id="nameArea" value={this.state.testData} ></textarea> */}

            </div>



        )

    }
}

export default Home