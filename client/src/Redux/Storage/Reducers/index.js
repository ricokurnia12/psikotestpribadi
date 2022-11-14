import { combineReducers } from "redux";

import data from "./State";
import admTokenReducer from "./State/tokenState";
import auth from "./State/auth";

const reducers = combineReducers({
    data,
    admTokenReducer,
    auth,
});

export default reducers;
