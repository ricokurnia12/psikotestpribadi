import React from 'react';
import Gowhite from '../Assets/logoGo.png';
import './LoginAdmin.css';

const Loginadmin = () => {
  return (
    <div className="containerloginadmin">
      <div class="d-flex position-absolute top-50 start-50 translate-middle">
        <form className="formlogin">
          <div className="mb-3">
            <div className="logologin">
              <img src={Gowhite} />
            </div>
            <div className="loginadmin">
              <h3>Masuk Admin</h3>
            </div>
            <div className="inputlogin">
              <input
                type="email"
                className="form-control form-control-lg"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="username"
              />

              <div className="mb-3">
                <input
                  type="password"
                  className="form-control form-control-lg"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
            </div>
          </div>
          <div className="btnlogin">
            <button type="submit" className="btn btn-primary">
              Masuk
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Loginadmin;
