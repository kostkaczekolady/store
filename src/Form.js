import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { modifyForm } from "./actions";


class Form extends Component {
    constructor(props){
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleValidate = this.handleValidate.bind(this);
        this.handleBuy = this.handleBuy.bind(this);
    }

    handleChange(e, target) {
        this.props.modifyForm(e.target.value, target);
        this.handleValidate(e);
    }

    handleValidate(e) {
        if (e.target.name === 'name' || "surname" ){
            console.log(e.target.value.length)
        } else if (e.target.value === "email"){

        }
    }

    handleBuy(){
        console.log("Succes!")
    }

    render() {
        const {
            name,
            surname,
            email,
            phone,
            address,
            addressCont,
            zipCode,
            city,
            state,
            country,
            cardNumber,
            cardHolder,
            cardCvc,
        } = this.props.mainReducer;
        return (
            <Fragment>
                <div className="form-container">
                    <p className="container-title">DELIVERY ADDRESS</p>
                    <div className="required">
                        <p>first name</p>
                        <input
                            name="name"
                            type="string"
                            value={name}
                            onChange={(e) => this.handleChange(e, 'name')}
                            required
                        />
                    </div>
                    <div className="required">
                        <p>last name</p>
                        <input
                            name="surname"
                            type="string"
                            value={surname}
                            onChange={(e) => this.handleChange(e, 'surname')}
                            required
                        />
                    </div>
                    <div className="required">
                        <p>e-mail</p>
                        <input
                            name="email"
                            type="string"
                            value={email}
                            onChange={(e) => this.handleChange(e, 'email')}
                            required
                        />
                    </div>
                    <div>
                        <p>phone</p>
                        <input
                            name="phone"
                            type="string"
                            value={phone}
                            onChange={(e) => this.handleChange(e, 'phone')}
                        />
                    </div>
                    <div className="required">
                        <p>address</p>
                        <input
                            name="address"
                            type="string"
                            value={address}
                            onChange={(e) => this.handleChange(e, 'address')}
                            required
                        />
                    </div>
                    <div>
                        <p>address cont.</p>
                        <input
                            name="country"
                            type="string"
                            value={addressCont}
                            onChange={(e) => this.handleChange(e, 'addressCont')}
                        />
                    </div>
                    <div className="required">
                        <p>zip code</p>
                        <input
                            name="zipCode"
                            type="string"
                            value={zipCode}
                            onChange={(e) => this.handleChange(e, 'zipCode')}
                            required
                        />
                    </div>
                    <div className="required">
                        <p>city</p>
                        <input
                            name="city"
                            type="string"
                            value={city}
                            onChange={(e) => this.handleChange(e, 'city')}
                            required
                        />
                    </div>
                    <div className="required">
                        <p>state</p>
                        <input
                            name="state"
                            type="string"
                            value={state}
                            onChange={(e) => this.handleChange(e, 'state')}
                            required
                        />
                    </div>
                    <div className="required">
                        <p>country</p>
                        <select
                            name="country"
                            type="string"
                            onChange={(e) => this.handleChange(e, 'country')}
                            value={country}
                            required
                        >
                            <option value='Poland'>Poland</option>
                            <option value='USA'>USA</option>
                            <option value='UK'>UK</option>
                        </select>
                    </div>
                    <p className="container-title">PAYMENT</p>
                    <div className="required">
                        <p>card number</p>
                        <input
                            name="cardNumber"
                            type="string"
                            value={cardNumber}
                            onChange={(e) => this.handleChange(e, 'cardNumber')}
                            required
                        />
                    </div>
                    <div className="required">
                        <p>card holder</p>
                        <input
                            name="cardHolder"
                            type="string"
                            value={cardHolder}
                            onChange={(e) => this.handleChange(e, 'cardHolder')}
                            required
                        />
                    </div>
                    <div className="required">
                        <p>cvc</p>
                        <input
                            name="cardCvc"
                            type="string"
                            value={cardCvc}
                            onChange={(e) => this.handleChange(e, 'cardCvc')}
                            required
                        />
                    </div>
                    <button
                        // disabled={}
                        onClick={this.handleBuy}
                        type="button"
                    >
                        BUY
                    </button>
                </div>
            </Fragment>
        )
    }
};


const mapStateToProps = (state) => ({
    ...state,
});

const mapDispatchToProps = (dispatch) => ({
    modifyForm: (value, target) => dispatch(modifyForm(value, target)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form)
