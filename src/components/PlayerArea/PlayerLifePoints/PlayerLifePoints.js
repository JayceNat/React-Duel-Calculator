import React from 'react';
import PlayerLifePoint from './PlayerLifePoint/PlayerLifePoint';
import classes from './PlayerLifePoints.module.css';

const playerLifePoints = (props) => {
    const playerLP = Object.keys(props.playerLifePoints)
    .map(lpKey => {
        return <PlayerLifePoint 
            key={lpKey}
            playerLifePoints={props.playerLifePoints[lpKey]} />;
    }); 
    return (
        <div className={classes.playerLifePoints}>
            {playerLP}
        </div>
    );
};

export default playerLifePoints;