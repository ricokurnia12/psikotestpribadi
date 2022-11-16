import React from 'react';
import NavbarAdmin from '../../Components/NavbarAdmin';
import './HasilMbti.css';

const HasilMbti = () => {
  return (
    <>
      <NavbarAdmin />
      <div className="container-mbti">
        <div id="data-diri-MBTI">
          <ul>
            <li>
              <b>Nama</b>: Rico Kurnia
            </li>

            <li>
              <b>Umur</b>: 23
            </li>

            <li>
              <b>Jenis Kelamin</b>: Laki-laki
            </li>

            <li>
              <b>Tanggal Tes</b>: 14 November 2022
            </li>

            <li>
              <b>Proyeksi Jabatan</b>: Manager
            </li>

            <li>
              <b>Penempatan Jabatan</b>: Pusat
            </li>
          </ul>
        </div>
        <div className="mbti">
          <h1>I S F J</h1>
          <h5>(SETIA)</h5>
        </div>
        <div className="karakter">
          <h2>Karakter</h2>
          <ul>
            <li>Penuh pertimbangan, hati-hati, teliti dan akurat.</li>
            <li>Serius, tenang, stabil namun sensitif.</li>
            <li>
              Ramah, perhatian pada perasaan & kebutuhan orang lain,
              setia, kooperatif, pendengar yang baik.
            </li>
            <li>
              Punya kemampuan mengorganisasi, detail, teliti, sangat
              bertanggungjawab & bisa diandalkan.
            </li>
            <li>Serius, tenang, stabil & damai. </li>
          </ul>
        </div>

        {/* <-------------end of karakter----------------> */}

        <div class="saran-pekerjaan">
          <div class="pekerjaan">
            <h2>Saran Pekerjaan</h2>
          </div>
          <div class="pekerjaan1">
            <ul>
              <li>Polisi </li>
            </ul>
          </div>
          <div class="pekerjaan2">
            <ul>
              <li>Dokter </li>
            </ul>
          </div>
          <div class="pekerjaan3">
            <ul>
              <li>Progammer </li>
            </ul>
          </div>
          <div class="pekerjaan4">
            <ul>
              <li>Data analyst </li>
            </ul>
          </div>
          <div class="pekerjaan5">
            <ul>
              <li>Manager </li>
            </ul>
          </div>
          <div class="pekerjaan6">
            <ul>
              <li>Seniman </li>
            </ul>
          </div>
          <div class="pekerjaan7">
            <ul>
              <li>Marketing </li>
            </ul>
          </div>
          <div class="pekerjaan8">
            <ul>
              <li>Jaksa </li>
            </ul>
          </div>
          <div class="pekerjaan9">
            <ul>
              <li>Bidang Hospitality </li>
            </ul>
          </div>
          <div class="pekerjaan10">
            <ul>
              <li>Bidang Hospitality </li>
            </ul>
          </div>
          <div class="pekerjaan11">
            <ul>
              <li>Bidang Hospitality </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Biditality </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default HasilMbti;
