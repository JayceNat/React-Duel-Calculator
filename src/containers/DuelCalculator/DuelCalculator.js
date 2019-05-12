import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlayerArea from '../PlayerArea/PlayerArea';
import GlobalArea from '../GlobalArea/GlobalArea';
import FooterArea from '../FooterArea/FooterArea';
import Aux from '../../hoc/Auxiliary';
import * as actionTypes from '../../store/actions';

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
                    halfButtonClicked={this.props.onHalfButtonClicked}
                    playerControlDisabled={this.props.ctrVal <= 0} />
                <GlobalArea 
                    pointCounterValue={this.props.ctrVal} 
                    counterAddButtonClicked={() => this.props.onCounterAddClicked} />
                <FooterArea 
                    isNewGameState={this.props.newGameState} 
                    newGameClicked={this.props.onNewGameClicked}
                    resetButtonClicked={this.props.onResetClicked} />
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        newGameState: state.isNewGameState,
        avatars: state.playerAvatars,
        names: state.playerNames,
        lifePoints: state.lifePoints,
        healthPercents: state.healthBarPercent,
        ctrVal: state.pointCounterValue
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAvatarChanged: (playerNum) => dispatch({type: actionTypes.CHANGE_AVATAR, player: playerNum}),
        onNameChanged: (playerNum) => dispatch({type: actionTypes.CHANGE_NAME, player: playerNum}),
        onHalfButtonClicked: (playerNum) => dispatch({type: actionTypes.HALF_LP, player: playerNum}),
        onPlusButtonClicked: (playerNum) => dispatch({type: actionTypes.ADD_LP, player: playerNum}),
        onMinusButtonClicked: (playerNum) => dispatch({type: actionTypes.SUBTRACT_LP, player: playerNum}),
        onClearCounterClicked: () => dispatch({type: actionTypes.CLEAR_COUNTER}),
        onCounterAddClicked: (amountToAdd) => dispatch({type: actionTypes.ADD_TO_COUNTER, amount: amountToAdd}),
        onNewGameClicked: () => dispatch({type: actionTypes.NEW_GAME}),
        onResetClicked: () => dispatch({type: actionTypes.RESET})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DuelCalculator);