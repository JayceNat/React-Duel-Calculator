import React from 'react';
import classes from './PlayerArea.css';
import PlayerNameplates from './PlayerNameplates/PlayerNameplates';

const playerArea = (props) => {
    return (
        <div className={classes.PlayerArea}>
            <PlayerNameplates />
        </div>
    )
}

export default playerArea;