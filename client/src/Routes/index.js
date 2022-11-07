import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../Pages/Home";
import TesDisc from "../Pages/user/TesDisc";
import ExpiredLink from "../Pages/ExpiredLink";
import FinishSubmitTest from "../Pages/FinishSubmitTest";
import Start from "../Pages/user/Start";

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
            <Route path={"/start"} element={<Start />} />
        </Routes>
    );
};

export default Router;
