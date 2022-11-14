import { GET_TOKEN, ADMIN_LOGOUT } from "../../../Constanst";

const data = {};

const admTokenReducer = (state = data, action) => {
    switch (action.type) {
        case GET_TOKEN:
            return {
                ...state,
                data: action.payload,
            };
        case ADMIN_LOGOUT:
            return {
                ...state,
                data: {},
            };
        default:
            return state;
    }
};

export default admTokenReducer;
