import React from 'react';

const hamburger = require('./assets/icon-hamburger.svg');

const Menu = ({handleToggleMenu}) => {
    return (
        <div className="menu-container">
            <div
                className="menu-close"
                onClick={handleToggleMenu}
                onKeyPress={handleToggleMenu}
            >
                <img src={hamburger} alt=""/>
            </div>
            <div className="menu-items">
                <p>Women</p>
                <p>Men</p>
                <p>Accessories</p>
                <p>Shoes</p>
            </div>
        </div>
    )
};

export default Menu;
