import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../Pages/Home";
import TesDisc from "../Pages/user/TesDisc";
import ExpiredLink from "../Pages/ExpiredLink";
import FinishSubmitTest from "../Pages/FinishSubmitTest";
import Start from "../Pages/user/Start";
import LevelJabatan from "../Pages/LevelJabatan";
import TesMbti from "../Pages/user/TesMbti";
import ListPeserta from "../Pages/admin/ListPeserta";
import ListKaryawan from "../Pages/admin/ListKaryawan";
import Sidebar from "../Components/Sidebar";
import AdminRoute from "./adminRoute";

const Router = () => {
    return (
        <Routes>
            <Route path={`/`} element={<Home />} />
            <Route path={`/tes_disc/:token`} element={<TesDisc />} />
            <Route path={`/expired_link`} element={<ExpiredLink />} />
            <Route
                path={`/finish_submit_test`}
                element={<FinishSubmitTest />}
            />
            <Route path={"/start/:token"} element={<Start />} />
            <Route
                path={"/level_jabatan"}
                element={<LevelJabatan />}
            />
            <Route path={`/tes_mbti/:token`} element={<TesMbti />} />
            <Route path="/*" element={<AdminRoute />} />
        </Routes>
    );
};

export default Router;
