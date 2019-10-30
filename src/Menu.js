import React, { Component } from 'react';
const hamburger = require('./assets/icon-hamburger.svg');

class Menu extends Component {
  render () {
      const { handleToggleMenu } = this.props;
    return(
      <div className="container-menu">
        <div
            className="menu-close"
            onClick={handleToggleMenu}
            onKeyPress={handleToggleMenu}
        >
          <img src={hamburger} alt="" />
        </div>
        <div className="menu-items">
          <p>Women</p>
          <p>Men</p>
          <p>Accessories</p>
          <p>Shoes</p>
        </div>
      </div>
    )
  }
}

export default Menu;
