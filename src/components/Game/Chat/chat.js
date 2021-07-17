import React, { Component } from 'react';
import './chat.css';

class Chat extends Component {

    constructor(props){
        super(props)
        this.state = {
            message: "",
            messageSubmitted: "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.submitChat = this.submitChat.bind(this);
    }

    handleChange(event) {
        console.log("The input text in chat: " + this.state.message);
        this.setState({
            message: event.target.value
        });
      }

      submitChat(event){
          console.log("The submit chat button was clicked");
          this.setState({
                messageSubmitted: this.state.message,
                message: "",
        });
          
      }


    render(){

        return(
            <div className="Chat">

                <div className="ChatTitle">
                    {this.props.name}'s Chat History
                </div>

                <div className="ChatSpace">
                    Chat History Space
                    <textarea cols="21" rows="28" type="text" value={this.state.messageSubmitted} ></textarea>
                </div>

                <div className="ChatTyping">
                    <textarea  cols="21" rows="7" id="input" type="text" value={this.state.message} onChange={this.handleChange}>
                    </textarea>
                </div>

                <div className="SubmitChat" >
                    <input type="button" onClick={this.submitChat} value="Submit"></input>
                </div>

            </div>
        )
    }
}

export default Chat;