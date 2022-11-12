import {
    FETCH_ALL_SOAL_DISC,
    FETCH_ALL_SOAL_MBTI1,
    FETCH_ALL_SOAL_MBTI2,
    FETCH_ALL_SOAL_MBTI3,
} from "../../../Constanst";

const state = {
    soalDisc: [],
    soalMbti1: [],
    soalMbti2: [],
    soalMbti3: [],
};

const data = (data = state, action) => {
    switch (action.type) {
        case FETCH_ALL_SOAL_DISC:
            return {
                ...data,
                soalDisc: action.payload,
            };
        case FETCH_ALL_SOAL_MBTI1:
            return {
                ...data,
                soalMbti1: action.payload,
            };
        case FETCH_ALL_SOAL_MBTI2:
            return {
                ...data,
                soalMbti2: action.payload,
            };
        case FETCH_ALL_SOAL_MBTI3:
            return {
                ...data,
                soalMbti3: action.payload,
            };
        default:
            return data;
    }
};

export default data;
