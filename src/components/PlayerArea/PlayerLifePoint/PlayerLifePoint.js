import React, { Component } from 'react';
import classes from './PlayerLifePoint.module.css';
import Button from '../../Button/Button';

class playerLifePoint extends Component {
    render() {
        return (
            <div className={classes.playerLifePoint}>
                <Button
                    id={'lifePoints'}
                    btnType={'lifePointButton'}
                    label={'Life Points'}
                    clicked={this.props.lifePointBtnClick}>
                    <span>
                        {this.props.playerLifePoints}
                    </span>
                </Button>
            </div>
        );
    }
};

export default playerLifePoint;