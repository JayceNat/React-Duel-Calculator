import React from 'react';
import classes from './Button.module.css';

const Button = (props) => {
    return (
        <button 
            id={props.id}
            className={[classes.Button, classes[props.btnType]].join(' ')}
            onClick={() => props.clicked(props.plyr)}
            disabled={props.disabled}>
            {props.children}
        </button>
    );
};

export default Button;