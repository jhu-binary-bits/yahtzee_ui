

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
        this.state = {
            name: props.name,
        }
    }


    render() {

        return(

            <div className="Game">
                <div id="gameTitle">
                    <h1>Yahtzee++</h1>
                </div>


                <div className="GameSpace">
                    <Chat
                        name={this.props.name}>
                        </Chat>

                    <Dice></Dice>

                    <Transcript
                        name={this.props.name}
                    ></Transcript>
                    
                    <Card
                        name={this.props.name}
                        ></Card>

                </div>
                

            </div>


        )
    }
}

export default Game;