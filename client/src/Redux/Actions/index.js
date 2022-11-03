import { FETCH_ALL_SOAL_DISC } from "../Constanst";
import axios from "axios";
import url from "../../baseUrl";
import Directory from "../../baseDirectory";

export const getAllSoalDisc = () => async (dispatch) => {
    try {
        let { data } = await axios.get(`${url}/getSoalDisc`);
        dispatch({
            type: FETCH_ALL_SOAL_DISC,
            payload: data,
        });
    } catch (error) {
        console.log(error);
    }
};
