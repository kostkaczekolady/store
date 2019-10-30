import React, { Component } from 'react';
import Header from './Header'
import Checkout from './Checkout'
import Menu from "./Menu";

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            menuOpen: false
        };
        this.handleToggleMenu = this.handleToggleMenu.bind(this);
    }

    handleToggleMenu(e){
        if (typeof e.key === 'undefined' || e.key === 'Enter') {
            const { menuOpen } = this.state;
            this.setState({ menuOpen: !menuOpen})
        }
    }

    render() {
        const { menuOpen } = this.state;
    return(
      <div>
        <Header
            menuOpen={menuOpen}
            handleToggleMenu={this.handleToggleMenu}
        />
        <Checkout/>
      </div>
    )
    }
}

export default Dashboard
