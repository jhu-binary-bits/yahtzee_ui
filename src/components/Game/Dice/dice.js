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
            "1": {
              die_id: "1",
              image: roll1,
              selected: false,
            },
            "2": {
              die_id: "2",
              image: roll1,
              selected: false,
            },
            "3": {
              die_id: "3",
              image: roll1,
              selected: false,
            },
            "4": {
              die_id: "4",
              image: roll1,
              selected: false,
            },
            "5": {
              die_id: "5",
              image: roll1,
              selected: false,
            },
          }

        }
        this.rollDice = this.rollDice.bind(this);
        this.startGame = this.startGame.bind(this);
    }

    rollDice(event) {
      console.log("The roll dice button was clicked");
      const selectedDice = []
      for (let selection in this.state.dicegroup){
        if(this.state.dicegroup[selection].selected == true){
          selectedDice.push(this.state.dicegroup[selection].die_id);
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

    onIconClick(event) {
          console.log("event")
          console.log(event)
          let newState = Object.assign({}, this.state);
          for (let selection in newState.dicegroup) {
              if (selection !== event.target.id) {
                  newState.dicegroup[selection].selected = this.state.dicegroup[selection].selected;
              }
           }
    
          newState.dicegroup[event.target.id].selected = !this.state.dicegroup[event.target.id].selected;
          console.log(this.state.dicegroup[event.target.id].die_id + " selected");
          this.setState({newState,})
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

    render() {
        var count = 0;
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
                {(!this.props.gameState.data.game_started) ? (
                    <div className="StartGame" align="center">
                        <input type="button" onClick={this.startGame} value="Start Game" className="startGameButton"></input>
                    </div>
                ) : (
                      <div>
                        {Object.keys(this.state.dicegroup).map(icon => (
                          <div className={this.state.dicegroup.[icon]['selected'] ?
                          "withBorder" : "noBorder"} >
                              <img src={this.state.dicegroup[icon]['image']}
                              id={this.state.dicegroup[icon]['die_id']}
                              onClick={(e) => this.onIconClick(e)}
                              width="75px"
                              height="75px"/>
                          </div>
                        ))}

                        {(this.props.gameState.data.current_turn.player == this.props.name) ? (
                            <div className="RollDice" >
                                <input type="button" onClick={this.rollDice} value="Roll Selected Dice"></input>
                            </div>
                        ) : (
                          <div></div>
                        )}
                    </div>
                )}
            </div>
        )
    }
}

export default Dice
