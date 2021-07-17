import React, { Component } from 'react';
import './chat.css';

class Chat extends Component {

    constructor(props){
        super(props)
        this.state = {
        }
    }


    render(){

        return(
            <div className="Chat">

                <div className="ChatTitle">
                    {this.props.name}'s Chat History
                </div>

                <div className="ChatSpace">
                    Chat Space
                </div>





            </div>
        )
    }
}

export default Chat;