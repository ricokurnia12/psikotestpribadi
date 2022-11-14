import React, { useEffect, useState } from "react";
import "./Form.css";
import { useForm } from "react-hook-form";
import Navbar from "../../Components/NavbarAdmin";
import axios from "axios";

const FormUnit = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            await axios.post("http://localhost:5000/createPeserta", {
                ...data,
                ProyeksiPenempatan: "dfhsfdshfh",
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <Navbar />
            <div id="formkaryawancontainer">
                <div className="container">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="row g-3"
                    >
                        <div className="col-md-6">
                            <label className="form-label">NIK</label>
                            <input
                                type="number"
                                className="form-control"
                                id="inputNIK"
                                placeholder="Masukan NIK Peserta"
                                style={{ marginBottom: 10 }}
                                {...register("NIK", {
                                    required: true,
                                })}
                            />
                            {errors.NIK?.type === "required" && (
                                <p
                                    role="alert"
                                    style={{ color: "red" }}
                                >
                                    Nik tidak boleh kosong
                                </p>
                            )}
                        </div>
                        <div className="col-md-6">
                            <label
                                className="form-label"
                                htmlFor="Ponsel"
                            >
                                No. Handphone
                            </label>
                            <div className="input-group">
                                <span
                                    className="input-group-text"
                                    id="inputGroupPrepend"
                                >
                                    +62
                                </span>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Masukan No Handphone"
                                    name="pendaftarTelepon"
                                    id="Ponsel"
                                    aria-describedby="inputGroupPrepend"
                                    {...register("PhoneNumber", {
                                        required: true,
                                        minLength: 10,
                                    })}
                                />
                            </div>
                            {errors.PhoneNumber?.type ===
                                "required" && (
                                <p
                                    role="alert"
                                    style={{ color: "red" }}
                                >
                                    Nik tidak boleh kosong
                                </p>
                            )}
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">
                                Nama Lengkap
                            </label>
                            <input
                                type="txt"
                                className="form-control"
                                id=""
                                placeholder="Masukan Nama Lengkap Peserta"
                                style={{ marginBottom: 10 }}
                                {...register("NamaLengkap", {
                                    required: true,
                                })}
                            />
                            {errors.NamaLengkap?.type ===
                                "required" && (
                                <p
                                    role="alert"
                                    style={{ color: "red" }}
                                >
                                    Nama lengkap tidak boleh kosong
                                </p>
                            )}
                        </div>
                        <div className="col-md-6">
                            <label
                                htmlFor="tempatLahir"
                                className="form-label"
                            >
                                Tempat Lahir
                            </label>
                            <input
                                type="txt"
                                className="form-control"
                                placeholder="Masukan Tempat Lahir"
                                id="tempatLahir"
                                style={{ marginBottom: 10 }}
                                {...register("TempatLahir", {
                                    required: true,
                                })}
                            />
                            {errors.TempatLahir?.type ===
                                "required" && (
                                <p
                                    role="alert"
                                    style={{ color: "red" }}
                                >
                                    Tempat Lahir tidak boleh kosong
                                </p>
                            )}
                        </div>
                        <div className="col-md-6">
                            <label
                                htmlFor="tanggalLahir"
                                className="form-label"
                            >
                                Tanggal Lahir
                            </label>
                            <input
                                type="date"
                                className="form-control"
                                id="tanggalLahir"
                                style={{ marginBottom: 10 }}
                                {...register("TanggalLahir", {
                                    required: true,
                                })}
                            />
                            {errors.TanggalLahir?.type ===
                                "required" && (
                                <p
                                    role="alert"
                                    style={{ color: "red" }}
                                >
                                    Tanggal Lahir tidak boleh kosong
                                </p>
                            )}
                        </div>
                        <div className="col-md-6">
                            <label
                                htmlFor="email"
                                className="form-label"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="masukan email Peserta"
                                {...register("Email", {
                                    required: true,
                                    pattern:
                                        /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                })}
                            />
                            {errors.Email?.type === "required" && (
                                <p
                                    role="alert"
                                    style={{ color: "red" }}
                                >
                                    Email tidak boleh kosong
                                </p>
                            )}
                            {errors.Email?.type === "patern" && (
                                <p
                                    role="alert"
                                    style={{ color: "red" }}
                                >
                                    Email tidak valid
                                </p>
                            )}
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <h3>Proyeksi Penempatan</h3>
                                <label
                                    htmlFor="inputCity"
                                    className="form-label"
                                >
                                    Jumlah Cakupan Unit
                                </label>
                                <input
                                    style={{
                                        height: "39px",
                                        marginBottom: "0px",
                                    }}
                                    type="number"
                                    className="form-control"
                                    placeholder="Masukan Jumlah Cakupan Unit"
                                    id="inputCity"
                                    {...register(
                                        "JumlahCakupanUnit",
                                        {
                                            required: true,
                                        }
                                    )}
                                />
                                {errors.JumlahCakupanUnit?.type ===
                                    "required" && (
                                    <p
                                        role="alert"
                                        style={{ color: "red" }}
                                    >
                                        Jumlah cakupan unit tidak
                                        boleh kosong
                                    </p>
                                )}

                                <label
                                    htmlFor="bidang"
                                    className="form-label mt-4"
                                >
                                    Cabang
                                </label>
                                <input
                                    style={{
                                        height: "39px",
                                        marginBottom: "0px",
                                    }}
                                    placeholder="Masukan Cabang"
                                    id="bidang"
                                    type="txt"
                                    className="form-control"
                                    {...register("Cabang", {
                                        required: true,
                                    })}
                                />
                                {errors.Cabang?.type ===
                                    "required" && (
                                    <p
                                        role="alert"
                                        style={{ color: "red" }}
                                    >
                                        Bidang tidak boleh kosong
                                    </p>
                                )}
                            </div>

                            <div className="col-md-6">
                                <h3>Tes Psikologi</h3>
                                <label
                                    htmlFor="jenisTes"
                                    className="form-label"
                                >
                                    Jenis Tes
                                </label>
                                <select
                                    className="form-select"
                                    {...register("JenisTes", {
                                        required: true,
                                    })}
                                    id="jenisTes"
                                    defaultValue=""
                                >
                                    <option value="" disabled>
                                        Pilih Jenis Tes
                                    </option>
                                    <option value="MBTI">MBTI</option>
                                    <option value="DISC">DISC</option>
                                </select>
                                {errors.JenisTes?.type ===
                                    "required" && (
                                    <p
                                        role="alert"
                                        style={{ color: "red" }}
                                    >
                                        Jenis Tes tidak boleh kosong
                                    </p>
                                )}

                                <label className="form-label mt-4">
                                    Pelaksanaan Tes
                                </label>
                                <input
                                    type="date"
                                    className="form-control"
                                    style={{ height: 38 }}
                                    {...register("PelaksanaanTes", {
                                        required: true,
                                    })}
                                />
                                {errors.PelaksanaanTes?.type ===
                                    "required" && (
                                    <p
                                        role="alert"
                                        style={{ color: "red" }}
                                    >
                                        Pelaksanaan Tes tidak boleh
                                        kosong
                                    </p>
                                )}
                            </div>
                        </div>
                        <div className="btn mt-5 mb-5">
                            <button type="submit" className="btn1 ">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FormUnit;
