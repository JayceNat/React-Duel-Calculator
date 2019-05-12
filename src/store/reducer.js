import Banner1 from '../assets/images/Backgrounds/pic_banner1.jpg';
import Banner2 from '../assets/images/Backgrounds/pic_banner2.jpg';
import * as actionTypes from './actions';

const defaultLifePoints = 8000;

const initialState = {
    isNewGameState: true,
    playerAvatars: {
        player1: Banner1,
        player2: Banner2
    },
    playerNames: {
        player1: "Player 1",
        player2: "Player 2"
    },
    lifePoints: {
        player1: 8000,
        player2: 8000
    },
    healthBarPercent: {
        player1: 100,
        player2: 100
    },
    pointCounterValue: 0
}

const reducer = (state = initialState, action) => {
    if (action.type === actionTypes.CHANGE_AVATAR) {
        const newState = Object.assign({}, state);
        newState.playerAvatars[action.player] = action.newAvatar;
        return newState;
    }
    if (action.type === actionTypes.CHANGE_NAME) {
        const newState = Object.assign({}, state);
        newState.playerNames[action.player] = action.newName;
        return newState;
    }
    if (action.type === actionTypes.HALF_LP) {
        const newState = Object.assign({}, state);
        newState.isNewGameState = false;
        newState.lifePoints[action.player] = state.lifePoints[action.player] / 2;
        newState.healthBarPercent[action.player] = (newState.lifePoints[action.player] / defaultLifePoints).toFixed(0) * 100;
        return newState;
    }
    if (action.type === actionTypes.ADD_LP) {
        const newState = Object.assign({}, state);
        newState.isNewGameState = false;
        newState.lifePoints[action.player] = state.lifePoints[action.player] + state.pointCounterValue;
        const newHealthPercent = (newState.lifePoints[action.player] / defaultLifePoints).toFixed(0) * 100;
        newState.healthBarPercent[action.player] = newHealthPercent > 100 ? 100 : newHealthPercent;
        newState.pointCounterValue = 0;
        return newState;
    }
    if (action.type === actionTypes.SUBTRACT_LP) {
        const newState = Object.assign({}, state);
        const newPoints = state.lifePoints[action.player] - state.pointCounterValue
        newState.isNewGameState = false;
        newState.lifePoints[action.player] = (newPoints < 0) ? 0 : newPoints;
        const newHealthPercent = (newState.lifePoints[action.player] / defaultLifePoints).toFixed(0) * 100;
        newState.healthBarPercent[action.player] = newHealthPercent > 100 ? 100 : newHealthPercent;
        newState.pointCounterValue = 0;
        return newState;
    }
    if (action.type === actionTypes.CLEAR_COUNTER) {
        const newState = Object.assign({}, state);
        newState.pointCounterValue = 0;
        return newState;
    }
    if (action.type === actionTypes.ADD_TO_COUNTER) {
        const newState = Object.assign({}, state);
        newState.pointCounterValue = state.pointCounterValue + action.amount;
        return newState;
    }
    if (action.type === actionTypes.NEW_GAME) {
        const newState = Object.assign({}, state);
        newState.isNewGameState = true;
        newState.lifePoints.player1 = defaultLifePoints;
        newState.lifePoints.player2 = defaultLifePoints;
        newState.healthBarPercent.player1 = 100;
        newState.healthBarPercent.player2 = 100;
        newState.pointCounterValue = 0;
        return newState;
    }
    if (action.type === actionTypes.RESET) {
        const newState = Object.assign({}, state);
        alert("OK!");
        newState.isNewGameState = true;
        newState.playerAvatars.player1 = Banner1;
        newState.playerAvatars.player2 = Banner2;
        newState.playerNames.player1 = '';
        newState.playerNames.player2 = '';
        newState.lifePoints.player1 = defaultLifePoints;
        newState.lifePoints.player2 = defaultLifePoints;
        newState.healthBarPercent.player1 = 100;
        newState.healthBarPercent.player2 = 100;
        newState.pointCounterValue = 0;
        return newState;
    }
    console.log(state);
    return state;
};

export default reducer;