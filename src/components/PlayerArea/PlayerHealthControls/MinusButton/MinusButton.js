import React from 'react';
import Button from '../../../Button/Button';

const minusButton = (props) => (
    <Button
        plyr={props.player}
        id={"minus"}
        btnType={"minusButton"}
        label={"—"}
        clicked={props.btnClicked}
        disabled={props.btnDisabled}>
        —
    </Button>
);

export default minusButton;