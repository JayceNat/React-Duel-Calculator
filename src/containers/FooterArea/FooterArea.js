import React from 'react';
import classes from './FooterArea.module.css';
import NewGameResetButtons from '../../components/FooterArea/NewGameResetButtons/NewGameResetButtons';

const footerArea= (props) => (
    <div className={classes.footerArea}>
        <NewGameResetButtons />
    </div>
);

export default footerArea;