import { ADD_DATA } from "./action-types";

export const addData = (value, target) => (dispatch) => {
    dispatch ({
        type: ADD_DATA,
        payload: { value, target },
    });
};
