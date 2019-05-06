import React from 'react';
import Button from '../../Button/Button';
import classes from './PlayerHealthControls.module.css';

const player1Controls = [
    { id: 'p1h', label: '1/2', player: 'player1', type: 'half', btnType: 'halfButton' },
    { id: 'p1-', label: '-', player: 'player1', type: 'minus', btnType: 'minusButton' },
    { id: 'p1+', label: '+', player: 'player1', type: 'add', btnType: 'plusButton' }
];

const player2Controls = [
    { id: 'p2h', label: '1/2', player: 'player2', type: 'half', btnType: 'halfButton' },
    { id: 'p2-', label: '-', player: 'player2', type: 'minus', btnType: 'minusButton' },
    { id: 'p2+', label: '+', player: 'player2', type: 'add', btnType: 'plusButton' }
];

const playerHealthControls = (props) => (
    <div className={classes.playerControls}>
        <div className={classes.playerOneHealthControls}>
            {player1Controls.map(p1Ctrl => (
                <Button
                    id={p1Ctrl.id} 
                    key={p1Ctrl.type}
                    btnType={p1Ctrl.btnType}
                    label={props.label}
                    clicked={() => props.controlClicked(p1Ctrl.player, p1Ctrl.type)}>
                    {p1Ctrl.label}
                </Button>
            ))}
        </div>
        <div className={classes.playerTwoHealthControls}>
            {player2Controls.map(p2Ctrl => (
                <Button
                    id={p2Ctrl.id} 
                    key={p2Ctrl.type}
                    btnType={p2Ctrl.btnType}
                    label={props.label}
                    clicked={() => props.controlClicked(p2Ctrl.player, p2Ctrl.type)}>
                    {p2Ctrl.label}
                </Button>
            ))}
        </div>
    </div>
);

export default playerHealthControls;