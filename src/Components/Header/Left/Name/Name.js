import React from 'react';
import FishIcon from '../../../../Icons/fish_icon.png';
import { Link } from 'react-router-dom';

function Name() {
    return (
        <div className="w-min min-w-max h-16 py-3 bg-nice-grey flex justify-center items-center border-solid border-r border-b border-header-border">
            <Link className="flex flex-row" to="/">
                <div className="w-14 h-9 pl-5">
                    <img src={FishIcon} alt="Fish Icon"></img>
                </div>
                <div className="text-white px-5 text-2xl font-semibold">
                    Sebastian Blackley
                </div>
            </Link>
        </div>  
    )
}

export default Name;
