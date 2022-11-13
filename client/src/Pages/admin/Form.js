import React from 'react';
import './Form.css';

const Form = () => {
  return (
    // < div className='position-absolute'>
    <div id="formkaryawancontainer">
      <div className="container">
        <form className="row g-3">
          <div className="col-md-6">
            <label className="form-label">NIK</label>
            <input
              type="number"
              className="form-control"
              id="inputNIK"
              placeholder="Masukan NIK Peserta"
              style={{ marginBottom: 10 }}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">No. Handphone</label>
            <input
              type="string"
              className="form-control"
              id=""
              placeholder="Masukan No.HP Peserta"
              style={{ marginBottom: 10 }}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Nama Lengkap</label>
            <input
              type="email"
              className="form-control"
              id=""
              placeholder="Masukan Nama Lengkap Peserta"
              style={{ marginBottom: 10 }}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">TTL</label>
            <input
              type="date"
              className="form-control"
              id=""
              style={{ marginBottom: 10 }}
            />
          </div>
          <div className="col-12">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id=""
              placeholder="masukan email Peserta"
            />
          </div>
          <div className="row">
            <div className="col-md-6">
              <h3>Proyeksi Penempatan</h3>
              <label htmlFor="inputCity" className="form-label">
                Jumlah Cakupan Bagian
              </label>
              <input
                style={{
                  height: '39px',
                  marginBottom: '0px',
                }}
                type="number"
                className="form-control"
                id="inputCity"
              />

              <label htmlFor="inputState" className="form-label mt-4">
                Bidang/Bagian
              </label>
              <select id="inputState" className="form-select">
                <option selected>Choose...</option>
                <option>Media Sosial</option>
              </select>
            </div>

            <div className="col-md-6">
              <h3>Tes Psikologi</h3>
              <label htmlFor="inputState" className="form-label">
                Jenis Tes
              </label>
              <select className="form-select">
                <option>...</option>
              </select>

              <label className="form-label mt-4">
                Pelaksanaan Tes
              </label>
              <input
                type="date"
                className="form-control"
                style={{ height: 38 }}
              />
            </div>
          </div>
          <div className="btn">
            <button type="submit" className="btn1 ">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
