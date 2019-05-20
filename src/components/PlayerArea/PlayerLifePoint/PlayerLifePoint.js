import React from 'react';
import Button from '../../Button/Button';

const playerLifePoint = (props) => (
    <Button
        id={'lifePoints'}
        btnType={'lifePointButton'}
        label={'Life Points'}
        clicked={props.lifePointBtnClick}>
        <span>
            {props.playerLifePoints}
        </span>
    </Button>
);

export default playerLifePoint;