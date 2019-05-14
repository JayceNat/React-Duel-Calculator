import React from 'react';
import classes from './PlayerHealthBar.module.css';

const playerHealthBar = (props) => {
    return (
        <div className={classes.playerHealthJar}>
            <div 
                className={classes.playerHealthLiquid} 
                style={{ width: `${props.percent}%` }} />
        </div>
    );
};

export default playerHealthBar;