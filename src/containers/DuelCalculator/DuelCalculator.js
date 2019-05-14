import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlayerOneArea from '../PlayerOneArea/PlayerOneArea';
import PlayerTwoArea from '../PlayerTwoArea/PlayerTwoArea';
import GlobalArea from '../GlobalArea/GlobalArea';
import FooterArea from '../FooterArea/FooterArea';
import Aux from '../../hoc/Auxiliary';
import * as actionTypes from '../../store/actions';

class DuelCalculator extends Component {
    render () {
        return (
            <Aux>
                <PlayerOneArea 
                    playerNumber={'player1'}
                    playerAvatar={this.props.avatars.player1}
                    playerAvatarChanged={this.props.onAvatarChanged}
                    playerName={this.props.names.player1}
                    playerNameChanged={this.props.onNameChanged}
                    playerLifePoints={this.props.lifePoints.player1} 
                    playerHealthPercent={this.props.healthPercents.player1}
                    halfButtonClicked={this.props.onHalfButtonClicked}
                    plusButtonClicked={this.props.onPlusButtonClicked}
                    minusButtonClicked={this.props.onMinusButtonClicked}
                    playerControlDisabled={this.props.ctrVal <= 0} />
                {/* <PlayerTwoArea 
                    playerNumber={'player2'}
                    playerAvatar={this.props.avatars.player2}
                    playerName={this.props.names.player2}
                    playerNameChanged={this.props.onNameChanged}
                    playerLifePoints={this.props.lifePoints.player2} 
                    playerHealthPercent={this.props.healthPercents.player2}
                    halfButtonClicked={this.props.onHalfButtonClicked}
                    plusButtonClicked={this.props.onPlusButtonClicked}
                    minusButtonClicked={this.props.onMinusButtonClicked}
                    playerControlDisabled={this.props.ctrVal <= 0} /> */}
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
        onAvatarChanged: (playerNumber, playerAvatar) => dispatch({type: actionTypes.CHANGE_AVATAR, player: playerNumber, newAvatar: playerAvatar}),
        onNameChanged: (playerNumber, playerName) => dispatch({type: actionTypes.CHANGE_NAME, player: playerNumber, newName: playerName}),
        onHalfButtonClicked: (playerNumber) => dispatch({type: actionTypes.HALF_LP, player: playerNumber}),
        onPlusButtonClicked: (playerNumber) => dispatch({type: actionTypes.ADD_LP, player: playerNumber}),
        onMinusButtonClicked: (playerNumber) => dispatch({type: actionTypes.SUBTRACT_LP, player: playerNumber}),
        onClearCounterClicked: () => dispatch({type: actionTypes.CLEAR_COUNTER}),
        onCounterAddClicked: (amountToAdd) => dispatch({type: actionTypes.ADD_TO_COUNTER, amount: amountToAdd}),
        onNewGameClicked: () => dispatch({type: actionTypes.NEW_GAME}),
        onResetClicked: () => dispatch({type: actionTypes.RESET})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DuelCalculator);