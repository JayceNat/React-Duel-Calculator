import React from 'react';
import Button from '../../../Button/Button';

const halfButton = (props) => {
    return (
        <Button
            plyr={props.player}
            id={"halfBtn"} 
            btnType={"halfButton"}
            label={"1/2"}
            clicked={props.btnClicked}>
            1/2
        </Button>
    );
};

export default halfButton;