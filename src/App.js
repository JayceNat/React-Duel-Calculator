import React, { Component } from 'react';
import classes from './App.module.css';
import { connect } from 'react-redux';
import DuelCalculator from './containers/DuelCalculator/DuelCalculator';
import * as actionTypes from './store/actions';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <DuelCalculator
          avatars={this.props.avatars}
          onAvatarChanged={this.props.onAvatarChanged}
          names={this.props.names}
          onNameChanged={this.props.onNameChanged}
          lifePoints={this.props.lifePoints}
          onLifePointButtonClicked={this.props.onLifePointButtonClicked}
          healthPercents={this.props.healthPercents}
          onHalfButtonClicked={this.props.onHalfButtonClicked}
          onPlusButtonClicked={this.props.onPlusButtonClicked}
          onMinusButtonClicked={this.props.onMinusButtonClicked}
          ctrVal={this.props.ctrVal}
          onClearCounterClicked={this.props.onClearCounterClicked}
          onCounterAddClicked={this.props.onCounterAddClicked}
          coinToss={this.props.coinToss}
          diceRoll={this.props.diceRoll}
          resetState={this.props.resetState}
          onResetClicked={this.props.onResetClicked}
          newGameState={this.props.newGameState}
          onNewGameClicked={this.props.onNewGameClicked} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      newGameState: state.isNewGameState,
      resetState: state.isResetState,
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
      onLifePointButtonClicked: (playerNumber) => dispatch({type: actionTypes.LP_CLICK, player: playerNumber}),
      onHalfButtonClicked: (playerNumber) => dispatch({type: actionTypes.HALF_LP, player: playerNumber}),
      onPlusButtonClicked: (playerNumber) => dispatch({type: actionTypes.ADD_LP, player: playerNumber}),
      onMinusButtonClicked: (playerNumber) => dispatch({type: actionTypes.SUBTRACT_LP, player: playerNumber}),
      onClearCounterClicked: () => dispatch({type: actionTypes.CLEAR_COUNTER}),
      onCounterAddClicked: (amountToAdd) => dispatch({type: actionTypes.ADD_TO_COUNTER, amount: amountToAdd}),
      onNewGameClicked: () => dispatch({type: actionTypes.NEW_GAME}),
      onResetClicked: () => dispatch({type: actionTypes.RESET})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
