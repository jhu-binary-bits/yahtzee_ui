import React, { Component } from 'react';
import './dice.css';

class Dice extends Component {

    constructor(props) {
        super(props);
        this.startGame = this.startGame.bind(this);
    }

    startGame(event) {
        console.log("The start game button was clicked");
        let messageEvent = {
            "timestamp": Date.now(),
            "type": "start_game",
            "data": {"player_name": this.props.name}
          }
          window.client.send(JSON.stringify(messageEvent))
    }

    render() {
        return(

            <div className="Dice" >
                {(!this.props.gameState.data.game_started) ? (
                    <div className="StartGame" align="center">
                        <input type="button" onClick={this.startGame} value="Start Game" className="startGameButton"></input>
                    </div>
                ) : (
                    <div></div>
                )}
            </div>

        )

    }

}

export default Dice