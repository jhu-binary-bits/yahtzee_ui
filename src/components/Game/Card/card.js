import React, { Component } from 'react';
import './card.css';

class Card extends Component {

    constructor(props){
        super(props)
        this.state = {

        }
    }


    render(){

        return(
            <div className="Card">
                <p>
                    {this.props.name}'s Score Card
                </p>



            </div>
        )
    }
}

export default Card;