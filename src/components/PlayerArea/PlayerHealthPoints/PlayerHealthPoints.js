import React from 'react';
import PlayerHealthPoint from './PlayerHealthPoint/PlayerHealthPoint';
import classes from './PlayerHealthPoints.module.css';

const playerHealthPoints = (props) => {
    return (
        <div className={classes.PlayerHealthPoints}>
            <PlayerHealthPoint />
            <PlayerHealthPoint />
        </div>
    );
};

export default playerHealthPoints;