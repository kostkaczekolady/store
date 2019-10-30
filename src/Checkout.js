import React, { Component, Fragment } from 'react';
import Form from './Form'
import Order from './Order'

class Checkout extends Component {
  render() {
    return(
      <Fragment>
        <div className="layout">
          <p className="container-checkout-header">CHECKOUT</p>
          <div className="container-checkout">
            <Order/>
            <Form/>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Checkout
