import React, { useEffect, useState } from "react";
import "./Form.css";
import { useForm } from "react-hook-form";
import Navbar from "../../Components/NavbarAdmin";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Form = () => {
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location, "ini location");
    const [karyawan, setKaryawan] = useState([]);
    const [disbut, setDisbut] = useState(false);
    const [date, setDate] = useState("");
    console.log(karyawan, "ini karyawan");
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            NIK: karyawan.NIK,
            PhoneNumber: "",
            NamaLengkap: "",
        },
    });

    const onSubmit = async (data) => {
        try {
            await axios.post("http://localhost:5000/createPeserta", {
                ...data,
                ProyeksiPenempatan: location.state.jabatan,
                Penempatan: location.state.penempatan,
            });
            navigate("/list_peserta");
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        reset({
            NIK: karyawan.NIK,
            PhoneNumber: karyawan.PhoneNumber,
            NamaLengkap: karyawan.NamaLengkap,
            TempatLahir: karyawan.TempatLahir,
            TanggalLahir: date,
            Email: karyawan.Email,
        });
    }, [karyawan, date]);

    useEffect(() => {
        if (location.state.karyawanId !== undefined) {
            const getKaryawanById = async () => {
                try {
                    let { data } = await axios.get(
                        `http://localhost:5000/getKaryawan/${location.state.karyawanId}`
                    );
                    const D =
                        new Date(data.TanggalLahir).getFullYear() +
                        "-" +
                        (
                            "0" +
                            (new Date(data.TanggalLahir).getMonth() +
                                1)
                        ).slice(-2) +
                        "-" +
                        (
                            "0" +
                            new Date(data.TanggalLahir).getDate()
                        ).slice(-2);
                    setDate(D);
                    setKaryawan(data);
                    setDisbut(true);
                } catch (error) {
                    console.log(error);
                }
            };
            getKaryawanById();
        }
    }, [location.state]);

    if (!location.state) {
        return <Navigate to="/list_peserta" />;
    } else {
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
                                <label className="form-label">
                                    NIK
                                </label>
                                <input
                                    name="NIK"
                                    type="number"
                                    className="form-control"
                                    // defaultValue={karyawan.NIK}
                                    // defaultValue={2124124124124}
                                    id="inputNIK"
                                    placeholder="Masukan NIK Peserta"
                                    disabled={disbut}
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
                                        name="PhoneNumber"
                                        id="Ponsel"
                                        aria-describedby="inputGroupPrepend"
                                        // defaultValue={
                                        //     karyawan.PhoneNumber
                                        // }
                                        disabled={disbut}
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
                                    name="NamaLengkap"
                                    type="txt"
                                    className="form-control"
                                    id=""
                                    // defaultValue={
                                    //     karyawan.NamaLengkap
                                    //         ? karyawan.NamaLengkap
                                    //         : null
                                    // }
                                    placeholder="Masukan Nama Lengkap Peserta"
                                    disabled={disbut}
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
                                        Nama lengkap tidak boleh
                                        kosong
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
                                    name="TempatLahir"
                                    className="form-control"
                                    placeholder="Masukan Tempat Lahir"
                                    id="tempatLahir"
                                    // defaultValue={
                                    //     karyawan.TempatLahir
                                    // }
                                    disabled={disbut}
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
                                        Tempat Lahir tidak boleh
                                        kosong
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
                                    name="TanggalLahir"
                                    className="form-control"
                                    id="tanggalLahir"
                                    // defaultValue={date}
                                    disabled={disbut}
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
                                        Tanggal Lahir tidak boleh
                                        kosong
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
                                    name="Email"
                                    // defaultValue={karyawan.Email}
                                    disabled={disbut}
                                    placeholder="masukan email Peserta"
                                    {...register("Email", {
                                        required: true,
                                        pattern:
                                            /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                    })}
                                />
                                {errors.Email?.type ===
                                    "required" && (
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
                                        Jumlah Cakupan Bagian
                                    </label>
                                    <input
                                        style={{
                                            height: "39px",
                                            marginBottom: "0px",
                                        }}
                                        type="number"
                                        placeholder="Masukan Jumlah Cakupan Bagian"
                                        className="form-control"
                                        id="inputCity"
                                        {...register(
                                            "JumlahCakupanBagian",
                                            {
                                                required: true,
                                            }
                                        )}
                                    />
                                    {errors.JumlahCakupanBagian
                                        ?.type === "required" && (
                                        <p
                                            role="alert"
                                            style={{ color: "red" }}
                                        >
                                            Jumlah cakupan bagian
                                            tidak boleh kosong
                                        </p>
                                    )}

                                    <label
                                        htmlFor="bidang"
                                        className="form-label mt-4"
                                    >
                                        Bidang/Bagian
                                    </label>
                                    <input
                                        style={{
                                            height: "39px",
                                            marginBottom: "0px",
                                        }}
                                        id="bidang"
                                        type="txt"
                                        placeholder="Masukan Bidang"
                                        className="form-control"
                                        {...register("Bidang", {
                                            required: true,
                                        })}
                                    />
                                    {errors.Bidang?.type ===
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
                                        <option value="MBTI">
                                            MBTI
                                        </option>
                                        <option value="DISC">
                                            DISC
                                        </option>
                                    </select>
                                    {errors.JenisTes?.type ===
                                        "required" && (
                                        <p
                                            role="alert"
                                            style={{ color: "red" }}
                                        >
                                            Jenis Tes tidak boleh
                                            kosong
                                        </p>
                                    )}

                                    <label className="form-label mt-4">
                                        Pelaksanaan Tes
                                    </label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        style={{ height: 38 }}
                                        {...register(
                                            "PelaksanaanTes",
                                            {
                                                required: true,
                                            }
                                        )}
                                    />
                                    {errors.PelaksanaanTes?.type ===
                                        "required" && (
                                        <p
                                            role="alert"
                                            style={{ color: "red" }}
                                        >
                                            Pelaksanaan Tes tidak
                                            boleh kosong
                                        </p>
                                    )}
                                </div>
                            </div>
                            <div className="btn mt-5 mb-5">
                                <button
                                    type="submit"
                                    className="btn1 "
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
};

export default Form;
