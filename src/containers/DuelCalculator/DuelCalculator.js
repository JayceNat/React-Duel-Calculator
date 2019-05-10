import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlayerArea from '../PlayerArea/PlayerArea';
import GlobalArea from '../GlobalArea/GlobalArea';
import Aux from '../../hoc/Auxiliary';

const STARTING_LIFE_POINTS = {
    player1: 8000,
    player2: 8000
}

class DuelCalculator extends Component {
    changePlayerNameHandler = (player, newName) => {
        console.log("PLAYER NAME UPDATE");
        let updatedPlayerNames = {...this.state.PlayerNames};
        updatedPlayerNames[player] = newName;
        this.setState({playerNames: updatedPlayerNames});
    }

    changeLifePointHandler = (player, action) => {
        console.log("LIFE POINT UPDATE");
        let oldLifePoints = this.state.lifePoints[player];
        let oldPointCountVal = this.state.pointCounterValue;
        let changedLifePoints = 0;
        let changedHealthBarVal = 0;
        switch (action) {
            case "add":
                changedLifePoints = oldLifePoints + oldPointCountVal;
                changedHealthBarVal = (changedLifePoints / STARTING_LIFE_POINTS[player]) <= 100 || 100;
                break;
            case "minus":
                changedLifePoints = (oldLifePoints - oldPointCountVal) > 0 || 0
                changedHealthBarVal = (changedLifePoints / STARTING_LIFE_POINTS[player]) > 0 || 0;
                break;
            case "half":
                changedLifePoints = (oldLifePoints / 2).toFixed(0);
                changedHealthBarVal = (changedLifePoints / STARTING_LIFE_POINTS[player]);
                break;
            default:
                break;
        }
        const updatedLifePoints = {...this.state.lifePoints};
        const updatedHealthBarVal = {...this.state.healthBarPercent};
        updatedLifePoints[player] = changedLifePoints;
        updatedHealthBarVal[player] = changedHealthBarVal;
        oldPointCountVal = 0;
        this.setState({lifePoints: updatedLifePoints, healthBarPercent: updatedHealthBarVal, pointCounterValue: oldPointCountVal});
    }

    render () {
        return (
            <Aux>
                <PlayerArea 
                    playerAvatars={this.props.avatars}
                    playerNames={this.props.names}
                    playerLifePoints={this.props.lifePoints} 
                    playerHealthPercent={this.props.healthPercents}
                    playerControlClicked={this.props.onHalfButtonClicked}
                    playerControlDisabled={this.props.ctrVal <= 0} />
                <GlobalArea />
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        avatars: state.playerAvatars,
        names: state.playerNames,
        lifePoints: state.lifePoints,
        healthPercents: state.healthBarPercent,
        ctrVal: state.pointCounterValue
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAvatarChanged: () => dispatch({type: 'CHANGE_AVATAR'}),
        onPlayerNameChanged: () => dispatch({type: 'CHANGE_NAME'}),
        onHalfButtonClicked: () => dispatch({type: 'HALF_LP'}),
        onPlusButtonClicked: () => dispatch({type: 'ADD_LP'}),
        onMinusButtonClicked: () => dispatch({type: 'SUBTRACT_LP'}),
        onClearCounterClicked: () => dispatch({type: 'CLEAR_COUNTER'}),
        onCounterAddFiftyClicked: () => dispatch({type: 'COUNTER_ADD_50'}),
        onCounterAddHundredClicked: () => dispatch({type: 'COUNTER_ADD_100'}),
        onCounterAddFiveHundredClicked: () => dispatch({type: 'COUNTER_ADD_500'}),
        onCounterAddThousandClicked: () => dispatch({type: 'COUNTER_ADD_1000'}),
        onCounterAddFiveThousandClicked: () => dispatch({type: 'COUNTER_ADD_5000'}),
        onCoinTossClicked: () => dispatch({type: 'COIN_TOSS'}),
        onDiceRollClicked: () => dispatch({type: 'DICE_ROLL'}),
        onNewGameClicked: () => dispatch({type: 'NEW_GAME'}),
        onResetClicked: () => dispatch({type: 'RESET'})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DuelCalculator);