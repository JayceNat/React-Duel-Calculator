import React from 'react';
import classes from './PointCounterValueButtons.module.css';
import PointCounterValueButton from './PointCounterValueButton/PointCounterValueButton';

const pointCounterValueButtons = (props) => (
    <div className={classes.pointCounterValueButtons}>
        <div className={classes.tensCounters}>
            <PointCounterValueButton 
                content={'+10'} 
                amount={10}
                ctrAddBtnClicked={props.counterAddBtnClicked} />
            <PointCounterValueButton
                content={'+100'}
                amount={100}
                ctrAddBtnClicked={props.counterAddBtnClicked} />
            <PointCounterValueButton
                content={'+1000'}
                amount={1000}
                ctrAddBtnClicked={props.counterAddBtnClicked} />
        </div>
        <div className={classes.fivesCounters}>
            <PointCounterValueButton
                content={'+50'}
                amount={50}
                ctrAddBtnClicked={props.counterAddBtnClicked} />
            <PointCounterValueButton
                content={'+500'}
                amount={500}
                ctrAddBtnClicked={props.counterAddBtnClicked} />
            <PointCounterValueButton
                content={'+5000'}
                amount={5000}
                ctrAddBtnClicked={props.counterAddBtnClicked} />
        </div>        
    </div>
)

export default pointCounterValueButtons;