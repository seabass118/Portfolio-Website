import React from 'react';
import FishIcon from '../../Icons/fish_graphic.png';

function Fish() {
    return (
        <div className="pb-0 animate-fish-ani">
            <img className="w-24 h-auto" src={FishIcon} alt="Fish Graphic"></img>
        </div>
    )
}

export default Fish;
