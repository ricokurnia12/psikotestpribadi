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
import { MdSend, MdOutlineDisabledByDefault } from "react-icons/md";
import { FcExpired } from "react-icons/fc";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { RiRestTimeFill } from "react-icons/ri";
import { FaTrashAlt, FaFileAlt, FaFile } from "react-icons/fa";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

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

const options = {
    search: true,
    download: true,
    print: true,
    viewColumns: true,
    filter: true,
    filterType: "dropdown",
    responsive: "standard",
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
    const [modalIsOpen, setIsOpen] = useState(false);
    const [peserta, setPeserta] = useState([]);
    const [statusEmail, setStatusEmail] = useState([]);
    const [delData, setDelData] = useState([]);
    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    const columns = [
        "No",
        "Nik",
        {
            name: "NamaLengkap",
            label: "Nama Lengkap",
        },
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
        "Penempatan",
        {
            name: "ProyeksiPenempatan",
            label: "Proyeksi Penempatan",
        },
        {
            name: "JumlahCakupanBagian",
            label: "Jumlah Cakupan Bagian",
        },
        "Bidang",
        {
            name: "JumlahCakupanUnit",
            label: "Jumlah Cakupan Unit",
        },
        "Cabang",
        {
            name: "JenisTes",
            label: "Jenis Tes",
        },
        {
            name: "PelaksanaanTes",
            label: "Pelaksanaan Tes",
        },
        {
            name: "Aksi",
            options: {
                customBodyRender: (value, tableMeta, updateValue) => {
                    return (
                        <div>
                            {value.status === 0 ? (
                                <div
                                    className="badge bg-danger"
                                    style={{
                                        cursor: "pointer",
                                        fontSize: "20px",
                                    }}
                                    onClick={() => {
                                        sendEmail(value._id);
                                    }}
                                >
                                    <MdSend />
                                </div>
                            ) : value.status === 1 ? (
                                <div
                                    className="badge bg-danger"
                                    style={{
                                        cursor: "pointer",
                                        fontSize: "20px",
                                    }}
                                    onClick={() => {
                                        handleNavigate(
                                            value._id,
                                            value.JenisTes
                                        );
                                    }}
                                >
                                    <FaFileAlt />
                                </div>
                            ) : (
                                <div
                                    className="badge bg-danger"
                                    style={{
                                        cursor: "pointer",
                                        fontSize: "20px",
                                    }}
                                    onClick={() => {
                                        handleData();
                                    }}
                                >
                                    <FaFile />
                                </div>
                            )}
                        </div>
                    );
                },
            },
        },
        {
            name: "Delete",
            options: {
                customBodyRender: (value, tableMeta, updateValue) => {
                    return (
                        <div
                            className="badge bg-danger"
                            style={{
                                cursor: "pointer",
                                fontSize: "20px",
                            }}
                            onClick={() => {
                                delPeserta(value);
                            }}
                        >
                            <div>
                                <FaTrashAlt />
                            </div>
                        </div>
                    );
                },
            },
        },
    ];

    console.log(peserta, "ini peserta");
    useEffect(() => {
        const getPeserta = async () => {
            try {
                let res = await axios.get(
                    `http://localhost:5000/peserta`
                );
                ConvertDataPeserta(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        getPeserta();
    }, [statusEmail, delData]);

    const sendEmail = async (id) => {
        try {
            let res = await axios.post(
                `http://localhost:5000/sendEmail`,
                { idPeserta: id }
            );
            console.log(res.data, "ini data email");
            setStatusEmail(res.data);
            if (res.data) {
                const MySwal = withReactContent(Swal);
                MySwal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Email Sudah Terkirim",
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        } catch (error) {
            console.log(error);
            const MySwal = withReactContent(Swal);
            MySwal.fire({
                icon: "error",
                title: "Oops...",
                text: "Gagal mengirim email!",
            });
        }
    };

    const delPeserta = (id) => {
        const MySwal = withReactContent(Swal);
        const swalWithBootstrapButtons = MySwal.mixin({
            customClass: {
                confirmButton: "btn btn-success",
                cancelButton: "btn btn-danger me-3",
            },
            buttonsStyling: false,
        });

        swalWithBootstrapButtons
            .fire({
                title: "Anda yakin?",
                text: "Data yang terhapus tidak dapat di kembalikan!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Ya, Hapus!",
                cancelButtonText: "Tidak, batal!",
                reverseButtons: true,
            })
            .then((result) => {
                if (result.isConfirmed) {
                    axios
                        .delete(`http://localhost:5000/peserta/${id}`)
                        .then((res) => {
                            setDelData(res.data);
                            swalWithBootstrapButtons.fire(
                                "Terhapus!",
                                "Data berhasil di hapus.",
                                "success"
                            );
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                } else if (
                    /* Read more about handling dismissals below */
                    result.dismiss === Swal.DismissReason.cancel
                ) {
                    swalWithBootstrapButtons.fire(
                        "Di Batalkan",
                        "Data kamu aman",
                        "error"
                    );
                }
            });
    };

    const handleData = async () => {
        try {
            let res = await axios.get(
                `http://localhost:5000/peserta`
            );
            ConvertDataPeserta(res.data);
            console.log("data");
            const MySwal = withReactContent(Swal);
            const swalWithBootstrapButtons = MySwal.mixin({
                customClass: {
                    confirmButton: "btn btn-danger",
                },
                buttonsStyling: false,
            });

            swalWithBootstrapButtons.fire("Hasil tes belum ada");
        } catch (error) {
            console.log(error);
        }
    };

    const handleNavigate = (id, jenisTes) => {
        if (jenisTes === "MBTI") {
            navigate("/hasil_mbti");
        } else if (jenisTes === "DISC") {
            navigate(`/hasil_disc`);
        }
    };

    const ConvertDataPeserta = (data) => {
        const result = [];
        let obj = {};
        data.forEach((element, index) => {
            // element.
            if (element.JumlahCakupanBagian) {
                obj.JumlahCakupanBagian = element.JumlahCakupanBagian;
            }
            if (element.Bidang) {
                obj.Bidang = element.Bidang;
            }
            if (element.JumlahCakupanUnit) {
                obj.JumlahCakupanUnit = element.JumlahCakupanUnit;
            }
            if (element.Cabang) {
                obj.Cabang = element.Cabang;
            }
            obj.No = index + 1;
            obj.Nik = element.NIK;
            obj.PhoneNumber = element.PhoneNumber;
            obj.NamaLengkap = element.NamaLengkap;
            obj.TempatLahir = element.TempatLahir;
            obj.TanggalLahir = new Date(
                element.TanggalLahir
            ).toLocaleDateString();
            obj.Email = element.Email;
            obj.Penempatan = element.Penempatan;
            obj.ProyeksiPenempatan = element.ProyeksiPenempatan;
            obj.JenisTes = element.JenisTes;
            obj.PelaksanaanTes = new Date(
                element.PelaksanaanTes
            ).toLocaleDateString();

            obj.Aksi = {
                status: element.statusEmail,
                _id: element._id,
                JenisTes: element.JenisTes,
            };
            obj.Delete = element._id;
            result.push(obj);
            obj = {};
        });
        console.log(result, "ini result");
        setPeserta(result);
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
                        data={peserta}
                        columns={columns}
                        options={options}
                    />
                </ThemeProvider>
            </CacheProvider>
        </div>
    );
};

export default ListPeserta;
