import React, { Component } from 'react';
import './card.css';
import { objectTypeAnnotation } from '@babel/types';

class Card extends Component {

    constructor(props){
        super(props)
        console.log("Card constructor called")
        this.state = {
            playerOrder: Object.entries(this.props.gameState.data.players).length + 1,
            ones: null,
            twos: null,
            threes: null,
            fours: null,
            fives: null,
            sixes: null,
            three_of_a_kind: null,
            four_of_a_kind: null,
            full_house: null,
            small_straight: null,
            large_straight: null,
            yahtzee: null,
            chance: null
        }
        
        this.chooseOnesScore = this.chooseOnesScore.bind(this)
        this.chooseTwosScore = this.chooseTwosScore.bind(this)
        this.chooseThreesScore = this.chooseThreesScore.bind(this)
        this.chooseFoursScore = this.chooseFoursScore.bind(this)
        this.chooseFivesScore = this.chooseFivesScore.bind(this)
        this.chooseSixesScore = this.chooseSixesScore.bind(this)
        this.chooseThreeOfAKind = this.chooseThreeOfAKindScore.bind(this)
        this.chooseFourOfAKind = this.chooseFourOfAKindScore.bind(this)
        this.chooseFullHouse = this.chooseFullHouseScore.bind(this)
        this.chooseSmallStraight = this.chooseSmallStraightScore.bind(this)
        this.chooseLargeStraight = this.chooseLargeStraightScore.bind(this)
        this.chooseYahtzee = this.chooseYahtzeeScore.bind(this)
        this.chooseChance = this.chooseChanceScore.bind(this)
    }

    componentDidMount(){
        console.log("Component did Mount")
        console.log("Component Mount player : " + this.props.name + " player order " + this.state.playerOrder)
    }

    chooseOnesScore() {
        console.log("clicked on Ones cell")
        
        if(this.state.ones == null) {
            document.getElementById("Ones").style.fontWeight = "bold"

            this.publish_score_selected_event("ONES")
            this.setState({ones:this.props.gameState.data.scorecards[0].scores[0].points})
            console.log("SCORE Ones POINTS " + this.props.gameState.data.scorecards[0].scores[0].points)
            
        } 
    }

    chooseTwosScore() {
        if(this.state.twos == null) {
            document.getElementById("Twos").style.fontWeight = "bold"

            this.publish_score_selected_event("TWOS")
            this.setState({twos:this.props.gameState.data.scorecards[0].scores[1].points})
            console.log("SCORE Twos POINTS " + this.props.gameState.data.scorecards[0].scores[1].points)

        }
    }

    chooseThreesScore(){
        if(this.state.threes == null) {
            document.getElementById("Threes").style.fontWeight = "bold"
            
            this.publish_score_selected_event("THREES")
            this.setState({threes: this.props.gameState.data.scorecards[0].scores[2].points})
            console.log("SCORE Threes POINTS " + this.props.gameState.data.scorecards[0].scores[2].points)
        }
    }

    chooseFoursScore() {
        if(this.state.fours == null){
            document.getElementById("Fours").style.fontWeight = "bold"

            this.publish_score_selected_event("FOURS")
            this.setState({fours: this.props.gameState.data.scorecards[0].scores[3].points})
            console.log("SCORE Fours POINTS " + this.props.gameState.data.scorecards[0].scores[3].points)
        }
    }

    chooseFivesScore() {
        if(this.state.fives == null) {
            document.getElementById("Fives").style.fontWeight = "bold"

            this.publish_score_selected_event("FIVES")
            this.setState({fives: this.props.gameState.data.scorecards[0].scores[4].points})
            console.log("SCORE Fives POINTS " + this.props.gameState.data.scorecards[0].scores[4].points)
        }
    }

    chooseSixesScore() {
        if(this.state.sixes == null) {
            document.getElementById("Sixes").style.fontWeight = "bold"

            this.publish_score_selected_event("SIXES")
            this.setState({sixes: this.props.gameState.data.scorecards[0].scores[5].points})
            console.log("SCORE Sixes POINTS " + this.props.gameState.data.scorecards[0].scores[5].points)
        }
    }

    chooseThreeOfAKindScore() {
        if(this.state.three_of_a_kind == null) {
            document.getElementById("3OfAKind").style.fontWeight = "bold"

            this.publish_score_selected_event("THREE_OF_A_KIND")
            this.setState({three_of_a_kind: this.props.gameState.data.scorecards[0].scores[6].points})
            console.log("SCORE Three Kind POINTS " + this.props.gameState.data.scorecards[0].scores[6].points)
        }
    }

    chooseFourOfAKindScore() {
        if(this.state.four_of_a_kind == null) {
            document.getElementById("4OfAKind").style.fontWeight = "bold"

            this.publish_score_selected_event("FOUR_OF_A_KIND")
            this.setState({four_of_a_kind: this.props.gameState.data.scorecards[0].scores[7].points})
            console.log("SCORE Four Kind POINTS " + this.props.gameState.data.scorecards[0].scores[7].points)
        }
    }

    chooseFullHouseScore() {
        if(this.state.full_house == null) {
            document.getElementById("FullHouse").style.fontWeight = "bold"

            this.publish_score_selected_event("FULL_HOUSE")
            this.setState({full_house: this.props.gameState.data.scorecards[0].scores[8].points})
            console.log("SCORE Full House POINTS " + this.props.gameState.data.scorecards[0].scores[8].points)
        }
    }

