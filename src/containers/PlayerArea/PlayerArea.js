import React from 'react';
import classes from './PlayerArea.module.css';
import PlayerAvatars from '../../components/PlayerArea/PlayerAvatars/PlayerAvatars';
import PlayerNameplates from '../../components/PlayerArea/PlayerNameplates/PlayerNameplates';
import PlayerLifePoints from '../../components/PlayerArea/PlayerLifePoints/PlayerLifePoints';
import PlayerHealthBars from '../../components/PlayerArea/PlayerHealthBars/PlayerHealthBars';
import PlayerHealthButtons from '../../components/PlayerArea/PlayerHealthButtons/PlayerHealthButtons';

const playerArea = (props) => {
    return (
        <div className={classes.PlayerArea}>
            <PlayerAvatars playerAvatars={props.playerAvatars} />
            <PlayerNameplates 
                playerNames={props.playerNames} 
                playerNameChanged={() => props.changePlayerNameHandler} />
            <PlayerLifePoints 
                playerLifePoints={props.playerLifePoints} />
            <PlayerHealthBars />
            <PlayerHealthButtons />
            <PlayerHealthButtons />
        </div>
    );
};

export default playerArea;