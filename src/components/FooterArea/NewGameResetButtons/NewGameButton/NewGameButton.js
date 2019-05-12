import React from 'react';
import classes from './NewGameButton.module.css';
import Button from '../../../Button/Button';

const newGameButton = (props) => (
    <div className={classes.newGameButton}>
        <Button
            id={'newGame'} 
            key={'newGameBtn'}
            btnType={'newGameButton'}
            label={'New Game'}
            // clicked={}
            disabled={props.isNewGameState}>
            New Game
        </Button>
    </div>
);

export default newGameButton;