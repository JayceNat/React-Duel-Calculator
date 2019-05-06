import React from 'react';
import classes from './PlayerArea.module.css';
import PlayerAvatars from '../../components/PlayerArea/PlayerAvatars/PlayerAvatars';
import PlayerNameplates from '../../components/PlayerArea/PlayerNameplates/PlayerNameplates';
import PlayerLifePoints from '../../components/PlayerArea/PlayerLifePoints/PlayerLifePoints';
import PlayerHealthBars from '../../components/PlayerArea/PlayerHealthBars/PlayerHealthBars';
import PlayerHealthControls from '../../components/PlayerArea/PlayerHealthControls/PlayerHealthControls';

const playerArea = (props) => {
    return (
        <div className={classes.playerArea}>
            <PlayerAvatars playerAvatars={props.playerAvatars} />
            <PlayerNameplates 
                playerNames={props.playerNames} 
                playerNameChanged={() => props.changePlayerNameHandler} />
            <PlayerLifePoints 
                playerLifePoints={props.playerLifePoints} />
            <PlayerHealthBars />
            <PlayerHealthControls />
        </div>
    );
};

export default playerArea;