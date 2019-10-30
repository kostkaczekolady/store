import React, { Component, Fragment } from 'react';

class Form extends Component {
  render() {
    return(
      <Fragment>
        <div className="container-form">
          <p className="container-title">DELIVERY ADDRESS</p>
          <div>
              <p>first name</p>
              <input></input>
          </div>
          <div>
              <p>last name</p>
              <input></input>
          </div>
          <div>
              <p>e-mail</p>
              <input></input>
          </div>

          <div>
              <p>phone</p>
              <input></input>
          </div>
          <div>
              <p>address</p>
              <input></input>
          </div>
          <div>
              <p>address country</p>
              <input></input>
          </div>
          <div>
              <p>zip code</p>
              <input></input>
          </div>
          <div>
              <p>city</p>
              <input></input>
          </div>
          <div>
              <p>state</p>
              <input></input>
          </div>
          <div>
              <p>city</p>
              <select>
                  <option>Poland</option>
                  <option>USA</option>
                  <option>UK</option>
              </select>
          </div>
          <p className="container-title">PAYMENT</p>
          <div>
            <p>card number</p>
            <input></input>
          </div>
          <div>
            <p>card holder</p>
            <input></input>
            </div>
          <div>
            <p>cvc</p>
            <input></input>
          </div>
          <button>
            BUY
          </button>
        </div>
      </Fragment>
    )
  }
}

export default Form
