import React from 'react';
import classes from './GlobalArea.module.css';
import PointCounter from '../../components/GlobalArea/PointCounter/PointCounter';
import PointCounterValueButtons from '../../components/GlobalArea/PointCounterValueButtons/PointCounterValueButtons';
import CoinTossDiceRollButtons from '../../components/GlobalArea/CoinTossDiceRollButtons/CoinTossDiceRollButtons';

const globalArea = (props) => {
    return (
        <div className={classes.globalArea}>
            <PointCounter 
                ptCounterValue={props.pointCounterValue}
                counterButtonClicked={props.clearCounterButtonClicked} />
            <PointCounterValueButtons 
                counterAddBtnClicked={props.counterAddButtonClicked} />
            <CoinTossDiceRollButtons />
        </div>
    );
};

export default globalArea;