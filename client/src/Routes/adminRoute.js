import React from "react";
import { Routes, Route } from "react-router-dom";
import ListKaryawan from "../Pages/admin/ListKaryawan";
import ListPeserta from "../Pages/admin/ListPeserta";
import HasilMbti from "../Pages/user/HasilMbti";
import HasilDisc from "../Pages/user/HasilDisc";
// import Sidebar from "../Components/Sidebar";

const AdminRoute = () => {
    return (
        <Routes>
            <Route
                path={`/list_karyawan`}
                element={<ListKaryawan />}
            />
            <Route path={`/list_peserta`} element={<ListPeserta />} />
            <Route path={`/hasil_mbti`} element={<HasilMbti />} />
            <Route path={`/hasil_disc`} element={<HasilDisc />} />
        </Routes>
    );
};

export default AdminRoute;
