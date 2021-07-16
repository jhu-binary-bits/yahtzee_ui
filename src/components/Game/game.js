

import React, { Component } from 'react';
import './game.css';

import Card from './Card/card';
import Chat from './Chat/chat';
import Dice from './Dice/dice';
import Transcript from './Transcript/transcript';

class Game extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }


    render() {

        return(

            <div className="Game">

                <h1>Game Component</h1>

                <Dice></Dice>
                <Transcript></Transcript>
                <Card></Card>
                <Chat></Chat>







            </div>


        )
    }
}

export default Game;