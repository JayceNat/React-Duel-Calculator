import React from 'react';
import PlayerAvatar from './PlayerAvatar/PlayerAvatar';
import classes from './PlayerAvatars.module.css';

const playerAvatars = (props) => {
    return (
        <div className={classes.PlayerAvatar}>
            <PlayerAvatar />
            <PlayerAvatar />
        </div>
    );
};

export default playerAvatars;