import React from 'react';
import classes from './PlayerArea.module.css';
import PlayerAvatars from '../../components/PlayerArea/PlayerAvatars/PlayerAvatars';
import PlayerNameplates from '../../components/PlayerArea/PlayerNameplates/PlayerNameplates';
import PlayerHealthPoints from '../../components/PlayerArea/PlayerHealthPoints/PlayerHealthPoints';
import PlayerHealthBars from '../../components/PlayerArea/PlayerHealthBars/PlayerHealthBars';
import PlayerHealthButtons from '../../components/PlayerArea/PlayerHealthButtons/PlayerHealthButtons';

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