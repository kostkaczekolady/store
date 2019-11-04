import React from 'react';
import Menu from './Menu'

const bag = require('../assets/icon-bag.svg');
const hamburger = require('../assets/icon-hamburger.svg');

const Header = ({menuOpen, handleToggleMenu}) => {
    return (
        <div className="header-container">
            <div className="header-content">
                <div
                    className="header-menu"
                    onClick={handleToggleMenu}
                    onKeyPress={handleToggleMenu}
                    role="button"
                >
                    <img src={ hamburger } alt=""/>
                    <p>Menu</p>
                </div>
                <div className="header-logo">
                    <p>ACME STORE</p>
                </div>
                <div className="header-bag">
                    <img src={ bag } alt=""/>
                    <p>1</p>
                </div>
            </div>
            {
                menuOpen &&
                <Menu
                    menuOpen={menuOpen}
                    handleToggleMenu={handleToggleMenu}
                />
            }
        </div>
    )
};
export default Header;
