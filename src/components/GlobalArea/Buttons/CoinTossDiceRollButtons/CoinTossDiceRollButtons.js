import React from 'react';
import classes from './CoinTossDiceRollButtons.module.css';
import CoinTossDiceRollButton from './CoinTossDiceRollButton/CoinTossDiceRollButton';

const coinTossDiceRollButtons = (props) => (
    <div className={classes.coinTossDiceRollButtons}>
        <CoinTossDiceRollButton />
    </div>
)

export default coinTossDiceRollButtons;