import React from 'react';
import classes from './PlayerNameplate.module.css';

const playerNameplate = (props) => {
    return (
        <input
            type='text'
            className={classes.nameplate}
            placeholder={props.playerName}
            onChange={props.nameChanged} />
    );
};

export default playerNameplate;