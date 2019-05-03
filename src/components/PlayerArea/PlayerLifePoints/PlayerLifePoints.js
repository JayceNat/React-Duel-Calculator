import React from 'react';
import PlayerLifePoint from './PlayerLifePoint/PlayerLifePoint';
import classes from './PlayerLifePoints.module.css';

const playerLifePoints = (props) => {
    const playerLP = Object.keys(props.playerLifePoints)
    .map(lpKey => {
        return <PlayerLifePoint 
            playerLifePoints={props.playerLifePoints[lpKey]} />;
    }); 
    return (
        <div className={classes.PlayerLifePoints}>
            {playerLP}
        </div>
    );
};

export default playerLifePoints;