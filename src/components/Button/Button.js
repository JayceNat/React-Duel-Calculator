import React, { Component } from 'react';
import classes from './Button.module.css';

class Button extends Component {
    getDynamicParameters = () => {
        let parameter = '';
        switch(this.props.btnType) {
            case 'lifePointButton':
            case 'halfButton':
            case 'plusButton':
            case 'minusButton':
                parameter = this.props.plyr;
                break;
            case 'pointCounterValueButton':
                parameter = this.props.amnt;
                break;
            default:
                break;
        }
        return parameter;
    };

    render() {
        return (
            <button 
                id={this.props.id}
                className={[classes.Button, classes[this.props.btnType]].join(' ')}
                onClick={() => this.props.clicked(this.getDynamicParameters())}
                disabled={this.props.disabled}>
                {this.props.children}
            </button>
        );
    }
};

export default Button;