import React, { Component } from 'react';
import './welcome.css';

class Welcome extends Component {

    constructor(props){
        super(props)
        this.state = {
            testData: "Start Test",
            name: "",
            playOn: props.playOn,
        }
    }

    render(){

        return(
            <div className="Welcome">
                <h2>Welcome</h2>
                <div id="IntroParagraph">
                    This is the Yahtzee++ project. This was created for the Software Engineering course
                    at Johns Hopkins University. Please enter your name and press "Begin Play" to start 
                    playing Yahtzee++.
                    <br></br>
                    <br></br>
                    Enter your name to begin to play. Text field cannot be empty.
                </div>
            </div>
        )
    }
}

export default Welcome;