import { useEffect } from "react";
import Router from "./Routes";
import "./App.css";
import { GET_TOKEN } from "./Redux/Constanst";
import jwt_decode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

function App() {
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);

    useEffect(() => {
        const firstLoginAdmin =
            localStorage.getItem("firstLoginAdmin");

        if (firstLoginAdmin) {
            const getToken = async () => {
                const res = await axios.get(
                    `http://localhost:5000/accessToken`
                );
                const decoded = jwt_decode(res.data.adm_access_token);
                dispatch({
                    type: GET_TOKEN,
                    payload: {
                        token: res.data.adm_access_token,
                        expire: decoded.exp,
                    },
                });
            };
            getToken();
        }
    }, [auth.isLogged, dispatch]);

    return (
        <div>
            <Router />
        </div>
    );
}

export default App;
