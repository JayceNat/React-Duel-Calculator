import React from 'react';
import PlusButton from './PlusButton/PlusButton';
import MinusButton from './MinusButton/MinusButton';
import HalfButton from './HalfButton/HalfButton';
import classes from './PlayerHealthButtons.module.css';

const playerHealthButtons = (props) => {
    return (
        <div className={classes.PlayerHealthButtons}>
            <HalfButton />
            <MinusButton />
            <PlusButton />
        </div>
    );
};

export default playerHealthButtons;