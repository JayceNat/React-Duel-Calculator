import React, { Component } from 'react';
import classes from './PlayerOneArea.module.css';
import PlayerAvatar from '../../components/PlayerArea/PlayerAvatar/PlayerAvatar';
import PlayerNameplate from '../../components/PlayerArea/PlayerNameplate/PlayerNameplate';
import PlayerLifePoint from '../../components/PlayerArea/PlayerLifePoint/PlayerLifePoint';
import PlayerHealthBar from '../../components/PlayerArea/PlayerHealthBar/PlayerHealthBar';
import PlayerHealthControls from '../../components/PlayerArea/PlayerHealthControls/PlayerHealthControls';

class PlayerOneArea extends Component {
    render() {
        return (
            <div className={classes.playerOneArea}>
                <PlayerAvatar
                    player={this.props.playerNumber}
                    playerAvatar={this.props.playerAvatar} 
                    avatarChange={this.props.playerAvatarChanged} />
                <PlayerNameplate 
                    player={this.props.playerNumber}
                    playerName={this.props.playerName} 
                    nameChange={this.props.playerNameChanged} />
                <PlayerLifePoint
                    player={this.props.playerNumber}
                    playerLifePoints={this.props.playerLifePoints} />
                <PlayerHealthBar
                    player={this.props.playerNumber}
                    healthPercent={this.props.playerHealthPercent} />
                <PlayerHealthControls
                    playerNum={this.props.playerNumber}
                    halfBtnClick={this.props.halfButtonClicked}
                    plusBtnClick={this.props.plusButtonClicked}
                    minusBtnClick={this.props.minusButtonClicked}
                    controlDisabled={this.props.playerControlDisabled} />
            </div>
        );
    }
};

export default PlayerOneArea;