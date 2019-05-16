import React from 'react';
import Button from '../../../Button/Button';

const coinTossButton = (props) => (
    <Button 
        id={'coinTossBtn'}
        btnType={'coinTossButton'}
        label={'Coin Toss'}
        clicked={props.coinTossBtnClick}>
        {'Coin Toss'}
    </Button>
)

export default coinTossButton;