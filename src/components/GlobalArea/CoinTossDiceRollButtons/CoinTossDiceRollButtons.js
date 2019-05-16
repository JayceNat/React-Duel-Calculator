import React from 'react';
import classes from './CoinTossDiceRollButtons.module.css';
import CoinTossButton from './CoinTossButton/CoinTossButton';
import DiceRollButton from './DiceRollButton/DiceRollButton';

const coinTossDiceRollButtons = (props) => (
    <div className={classes.coinTossDiceRollButtons}>
        <CoinTossButton
           coinTossBtnClick={props.coinTossButtonClick} />
        <DiceRollButton
            diceRollBtnClick={props.diceRollButtonClick}/>
    </div>
)

export default coinTossDiceRollButtons;