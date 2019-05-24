import React, { Component } from 'react';
import classes from './CoinToss.module.css';

class CoinToss extends Component {
    getHeadsOrTails = () => {
        switch (Math.random(0,1)) {
            case 0:
                return "Heads!";
            case 1:
                return "Tails!";
            default:
                break;
        }
    }
    
    render() {
        return (
            (this.props.show ? 
            <div className={classes.modalContainer}>
                <p>Coin Toss!</p>
                <div className={classes.tossArea}>
                    {this.getHeadsOrTails}
                </div>
            </div>
            : null)
        );
    }
}

export default CoinToss;