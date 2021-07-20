
import React, { Component } from 'react';
import './home.css';

import Game from '../Game/game';
import Welcome from './Welcome/welcome';


window.client = new WebSocket('ws://0.0.0.0:8081');


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            testData: "Start Test",
            name: "",
            playOn: false,
            playButton: "Join Game",
            gameState: {}
        }
        this.handleChange = this.handleChange.bind(this);
        this.beginPlay = this.beginPlay.bind(this);
        
    }


    componentDidMount() {
      window.client.onopen = () => {
        console.log('WebSocket Client Connected');
      };
      window.client.onmessage = (message) => {
        let event = JSON.parse(message.data);
        console.log("Received event:")
        console.log(event)
        
        if (event.type === "game_state_update") {
            console.log("received game state update")
            this.setState({
                gameState: event
            })
        }
        else {
            console.log("Event type not recognized")
        }
        console.log("current state")
        console.log(this.state)
      };
    }
    
    beginPlay(bool) {
        if(this.state.name !== "") {
            this.setState ({
                playOn: bool,
                playButton: "New Game"
            })
        }
        console.log("Clicked begin play");
        this.setState ({
            playOn: bool,
            playButton: "New Game"
        })
        console.log("Clicked begin play");
        let playerJoinEvent = {
            "timestamp": Date.now(),
            "type": "player_joined",
            "data": {
                "player_name": this.state.name
            }
        }
        window.client.send(JSON.stringify(playerJoinEvent))
    }

    handleChange(event) {
        // console.log("The name value is " + this.state.name);
        this.setState({
            name: event.target.value
        });
      }
    
      handleSubmit(event) {
        console.log("A name was submitted " + this.state.name);
        event.preventDefault();
      }

    render() {

        return(
            <div className="Home">
                <div id="beginPlay">
                    {this.state.playOn ? <Game gameState={this.state.gameState} name={this.state.name}></Game> : <Welcome playOn={this.state.playOn}></Welcome> }
                    {this.state.playOn ? null: 
                    <div id="gameComponent" onSubmit={this.handleSubmit}>
                        <label id="nameLabel">
                            Enter Name:
                            <input type="text" value={this.state.name} onChange={this.handleChange} />
                        </label>
                        <input className="BeginPlayButton" type="submit" value={this.state.playButton} onClick={this.beginPlay.bind(null, true)}/>
                    </div>
                    }
                    
                </div>
            </div>
        )
    }
}

export default Home