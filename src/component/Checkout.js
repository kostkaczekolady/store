import React, { Fragment } from 'react';
import Form from './Form'
import Order from './Order'

const Checkout = () => {
    return (
        <Fragment>
            <div className="layout">
                <p className="checkout-container-header">CHECKOUT</p>
                <div className="checkout-container">
                    <Order/>
                    <Form/>
                </div>
            </div>
        </Fragment>
    )
};

export default Checkout
