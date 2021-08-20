import React, { Component } from 'react';
import './card.css';
import { objectTypeAnnotation } from '@babel/types';

class Card extends Component {

    constructor(props){
        super(props)
        console.log("Card constructor called")

        this.chooseScore = this.chooseScore.bind(this)

        this.renderPlayerNames = this.renderPlayerNames.bind(this)
        this.renderScoreRow = this.renderScoreRow.bind(this)
        this.renderTotalRow = this.renderTotalRow.bind(this)
        this.renderSeparator = this.renderSeparator.bind(this)
    }

    componentDidMount(){
        console.log("Component did Mount")
    }

    chooseScore(event) {
        console.log("Clicked on " + event.target.id + "  cell")

        if (this.props.gameState.data.scorecards[this.props.name].scores[event.target.id] === null
            && this.props.gameState.data.current_turn.player === this.props.name
            && this.props.gameState.data.current_turn.roll_count != 0) {
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

    renderPlayerNames() {
        return (
            <tr id="PlayerNames">
                <th colSpan="2"></th>
                <th colSpan="2" >{this.props.name}</th>
                    {Object.entries(this.props.gameState.data.scorecards).map((item) => {
                        if (this.props.name !== item[0]){
                            return <th colSpan="2">{item[0]}</th>
                        }
                    })}
            </tr>
        )
    }

    renderScoreRow(score_type, score_string) {
        return (

            <tr id="score">
                <td>{score_string}</td>
                <td id={score_type} align="center" className= { this.props.gameState.data.scorecards[this.props.name].scores[score_type] == null ? 'Column' : 'ColumnSelected' } colSpan="2" onClick={this.chooseScore}>
                  {this.check_conditions(score_type) ? (
                      this.props.gameState.data.current_turn.valid_scores[score_type]
                  ) : (
                    this.props.gameState.data.scorecards[this.props.name].scores[score_type]
                  )}
                </td>
                {Object.entries(this.props.gameState.data.scorecards).map((item, index) => {
                    if (item[0] !== this.props.name){
                        return <td colSpan="2" align="center">
                            {item[1].scores[score_type]}
                        </td>
                    }
                })}
            </tr>
        )
    }

    check_conditions(score_name){
      return this.props.gameState.data.game_started &&
        this.props.gameState.data.current_turn.player == this.props.name &&
        this.props.gameState.data.scorecards[this.props.name].scores[score_name] == null &&
        this.props.gameState.data.current_turn.roll_count != 0 &&
        this.props.gameState.data.current_turn.valid_scores[score_name] != 0
    }

    renderTotalRow(total_type, total_string) {
        let points = this.props.gameState.data.scorecards[this.props.name][total_type]
        return (

            <tr id="total">
                <td>{total_string}</td>
                    {(points !== 0) ? (
                        <td id={total_type} colSpan="2" align="center">{points}</td>
                    ) : (
                        <td id={total_type} colSpan="2" align="center"></td>
                    )}

                {Object.entries(this.props.gameState.data.scorecards).map((item, index) => {
                    if (item[0] !== this.props.name) {
                        if (item[1][total_type] !== 0) {
                            return <td colSpan="2" align="center">{item[1][total_type]}</td>
                        } else {
                            return <td colSpan="2"></td>
                        }
                    }
                })}
            </tr>

        )
    }

    renderSeparator() {
        return (
            <tr id="separator">
                <th colSpan="12">
                    <h4></h4>
                </th>
            </tr>
        )
    }

    render(){
        return (
            <div className="Card">

                {(this.props.gameState.data.game_started) ? (

                <table className="ScoreCardTable">

                    {this.renderPlayerNames()}
                    {this.renderScoreRow("ONES", "Ones")}
                    {this.renderScoreRow("TWOS", "Twos")}
                    {this.renderScoreRow("THREES", "Threes")}
                    {this.renderScoreRow("FOURS", "Fours")}
                    {this.renderScoreRow("FIVES", "Fives")}
                    {this.renderScoreRow("SIXES", "Sixes")}

                    {this.renderTotalRow("UPPER_BONUS", "Upper Bonus")}
                    {this.renderTotalRow("UPPER_TOTAL", "Upper Total")}

                    {this.renderSeparator()}

                    {this.renderScoreRow("THREE_OF_A_KIND", "Three of a Kind")}
                    {this.renderScoreRow("FOUR_OF_A_KIND", "Four of a Kind")}
                    {this.renderScoreRow("FULL_HOUSE", "Full House")}
                    {this.renderScoreRow("SMALL_STRAIGHT", "Small Straight")}
                    {this.renderScoreRow("LARGE_STRAIGHT", "Large Straight")}
                    {this.renderScoreRow("YAHTZEE", "Yahtzee")}
                    {this.renderScoreRow("CHANCE", "Chance")}

                    {this.renderTotalRow("yahtzee_bonus", "Yahtzee Bonus Total")}
                    {this.renderTotalRow("LOWER_TOTAL", "Lower Total")}

                    {this.renderSeparator()}

                    {this.renderTotalRow("UPPER_TOTAL", "Upper Total")}
                    {this.renderTotalRow("LOWER_TOTAL", "Lower Total")}
                    {this.renderTotalRow("GRAND_TOTAL", "Grand Total")}
                </table>

                ) : null}
            </div>
        )
    }
}

export default Card;
