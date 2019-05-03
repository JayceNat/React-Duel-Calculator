import React from 'react';
import classes from './PlayerAvatar.module.css';

const playerAvatar = (props) => {
    return (
        <img className={classes.PlayerAvatar} src={props.playerAvatar} />
    );
};

export default playerAvatar;