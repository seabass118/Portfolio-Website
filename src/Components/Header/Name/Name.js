import React from 'react';
import FishIcon from '../../../Icons/fish_icon.png';

function Name() {
    return (
        <div className="w-min min-w-max h-12 lg:h-14 py-3 bg-header-grey flex justify-center items-center border-solid border-r border-b border-header-border">
            <div className="w-14 h-9 pl-5">
                <img src={FishIcon} alt="Fish Icon"></img>
            </div>
            <div className="text-white px-5 text-lg lg:text-xl font-semibold">
                Sebastian Blackley
            </div>
        </div>  
    )
}

export default Name;
