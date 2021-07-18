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
                            section or explained below
                        </p>
            </div>

        </div>
    )
}

export default Rules