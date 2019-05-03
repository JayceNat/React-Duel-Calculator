import React, { Component } from 'react';
import PlayerArea from '../PlayerArea/PlayerArea';
import GlobalArea from '../GlobalArea/GlobalArea';
import Aux from '../../hoc/Auxiliary';
import Banner1 from '../../assets/Images/Backgrounds/pic_banner1.jpg';
import Banner2 from '../../assets/Images/Backgrounds/pic_banner2.jpg';

const STARTING_LIFE_POINTS = {
    player1: 8000,
    player1: 8000
}

class DuelCalculator extends Component {
    state = {
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

    changePlayerNameHandler = (player, newName) => {
        const updatedPlayerNames = {...this.state.PlayerNames};
        updatedPlayerNames[player] = newName;
        this.setState({playerNames: updatedPlayerNames});
    }

    changeLifePointHandler = (player, action) => {
        const oldLifePoints = this.state.lifePoints[player];
        const oldPointCountVal = this.state.pointCounterValue;
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
                    playerAvatars={this.state.playerAvatars}
                    playerNames={this.state.playerNames}
                    playerNameChanged={this.changePlayerNameHandler} 
                    playerLifePoints={this.state.lifePoints} />
                <GlobalArea />
            </Aux>
        );
    }
}

export default DuelCalculator;