import React, { Component } from 'react';
import classes from './PlayerLifePoint.module.css';

class PlayerLifePoint extends Component { 

    shouldComponentUpdate = (nextProps, nextState) => {
        console.log('Props: ' + this.props.playerLifePoints, 'State: ' + nextProps.playerLifePoints);
        return nextProps.playerLifePoints !== this.props.playerLifePoints;
    }

    componentWillReceiveProps(nextProps) {
        const playerLP = this.props.playerLifePoints;
    }

    
    render() {
        return (
            <div className={classes.playerLifePoint}>
                {this.props.playerLifePoints}
            </div>
        );
    }
};

export default PlayerLifePoint;