import React from 'react';
import classes from './PlayerTwoArea.module.css';
import PlayerAvatar from '../../components/PlayerArea/PlayerAvatar/PlayerAvatar';
import PlayerNameplate from '../../components/PlayerArea/PlayerNameplate/PlayerNameplate';
import PlayerLifePoint from '../../components/PlayerArea/PlayerLifePoint/PlayerLifePoint';
import PlayerHealthBar from '../../components/PlayerArea/PlayerHealthBar/PlayerHealthBar';
import PlayerHealthControls from '../../components/PlayerArea/PlayerHealthControls/PlayerHealthControls';

const playerTwoArea = (props) => (
    <div className={classes.playerTwoArea}>
        <PlayerAvatar
            player={props.playerNumber}
            playerAvatar={props.playerAvatar} 
            avatarChange={props.playerAvatarChanged} />
        <PlayerNameplate 
            player={props.playerNumber}
            playerName={props.playerName} 
            nameChange={props.playerNameChanged} />
        <PlayerLifePoint
            player={props.playerNumber}
            playerLifePoints={props.playerLifePoints} />
        <PlayerHealthBar
            player={props.playerNumber}
            healthPercent={props.playerHealthPercent} />
        <PlayerHealthControls
            playerNum={props.playerNumber}
            halfBtnClick={props.halfButtonClicked}
            plusBtnClick={props.plusButtonClicked}
            minusBtnClick={props.minusButtonClicked}
            controlDisabled={props.playerControlDisabled} />
    </div>
);

export default playerTwoArea;