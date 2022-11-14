import { ADMIN_LOGIN, ADMIN_LOGOUT } from "../../../Constanst";

const initialState = {
    isLogged: false,
};

const auth = (state = initialState, action) => {
    switch (action.type) {
        case ADMIN_LOGIN:
            return {
                ...state,
                isLogged: true,
            };
        case ADMIN_LOGOUT:
            return {
                ...state,
                isLogged: false,
            };
        default:
            return state;
    }
};

export default auth;
