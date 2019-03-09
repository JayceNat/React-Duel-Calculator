import React from 'react';
import PlayerNameplate from './PlayerNameplate/PlayerNameplate';
import './PlayerNameplates.css';

const playerNameplates = (props) => {
    return (
        <div className="PlayerNameplates">
            <PlayerNameplate />
            <PlayerNameplate />
        </div>
    )
}

export default playerNameplates;