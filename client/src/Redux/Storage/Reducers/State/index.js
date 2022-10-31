import { FETCH_ALL_SOAL_DISC } from "../../../Constanst";

const state = {
    soalDisc: [],
};

const data = (data = state, action) => {
    switch (action.type) {
        case FETCH_ALL_SOAL_DISC:
            return {
                ...data,
                soalDisc: action.payload,
            };
        default:
            return data;
    }
};

export default data;
