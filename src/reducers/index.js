import { ADD_DATA } from "../actions/action-types";

const initialState = {
    name: '',
    surname: '',
    email: '',
    address: '',
    zipCode: '',
    city: '',
    state: '',
    country: '',
    cardNumber: '',
    cardHolder: '',
    cardCvc: '',

};

const mainReducer = (state = initialState, action) => {
// export default (state = initialState, action) => {
    const newState = JSON.parse(JSON.stringify(state));

    switch(action.type){
        case 'ADD_DATA':
            newState[action.payload.target] = action.payload.value;
            return newState;
        default:
            return state;
    }
}

export default mainReducer;

