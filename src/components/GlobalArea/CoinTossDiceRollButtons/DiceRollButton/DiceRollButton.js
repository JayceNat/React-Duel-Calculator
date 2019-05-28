import React, { Component } from 'react';
import Button from '../../../Button/Button';

class DiceRollButton extends Component {
    diceRollClickHandler = () => {
        const dieRoll = Math.floor(Math.random() * 6) + 1;
        alert("You rolled: " + dieRoll + "!");
    }
    
    render () {
        return (
            <Button 
                id={'diceRollBtn'}
                btnType={'diceRollButton'}
                label={'Dice Roll'}
                clicked={this.diceRollClickHandler}>
                {'Dice Roll'}
            </Button>
        );
    }
};

export default DiceRollButton;