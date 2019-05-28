import Banner1 from '../assets/Images/Backgrounds/pic_banner1.jpg';
import Banner2 from '../assets/Images/Backgrounds/pic_banner2.jpg';
import * as actionTypes from './actions';
import * as modalTypes from './modals';

const defaultLifePoints = 8000;

const initialState = {
    showModal: false,
    modalContent: modalTypes.BLANK,
    modalPlayerSetting: "",
    isNewGameState: true,
    isResetState: true,
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
    halfButtonClickCount: 0,
    pointCounterValue: 0
}

const reducer = (state = initialState, action) => {
    if (action.type === actionTypes.CLOSE_MODAL) {
        const newState = Object.assign({}, state);
        newState.showModal = false;
        newState.modalPlayerSetting = '';
        newState.modalContent = modalTypes.BLANK;
        return newState;
    }
    if (action.type === actionTypes.CHANGING_AVATAR) {
        const newState = Object.assign({}, state);
        newState.showModal = true;
        newState.modalContent = modalTypes.CHANGE_AVATAR;
        newState.modalPlayerSetting = action.player;
        return newState;
    }
    if (action.type === actionTypes.CHANGED_AVATAR) {
        const newState = Object.assign({}, state);
        newState.showModal = false;
        newState.modalContent = modalTypes.BLANK;
        newState.isResetState = false;
        newState.playerAvatars[action.player] = action.newAvatar;
        newState.playerNames[action.player] = action.newAvatar.split('/').pop().replace(/\.[^/.]+$/, '').replace(/\.[^/.]+$/, '');
        newState.modalPlayerSetting = '';
        return newState;
    }
    if (action.type === actionTypes.CHANGE_NAME) {
        const newState = Object.assign({}, state);
        newState.isResetState = false;
        newState.playerNames[action.player] = action.newName;
        return newState;
    }
    if (action.type === actionTypes.LP_CLICK) {
        const newState = Object.assign({}, state);
        alert('Half Buttons have been clicked ' + state.halfButtonClickCount + ' time(s)!');
        return newState;
    }
    if (action.type === actionTypes.HALF_LP) {
        const newState = Object.assign({}, state);
        newState.isNewGameState = false;
        newState.isResetState = false;
        newState.lifePoints[action.player] = parseFloat((state.lifePoints[action.player] / 2).toFixed(0));
        newState.halfButtonClickCount += 1;
        const newHealthPercent = (newState.lifePoints[action.player] / defaultLifePoints).toFixed(3) * 100;
        newState.healthBarPercent[action.player] = (newHealthPercent > 100) ? 100 : newHealthPercent;        
        return newState;
    }
    if (action.type === actionTypes.ADD_LP) {
        const newState = Object.assign({}, state);
        newState.isNewGameState = false;
        newState.isResetState = false;
        newState.lifePoints[action.player] += state.pointCounterValue;
        const newHealthPercent = (newState.lifePoints[action.player] / defaultLifePoints).toFixed(3) * 100;
        newState.healthBarPercent[action.player] = (newHealthPercent > 100) ? 100 : newHealthPercent;
        newState.pointCounterValue = 0;
        return newState;
    }
    if (action.type === actionTypes.SUBTRACT_LP) {
        const newState = Object.assign({}, state);
        const newPoints = state.lifePoints[action.player] - state.pointCounterValue
        newState.isNewGameState = false;
        newState.isResetState = false;
        newState.lifePoints[action.player] = (newPoints < 0) ? 0 : newPoints;
        const newHealthPercent = (newState.lifePoints[action.player] / defaultLifePoints).toFixed(3) * 100;
        newState.healthBarPercent[action.player] = (newHealthPercent > 100) ? 100 : newHealthPercent;
        newState.pointCounterValue = 0;
        if (newState.lifePoints[action.player] === 0) alert(state.playerNames[action.player] + ' LOST the duel!')
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
        newState.halfButtonClickCount = 0;
        newState.pointCounterValue = 0;
        return newState;
    }
    if (action.type === actionTypes.RESET) {
        const newState = Object.assign({}, state);
        newState.isNewGameState = true;
        newState.isResetState = true;
        newState.playerAvatars.player1 = Banner1;
        newState.playerAvatars.player2 = Banner2;
        newState.playerNames.player1 = 'Player 1';
        newState.playerNames.player2 = 'Player 2';
        newState.lifePoints.player1 = defaultLifePoints;
        newState.lifePoints.player2 = defaultLifePoints;
        newState.healthBarPercent.player1 = 100;
        newState.healthBarPercent.player2 = 100;
        newState.halfButtonClickCount = 0;
        newState.pointCounterValue = 0;
        window.location.reload();
        return newState;
    }
    return state;
};

export default reducer;