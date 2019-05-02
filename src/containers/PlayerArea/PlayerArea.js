import React from 'react';
import classes from './PlayerArea.module.css';
import PlayerAvatars from '../../components/PlayerAvatars/PlayerAvatars';
import PlayerNameplates from '../../components/PlayerNameplates/PlayerNameplates';
import PlayerHealthPoints from '../../components/PlayerHealthPoints/PlayerHealthPoints';
import PlayerHealthBars from '../../components/PlayerHealthBars/PlayerHealthBars';
import PlayerHealthButtons from '../../components/PlayerHealthButtons/PlayerHealthButtons';

const playerArea = (props) => {
    return (
        <div className={classes.PlayerArea}>
            <PlayerAvatars />
            <PlayerNameplates />
            <PlayerHealthPoints />
            <PlayerHealthBars />
            <PlayerHealthButtons />
            <PlayerHealthButtons />
        </div>
    );
};

export default playerArea;