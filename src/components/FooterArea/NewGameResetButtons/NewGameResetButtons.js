import React from 'react';
import classes from './NewGameResetButtons.module.css';
import NewGameButton from './NewGameButton/NewGameButton';
import ResetButton from './ResetButton/ResetButton';

const newGameResetButtons = (props) => (
    <div className={classes.newGameResetButtons}>
        <NewGameButton />
        <ResetButton />
    </div>
);

export default newGameResetButtons;