import React from 'react';
import classes from './CoinTossDiceRollButtons.module.css';
import Button from '../../Button/Button';

const buttonInfo = [
    { id: 'coinTossBtn', label: 'Coin Toss', type: 'coinToss', btnType: 'coinTossButton' },
    { id: 'dieRollBtn', label: 'Dice Roll', type: 'diceRoll', btnType: 'diceRollButton' }
];

const coinTossDiceRollButtons = (props) => (
    <div className={classes.coinTossDiceRollButtons}>
        {buttonInfo.map(btnInfo => (
            <Button 
                id={btnInfo.id} 
                key={btnInfo.type}
                btnType={btnInfo.btnType}
                label={props.label}
                clicked={props.clicked}
                disabled={props.controlDisabled}>
                {btnInfo.label}
            </Button>
        ))}
    </div>
)

export default coinTossDiceRollButtons;