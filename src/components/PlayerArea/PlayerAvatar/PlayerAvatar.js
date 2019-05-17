import React, { Component } from 'react';
import classes from './PlayerAvatar.module.css';

import tempImage from '../../../assets/images/Characters/BlueEyesWhiteDragon1.jpg';

class PlayerAvatar extends Component {
    state = {
        avatar: ''
    }

    handleAvatarChange = (e) => {
        this.setState({
            avatar: tempImage
        }, () => {
            this.props.avatarChange(this.props.player, this.state.avatar)
        })
    }
    
    render() {
        return(
            <img
                className={classes.playerAvatar}
                src={this.props.gameReset ? '' : this.props.playerAvatar}
                alt={this.props.playerAvatar}
                onClick={this.handleAvatarChange} />
        );
    }
};

export default PlayerAvatar;