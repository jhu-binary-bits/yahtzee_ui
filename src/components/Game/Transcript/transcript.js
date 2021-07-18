
import React, { Component } from 'react';
import './transcript.css';

class Transcript extends Component {

    constructor(props){
        super(props)
    }


    render(){

        return(
            <div className="Transcript">

                <p>
                Game History
                </p>

                <div className="ChatSpace">
                    <textarea id="chatSpace" type="text" value={this.props.gameState.data.game_transcript}></textarea>
                </div>

            </div>
        )
    }
}

export default Transcript;