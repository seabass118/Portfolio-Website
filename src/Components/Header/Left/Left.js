import React from 'react';
import Name from './Name/Name';
import Title from './Title/Title';

function Left() {
    return (
        <div className="flex flex-col">
            <Name />
            <Title />
        </div>
    )
}

export default Left;
