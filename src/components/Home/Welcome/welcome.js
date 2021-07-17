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
        // this.testButton = this.testButton.bind(this)
        // this.handleChange = this.handleChange.bind(this);
        // this.beginPlay = this.beginPlay.bind(this);
    }

    // testButton() {
    //     console.log("Clicking button")
    //     this.setState({
    //         testData: "Hello Team, Testing button to state state"
    //     })
    // }

    // beginPlay(bool) {
    //     this.setState({
    //         playOn: bool
    //     })
    //     console.log("Clicked begin play");
        
        
    // }

    // handleChange(event) {
    //     console.log("The name value is " + this.state.name);
    //     this.setState({
    //         name: event.target.value
    //     });
    //   }
    
    //   handleSubmit(event) {
    //     // alert('A name was submitted: ' + this.state.name);
    //     console.log("A name was submitted " + this.state.name);
    //     event.preventDefault();
    //   }


    render(){

        return(
            <div className="Welcome">
                <h2>Welcome</h2>
                <div id="IntroParagraph">
                    This is the Yahtzee++ project. This was created for the Software Engineering course
                    at Johns Hopkins University. Please enter your name and press "Begin Play" to start 
                    playing Yahtzee++.
                </div>


                    {/* <button className="TestButton" onClick={this.testButton}>Test Button</button>
                    <textarea id="nameArea" value={this.state.testData} ></textarea> */}


            </div>
        )
    }
}

export default Welcome;