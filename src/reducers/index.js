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

export default (state = initialState, action) => {
    switch(action.type){
        case ADD_DATA:
            return {
                ...state
                // payload ?
            }
            default:
                return state;
    }
}

