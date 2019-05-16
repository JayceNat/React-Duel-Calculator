import React from 'react';
import Button from '../../../Button/Button';

const diceRollButton = (props) => (
    <Button 
        id={'diceRollBtn'}
        btnType={'diceRollButton'}
        label={'Dice Roll'}
        clicked={props.diceRollBtnClick}>
        {'Dice Roll'}
    </Button>
)

export default diceRollButton;