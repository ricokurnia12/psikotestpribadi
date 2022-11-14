import React, { useState, useEffect } from "react";
import Select from "react-select";
import "./LevelJabatan.css";
import leveljabatan from "../Assets/leveljabatan.bmp";
import NavbarAdmin from "../Components/NavbarAdmin";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

// import { colourOptions } from '../data';

// const options = [
//     { value: "blues", label: "Blues" },
//     { value: "rock", label: "Rock" },
//     { value: "jazz", label: "Jazz" },
//     { value: "orchestra", label: "Orchestra" },
// ];

const jabatan = [
    "Kepala Bagian",
    "Plt. Kepala Sekretariat",
    "Kepala Seksi",
    "Kepala Sekretariat",
    "Kepala Cabang",
    "Kepala Rayon",
    "Kepala Unit",
    "Plt. Kepala Bagian",
    "Plt. Kepala Unit",
    "Plt. Kepala Cabang",
    "Staf Ahli",
    "Manajer",
    "Koordinator Kepala Bagian",
    "Plt. Kepala Rayon",
    "Asisten Kepala Unit",
    "Ketua Tim",
    "Koordinator Biologi",
    "Koordinator Fisika",
    "Koordinator Matematika",
    "Wakil Kepala Seksi",
    "Kepala Pelayanan",
    "Plt. Kepala Pelayanan",
    "Kepala Wilayah",
];

const LevelJabatan = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [options, setOptions] = useState([]);
    const [disBut, setDisBut] = useState(true);
    const [value, setValue] = useState("");
    const [penempatan, setPenempatan] = useState("");
    console.log(value, "ini value");

    console.log(options, "ini options");
    console.log(disBut, "ini disbut");
    console.log(location, "ini location");

    // const [isClearable, setIsClearable] = useState(true);
    // const [isSearchable, setIsSearchable] = useState(true);
    // const [isDisabled, setIsDisabled] = useState(false);
    // const [isLoading, setIsLoading] = useState(false);
    // const [isRtl, setIsRtl] = useState(false);
    const handleChange = (e) => {
        console.log(e.value, "ini change");
        setValue(e.value);
        setDisBut(false);
    };

    const handlePenempatan = (e) => {
        setPenempatan(e.value);
    };

    useEffect(() => {
        const ConvertOption = () => {
            const result = [];
            jabatan.forEach((element) => {
                result.push({
                    value: element,
                    label: element,
                });
            });
            setOptions(result);
        };
        ConvertOption();
    }, []);

    return (
        <>
            <NavbarAdmin />
            <div className="containerlevel">
                <div className="row">
                    <div className="col-sm-6">
                        {" "}
                        <img
                            className="bg selectlevelhpscreen "
                            src={leveljabatan}
                            alt="level jabatan"
                        />
                    </div>
                    <div className="col-sm-6 col-12">
                        <div className="selectlevel">
                            <p className="mb-2">
                                Proyeksi Penempatan/Level
                            </p>
                            <Select
                                className="basic-single"
                                classNamePrefix="select"
                                // defaultValue={colourOptions[0]}
                                // isDisabled={isDisabled}
                                // isLoading={isLoading}
                                // isClearable={true}
                                // isRtl={true}
                                isSearchable={true}
                                options={options}
                                placeholder="Pilih Jabatan"
                                onChange={handleChange}
                            />
                            <Select
                                className="basic-single mt-3"
                                classNamePrefix="select"
                                // defaultValue={colourOptions[0]}
                                // isDisabled={isDisabled}
                                // isLoading={isLoading}
                                // isClearable={true}
                                // isRtl={true}
                                // isSearchable={true}
                                options={[
                                    {
                                        value: "Pusat",
                                        label: "Pusat",
                                    },
                                    {
                                        value: "Non Pusat",
                                        label: "Non Pusat",
                                    },
                                ]}
                                placeholder="Pilih Penempatan"
                                onChange={handlePenempatan}
                            />
                        </div>
                        <div className="mt-3 text-center d-grid">
                            <button
                                className="btn btn-danger fw-bold"
                                type="button"
                                disabled={disBut}
                                onClick={() => {
                                    if (penempatan === "Pusat") {
                                        if (
                                            location.state.karyawanId
                                        ) {
                                            navigate("/form", {
                                                state: {
                                                    jabatan: value,
                                                    penempatan:
                                                        penempatan,
                                                    karyawanId:
                                                        location.state
                                                            .karyawanId,
                                                },
                                            });
                                        } else {
                                            navigate("/form", {
                                                state: {
                                                    jabatan: value,
                                                    penempatan:
                                                        penempatan,
                                                },
                                            });
                                        }
                                    } else if (
                                        penempatan === "Non Pusat"
                                    ) {
                                        if (
                                            location.state.karyawanId
                                        ) {
                                            navigate("/form_unit", {
                                                state: {
                                                    jabatan: value,
                                                    penempatan:
                                                        penempatan,
                                                    karyawanId:
                                                        location.state
                                                            .karyawanId,
                                                },
                                            });
                                        } else {
                                            navigate("/form_unit", {
                                                state: {
                                                    jabatan: value,
                                                    penempatan:
                                                        penempatan,
                                                },
                                            });
                                        }
                                    }
                                }}
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="selectlevelhpscreen">
                <h1 className="mb-3">
                    Proyeksi Penempatan/Level Jabatan
                </h1>
                <Select
                    className="basic-single"
                    classNamePrefix=""
                    // defaultValue={colourOptions[0]}
                    // isDisabled={isDisabled}
                    // isLoading={isLoading}
                    // isClearable={true}
                    isSearchable={true}
                    name="color"
                    // value={value}
                    options={options}
                    placeholder="Pilih Jabatan"
                    onChange={handleChange}
                />
                <div className="d-grid gap-2">
                    <button
                        className="btn btn-danger fw-bold"
                        type="button"
                        disabled={disBut}
                    >
                        Submit
                    </button>
                </div>
            </div> */}
        </>
    );
};

export default LevelJabatan;
