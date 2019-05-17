import React from 'react';
import Button from '../../Button/Button';

const pointCounter = (props) => (
    <Button 
        id={'pointCounter'}
        btnType={'pointCounterButton'}
        label={'Point Counter'}
        clicked={props.counterButtonClicked}>
        <span>
            {props.ptCounterValue}
        </span>
    </Button>
);

export default pointCounter;