import React, { Component } from 'react';
import classes from './PlayerNameplate.module.css';

class PlayerNameplate extends Component {
    state = {
        name: ''
    }
    
    handleNameChanged = (e) => {
        this.setState({
            name: e.target.value
        }, () => {
            this.props.nameChange(this.props.player, this.state.name);
        });
    }

    render() {
        return (
            <input
                type='text'
                className={classes.nameplate}
                placeholder={this.props.playerName}
                value={this.props.gameReset ? '' : this.state.name}
                onChange={this.handleNameChanged} />
        );
    }
}

export default PlayerNameplate;