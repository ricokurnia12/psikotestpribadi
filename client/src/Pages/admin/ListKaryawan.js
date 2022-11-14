import React, { useState, useEffect } from "react";
import NavbarAdmin from "../../Components/NavbarAdmin";

import MUIDataTable from "mui-datatables";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import axios from "axios";
// import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
axios.defaults.withCredentials = true;

const muiCache = createCache({
    key: "mui-datatables",
    prepend: true,
});

const ListKaryawan = () => {
    const navigate = useNavigate();
    const [karyawan, setKaryawan] = useState([]);

    console.log(karyawan, "ini karyawan");

    const columns = [
        "No",
        "Nik",
        "Nama",
        {
            name: "TempatLahir",
            label: "Tempat Lahir",
        },
        {
            name: "TanggalLahir",
            label: "Tanggal Lahir",
        },
        "Email",
        {
            name: "PhoneNumber",
            label: "No Handphone",
        },
        {
            name: "Aksi",
            options: {
                customBodyRender: (value, tableMeta, updateValue) => {
                    return (
                        <div>
                            <span
                                className="badge bg-danger m-4"
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                    navigate("/level_jabatan", {
                                        state: {
                                            karyawanId: value,
                                        },
                                    });
                                }}
                            >
                                Buat Peserta
                            </span>
                        </div>
                    );
                },
            },
        },
    ];

    const options = {
        search: true,
        download: true,
        print: true,
        viewColumns: true,
        filter: true,
        filterType: "dropdown",
        responsive: "standard",
        tableBodyHeight: "40%",
        pagination: false,
        rowHover: true,
        tableBodyMaxHeight: "500px",
        // onTableChange: (action, state) => {
        //   console.log(action);
        //   console.dir(state);
        // },
        selectableRows: "none",
    };

    useEffect(() => {
        const getAllKaryawan = async () => {
            try {
                let res = await axios.get(
                    "http://localhost:5000/getAllKaryawan"
                );
                ConvertData(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        getAllKaryawan();
    }, []);

    const ConvertData = (data) => {
        const result = [];
        data.forEach((element, index) => {
            result.push({
                No: index + 1,
                Nama: element.NamaLengkap,
                PhoneNumber: element.PhoneNumber,
                TempatLahir: element.TempatLahir,
                TanggalLahir: new Date(
                    element.TanggalLahir
                ).toLocaleDateString(),
                Email: element.Email,
                Nik: element.NIK,
                Aksi: element._id,
            });
        });
        setKaryawan(result);
    };
    return (
        <div>
            <NavbarAdmin />
            <CacheProvider value={muiCache}>
                <ThemeProvider theme={createTheme()}>
                    <MUIDataTable
                        data={karyawan}
                        columns={columns}
                        options={options}
                    />
                </ThemeProvider>
            </CacheProvider>
        </div>
    );
};

export default ListKaryawan;
