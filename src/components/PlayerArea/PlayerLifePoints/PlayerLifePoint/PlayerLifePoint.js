import React from 'react';
import classes from './PlayerLifePoint.module.css';

const playerLifePoint = (props) => {
    return (
        <div className={classes.playerLifePoint}>{props.playerLifePoints}</div>
    );
};

export default playerLifePoint;