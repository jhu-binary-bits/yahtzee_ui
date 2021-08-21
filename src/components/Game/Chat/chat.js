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
        this.renderChat = this.renderChat.bind(this);
        this.rerender = this.rerender.bind(this);
        this.renderChatTitle = this.renderChatTitle.bind(this);
    }

    handleChange(event) {
        // console.log("The input text in chat: " + this.state.message);
        this.setState({
            message: event.target.value
        });
      }
    handleKeyPress(event){
        var code = event.keyCode || event.which;
        if (code === 13) {
          this.submitChat();
          this.setState({
                message: "",
          });
        }

      }

      submitChat(event){
          let dest = document.querySelector('#message_dest').value;
          console.log("The submit chat button was clicked");
          let messageEvent = {
            "timestamp": Date.now(),
            "type": "chat_message",
            "data": {
                "player_name": this.props.name,
                "content": this.state.message,
                "destination": dest
            }
          }
          window.client.send(JSON.stringify(messageEvent))
          this.setState({
                message: "",
          });
      }

    renderChat(){
      var dest = ""
      if(document.querySelector('#message_dest') == null){
        dest = "all"
      }
      else {
        dest = document.querySelector('#message_dest').value;
      }

      if(dest == "all"){
        return <textarea id="chatSpace" type="text" value={this.props.gameState.data.chat_transcript}></textarea>
      }
      else{
        let key = this.props.name + "/" + dest
        return <textarea id="chatSpace" type="text" value={this.props.gameState.data.private_transcripts[key]}></textarea>
      }
    }

    rerender(){
      this.setState({
          message: this.state.message,
      })
    }

    renderChatTitle(){
      var dest = ""
      if(document.querySelector('#message_dest') == null){
        return <div className="ChatTitle" align="center">Chat with: all</div>
      }
      else {
        dest = document.querySelector('#message_dest').value;
        return <div className="ChatTitle" align="center">Chat with: {dest}</div>

      }

    }


    render(){

        return(
            <div className="Chat">
                {this.renderChatTitle()}

                <div className="ChatSpace">
                    {this.renderChat()}
                </div>
                <div>
                <div className="ChatTyping">
                    <textarea  id="chatTyping"  type="text" value={this.state.message} onChange={this.handleChange} onKeyPress={this.handleKeyPress.bind(this)}></textarea>
                </div>

                <div >
                    <input type="button" onClick={this.submitChat} value="Submit" className="SubmitChatButton"></input>
                    <label for="Destination" className="dest">Send to:</label>
                    <select name="destination" id="message_dest" onChange={this.rerender}>
                        {Object.entries(this.props.gameState.data.players).map((item, index) => {
                          if(item[1]!=this.props.name){return <option value={item[1]}>{item[1]}</option>}

                        })}
                        <option value="all" selected>All</option>
                    </select>
                </div>

                </div>
            </div>
        )
    }
}

export default Chat;
