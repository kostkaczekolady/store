const initialState = {
    name: '',
    surname: '',
    email: '',
    address: '',
    addressCont: '',
    zipCode: '',
    city: '',
    state: '',
    country: '',
    cardNumber: '',
    cardHolder: '',
    cardCvc: '',

};

const mainReducer = (state = initialState, action) => {
    const newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case 'MODIFY_FORM':
            newState[action.payload.target] = action.payload.value;
            return newState;
        default:
            return state;
    }
};

export default mainReducer;

