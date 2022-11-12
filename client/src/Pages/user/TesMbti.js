import React, { useEffect, useState, useMemo } from "react";
import { Navbar } from "../../Components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import {
    getAllSoalMbti1,
    getAllSoalMbti2,
    getAllSoalMbti3,
} from "../../Redux/Actions";
import { useForm } from "react-hook-form";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import Countdown from "react-countdown";
import decode from "jwt-decode";
import axios from "axios";
import url from "../../baseUrl";
import "./TesMbti.css";

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

const TesMbti = () => {
    const [error, setError] = useState(false);
    const [minutes, setMinutes] = useState(60);
    const { token } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const soalMbti1 = useSelector((state) => state.data.soalMbti1);
    const soalMbti2 = useSelector((state) => state.data.soalMbti2);
    const soalMbti3 = useSelector((state) => state.data.soalMbti3);

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

    const onSubmit = (data) => {
        const result = {
            bagian1: {
                kolom1: [],
                kolom2: [],
                kolom3: [],
                kolom4: [],
            },
            bagian2: {
                kolom1: [],
                kolom2: [],
                kolom3: [],
                kolom4: [],
            },
            bagian3: {
                kolom1: [],
                kolom2: [],
                kolom3: [],
                kolom4: [],
            },
        };
        for (const key in data) {
            if (key.match("bagian1")) {
                if (key.match("tipe1")) {
                    result.bagian1.kolom1.push(data[key]);
                } else if (key.match("tipe2")) {
                    result.bagian1.kolom2.push(data[key]);
                } else if (key.match("tipe3")) {
                    result.bagian1.kolom3.push(data[key]);
                } else if (key.match("tipe4")) {
                    result.bagian1.kolom4.push(data[key]);
                }
            } else if (key.match("bagian2")) {
                if (key.match("tipe1")) {
                    result.bagian2.kolom1.push(data[key]);
                } else if (key.match("tipe2")) {
                    result.bagian2.kolom2.push(data[key]);
                } else if (key.match("tipe3")) {
                    result.bagian2.kolom3.push(data[key]);
                } else if (key.match("tipe4")) {
                    result.bagian2.kolom4.push(data[key]);
                }
            } else if (key.match("bagian3")) {
                if (key.match("tipe1")) {
                    result.bagian3.kolom1.push(data[key]);
                } else if (key.match("tipe2")) {
                    result.bagian3.kolom2.push(data[key]);
                } else if (key.match("tipe3")) {
                    result.bagian3.kolom3.push(data[key]);
                } else if (key.match("tipe4")) {
                    result.bagian3.kolom4.push(data[key]);
                }
            }
        }
        console.log(result);
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
            } catch (error) {
                console.log(error);
            }
        };
        getPesertaById();
    }, [navigate, token]);

    useEffect(() => {
        dispatch(getAllSoalMbti1());
        dispatch(getAllSoalMbti2());
        dispatch(getAllSoalMbti3());
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
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="container"
                >
                    <div
                        className="text-center"
                        style={{ marginTop: "100px" }}
                    >
                        <div>
                            <h1>Bagian I</h1>
                        </div>
                        <div>
                            <b>Petunjuk:</b> Pilih salah satu
                            pernyataan dari tiap soal yang lebih
                            mengungkapkan bagaimana biasanya anda
                            merasa atau bertindak. Buatlah pilihan
                            secara spontan!
                        </div>
                    </div>
                    <div
                        className="row"
                        style={{ marginTop: "100px" }}
                    >
                        {soalMbti1.map((el, index) => {
                            return (
                                <div
                                    key={el._id}
                                    className="col-lg-6 mt-3"
                                >
                                    <div>
                                        <b>
                                            {index + 1}. {el.soal}
                                        </b>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name={
                                                index +
                                                "bagian1" +
                                                "tipe" +
                                                el.tipe
                                            }
                                            id={index + "radio1"}
                                            value={el.valueA}
                                            {...register(
                                                index +
                                                    "bagian1" +
                                                    "tipe" +
                                                    el.tipe,
                                                {
                                                    required: true,
                                                }
                                            )}
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor={index + "radio1"}
                                        >
                                            {el.jawabanA}
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name={index + "bagian1"}
                                            id={index + "radio2"}
                                            value={el.valueB}
                                            {...register(
                                                index +
                                                    "bagian1" +
                                                    "tipe" +
                                                    el.tipe,
                                                {
                                                    required: true,
                                                }
                                            )}
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor={index + "radio2"}
                                        >
                                            {el.JawabanB}
                                        </label>
                                    </div>
                                    {errors[
                                        index +
                                            "bagian1" +
                                            "tipe" +
                                            el.tipe
                                    ]?.type === "required" && (
                                        <p
                                            className="text-center"
                                            role="alert"
                                            style={{ color: "red" }}
                                        >
                                            Option tidak boleh kosong
                                        </p>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                    <div className="text-center mt-5">
                        <div>
                            <h1>Bagian II</h1>
                        </div>
                        <div>
                            <b>Petunjuk :</b> Pilih salah satu kata
                            yang lebih menggambarkan diri Anda.
                        </div>
                    </div>
                    <div className="row mt-5">
                        {soalMbti2.map((el, index) => {
                            return (
                                <div
                                    key={el._id}
                                    className="col-lg-6 mt-3"
                                >
                                    <div className="d-flex">
                                        <div className="me-3">
                                            <b>{index + 61}.</b>{" "}
                                        </div>
                                        <div>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name={
                                                        index +
                                                        "bagian2" +
                                                        "tipe" +
                                                        el.tipe
                                                    }
                                                    id={
                                                        index +
                                                        "radio1bg2"
                                                    }
                                                    value={el.valueA}
                                                    {...register(
                                                        index +
                                                            "bagian2" +
                                                            "tipe" +
                                                            el.tipe,
                                                        {
                                                            required: true,
                                                        }
                                                    )}
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor={
                                                        index +
                                                        "radio1bg2"
                                                    }
                                                >
                                                    {el.jawabanA}
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name={
                                                        index +
                                                        "bagian2"
                                                    }
                                                    id={
                                                        index +
                                                        "radio2bg2"
                                                    }
                                                    value={el.valueB}
                                                    {...register(
                                                        index +
                                                            "bagian2" +
                                                            "tipe" +
                                                            el.tipe,
                                                        {
                                                            required: true,
                                                        }
                                                    )}
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor={
                                                        index +
                                                        "radio2bg2"
                                                    }
                                                >
                                                    {el.JawabanB}
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    {errors[
                                        index +
                                            "bagian2" +
                                            "tipe" +
                                            el.tipe
                                    ]?.type === "required" && (
                                        <p
                                            className="text-center"
                                            role="alert"
                                            style={{ color: "red" }}
                                        >
                                            Option tidak boleh kosong
                                        </p>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                    <div className="text-center mt-5">
                        <div>
                            <h1>Bagian III</h1>
                            <div>
                                <b>Petunjuk :</b> Pilih salah satu
                                pernyataan yang lebih menggambarkan
                                diri Anda.
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        {soalMbti3.map((el, index) => {
                            return (
                                <div
                                    key={el._id}
                                    className="col-lg-6"
                                >
                                    <div className="d-flex">
                                        <div className="me-3">
                                            {index + 97}.{" "}
                                        </div>
                                        <div className="row">
                                            <div>
                                                <div className="form-check col-lg-12">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name={
                                                            index +
                                                            "bagian3" +
                                                            "tipe" +
                                                            el.tipe
                                                        }
                                                        id={
                                                            index +
                                                            "radio1bg3"
                                                        }
                                                        value={
                                                            el.valueA
                                                        }
                                                        {...register(
                                                            index +
                                                                "bagian3" +
                                                                "tipe" +
                                                                el.tipe,
                                                            {
                                                                required: true,
                                                            }
                                                        )}
                                                    />
                                                    <label
                                                        htmlFor={
                                                            index +
                                                            "radio1bg3"
                                                        }
                                                    >
                                                        <b>
                                                            {el.soalA}
                                                        </b>
                                                    </label>
                                                    <div>
                                                        {el.jawabanA}
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="form-check col-lg-12">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name={
                                                                index +
                                                                "bagian3"
                                                            }
                                                            id={
                                                                index +
                                                                "radio2bg3"
                                                            }
                                                            value={
                                                                el.valueB
                                                            }
                                                            {...register(
                                                                index +
                                                                    "bagian3" +
                                                                    "tipe" +
                                                                    el.tipe,
                                                                {
                                                                    required: true,
                                                                }
                                                            )}
                                                        />
                                                        <label
                                                            htmlFor={
                                                                index +
                                                                "radio2bg3"
                                                            }
                                                        >
                                                            <b>
                                                                {
                                                                    el.soalB
                                                                }
                                                            </b>
                                                        </label>
                                                        <div>
                                                            {
                                                                el.jawabanB
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {errors[
                                        index +
                                            "bagian3" +
                                            "tipe" +
                                            el.tipe
                                    ]?.type === "required" && (
                                        <p
                                            className="text-center"
                                            role="alert"
                                            style={{ color: "red" }}
                                        >
                                            Option tidak boleh kosong
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

export default TesMbti;
