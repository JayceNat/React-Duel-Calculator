import React from 'react';
import classes from './PointCounterValueButton.module.css';
import Button from '../../../Button/Button';

const pointCounterValueButton = (props) => (
    <div className={classes.pointCounterValueButton}>
        <Button
            id={'pointCtrValueButton'} 
            key={'pointCtrValBtn'}
            btnType={'pointCounterValueButton'}
            label={'Point Counter Value'}
            counterAddButtonClicked={() => props.onClick(10)}>
            {props.content}
        </Button>
    </div>
);

export default pointCounterValueButton;