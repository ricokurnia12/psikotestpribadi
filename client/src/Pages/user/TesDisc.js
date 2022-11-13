import React, { useEffect, useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllSoalDisc } from "../../Redux/Actions";
import { useForm } from "react-hook-form";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import Countdown from "react-countdown";
import decode from "jwt-decode";
import axios from "axios";
import url from "../../baseUrl";

import { Navbar } from "../../Components/Navbar";

const Completionist = () => <Navigate to="/expired_link" />;

const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
        // Render a completed state
        return <Completionist />;
    } else {
        // Render a countdown
        return (
            <span
                className="fixed-top text-center"
                style={{
                    margin: "100px auto",
                    fontSize: "20px",
                    backgroundColor: "gray",
                    borderRadius: "5px",
                    zIndex: "1000",
                    display: "inline-block",
                    width: "100px",
                }}
            >
                {hours}:{minutes}:{seconds}
            </span>
        );
    }
};

const TesDisc = () => {
    console.log("render");
    const [error, setError] = useState(false);
    const [minutes, setMinutes] = useState(60);
    const { token } = useParams();
    console.log(decode(token), "ini token");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const soalDisc = useSelector((state) => state.data.soalDisc);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const countDown = useMemo(() => {
        return (
            <Countdown
                date={Date.now() + minutes * 60000}
                renderer={renderer}
            />
        );
    }, [minutes]);

    const onSubmit = async (data) => {
        try {
            const result = {
                pesertaId: decode(token).pesertaId,
                NP: [],
                NK: [],
            };
            for (const key in data) {
                if (key.match("optionP")) {
                    result.NP.push(data[key]);
                } else if (key.match("optionK")) {
                    result.NK.push(data[key]);
                }
            }

            console.log(result, "ini result");
            await axios.post(`${url}/submitDisc`, result);
            navigate(`/finish_submit_test`);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const updateTime = async () => {
            try {
                await axios.put(
                    `${url}/updateTime`,
                    {},
                    {
                        headers: {
                            Authorization: token,
                        },
                    }
                );
            } catch (error) {
                console.log(error);
                setError(true);
            }
        };
        updateTime();
        const getPesertaById = async () => {
            try {
                const peserta = await axios.get(
                    `${url}/getPesertaById/${decode(token).pesertaId}`
                );
                if (peserta.data.time !== 0) {
                    const diff_min_peserta = diff_minutes(
                        peserta.data.time
                    );
                    if (diff_min_peserta <= 0) {
                        navigate("/expired_link");
                    } else {
                        setMinutes(diff_min_peserta);
                    }
                }
                if (peserta.data.JenisTes !== "DISC") {
                    navigate("/expired_link");
                }
            } catch (error) {
                console.log(error);
            }
        };
        getPesertaById();
    }, [navigate, token]);

    useEffect(() => {
        dispatch(getAllSoalDisc());
    }, [dispatch]);

    const diff_minutes = (timePeserta) => {
        const D = new Date();
        const timeNow = D.getTime() / 1000;

        const min = Math.abs(
            Math.round((timeNow - timePeserta) / 60)
        );

        const diff_min = 60 - min;

        return diff_min;
    };

    if (error) {
        return <Navigate to="/expired_link" />;
    } else {
        return (
            <div>
                <Navbar />
                <div>{countDown}</div>
                <div
                    className="text-center"
                    style={{ marginTop: "200px" }}
                >
                    <div className="mb-2">
                        Pilih salah satu opsi di bawah pada kolom [P]
                        di samping kalimat yang{" "}
                        <b className="text-danger">PALING</b>{" "}
                        menggambarkan diri anda
                    </div>
                    <div>
                        Pilih salah satu opsi di bawah pada kolom [K]
                        di samping kalimat yang{" "}
                        <b className="text-danger">PALING TIDAK</b>{" "}
                        menggambarkan diri anda
                    </div>
                </div>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="container"
                >
                    <div className="row">
                        {soalDisc.map((el, index) => {
                            return (
                                <div
                                    className="col-lg-6"
                                    key={el._id}
                                >
                                    <div
                                        className="d-flex"
                                        style={{ marginTop: "100px" }}
                                    >
                                        <div className="me-5 align-self-center">
                                            <h1>{index + 1}.</h1>
                                        </div>
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">
                                                        P
                                                    </th>
                                                    <th scope="col">
                                                        K
                                                    </th>
                                                    <th scope="col">
                                                        Gambaran Diri
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="radio"
                                                                name={
                                                                    index +
                                                                    "optionP"
                                                                }
                                                                value={
                                                                    el.np1
                                                                }
                                                                {...register(
                                                                    index +
                                                                        "optionP",
                                                                    {
                                                                        required: true,
                                                                    }
                                                                )}
                                                            />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="radio"
                                                                name={
                                                                    index +
                                                                    "optionK"
                                                                }
                                                                value={
                                                                    el.nk1
                                                                }
                                                                {...register(
                                                                    index +
                                                                        "optionK",
                                                                    {
                                                                        required: true,
                                                                    }
                                                                )}
                                                            />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        {el.line1}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="radio"
                                                                name={
                                                                    index +
                                                                    "optionP"
                                                                }
                                                                value={
                                                                    el.np2
                                                                }
                                                                {...register(
                                                                    index +
                                                                        "optionP",
                                                                    {
                                                                        required: true,
                                                                    }
                                                                )}
                                                            />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="radio"
                                                                name={
                                                                    index +
                                                                    "optionK"
                                                                }
                                                                value={
                                                                    el.nk2
                                                                }
                                                                {...register(
                                                                    index +
                                                                        "optionK",
                                                                    {
                                                                        required: true,
                                                                    }
                                                                )}
                                                            />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        {el.line2}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="radio"
                                                                name={
                                                                    index +
                                                                    "optionP"
                                                                }
                                                                value={
                                                                    el.np3
                                                                }
                                                                {...register(
                                                                    index +
                                                                        "optionP",
                                                                    {
                                                                        required: true,
                                                                    }
                                                                )}
                                                            />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="radio"
                                                                name={
                                                                    index +
                                                                    "optionK"
                                                                }
                                                                value={
                                                                    el.nk3
                                                                }
                                                                {...register(
                                                                    index +
                                                                        "optionK",
                                                                    {
                                                                        required: true,
                                                                    }
                                                                )}
                                                            />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        {el.line3}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="radio"
                                                                name={
                                                                    index +
                                                                    "optionP"
                                                                }
                                                                value={
                                                                    el.np4
                                                                }
                                                                {...register(
                                                                    index +
                                                                        "optionP",
                                                                    {
                                                                        required: true,
                                                                    }
                                                                )}
                                                            />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="radio"
                                                                name={
                                                                    index +
                                                                    "optionK"
                                                                }
                                                                value={
                                                                    el.nk4
                                                                }
                                                                {...register(
                                                                    index +
                                                                        "optionK",
                                                                    {
                                                                        required: true,
                                                                    }
                                                                )}
                                                            />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        {el.line4}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    {errors[index + "optionP"]
                                        ?.type === "required" && (
                                        <p
                                            className="text-center"
                                            role="alert"
                                            style={{ color: "red" }}
                                        >
                                            Option P tidak boleh
                                            kosong!
                                        </p>
                                    )}
                                    {errors[index + "optionK"]
                                        ?.type === "required" && (
                                        <p
                                            className="text-center"
                                            role="alert"
                                            style={{ color: "red" }}
                                        >
                                            Option K tidak boleh
                                            kosong!
                                        </p>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                    <div
                        className="text-center"
                        style={{ margin: "150px 0" }}
                    >
                        <button
                            type="submit"
                            className="btn btn-danger w-50"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        );
    }
};

export default TesDisc;
