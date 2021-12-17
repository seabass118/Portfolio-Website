import React from 'react';
import copyIcon from '../../../Icons/copy_icon.png';

const Address = "0x7fd43706D706c449a8e43028DAe20c2Bf3b3145C";

function copyText() {
    navigator.clipboard.writeText(Address)
}

function Etherium() {
    return (
        <div className="w-full h-auto flex justify-center text-nice-grey flex-col">
            <div className="text-lg text-nice-grey font-semibold underline pb-2">
                Eth
            </div>
            <div className="text-md text-nice-grey cursor-pointer flex flex-row items-center" onClick={copyText}>
                {Address}
                <img className='w-3 h-3 ml-2' src={copyIcon} alt="Copy Icon"></img>
            </div>
        </div>
    )
}

export default Etherium;
