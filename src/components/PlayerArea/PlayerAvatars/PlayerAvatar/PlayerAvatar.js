import React from 'react';
import classes from './PlayerAvatar.module.css';

const playerAvatar = (props) => {
    return (
        <img className={classes.playerAvatar} src={props.playerAvatar} alt={props.playerAvatar} />
    );
};

export default playerAvatar;