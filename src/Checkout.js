import React, { Fragment } from 'react';
import Form from './Form'
import Order from './Order'

const Checkout = () => {
    return (
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
};

export default Checkout
