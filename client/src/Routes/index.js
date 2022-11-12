import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../Pages/Home";
import TesDisc from "../Pages/user/TesDisc";
import ExpiredLink from "../Pages/ExpiredLink";
import FinishSubmitTest from "../Pages/FinishSubmitTest";
import TesMbti from "../Pages/user/TesMbti";

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
            <Route path={`/tes_mbti/:token`} element={<TesMbti />} />
        </Routes>
    );
};

export default Router;
