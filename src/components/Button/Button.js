import React from 'react';
import classes from './Button.module.css';

const Button = (props) => {
    return (
        <button 
            id={props.id}
            className={[classes.Button, classes[props.btnType]].join(' ')}
            onClick={() => props.onClick}
            disabled={props.disabled}>
            {props.children}
        </button>
    );
};

export default Button;