import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { addData } from "./actions";

// function mapDispatchToProps(dispatch) {
//     return {
//         addData: article => dispatch(addData(article))
//     }
// }

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            surname: '',
            email: '',
            phone: '',
            address: '',
            zipCode: '',
            city: '',
            state: '',
            country: '',
            cardNumber: '',
            cardHolder: '',
            cardCvc: '',

        };
        this.handleChange = this.handleChange.bind(this);
        this.handleValidate = this.handleValidate.bind(this);
    }
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value }, ()=>{
            console.log(this.state);
        });
    }

    // handleValidate(event) {
    // aktywne dopiero po uzupełnieniu wymaganych pól
    //     {console.log("walidacja")}
    //     // switch(event.target.name) {
    //     //     case 'email':
    //     //         match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    //     //
    //     // }
    //     // if ( (input === 'name' && value.length >= 0 ) || (input === "surname" >=0 )){
    //     //
    //     // }
    // }

    render() {
        const {
            name,
            surname,
            email,
            phone,
            address,
            zipCode,
            city,
            state,
            country,
            cardNumber,
            cardHolder,
            cardCvc,

        } = this.state;
        return (
            <Fragment>
                <div className="container-form">
                    <p className="container-title">DELIVERY ADDRESS</p>
                    <div>
                        <p>first name</p>
                        <input
                            name="name"
                            type="string"
                            value={name}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <p>last name</p>
                        <input
                            name="surname"
                            type="string"
                            value={surname}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <p>e-mail</p>
                        <input
                            name="email"
                            type="string"
                            value={email}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div>
                        <p>phone</p>
                        <input
                            name="phone"
                            type="string"
                            value={phone}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <p>address</p>
                        <input
                            name="address"
                            type="string"
                            value={address}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <p>address country</p>
                        <input
                            name="country"
                            type="string"
                            value={country}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <p>zip code</p>
                        <input
                            name="zipCode"
                            type="string"
                            value={zipCode}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <p>city</p>
                        <input
                            name="city"
                            type="string"
                            value={city}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <p>state</p>
                        <input
                            name="state"
                            type="string"
                            value={state}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <p>city</p>
                        <select
                            name="country"
                            type="string"
                            onChange={this.handleChange}
                            // value={this.state.value}
                        >
                            <option value='Poland'>Poland</option>
                            <option value='USA'>USA</option>
                            <option value='UK'>UK</option>
                        </select>
                    </div>
                    <p className="container-title">PAYMENT</p>
                    <div>
                        <p>card number</p>
                        <input
                            name="cardNumber"
                            type="string"
                            value={cardNumber}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <p>card holder</p>
                        <input
                            name="cardHolder"
                            type="string"
                            value={cardHolder}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <p>cvc</p>
                        <input
                            name="cardCvc"
                            type="string"
                            value={cardCvc}
                            onChange={this.handleChange}
                        />
                    </div>
                    <button
                        onClick={this.handleValidate}
                        type="button"
                    >
                        BUY
                    </button>
                </div>
            </Fragment>
        )
    }

};

export default Form
