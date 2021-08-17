
import React, { Component } from 'react';
import './home.css';

import Game from '../Game/game';
import Welcome from './Welcome/welcome';


window.client = new WebSocket('ws://0.0.0.0:8081');


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            joinedGame: false,
            playButton: "Join Game",
            gameState: {}
        }
        this.handleChange = this.handleChange.bind(this);
        this.joinGame = this.joinGame.bind(this);

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

    joinGame(bool) {
        console.log("Clicked join game");
        if (this.state.name !== "") {
            this.setState ({
                joinedGame: bool
            })
            let playerJoinEvent = {
                "timestamp": Date.now(),
                "type": "player_joined",
                "data": {
                    "player_name": this.state.name
                }
            }
            window.client.send(JSON.stringify(playerJoinEvent))
        }
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

    handleKeyPress(event){
        var code = event.keyCode || event.which;
        if (code === 13) {
          this.joinGame(true);
          console.log(this.state.name)
        }
      }

    render() {

        return(
            <div className="Home">
                <div id="joinGame">
                    {this.state.joinedGame ?
                        (<Game gameState={this.state.gameState} name={this.state.name}></Game>)
                         : (<Welcome joinedGame={this.state.joinedGame}></Welcome>) }
                    {this.state.joinedGame ? null:
                    <div id="gameComponent" onSubmit={this.handleSubmit}>
                        <label id="nameLabel">
                            Enter Name:
                            <input type="text" value={this.state.name} onChange={this.handleChange} onKeyPress={this.handleKeyPress.bind(this)}/>
                        </label>
                        <input className="JoinGameButton" type="submit" value={this.state.playButton} onClick={this.joinGame.bind(null, true)}/>
                    </div>
                    }

                </div>
            </div>
        )
    }
}

export default Home
