import React from 'react';

const item = require('../assets/pic-item.png');

const Order = () => {

    return (
        <div className="order-container">
            <p className="container-title">YOUR ORDER</p>
            <div className="order-box">
                <div className="order-box-img">
                    <img src={item} alt=""/>
                </div>
                <div className="order-box-info">
                    <p>Acme product name</p>
                    <div className="order-details">
                        <div>
                            <p>Qty</p>
                            <p>1</p>
                        </div>
                        <div>
                            <p>Price</p>
                            <p>212.00$</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className="container-title">ORDER SUMMARY</p>
            <div className="order-summary">
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
