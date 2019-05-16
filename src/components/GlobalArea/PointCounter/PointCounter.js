import React from 'react';
import classes from './PointCounter.module.css';
import Button from '../../Button/Button';

const pointCounter = (props) => (
    <div className={classes.pointCounter}>
        <Button 
            id={'pointCounter'} 
            key={'pointCtr'}
            btnType={'pointCounterButton'}
            label={'Point Counter'}
            clicked={props.counterButtonClicked}>
            <span>
                {props.ptCounterValue}
            </span>
        </Button>
    </div>
);

export default pointCounter;