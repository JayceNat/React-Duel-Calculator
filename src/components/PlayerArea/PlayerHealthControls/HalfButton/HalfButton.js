import React from 'react';
import Button from '../../../Button/Button';

const halfButton = (props) => (
    <Button
        plyr={props.player}
        id={"halfBtn"} 
        btnType={"halfButton"}
        label={"1/2"}
        clicked={props.btnClicked}
        disabled={props.btnDisabled}>
        1/2
    </Button>
);

export default halfButton;