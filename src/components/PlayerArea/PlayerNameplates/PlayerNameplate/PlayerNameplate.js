import React from 'react';
import classes from './PlayerNameplate.module.css';

const playerNameplate = (props) => {
    return (
        <input
            className={classes.Nameplate}
            value={props.playerName}
            onChange={props.nameChanged} />
    );
};

export default playerNameplate;