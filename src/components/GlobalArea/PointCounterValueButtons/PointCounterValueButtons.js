import React from 'react';
import classes from './PointCounterValueButtons.module.css';
import PointCounterValueButton from './PointCounterValueButton/PointCounterValueButton';

const pointCounterValueButtons = (props) => (
    <div className={classes.pointCounterValueButtons}>
        <PointCounterValueButton 
            content={'+10'} 
            counterAddButtonClicked={() => props.counterAddButtonClicked} />
        <PointCounterValueButton content={'+50'} />
        <PointCounterValueButton content={'+100'} />
        <PointCounterValueButton content={'+500'} />
        <PointCounterValueButton content={'+1000'} />
        <PointCounterValueButton content={'+5000'} />
    </div>
)

export default pointCounterValueButtons;