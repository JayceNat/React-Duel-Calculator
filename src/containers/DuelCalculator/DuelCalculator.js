import React, { Component } from 'react';
import PlayerArea from '../PlayerArea/PlayerArea';
import GlobalArea from '../GlobalArea/GlobalArea';
import Aux from '../../hoc/Auxiliary';

class DuelCalculator extends Component {
    state = {
        lifePoints: {
            player1: 8000,
            player2: 8000
        }
    }

    render () {
        return (
            <Aux>
                <PlayerArea />
                <GlobalArea />
            </Aux>
        );
    }
}

export default DuelCalculator;