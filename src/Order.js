import React from 'react';

const item = require('./assets/pic-item.png');

const Order = () => {
    return (
        <div className="container-order">
            <p className="container-title">YOUR ORDER</p>
            <div className="container-order-box">
                <div className="container-order-box-img">
                    <img src={item}/>
                </div>
                <div className="container-order-box-info">
                    <p>Acme product name</p>
                    <div className="container-order-details">
                        <div>
                            <p>Qty</p>
                            <p>1</p>
                        </div>
                        <div>
                            <p>Price</p>
                            <p>300.00$</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className="container-title">ORDER SUMMARY</p>
            <div className="container-order-summary">
                <div>
                    <p>Subtotal</p>
                    <p>$212,00</p>
                </div>
                <div>
                    <p>Shipping</p>
                    <p>$20,00</p>
                </div>
                <div>
                    <p>Total</p>
                    <p>$232,00</p>
                </div>
            </div>
        </div>
    )
};

export default Order
