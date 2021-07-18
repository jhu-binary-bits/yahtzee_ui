import React, { Component } from 'react';
import './chat.css';

class Chat extends Component {

    constructor(props){
        super(props)
        this.state = {
            message: "",
            messageSubmitted: "",
            // chatHistoryList: this.props.chatHistory.map((message) => <li>{message}</li>)
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
                messageSubmitted: this.state.message,
                message: "",
<<<<<<< HEAD
        });   
=======
          });
>>>>>>> 7a8b88e (Add websockets client)
      }


    render(){

        return(
            <div className="Chat">

                <div className="ChatTitle">
                    Chat History
                </div>

                <div className="ChatSpace">
<<<<<<< HEAD
                    <textarea id="chatSpace" type="text" value={this.state.messageSubmitted}></textarea>
=======
                    <textarea cols="21" rows="28" type="text" value={this.state.chatHistory} ></textarea>
>>>>>>> 7a8b88e (Add websockets client)
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