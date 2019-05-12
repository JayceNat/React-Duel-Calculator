import React from 'react';
import classes from './PointCounterValueButtons.module.css';
import PointCounterValueButton from './PointCounterValueButton/PointCounterValueButton';

const pointCounterValueButtons = (props) => (
    <div className={classes.pointCounterValueButtons}>
        <PointCounterValueButton />
    </div>
)

export default pointCounterValueButtons;