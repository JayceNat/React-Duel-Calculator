import React from 'react';
import classes from './PlayerNameplate.module.css';

const playerNameplate = (props) => {
    return (
        <input
            className={classes.nameplate}
            value={props.playerName}
            onChange={props.nameChanged} />
    );
};

export default playerNameplate;