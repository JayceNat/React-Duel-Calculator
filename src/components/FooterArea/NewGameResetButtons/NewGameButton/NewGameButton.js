import React from 'react';
import classes from './NewGameButton.module.css';
import Button from '../../../Button/Button';

const newGameButton = (props) => (
    <div className={classes.newGameButton}>
        <Button />
    </div>
);

export default newGameButton;