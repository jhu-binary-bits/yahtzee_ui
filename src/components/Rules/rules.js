import './rules.css';

const Rules = () => {

    return(
        
        <div className="Rules">
            <h1>Rules</h1>
            <div className="TextRules">
            
                <h2>Object</h2>
                    <p>
                        Roll dice for scoring combination, and get the highest total score.
                    </p>

                <h2>Game Summary</h2>
                <p>
                    On each turn, roll the dice up to 3 times to get the highest scoring combination for one of 13 
                    categories. After you finish rolling, you must place a score or a zero in one of the 13 category
                    boxes on your score card. 
                    <br></br><br></br>
                    The game ends when all players have filled in their 13 boxes. Scores
                    are totaled, including any bonus points. The player with the highest total wins.
                </p>

                <h2>How to Play</h2>
                    <p>
                        Each player takes a score card. To decide who goes first, each player in turn rolls
                        all 5 dice. The player with the highest total goes first. Play then passes to the
                        left.
                    </p>
                
                <h2>Taking a Turn</h2>
                    <p>
                        On your turn, you may roll the dice up to 3 times, although you may stop and score after your
                        first or second roll. To roll the dice, click the "Roll Dice" button.
                        <br></br>
                        <b>First roll: </b>Roll all 5 dice. Set any "keepers" aside. You may stop and score now 
                        or roll again.
                        <br></br>
                        <b>Second roll: </b>Reroll ANY or ALL dice you want - even "keepers" from the previous roll.
                        You don't need to declare which combination you're rolling for; you may change your mind after
                        any roll.
                        <br></br>
                        You may stop and score after your second roll, or set aside any "keepers" and roll a third time.
                        <br></br>
                        <b>Third and final roll: </b>Reroll ANY or ALL dice you want. After your third roll, you must
                        fill in a box on your score card with a score or a zero. After you fill in a box, your turn is 
                        over.
                        
                    </p>

                    <h2>Scoring</h2>
                        <p>
                            When you are finished rolling, decide which box to fill in on your score card. For each game,
                            there is a column of 13 boxes. You must fill in a box on each turn; if you can't (or don't want
                            to) enter a score, you must enter a zero. Fill in each box only once, in any order, depending on
                            your best scoring option.
                            <br></br>
                            The score card is divided into an Upper Section and a Lower Section. Scoring combinations for each
                            section or explained below.
                            <br></br><br></br>
                            <table className="Tables">
                                <tr className="TableRow">
                                    <th className="TableHeader">Upper Section</th>
                                    <th className="TableHeader">What to Score</th>
                                </tr>
                                <tr className="TableRow">
                                    <td className="TableData">Aces(Ones)</td>
                                    <td className="TableData">Total of Aces only</td>
                                </tr>
                                <tr className="TableRow">
                                    <td className="TableData">Twos</td>
                                    <td className="TableData">Total of Twos only</td>
                                </tr>
                                <tr className="TableRow">
                                    <td className="TableData">Threes</td>
                                    <td className="TableData">Total of Threes only</td>
                                </tr>
                                <tr className="TableRow">
                                    <td className="TableData">Fours</td>
                                    <td className="TableData">Total of Fours only</td>
                                </tr>
                                <tr className="TableRow">
                                    <td className="TableData">Fives</td>  
                                    <td className="TableData">Total of Fives only</td>  
                                </tr>
                                <tr className="TableRow">
                                    <td className="TableData">Sixes</td>
                                    <td className="TableData">Total of Sixes only</td>
                                </tr>
                            </table>
                            <br></br>
                            To score in the Upper Section, add only the dice with the same number and enter the total in 
                            the appropriate box. For example, with the dice shown below you could score 9 in the Threes box, 
                            2 in the Twos box or 4 in the Fours box. 
                            <br></br><br></br>
                            Your goal in the Upper Section is to score a total of at least 63 points, to earn a 35-point bonus. 
                            The bonus points are based on score three of each number (Aces through Sixes); however, you may 
                            earn the bonus with any combination of scores totaling 63 points or more.
                            <br></br><br></br>
                            Each of the Lower Section scoring combinations is explained in the detail in the next column.
                            <br></br><br></br>
                            <table className="Tables">
                                <tr className="TableRow">
                                    <th className="TableHeader">Lower Section</th>
                                    <th className="TableHeader">What to Score</th>
                                </tr>
                                <tr className="TableRow">
                                    <td className="TableData">3 of a Kind</td>
                                    <td className="TableData">Total of all 5 dice</td>
                                </tr>
                                <tr className="TableRow">
                                    <td className="TableData">4 of a Kind</td>
                                    <td className="TableData">Total of all 5 dice</td>
                                </tr>
                                <tr className="TableRow">
                                    <td className="TableData">Full House</td>
                                    <td className="TableData">25 points</td>
                                </tr>
                                <tr className="TableRow">
                                    <td className="TableData">Small Straight</td>
                                    <td className="TableData">30 points</td>
                                </tr>
                                <tr className="TableRow">
                                    <td className="TableData">Large Straight</td>
                                    <td className="TableData">40 points</td>
                                </tr>
                                <tr className="TableRow">
                                    <td className="TableData">Yahtzee (5 of a Kind)</td>
                                    <td className="TableData">50 points</td>
                                </tr>
                                <tr className="TableRow">
                                    <td className="TableData">Chance</td>
                                    <td className="TableData">Total of all 5 dice</td>
                                </tr>
                            </table>
                            <br></br><br></br>
                            <b>3 of a Kind:</b> Score in this box only if the dice include 3 or more of the same number. For 
                            example, with the dice of three showing a 5, one a 2, and the other a 1, you could score 18 points 
                            in the 3 of a Kind box.
                            <br></br><br></br>
                            <i>Other Scoring Options:</i> You could instead score 18 in the <i>Chance</i> box, or you could 
                            score in the Upper Section: 15 in the Fives box, 2 in the Twos box or 1 in the Aces box.
                            <br></br><br></br>
                            <b>4 of a Kind:</b> Score in this box only if the dice include 4 or more of the same number. 
                            For example, with the dice showing four dice with 2 and the last dice with a 6, you could score 
                            14 points in the 4 of a Kind box.
                            <br></br><br></br>
                            <i>Other Scoring Options:</i> You could instead scofre 14 in the 3 of a Kind box or in the 
                            <i>Chance</i> box -- or you could score in the Upper Section: 8 in the Twos box, or 6 in the 
                            Sixes box.
                            <br></br><br></br>
                            <b>Full House: </b> Score in this box only if the dice show three of one number and two of another. 
                            Any Full House is worth 25 points. For example, with the dice showwing three with a 3, and two dice 
                            with 5, you could score 25 points in the Full House box.
                            <br></br><br></br>
                            <i>Other Scoring Options:</i> You could instead score 19 in the 3 of a Kind box or in the <i>Chance</i> 
                            box -- or you could score in the Upper Section: 9 in the Threes box or 10 in the Five box.
                            <br></br><br></br>
                            <b>Small Straight:</b> Score in this box only if the dice show any sequence of four numbers. Any Small 
                            Straight is worth 30 points. You could score 30 points in the Small Straight box with any of the three 
                            dice combinations of one dice with 1, second dice with 2, third dice with 3, fourth dice with 4 and the 
                            fifth dice showing any number.
                            <br></br>
                            <b>Or</b> One dice with 2, second dice with 3, third dice with 4, fourth dice with 5, and the last dice 
                            showing any number.
                            <br></br>
                            <b>Or</b> One dice with 3, second dice with 4, third dice with 5, fourth dice with 6, and the last dice 
                            showing any number.
                            <br></br><br></br>
                            <i>Other Scoring Options:</i> You could instead score in the <i>Chance</i> box, or in the appropriate Upper 
                            Section box.
                            <br></br><br></br>
                            <b>Large Straight:</b> Score in this box only if the dice show any sequence of five numbers. Any Large Straight
                            is worth 40 points.
                            <br></br>
                            You could score 40 points in the Large Straight box with either of the two dice combination of 
                            <br></br>
                            - One dice with 1, second dice with 2, third dice with 3, fourth dice with 4, and the last dice with 5.
                            <br></br>
                            - One dice with 2, second dice with 3, third dice with 4, fourth dice with 5, and the last dice with 6.
                            <br></br><br></br>
                            <i>Other Scoring Options: </i> You could instead score in the Small Straight box, the <i>Chance</i> box,
                            or the appropriate Upper Section box.
                            <br></br><br></br>
                            <b>Yahtzee:</b> Score in this box only if the dice show five of the ame number (5 of a kind). A <i>Yahtzee</i> 
                            example is <br></br>
                            All dice having a 1. <br></br>
                            The first <i>Yahtzee</i> you enter in the <i>Yahtzee</i> box is worth 50 points. For each additional <i>Yahtzee</i> 
                            you roll, you earn a bonus (see <i>Yahtzee Bonus</i>, below).
                            <br></br><br></br>
                            <b>Chance:</b> Score the total of any 5 dice in this box. This catch-all category comes in handy when you 
                            can't (or don't want to) score in another category, and don't want to enter a zero.
                            <br></br><br></br>
                            For example, you could score 22 points in the <i>Chance</i> box with the following dice.<br></br>
                            One dice with a 1, second dice with 4, third dice with 5, fourth and fifth dice with 6s.
                            <br></br><br></br>
                            <b>YAHTZEE BONUS:</b> If you roll a <i>Yahtzee</i> and have already filled in the <i>Yahtzee</i> box with 
                            a 50, you get a 100-point bonus! Take one bonus chip, then place a check mark in the <i>Yahtzee Bonus</i> 
                            box on your score card. Then fill in one of the 13 boxes on your score card according to the <i>Joker Rules</i>, 
                            described below. <br></br>
                            As long as you've score 50 in the <i>Yahtzee</i> box, youget a <i>Yahtzee</i> bonus for each additional <i>Yahtzee</i> 
                            you roll -- just squeeze in the check marks if necessary.<br></br>
                            If you roll a <i>Yahtzee</i> and have already entered zero in the <i>Yahtzee</i> box, you do not earn a <i>Yahtzee</i> 
                            bonus; however, you must fill in one of the 13 boxes on your score card according to the <i>Joker Rules</i> below.
                            <br></br><br></br>
                            <b>Joker Rules:</b> Score the total of all 5 dice in the appropriate Upper Section box. If this box has already been 
                            filled in, score as follows in any open Lower Section box: <br></br>
                            <i>
                                3 of a Kind: Total of all 5 dice <br></br>
                                4 of a Kind: Total of all 5 dice <br></br>
                                Full House: 25 points <br></br>
                                Small Straight: 30 points <br></br>
                                Large Straight: 40 points <br></br>
                                Chance: Total of all 5 dice <br></br>
                            </i>
                            <br></br>
                            If the appropriate Upper Section box and all Lower Section boxes are filled in, you must enter a zero in any open 
                            Upper Section box. <br></br>
                            For example, you roll five 4s. You've already entered zero in the <i>Yahtzee</i> box, and have also scored in the Fours 
                            box in the Upper Section. The Joker rules allow you to score in any open box in the Lower Section. You decide to score 40 
                            points in the Large Straight box.
                            <br></br><br></br>
                        </p>
                    <h2>Ending A Game</h2>
                        <p>
                            Once each player has filled in all 13 category boxes, the game ends. Each player now adds up his or her 
                            score as follows: <br></br>
                            <b>Upper Section:</b> Add up the Upper scores and enter the total in the <i>Total Score</i> box. Enter the 
                            35-point bonus in the <i>Bonus</i> box if you scored 63 points or more. Then enter the total in the <i>Total</i> 
                            box. <br></br>
                            <b>Lower Section:</b> Add up the Lower section scores, and enter the total in the <i>Total</i> of Lower Section box. 
                            Add 100 points for each check mark in the <i>Yahtzee Bonus</i> boxes (that is, one check mark for each bonus chip).
                            <br></br><br></br>
                            <b>Grand Total:</b> Add the Upper Section and Lower Section scores, and enter the total in this box. This is your score 
                            for the game.
                        </p>
                    <h2>How to Win</h2>
                        <p>
                            After the scores are tallied, the player with the highest Grand Total wins the game!
                        </p>
                    <h2>Solo Play</h2>
                        <p>
                            No competition around? Challenge yourself in solitaire play, and try to beat your previous score!
                        </p>
            </div>

        </div>
    )
}

export default Rules