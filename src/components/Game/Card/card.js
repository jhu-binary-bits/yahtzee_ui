import React, { Component } from 'react';
import './card.css';
import { objectTypeAnnotation } from '@babel/types';

class Card extends Component {

    constructor(props){
        super(props)
        console.log("Card constructor called")
        this.state = {
            playerOrder: null,
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
        this.chooseThreeOfAKind = this.chooseThreeOfAKind.bind(this)
    }

    componentDidMount(){
        console.log("Component did Mount")
    }

    chooseOnesScore() {
        console.log("clicked on Aces cell")
        
        if(this.state.ones == null) {
            document.getElementById("Ones").style.fontWeight = "bold"
            this.setState({
                ones: this.props.gameState.data.current_turn.valid_scores[0].points
            })
        } 
    }

    chooseTwosScore() {
        if(this.state.twos == null) {
            document.getElementById("Twos").style.fontWeight = "bold"
            this.setState({
                twos: this.props.gameState.data.current_turn.valid_scores[1].points
            })
        }
    }

    chooseThreesScore(){
        if(this.state.threes == null) {
            document.getElementById("Threes").style.fontWeight = "bold"
            this.setState({
                threes: this.props.gameState.data.current_turn.valid_scores[2].points

            })
        }
    }

    chooseFoursScore() {
        if(this.state.fours == null){
            document.getElementById("Fours").style.fontWeight = "bold"
            this.setState({
                fours: this.props.gameState.data.current_turn.valid_scores[3].points
            })
        }
    }

    chooseFivesScore() {
        if(this.state.fives == null) {
            document.getElementById("Fives").style.fontWeight = "bold"
            this.setState({
                fives: this.props.gameState.data.current_turn.valid_scores[4].points
            })
        }
    }

    chooseSixesScore() {
        if(this.state.sixes == null) {
            document.getElementById("Sixes").style.fontWeight = "bold"
            this.setState( {
                sixes: this.props.gameState.data.current_turn.valid_scores[5].points
            })
        }
    }

    chooseThreeOfAKind() {
        if(this.state.three_of_a_kind == null) {
            document.getElementById("3OfAKind").style.fontWeight = "bold"
            this.setState( {
                three_of_a_kind: this.props.gameState.data.current_turn.valid_scores[6].points
            })
        }
    }

    
    render(){
        console.log("Render card called")

        return(
            <div className="Card">
                <p>
                    scorecards
                </p>

                {(this.props.gameState.data.game_started && this.props.beginPlay == true)? 
                    this.setState({
                        // playerOrder: i,
                        ones: this.props.gameState.data.current_turn.valid_scores[0].points,
                        twos: this.props.gameState.data.current_turn.valid_scores[1].points,
                        threes: this.props.gameState.data.current_turn.valid_scores[2].points,
                        fours: this.props.gameState.data.current_turn.valid_scores[3].points,
                        fives: this.props.gameState.data.current_turn.valid_scores[4].points,
                        sixes: this.props.gameState.data.current_turn.valid_scores[5].points,
                        three_of_a_kind: this.props.gameState.data.current_turn.valid_scores[6].points,
                        four_of_a_kind: null,
                        full_house: null,
                        small_straight: null,
                        large_straight: null,
                        yahtzee: null,
                        chance: null
                    }) : null
                }
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
                        <td colSpan="2" onClick={this.chooseThreeOfAKind}>{this.state.three_of_a_kind}</td>

                    </tr>

                    <tr id="4ofKind">
                        <td>4 of a Kind</td>
                        <td colSpan="2">{this.state.four_of_a_kind}</td>

                    </tr>

                    <tr id="FullHouse">
                        <td>Full House</td>
                        <td colSpan="2">{this.state.full_house}</td>

                    </tr>

                    <tr id="SmStraight">
                        <td>Small Straight</td>
                        <td colSpan="2">{this.state.small_straight}</td>

                    </tr>

                    <tr id="LgStraight">
                        <td>Large Straight</td>
                        <td colSpan="2">{this.state.large_straight}</td>

                    </tr>

                    <tr id="5ofKind">
                        <td>Yahtzee - Five of a Kind</td>
                        <td colSpan="2">{this.state.yahtzee}</td>

                    </tr>

                    <tr id="Chance">
                        <td>Chance</td>
                        <td colSpan="2">{this.state.chance}</td>

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