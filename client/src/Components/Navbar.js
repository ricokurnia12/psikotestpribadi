import React from "react";
import LogoGo from "../Assets/logoGo.svg";

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-danger sticky-top">
            <div className="container-fluid">
                <img
                    className="ms-5"
                    src={LogoGo}
                    alt="Ganesha Operation"
                />
                <div
                    // className="collapse navbar-collapse"
                    id="navbarNav"
                ></div>
            </div>
        </nav>
    );
};
