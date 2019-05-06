import React from 'react';
import PlayerNameplate from './PlayerNameplate/PlayerNameplate';
import classes from './PlayerNameplates.module.css';

const playerNameplates = (props) => {
    const playerNM = Object.keys(props.playerNames)
    .map(pnKey => {
        return <PlayerNameplate 
            key={pnKey}
            playerName={props.playerNames[pnKey]} 
            nameChanged={() => props.playerNameChanged()} />;
    });
    return (
        <div className={classes.playerNameplates}>
            {playerNM}
        </div>
    );
};

export default playerNameplates;