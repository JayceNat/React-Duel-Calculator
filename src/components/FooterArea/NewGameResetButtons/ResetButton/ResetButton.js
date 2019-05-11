import React from 'react';
import classes from './ResetButton.module.css';
import Button from '../../../Button/Button';

const resetButton = (props) => (
    <div className={classes.resetButton}>
        <Button
            id={'reset'} 
            key={'resetBtn'}
            btnType={'resetButton'}
            label={'Reset'}
            // clicked={}
            disabled={props.controlDisabled}>
            Reset
        </Button>
    </div>
);

export default resetButton;