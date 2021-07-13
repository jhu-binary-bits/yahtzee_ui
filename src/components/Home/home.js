
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
        let data = {}
        data["timestamp"] = Date.now()
        data["messageType"] = "test"
        let payload = {}
        payload["number"] = 1
        payload["text"] = "two"
        data["payload"] = payload

        console.log("sending sample data")
        window.client.send(JSON.stringify(data))
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