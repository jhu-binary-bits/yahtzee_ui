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
                    Card of {this.props.name}
                </p>



            </div>
        )
    }
}

export default Card;