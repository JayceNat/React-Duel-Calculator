import React from 'react';
import Button from '../../../Button/Button';

const plusButton = (props) => (
    <Button
        plyr={props.player}
        id={"plus"}
        btnType={"plusButton"}
        label={"+"}
        clicked={props.btnClicked}
        disabled={props.btnDisabled}>
        +
    </Button>
);

export default plusButton;