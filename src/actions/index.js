import { MODIFY_FORM } from "./action-types";

export const modifyForm = (value, target) => (dispatch) => {
    dispatch ({
        type: MODIFY_FORM,
        payload: { value, target },
    });
};
