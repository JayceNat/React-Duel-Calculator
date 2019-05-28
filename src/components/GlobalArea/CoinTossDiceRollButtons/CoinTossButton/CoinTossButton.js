import React, { Component } from 'react';
import Button from '../../../Button/Button';

class CoinTossButton extends Component {
    coinTossClickHandler = () => {
        const num = Math.floor(Math.random() * 101);
        let coinSide = '';
        if (num <= 49) {
            coinSide = 'HEADS';
        } else coinSide = 'TAILS';
        alert("You flipped: " + coinSide + "!")
    }
    
    render () {
        return (
            <Button 
                id={'coinTossBtn'}
                btnType={'coinTossButton'}
                label={'Coin Toss'}
                clicked={this.coinTossClickHandler}>
                {'Coin Toss'}
            </Button>
        );
    }
};

export default CoinTossButton;