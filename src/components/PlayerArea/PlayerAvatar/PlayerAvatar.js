import React, { Component } from 'react';
import classes from './PlayerAvatar.module.css';

class PlayerAvatar extends Component {
    state = {
        avatar: ''
    }

    handleAvatarChange = (e) => {
        this.setState({
            avatar: e.target.value
        }, () => {
            this.props.avatarChange(this.props.player, this.state.avatar)
        })
    }
    
    render() {
        return(
            <img
                className={classes.playerAvatar}
                src={this.props.playerAvatar}
                alt={this.props.playerAvatar}
                onClick={this.handleAvatarChange} />
        );
    }
};

export default PlayerAvatar;