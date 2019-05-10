import React from 'react';
import classes from './GlobalArea.module.css';
import PointCounter from '../../components/GlobalArea/PointCounter/PointCounter';
import PointCounterClearButton from '../../components/GlobalArea/Buttons/PointCounterClearButton/PointCounterClearButton';
import PointCounterValueButtons from '../../components/GlobalArea/Buttons/PointCounterValueButtons/PointCounterValueButtons';
import CoinTossDiceRollButtons from '../../components/GlobalArea/Buttons/CoinTossDiceRollButtons/CoinTossDiceRollButtons';

const globalArea = (props) => {
    return (
        <div className={classes.globalArea}>
            <PointCounter />
            <PointCounterClearButton />
            <PointCounterValueButtons />
            <CoinTossDiceRollButtons />
        </div>
    );
};

export default globalArea;