    chooseSmallStraightScore() {
        if(this.state.small_straight == null) {
            document.getElementById("SmallStraight").style.fontWeight = "bold"

            this.publish_score_selected_event("SMALL_STRAIGHT")
            this.setState({small_straight: this.props.gameState.data.scorecards[0].scores[9].points})
            console.log("SCORE Small Straight POINTS " + this.props.gameState.data.scorecards[0].scores[9].points)
        }
    }

    chooseLargeStraightScore() {
        if(this.state.large_straight == null) {
            document.getElementById("LargeStraight").style.fontWeight = "bold"

            this.publish_score_selected_event("LARGE_STRAIGHT")
            this.setState({large_straight: this.props.gameState.data.scorecards[0].scores[10].points})
            console.log("SCORE Large Straight POINTS " + this.props.gameState.data.scorecards[0].scores[10].points)
        }
    }

    chooseYahtzeeScore() {
        if(this.state.yahtzee == null) {
            document.getElementById("Yahtzee").style.fontWeight = "bold"

            this.publish_score_selected_event("Yahtzee")
            this.setState({yahtzee: this.props.gameState.data.scorecards[0].scores[11].points})
            console.log("SCORE Yahtzee POINTS " + this.props.gameState.data.scorecards[0].scores[11].points)
        }
    }

    chooseChanceScore() {
        if(this.state.chance == null) {
            document.getElementById("Chance").style.fontWeight = "bold"

            this.publish_score_selected_event("Chance")
            this.setState({chance: this.props.gameState.data.scorecards[0].scores[12].points})
            console.log("SCORE Chance POINTS " + this.props.gameState.data.scorecards[0].scores[12].points)
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

                    <tr id="Ones">
                        <td>Aces</td>
                        <td colSpan="2" onClick={this.chooseOnesScore}>{this.state.ones}</td>

                    </tr>

                    <tr id="Twos">
                        <td>Twos</td>
                        <td id="Twos" colSpan="2" onClick={this.chooseTwosScore}>{this.state.twos}</td>

                    </tr>

                    <tr id="Threes">
                        <td>Threes</td>
                        <td id="Threes" colSpan="2" onClick={this.chooseThreesScore}>{this.state.threes}</td>

                    </tr>

                    <tr id="Fours">
                        <td>Fours</td>
                        <td id="Fours" colSpan="2" onClick={this.chooseFoursScore}>{this.state.fours}</td>

                    </tr>

                    <tr id="Fives">
                        <td>Fives</td>
                        <td id="Fives" colSpan="2" onClick={this.chooseFivesScore}>{this.state.fives}</td>

                    </tr>

                    <tr id="Sixes">
                        <td>Sixes</td>
                        <td colSpan="2" onClick={this.chooseSixesScore}>{this.state.sixes}</td>

                    </tr>

                    <tr id="UpperTotal">
                        <td>Total</td>
                        <td colSpan="2">{}</td>

                    </tr>

                    <tr id="UpperBonus">
                        <td>UpperBonus</td>
                        <td colSpan="2">{}</td>

                    </tr>

                    <tr id="UpperTotalWBonus">
                        <td>UpperTotal W/ Bonus</td>
                        <td colSpan="2">{}</td>

                    </tr>

                    <tr id="CardLower">
                        <th cols="2">
                            <h3>Lower Section</h3>
                        </th>

                    </tr>

                    <tr id="3OfAKind">
                        <td>3 of a Kind</td>
                        <td colSpan="2" onClick={this.chooseThreeOfAKindScore}>{this.state.three_of_a_kind}</td>

                    </tr>

                    <tr id="4ofKind">
                        <td>4 of a Kind</td>
                        <td colSpan="2" onClick={this.chooseFourOfAKindScore}>{this.state.four_of_a_kind}</td>
                    </tr>

                    <tr id="FullHouse">
                        <td>Full House</td>
                        <td colSpan="2" onClick={this.chooseFullHouseScore}>{this.state.full_house}</td>

                    </tr>

                    <tr id="SmallStraight">
                        <td>Small Straight</td>
                        <td colSpan="2" onClick={this.chooseSmallStraightScore}>{this.state.small_straight}</td>

                    </tr>

                    <tr id="LargeStraight">
                        <td>Large Straight</td>
                        <td colSpan="2" onClick={this.chooseLargeStraightScore}>{this.state.large_straight}</td>

                    </tr>

                    <tr id="Yahtzee">
                        <td>Yahtzee - Five of a Kind</td>
                        <td colSpan="2" onClick={this.chooseYahtzee}>{this.state.yahtzee}</td>

                    </tr>

                    <tr id="Chance">
                        <td>Chance</td>
                        <td colSpan="2" onClick={this.chooseChance}>{this.state.chance}</td>

                    </tr>

                    <tr id="YahtzeeBonusTotal">
                        <td>YahtzeeBonusTotal</td>
                        <td colSpan="2">{}</td>

                    </tr>

                    <tr id="LowerTotal">
                        <td>LowerTotal</td>
                        <td colSpan="2">{}</td>

                    </tr>
                    <br></br>

                    <tr id="GrandTotal">
                        <td>GrandTotal</td>
                        <td colSpan="2">{}</td>

                    </tr>
                            
                </table>
                 
             



            </div>
        )
    }
}

export default Card;