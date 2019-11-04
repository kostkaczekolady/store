import React, { Component } from 'react';
import { connect } from 'react-redux'
import { modifyForm } from "../actions/index";

import RForm from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import Button from 'react-validation/build/button';
import {validateEmail, validateName, validateNumber, validateRequired, validateCvc, validateZip} from "../validators";


class Form extends Component {
    constructor(props){
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleBuy = this.handleBuy.bind(this);
    }

    handleChange(e, target) {
        this.props.modifyForm(e.target.value, target);
    }

    handleBuy(event){
        event.preventDefault();
        alert('Sending form...');
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
            <RForm onSubmit={this.handleBuy}>
                <div className="form-container">
                    <p className="container-title">DELIVERY ADDRESS</p>
                    <div className="required">
                        <p>first name</p>
                        <Input
                            name="name"
                            type="string"
                            value={name}
                            onChange={(e) => this.handleChange(e, 'name')}
                            validations={[validateName]}
                        />
                    </div>
                    <div className="required">
                        <p>last name</p>
                        <Input
                            name="surname"
                            type="string"
                            value={surname}
                            onChange={(e) => this.handleChange(e, 'surname')}
                            validations={[validateName]}
                        />
                    </div>
                    <div className="required">
                        <p>e-mail</p>
                        <Input
                            name="email"
                            type="string"
                            value={email}
                            onChange={(e) => this.handleChange(e, 'email')}
                            validations={[validateEmail]}
                        />
                    </div>
                    <div>
                        <p>phone</p>
                        <Input
                            name="phone"
                            type="string"
                            value={phone}
                            onChange={(e) => this.handleChange(e, 'phone')}
                            validations={[validateNumber]}
                        />
                    </div>
                    <div className="required">
                        <p>address</p>
                        <Input
                            name="address"
                            type="string"
                            value={address}
                            onChange={(e) => this.handleChange(e, 'address')}
                            validations={[validateRequired]}
                        />
                    </div>
                    <div>
                        <p>address cont.</p>
                        <Input
                            name="country"
                            type="string"
                            value={addressCont}
                            onChange={(e) => this.handleChange(e, 'addressCont')}
                        />
                    </div>
                    <div className="required">
                        <p>zip code</p>
                        <Input
                            name="zipCode"
                            type="string"
                            value={zipCode}
                            onChange={(e) => this.handleChange(e, 'zipCode')}
                            validations={[validateZip]}
                            required
                        />
                    </div>
                    <div className="required">
                        <p>city</p>
                        <Input
                            name="city"
                            type="string"
                            value={city}
                            onChange={(e) => this.handleChange(e, 'city')}
                            validations={[validateRequired]}
                        />
                    </div>
                    <div className="required">
                        <p>state</p>
                        <Input
                            name="state"
                            type="string"
                            value={state}
                            onChange={(e) => this.handleChange(e, 'state')}
                            validations={[validateRequired]}
                        />
                    </div>
                    <div className="required">
                        <p>country</p>
                        <select
                            name="country"
                            type="string"
                            onChange={(e) => this.handleChange(e, 'country')}
                            value={country}
                        >
                            <option value='Poland'>Poland</option>
                            <option value='USA'>USA</option>
                            <option value='UK'>UK</option>
                        </select>
                    </div>
                    <p className="container-title">PAYMENT</p>
                    <div className="required">
                        <p>card number</p>
                        <Input
                            name="cardNumber"
                            type="string"
                            value={cardNumber}
                            onChange={(e) => this.handleChange(e, 'cardNumber')}
                            validations={[validateNumber]}
                        />
                    </div>
                    <div className="required">
                        <p>card holder</p>
                        <Input
                            name="cardHolder"
                            type="string"
                            value={cardHolder}
                            onChange={(e) => this.handleChange(e, 'cardHolder')}
                            validations={[validateName]}
                        />
                    </div>
                    <div className="required">
                        <p>cvc</p>
                        <Input
                            name="cardCvc"
                            type="string"
                            value={cardCvc}
                            onChange={(e) => this.handleChange(e, 'cardCvc')}
                            validations={[validateCvc]}
                        />
                    </div>
                    <Button type="submit">
                        BUY
                    </Button>
                </div>
            </RForm>
        )
    }
}

const mapStateToProps = (state) => ({
    ...state,
});

const mapDispatchToProps = (dispatch) => ({
    modifyForm: (value, target) => dispatch(modifyForm(value, target)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form)
