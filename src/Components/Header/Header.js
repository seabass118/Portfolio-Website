import React from 'react';
import Left from './Left/Left';
import Right from './Right/Right';

function Header() {
    return (
        <div className="Header flex flex-row">
            <Left />
            <div className="xl:flex hidden ml-auto">
                <Right />
            </div>
        </div>
    )
}

export default Header;
