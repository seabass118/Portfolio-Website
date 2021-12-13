import React from 'react';
import GitHub from '../../../Icons/github.png';

function Right() {
    return (
        <div className="w-min min-w-max h-14 ml-auto flex flex-row justify-center items-center text-2xl bg-dim-white rounded-bl-xl">
            <div className="text-header-grey pr-8 pl-5">
                Projects
            </div>
            <div className="text-nice-grey pr-8">
                About Me
            </div>
            <div className="text-nice-grey pr-8 flex flex-row items-center">
                <img className="w-5 h-5 mr-1.5" src={GitHub} alt="GitHub icon"></img>
                Code
            </div>
            <div className="text-nice-grey pr-8">
                Contact
            </div>
        </div>
    )
}

export default Right;
