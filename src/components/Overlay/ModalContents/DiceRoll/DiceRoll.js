import React, { Component } from 'react';
import classes from './DiceRoll.module.css';

class DiceRoll extends Component {
    getDiceRoll = () => {
        return Math.random(1,6);
    }
    
    render() {
        return (
            (this.props.show ? 
            <div className={classes.modalContainer}>
                <p>Dice Roll!</p>
                <div className={classes.rollArea}>
                    {this.getDiceRoll}
                </div>
            </div>
            : null)
        );
    }
}

export default DiceRoll;