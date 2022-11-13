import React, { useState } from "react";
import { FaList, FaTimes, FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logoGo from "../Assets/logoGo.svg";
import NavbarAdmin from "./NavbarAdmin";

const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path: "/list_peserta",
            name: "List Peserta",
            icon: <FaList />,
        },
        {
            path: "/list_karyawan",
            name: "List Karyawan",
            icon: <FaList />,
        },
    ];

    let activeStyle = {
        backgroundColor: "white",
        color: "black",
    };

    return (
        <div>
            {/* <NavbarAdmin /> */}
            <div className="flexSidebar">
                <div
                    style={{ width: isOpen ? "250px" : "60px" }}
                    className="sidebar"
                >
                    <div className="top_section">
                        <div className="">
                            {isOpen && <img src={logoGo} />}
                        </div>
                        <div
                            style={{
                                marginLeft: isOpen ? "2rem" : "0px",
                            }}
                            className="bars"
                            onClick={toggle}
                        >
                            {isOpen ? <FaTimes /> : <FaBars />}
                        </div>
                    </div>
                    {menuItem.map((item, index) => (
                        <NavLink
                            to={item.path}
                            key={index}
                            className="link link_sidebar"
                            activeclassname="active_sidebar"
                            style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }
                        >
                            <div className="icon">{item.icon}</div>
                            <div
                                style={{
                                    display: isOpen
                                        ? "block"
                                        : "none",
                                }}
                                className="link_text"
                            >
                                {item.name}
                            </div>
                        </NavLink>
                    ))}
                </div>
                <main>{children}</main>
            </div>
        </div>
    );
};

export default Sidebar;
