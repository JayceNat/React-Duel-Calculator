import React from 'react';
import PlayerHealthBar from './PlayerHealthBar/PlayerHealthBar';
import classes from './PlayerHealthBars.module.css';

const playerHealthBars = (props) => {
    return (
        <div className={classes.playerHealthBars}>
            <PlayerHealthBar />
            <PlayerHealthBar />
        </div>
    );
};

export default playerHealthBars;