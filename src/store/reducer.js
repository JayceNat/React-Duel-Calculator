import Banner1 from '../assets/images/Backgrounds/pic_banner1.jpg';
import Banner2 from '../assets/images/Backgrounds/pic_banner2.jpg';

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
    if (action.type === 'CHANGE_AVATAR') {
        return {
            ...state
        }
    }
    if (action.type === 'CHANGE_NAME') {
        return {
            ...state
        }
    }
    if (action.type === 'HALF_LP') {
        return {
            ...state

        }
    }
    if (action.type === 'ADD_LP') {
        return {
            ...state
        }
    }
    if (action.type === 'SUBTRACT_LP') {
        return {
            ...state
        }
    }
    if (action.type === 'CLEAR_COUNTER') {
        return {
            ...state
        }
    }
    if (action.type === 'COUNTER_ADD_50') {
        return {
            ...state
        }
    }
    if (action.type === 'COUNTER_ADD_100') {
        return {
            ...state
        }
    }
    if (action.type === 'COUNTER_ADD_500') {
        return {
            ...state
        }
    }
    if (action.type === 'COUNTER_ADD_1000') {
        return {
            ...state
        }
    }
    if (action.type === 'COUNTER_ADD_5000') {
        return {
            ...state
        }
    }
    if (action.type === 'COIN_TOSS') {
        return {
            ...state
        }
    }
    if (action.type === 'DICE_ROLL') {
        return {
            ...state
        }
    }
    if (action.type === 'NEW_GAME') {
        return {
            ...state
        }
    }
    if (action.type === 'RESET') {
        return {
            ...state
        }
    }
    return state;
};

export default reducer;