

import React, { Component } from 'react';
import './game.css';

import Card from './Card/card';
import Chat from './Chat/chat';
import Dice from './Dice/dice';
import Transcript from './Transcript/transcript';

/**
 * Component that holds the entirety of the game. It is the sheet that holds other components that require to play the game.
 * This component will hold the Dice, Transcript, Player Card, Chat.
 */

class Game extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        return(
            <div className="Game">
                <div id="gameTitle">
                    <h1>Yahtzee++</h1>
                    <h3>({this.props.name}'s view)</h3>
                </div>

                <div className="GameSpace">
                    <Chat
                        name={this.props.name}
                        gameState={this.props.gameState}>
                    </Chat>

                    <Dice
                        name={this.props.name}
                        gameState={this.props.gameState}>
                    </Dice>

                    <Transcript
                        name={this.props.name}
                        gameState={this.props.gameState}
                    ></Transcript>
                    
                    <Card
                        name={this.props.name}
                        gameState={this.props.gameState}>
                    </Card>

                </div>
            </div>
        )
    }
}

export default Game;