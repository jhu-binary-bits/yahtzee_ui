
import React, { Component } from 'react';
import './transcript.css';

class Transcript extends Component {

    constructor(props){
        super(props)
        this.state = {

        }
    }


    render(){

        return(
            <div className="Transcript">

                <p>
                {this.props.name}'s Game Transcript
                </p>



            </div>
        )
    }
}

export default Transcript;