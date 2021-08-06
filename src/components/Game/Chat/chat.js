import React, { Component } from 'react';
import './chat.css';

class Chat extends Component {

    constructor(props){
        super(props)
        this.state = {
            message: "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.submitChat = this.submitChat.bind(this);
        
    }

    handleChange(event) {
        // console.log("The input text in chat: " + this.state.message);
        this.setState({
            message: event.target.value
        });
      }

      submitChat(event){
          console.log("The submit chat button was clicked");
          let messageEvent = {
            "timestamp": Date.now(),
            "type": "chat_message",
            "data": {
                "player_name": this.props.name,
                "content": this.state.message
            }
          }
          window.client.send(JSON.stringify(messageEvent))
          this.setState({
                message: "",
          });
      }


    render(){

        return(
            <div className="Chat">

                <div className="ChatTitle">
                    Game Chat
                </div>

                <div className="ChatSpace">
                    <textarea id="chatSpace" type="text" value={this.props.gameState.data.chat_transcript}></textarea>
                </div>

                <div className="ChatTyping">
                    <textarea  id="chatTyping"  type="text" value={this.state.message} onChange={this.handleChange}></textarea>
                </div>

                <div className="SubmitChat" >
                    <input type="button" onClick={this.submitChat} value="Submit"></input>
                </div>

            </div>
        )
    }
}

export default Chat;