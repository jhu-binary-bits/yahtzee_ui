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
            dice5: {
              name: "dice5",
              image: roll1,
              selected: false,
            },
          },
          gamestart:false

        }
        this.rollDice = this.rollDice.bind(this);
        this.startGame = this.startGame.bind(this);
        this.resetstate = this.resetstate.bind(this);
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
          "dice_to_roll": selectedDice,
        }
      }
      window.client.send(JSON.stringify(diceEvent))
    }

    startGame(event){
      this.state.gamestart = true;
      let startGameEvent = {
        "timestamp": Date.now(),
        "type": "game_started",
        "data":{
          "player_name": this.props.name,
        }
      }
      console.log("game start button clicked")
      window.client.send(JSON.stringify(startGameEvent))

    }

    resetstate(event){
      this.state.gamestart = false;
    }

    onIconClick(event) {

      let newState = Object.assign({}, this.state);
      for (let selection in newState.dicegroup) {
          if (selection !== event.target.id) {
              newState.dicegroup[selection].selected = this.state.dicegroup[selection].selected;
          }
       }

      newState.dicegroup[event.target.id].selected = !this.state.dicegroup[event.target.id].selected;
      newState.gamestart = this.state.gamestart
      console.log(this.state.dicegroup[event.target.id].name + " selected");
      this.setState({newState,})
    }



    render() {
        var count = 0;
        this.state.gamestart = this.props.gameState.data.game_started;
        if (this.props.gameState.data.game_started){
          var dicevals = this.props.gameState.data.current_turn.last_roll;

          for (let selection in this.state.dicegroup) {
            switch(dicevals[count].face_value){
                case 1:
                  this.state.dicegroup[selection].image = roll1;
                  break;
                case 2:
                  this.state.dicegroup[selection].image = roll2;
                  break;
                case 3:
                  this.state.dicegroup[selection].image = roll3;
                  break;
                case 4:
                  this.state.dicegroup[selection].image = roll4;
                  break;
                case 5:
                  this.state.dicegroup[selection].image = roll5;
                  break;
                case 6:
                  this.state.dicegroup[selection].image = roll6;
                  break;
            }
            count = count + 1;
          }
        }
        else{
          for (let selection in this.state.dicegroup) {
            this.state.dicegroup[selection].image = roll1;
          }
        }


        return(

            <div className="Dice" >
                <h2>Dice Area</h2>
                <div>
                  {!this.state.gamestart && <input type="button" onClick={this.startGame} value="Start Game"></input>}
                </div>
                <input type="button" onClick={this.resetstate()} value="reset state"></input>

                {Object.keys(this.state.dicegroup).map(icon => (
                  <div className={this.state.dicegroup.[icon]['selected'] ?
                  "withBorder" : "noBorder"} >
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



        )

    }

}

export default Dice
