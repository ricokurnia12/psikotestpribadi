import {
    FETCH_ALL_SOAL_DISC,
    FETCH_ALL_SOAL_MBTI1,
    FETCH_ALL_SOAL_MBTI2,
    FETCH_ALL_SOAL_MBTI3,
    ADMIN_LOGIN,
    ADMIN_LOGOUT,
} from "../Constanst";
import axios from "axios";
import url from "../../baseUrl";

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

export const getAllSoalMbti1 = () => async (dispatch) => {
    try {
        let { data } = await axios.get(`${url}/getSoalMbti1`);
        dispatch({
            type: FETCH_ALL_SOAL_MBTI1,
            payload: data,
        });
    } catch (error) {
        console.log(error);
    }
};
export const getAllSoalMbti2 = () => async (dispatch) => {
    try {
        let { data } = await axios.get(`${url}/getSoalMbti2`);
        dispatch({
            type: FETCH_ALL_SOAL_MBTI2,
            payload: data,
        });
    } catch (error) {
        console.log(error);
    }
};
export const getAllSoalMbti3 = () => async (dispatch) => {
    try {
        let { data } = await axios.get(`${url}/getSoalMbti3`);
        dispatch({
            type: FETCH_ALL_SOAL_MBTI3,
            payload: data,
        });
    } catch (error) {
        console.log(error);
    }
};

export const AdminLogin = () => async (dispatch) => {
    try {
        dispatch({ type: ADMIN_LOGIN });
    } catch (error) {
        console.log(error);
    }
};

export const AdminLogout = () => async (dispatch) => {
    try {
        localStorage.removeItem("firstLoginAdmin");
        dispatch({ type: ADMIN_LOGOUT });
    } catch (error) {
        console.log(error);
    }
};
