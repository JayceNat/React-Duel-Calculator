import React from 'react';
import PlayerAvatar from './PlayerAvatar/PlayerAvatar';
import classes from './PlayerAvatars.module.css';

const playerAvatars = (props) => {
    const playerAvatar = Object.keys(props.playerAvatars)
    .map(avKey => {
        return <PlayerAvatar 
            key={avKey}
            playerAvatar={props.playerAvatars[avKey]} />;
    });    
    return (
        <div className={classes.playerAvatar}>
            {playerAvatar}
        </div>
    );
};

export default playerAvatars;