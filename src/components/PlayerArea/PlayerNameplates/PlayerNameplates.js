import React from 'react';
import PlayerNameplate from './PlayerNameplate/PlayerNameplate';
import classes from './PlayerNameplates.module.css';

const playerNameplates = (props) => {
    return (
        <div className={classes.PlayerNameplates}>
            <PlayerNameplate />
            <PlayerNameplate />
        </div>
    );
};

export default playerNameplates;