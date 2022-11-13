import React from "react";
import { Routes, Route } from "react-router-dom";
import ListKaryawan from "../Pages/admin/ListKaryawan";
import ListPeserta from "../Pages/admin/ListPeserta";
import Sidebar from "../Components/Sidebar";

const AdminRoute = () => {
    return (
        <Sidebar>
            <Routes>
                <Route
                    path={`/list_karyawan`}
                    element={<ListKaryawan />}
                />
                <Route
                    path={`/list_peserta`}
                    element={<ListPeserta />}
                />
            </Routes>
        </Sidebar>
    );
};

export default AdminRoute;
