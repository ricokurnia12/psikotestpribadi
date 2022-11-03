import React, { useEffect, useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllSoalDisc } from "../../Redux/Actions";
import { useForm } from "react-hook-form";
import Countdown from "react-countdown";

import { Navbar } from "../../Components/Navbar";

const Completionist = () => <span>You are good to go!</span>;

const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
        // Render a completed state
        return <Completionist />;
    } else {
        // Render a countdown
        return (
            // <div
            //     className="fixed-top"
            //     style={{
            //         marginTop: "100px",
            //         textAlign: "center",
            //     }}
            // >
            //     <span
            //         style={{
            //             margin: "0 auto",
            //             fontSize: "20px",
            //             backgroundColor: "gray",
            //             borderRadius: "5px",
            //             zIndex: "1000",
            //             width: "200px",
            //         }}
            //     >
            //         {hours}:{minutes}:{seconds}
            //     </span>
            // </div>
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
    const dispatch = useDispatch();
    const soalDisc = useSelector((state) => state.data.soalDisc);
    console.log("render");
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const countDown = useMemo(() => {
        return (
            <Countdown
                date={Date.now() + 60 * 60000}
                renderer={renderer}
            />
        );
    }, []);

    const onSubmit = (data) => console.log(data, "ini data");

    useEffect(() => {
        dispatch(getAllSoalDisc());
    }, [dispatch]);

    return (
        <div>
            <Navbar />
            <div>{countDown}</div>
            <div
                className="text-center"
                style={{ marginTop: "200px" }}
            >
                <div className="mb-2">
                    Pilih salah satu opsi di bawah pada kolom [P] di
                    samping kalimat yang{" "}
                    <b className="text-danger">PALING</b>{" "}
                    menggambarkan diri anda
                </div>
                <div>
                    Pilih salah satu opsi di bawah pada kolom [K] di
                    samping kalimat yang{" "}
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
                            <div className="col-lg-6" key={el._id}>
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
                                                <th scope="col">P</th>
                                                <th scope="col">K</th>
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
                                                                el._id
                                                            }
                                                            value={
                                                                el.np1
                                                            }
                                                            {...register(
                                                                el._id,
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
                                                                index
                                                            }
                                                            value={
                                                                el.nk1
                                                            }
                                                        />
                                                    </div>
                                                </td>
                                                <td>{el.line1}</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name={
                                                                el._id
                                                            }
                                                            value={
                                                                el.np2
                                                            }
                                                            {...register(
                                                                el._id,
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
                                                                index
                                                            }
                                                            value={
                                                                el.nk2
                                                            }
                                                        />
                                                    </div>
                                                </td>
                                                <td>{el.line2}</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name={
                                                                el._id
                                                            }
                                                            value={
                                                                el.np3
                                                            }
                                                            {...register(
                                                                el._id,
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
                                                                index
                                                            }
                                                            value={
                                                                el.nk3
                                                            }
                                                        />
                                                    </div>
                                                </td>
                                                <td>{el.line3}</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name={
                                                                el._id
                                                            }
                                                            value={
                                                                el.np4
                                                            }
                                                            {...register(
                                                                el._id,
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
                                                                index
                                                            }
                                                            value={
                                                                el.nk4
                                                            }
                                                        />
                                                    </div>
                                                </td>
                                                <td>{el.line4}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                {errors[el._id]?.type ===
                                    "required" && (
                                    <p
                                        className="text-center"
                                        role="alert"
                                        style={{ color: "red" }}
                                    >
                                        Option P tidak boleh kosong!
                                    </p>
                                )}
                                {errors[index]?.type ===
                                    "required" && (
                                    <p
                                        className="text-center"
                                        role="alert"
                                        style={{ color: "red" }}
                                    >
                                        Option P tidak boleh kosong!
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
};

export default TesDisc;
