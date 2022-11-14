import React, { useEffect, useState } from "react";
import NavbarAdmin from "../../Components/NavbarAdmin";
import { useNavigate } from "react-router-dom";

import MUIDataTable from "mui-datatables";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import axios from "axios";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "#DC3545",
    borderRadius: "10px",
    boxShadow: 24,
    p: 4,
};

const muiCache = createCache({
    key: "mui-datatables",
    prepend: true,
});

const columns = [
    "No",
    "Nik",
    "Nama Lengkap",
    "Tempat Lahir",
    "Tanggal Lahir",
    "Email",
    "No Handphone",
    "Penempatan",
    "Proyeksi Penempatan",
    "Jumlah Cakupan Bagian",
    "Bidang",
    "Jumlah Cakupan Unit",
    "Cabang",
    "Jenis Tes",
    "Pelaksanaan Tes",
    "Aksi",
];

const options = {
    search: true,
    download: true,
    print: true,
    viewColumns: true,
    filter: true,
    filterType: "dropdown",
    responsive: "scroll",
    // resizableColumn: false,
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

const ListPeserta = () => {
    const navigate = useNavigate();
    const [modalIsOpen, setIsOpen] = useState();
    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    useEffect(() => {
        const getPeserta = async () => {
            try {
                let res = await axios.get(
                    `http://localhost:5000/pendaftar`
                );
                ConvertDataPeserta(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        getPeserta();
    }, []);

    const ConvertDataPeserta = (data) => {
        const result = [];
        data.forEach((element) => {
            // element.
        });
    };

    return (
        <div>
            <NavbarAdmin />
            <Modal
                open={modalIsOpen}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                    >
                        Status
                    </Typography>
                    <div className="d-grid">
                        <button
                            className="btn btn-warning mb-3 mt-3"
                            type="button"
                            onClick={() => {
                                navigate("/list_karyawan");
                            }}
                        >
                            Karyawan Go
                        </button>
                        <button
                            className="btn btn-warning"
                            type="button"
                            onClick={() => {
                                navigate("/level_jabatan");
                            }}
                        >
                            Non Karyawan Go
                        </button>
                    </div>
                </Box>
            </Modal>
            <div className="text-end m-5">
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={handleOpen}
                >
                    Tambah Peserta
                </button>
            </div>
            <CacheProvider value={muiCache}>
                <ThemeProvider theme={createTheme()}>
                    <MUIDataTable
                        data={[]}
                        columns={columns}
                        options={options}
                    />
                </ThemeProvider>
            </CacheProvider>
        </div>
    );
};

export default ListPeserta;
