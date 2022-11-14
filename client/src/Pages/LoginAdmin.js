import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Gowhite from "../Assets/logoGo.png";
import { useForm } from "react-hook-form";
import { AdminLogin } from "../Redux/Actions";
import axios from "axios";
import jwt_decode from "jwt-decode";
import "./LoginAdmin.css";
axios.defaults.withCredentials = true;

const Loginadmin = () => {
    const [errorLogin, setErrorLogin] = useState();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            localStorage.setItem("firstLoginAdmin", true);
            const response = await axios.post(
                `http://localhost:5000/login`,
                data,
                {
                    headers: { "Content-Type": "application/json" },
                    withCredentials: true,
                }
            );
            const decoded = jwt_decode(response.data.accessToken);
            dispatch(AdminLogin());
            navigate("/list_peserta");
        } catch (error) {
            setErrorLogin(true);
        }
    };

    return (
        <div className="containerloginadmin">
            <div class="d-flex position-absolute top-50 start-50 translate-middle">
                <form className="formlogin">
                    <div className="mb-3">
                        <div className="logologin">
                            <img src={Gowhite} />
                        </div>
                        <div className="loginadmin">
                            <h3>Masuk Admin</h3>
                        </div>
                        <div className="inputlogin">
                            <input
                                type="email"
                                className="form-control form-control-lg"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="username"
                            />

                            <div className="mb-3">
                                <input
                                    type="password"
                                    className="form-control form-control-lg"
                                    id="exampleInputPassword1"
                                    placeholder="Password"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="btnlogin">
                        <button
                            type="submit"
                            className="btn btn-primary"
                        >
                            Masuk
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Loginadmin;
