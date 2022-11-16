import React from 'react';
import LogoGo from '../Assets/logoGo.svg';
import './NavbarAdmin.css';
import LogoGoMockup from '../Assets/logogomockup.png';
import { NavLink } from 'react-router-dom';

const NavbarAdmin = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger sticky-top">
      <div className="container-fluid">
        <NavLink to="/list_peserta">
          <div className="logonavbar-admin">
            <img src={LogoGoMockup} alt="Ganesha Operation" />
          </div>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav ms-auto">
            <NavLink
              className="nav-link"
              aria-current="page"
              to="/list_peserta"
            >
              List Peserta
            </NavLink>
            <NavLink className="nav-link" to="/list_karyawan">
              List Karyawan
            </NavLink>
            <a className="nav-link" href="#">
              Logout
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarAdmin;
