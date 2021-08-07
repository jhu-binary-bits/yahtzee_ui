
import React, { Component } from 'react';
import './transcript.css';

class Transcript extends Component {

    constructor(props){
        super(props)
        this.state = {}
    }


    render(){

        return(
            <div className="Transcript">

                <div className="TranscriptTitle" align="center">
                    Game Transcript
                </div>

                <div className="TranscriptSpace">
                    <textarea id="transcriptSpace" type="text" value={this.props.gameState.data.game_transcript}></textarea>
                </div>

            </div>
        )
    }
}

export default Transcript;