import React, { Component } from 'react';
import './card.css';
import { objectTypeAnnotation } from '@babel/types';

class Card extends Component {

    constructor(props){
        super(props)
        console.log("Card constructor called")
        
        this.chooseScore = this.chooseScore.bind(this)
    }

    componentDidMount(){
        console.log("Component did Mount")
        console.log("Component Mount player : " + this.props.name)
    }

    chooseScore(event) {
        console.log("Clicked on " + event.target.id + "  cell")
        
        if (this.props.gameState.data.scorecards[this.props.name].scores[event.target.id] === null 
            && this.props.gameState.data.current_turn.player === this.props.name) {
            document.getElementById(event.target.id).style.fontWeight = "bold"

            this.publish_score_selected_event(event.target.id)            
        }
    }

    publish_score_selected_event(score_type) {
        let score_selected_event = {
            "timestamp": Date.now(),
            "type": "score_selected",
            "data": {
                "selected_score_type": score_type,
                "player_name": this.props.name
            }
        }
        window.client.send(JSON.stringify(score_selected_event))
    }
    
    render(){
        console.log("Render card called")

        return(
            <div className="Card">
                <p>
                    scorecards
                </p>

                {(this.props.gameState.data.game_started) ? (

                <table className="ScoreCardTable">
                    <tr id="CardTitle">
                    
                        <th colSpan="4">
                            Player: {this.props.name}
                        </th>

                    </tr>

                    <tr id="CardUpper">
                        <th colSpan="2">
                            <h3>Upper Section</h3>
                        </th>
                        <th colSpan="2">
                            <h3>Score</h3>
                        </th>
                    </tr>

                    <tr id="ONES">
                        <td>Ones</td>
                        <td id="ONES" colSpan="2" onClick={this.chooseScore}>
                            {this.props.gameState.data.scorecards[this.props.name].scores["ONES"]}
                        </td>
                    </tr>

                    <tr id="TWOS">
                        <td>Twos</td>
                        <td id="TWOS" colSpan="2" onClick={this.chooseScore}>
                            {this.props.gameState.data.scorecards[this.props.name].scores["TWOS"]}
                        </td>
                    </tr>

                    <tr id="THREES">
                        <td>Threes</td>
                        <td id="THREES" colSpan="2" onClick={this.chooseScore}>
                            {this.props.gameState.data.scorecards[this.props.name].scores["THREES"]}
                        </td>
                    </tr>

                    <tr id="FOURS">
                        <td>Fours</td>
                        <td id="FOURS" colSpan="2" onClick={this.chooseScore}>
                            {this.props.gameState.data.scorecards[this.props.name].scores["FOURS"]}
                        </td>

                    </tr>

                    <tr id="FIVES">
                        <td>Fives</td>
                        <td id="FIVES" colSpan="2" onClick={this.chooseScore}>
                            {this.props.gameState.data.scorecards[this.props.name].scores["FIVES"]}
                        </td>

                    </tr>

                    <tr id="SIXES">
                        <td>Sixes</td>
                        <td id="SIXES" colSpan="2" onClick={this.chooseScore}>
                            {this.props.gameState.data.scorecards[this.props.name].scores["SIXES"]}
                        </td>

                    </tr>

                    <tr id="UpperBonus">
                        <td>Upper Bonus</td>
                        <td colSpan="2">{}</td>

                    </tr>

                    <tr id="UpperTotalWBonus">
                        <td>Upper Total</td>
                        <td colSpan="2">{}</td>

                    </tr>

                    <tr id="CardLower">
                        <th cols="2">
                            <h3>Lower Section</h3>
                        </th>

                    </tr>

                    <tr id="THREE_OF_A_KIND">
                        <td>3 of a Kind</td>
                        <td id="THREE_OF_A_KIND" colSpan="2" onClick={this.chooseScore}>
                            {this.props.gameState.data.scorecards[this.props.name].scores["THREE_OF_A_KIND"]}
                        </td>

                    </tr>

                    <tr id="FOUR_OF_A_KIND">
                        <td>4 of a Kind</td>
                        <td id="FOUR_OF_A_KIND" colSpan="2" onClick={this.chooseScore}>
                            {this.props.gameState.data.scorecards[this.props.name].scores["FOUR_OF_A_KIND"]}
                        </td>
                    </tr>

                    <tr id="FULL_HOUSE">
                        <td>Full House</td>
                        <td id="FULL_HOUSE" colSpan="2" onClick={this.chooseScore}>
                            {this.props.gameState.data.scorecards[this.props.name].scores["FULL_HOUSE"]}
                        </td>
                    </tr>

                    <tr id="SMALL_STRAIGHT">
                        <td>Small Straight</td>
                        <td id="SMALL_STRAIGHT" colSpan="2" onClick={this.chooseScore}>
                            {this.props.gameState.data.scorecards[this.props.name].scores["SMALL_STRAIGHT"]}
                        </td>

                    </tr>

                    <tr id="LARGE_STRAIGHT">
                        <td>Large Straight</td>
                        <td id="LARGE_STRAIGHT" colSpan="2" onClick={this.chooseScore}>
                            {this.props.gameState.data.scorecards[this.props.name].scores["LARGE_STRAIGHT"]}
                        </td>

                    </tr>

                    <tr id="YAHTZEE">
                        <td>Yahtzee - Five of a Kind</td>
                        <td id="YAHTZEE" colSpan="2" onClick={this.chooseScore}>
                            {this.props.gameState.data.scorecards[this.props.name].scores["YAHTZEE"]}
                        </td>

                    </tr>

                    <tr id="CHANCE">
                        <td>Chance</td>
                        <td id="CHANCE" colSpan="2" onClick={this.chooseScore}>
                            {this.props.gameState.data.scorecards[this.props.name].scores["CHANCE"]}
                        </td>

                    </tr>

                    <tr id="YahtzeeBonusTotal">
                        <td>Yahtzee Bonus Total</td>
                        <td colSpan="2">{}</td>

                    </tr>

                    <tr id="LowerTotal">
                        <td>Lower Total</td>
                        <td colSpan="2">{}</td>

                    </tr>
                    <br></br>

                    <tr id="GrandTotal">
                        <td>Grand Total</td>
                        <td colSpan="2">{}</td>

                    </tr>
                            
                </table>
                 
                ) : null}



            </div>
        )
    }
}

export default Card;