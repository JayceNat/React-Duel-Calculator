import React from 'react';
import PlayerNameplate from './PlayerNameplate/PlayerNameplate';
import classes from './PlayerNameplates.css';

const PlayerNameplates = (props) => {
    return (
        <div className={classes.PlayerNameplates}>
            <PlayerNameplate />
            <PlayerNameplate />
        </div>
    )
}

export default PlayerNameplates;