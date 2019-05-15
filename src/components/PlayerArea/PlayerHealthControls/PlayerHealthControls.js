import React from 'react';
import HalfButton from './HalfButton/HalfButton';
import MinusButton from './MinusButton/MinusButton';
import PlusButton from './PlusButton/PlusButton';
import classes from './PlayerHealthControls.module.css';

const playerHealthControls = (props) => (
    <div className={classes.playerHealthControls}>
        <HalfButton
            player={props.playerNum}
            btnClicked={props.halfBtnClick} />
        <MinusButton
            player={props.playerNum}
            btnClicked={props.minusBtnClick}
            btnDisabled={props.controlDisabled} />
        <PlusButton
            player={props.playerNum}
            btnClicked={props.plusBtnClick}
            btnDisabled={props.controlDisabled} />        
    </div>
);

export default playerHealthControls;