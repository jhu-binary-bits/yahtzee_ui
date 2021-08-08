import React, { Component } from 'react';
import './dice.css';
import roll1 from './images/roll1.jpg';
import roll2 from './images/roll2.jpg';
import roll3 from './images/roll3.jpg';
import roll4 from './images/roll4.jpg';
import roll5 from './images/roll5.jpg';
import roll6 from './images/roll6.jpg';

class Dice extends Component {

    constructor(props) {
        super(props);
        this.state = {
          dicegroup :{
            dice0: {
              name: "dice0",
              image: roll1,
              selected: false,
            },
            dice1: {
              name: "dice1",
              image: roll1,
              selected: false,
            },
            dice2: {
              name: "dice2",
              image: roll1,
              selected: false,
            },
            dice3: {
              name: "dice3",
              image: roll1,
              selected: false,
            },
            dice4: {
              name: "dice4",
              image: roll1,
              selected: false,
            },
          }

        }
        this.rollDice = this.rollDice.bind(this);
        this.startGame = this.startGame.bind(this);
    }

    rollDice(event){
      console.log("The roll dice button was clicked");
      const selectedDice = []
      for (let selection in this.state.dicegroup){
        if(this.state.dicegroup[selection].selected == true){
          selectedDice.push(this.state.dicegroup[selection].name);
        }
      }
      let diceEvent = {
        "timestamp": Date.now(),
        "type": "rolled_dice",
        "data":{
          "player_name": this.props.name,
          "dice_selected": selectedDice,
        }
      }
      window.client.send(JSON.stringify(diceEvent))
    }

    startGame(event) {
        console.log("The start game button was clicked");
        let messageEvent = {
            "timestamp": Date.now(),
            "type": "game_started",
            "data": {"player_name": this.props.name}
          }
          window.client.send(JSON.stringify(messageEvent))
    }

    onIconClick(event) {

      let newState = Object.assign({}, this.state);
      for (let selection in newState.dicegroup) {
          if (selection !== event.target.id) {
              newState.dicegroup[selection].selected = this.state.dicegroup[selection].selected;
          }
       }

      newState.dicegroup[event.target.id].selected = !this.state.dicegroup[event.target.id].selected;
      console.log(this.state.dicegroup[event.target.id].name + " selected");
      this.setState({newState,})
    }

    render() {
        return(

            <div className="Dice" >
                {(!this.props.gameState.data.game_started) ? (
                    <div className="StartGame" align="center">
                        <input type="button" onClick={this.startGame} value="Start Game" className="startGameButton"></input>
                    </div>
                ) : (
                    <div>
                        {Object.keys(this.state.dicegroup).map(icon => (
                            <div className={this.state.dicegroup.[icon]['selected'] ? "withBorder" : "noBorder"} >
                                <img src={this.state.dicegroup[icon]['image']}
                                    id={this.state.dicegroup[icon]['name']}
                                    onClick={(e) => this.onIconClick(e)}
                                    width="75px"
                                    height="75px"/>
                            </div>
                        ))}
                        <div className="RollDice" >
                            <input type="button" onClick={this.rollDice} value="Roll Selected Dice"></input>
                        </div>
                    </div>
                )}

            </div>
        )
    }
}

export default Dice
