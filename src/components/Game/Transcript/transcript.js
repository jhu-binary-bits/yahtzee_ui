
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
                    Transcript of {this.props.name}
                </p>



            </div>
        )
    }
}

export default Transcript;