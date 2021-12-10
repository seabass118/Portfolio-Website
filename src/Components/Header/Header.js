import React from 'react';
import Left from './Left/Left';
import Right from './Right/Right';

function Header() {
    return (
        <div className="Header flex flex-row">
            <Left />
            <Right />
        </div>
    )
}

export default Header;
