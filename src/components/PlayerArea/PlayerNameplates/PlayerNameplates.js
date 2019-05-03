import React from 'react';
import PlayerNameplate from './PlayerNameplate/PlayerNameplate';
import classes from './PlayerNameplates.module.css';

const playerNameplates = (props) => {
    const playerNameSummary = Object.keys(props.playerNames)
    .map(pnKey => {
        return <PlayerNameplate 
            playerName={props.playerNames[pnKey]} 
            nameChanged={() => props.playerNameChanged()} />;
    });
    return (
        <div className={classes.PlayerNameplates}>
            {playerNameSummary}
        </div>
    );
};

export default playerNameplates;