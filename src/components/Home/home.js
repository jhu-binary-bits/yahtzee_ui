
import React, { Component } from 'react';



class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            testData: "Start Test",

        }
        this.testButton = this.testButton.bind(this)
    }

    testButton() {
        console.log("Clicking button")
        window.client.send("Hello server")

        this.setState({
            testData: "Hello Team, Testing button to state state"
        })
        // Creating and sending an example nested JSON message
        let message = {}
        message["timestamp"] = Date.now()
        message["type"] = "chatMessage"
        let payload = {}
        payload["name"] = "Tom"
        payload["text"] = "Was that a Yahtzee on the first roll?"
        message["data"] = payload

        console.log("sending sample data")
        window.client.send(JSON.stringify(message))
    }

    render() {
        return(
            <div className="Home">

                <h2>Welcome</h2>
                    <p>
                        This is the Yahtzee++ project. This was created for the Software Engineering course
                        at Johns Hopkins University. This is a place holder.
                    </p>


                    <button className="TestButton" onClick={this.testButton}>Test Button</button>
                    <textarea value={this.state.testData} ></textarea>

                    

            </div>



        )

    }
}

export default Home