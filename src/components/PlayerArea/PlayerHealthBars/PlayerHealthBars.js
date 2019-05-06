import React from 'react';
import PlayerHealthBar from './PlayerHealthBar/PlayerHealthBar';
import classes from './PlayerHealthBars.module.css';

const playerHealthBars = (props) => {
    const playerBar = Object.keys(props.healthPercent)
    .map(pbKey => {
        return <PlayerHealthBar  
            key={pbKey}
            percent={props.healthPercent[pbKey]} />;
    }); 
    return (
        <div className={classes.playerHealthBars}>
            {playerBar}
        </div>
    );
};

export default playerHealthBars;