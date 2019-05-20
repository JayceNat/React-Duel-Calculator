import React, { Component } from 'react';
import classes from './PlayerAvatar.module.css';

class PlayerAvatar extends Component {
    state = {
        avatar: ''
    }

    handleAvatarChange = (e) => {
        this.setState({
            avatar: ''
        }, () => {
            this.props.avatarChanging(this.props.player)
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