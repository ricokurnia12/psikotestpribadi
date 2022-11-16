import React from "react";
import "./HasilDisc.css";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    LineElement,
    Legend,
    CategoryScale,
    LinearScale,
    PointElement,
    Filler,
} from "chart.js";
import NavbarAdmin from "../../Components/NavbarAdmin";
ChartJS.register(
    Title,
    Tooltip,
    LineElement,
    Legend,
    CategoryScale,
    LinearScale,
    PointElement,
    Filler
);

function HasilDisc() {
    const graph1 = {
        labels: ["D", "I", "S", "C"],
        datasets: [
            {
                label: "First Dataset",
                data: [-8, -7, 5, 3, 8],
                backgroundColor: "#4472C4",
                borderColor: "#4472C4",
                tension: 0.4,
                fill: false,
                pointStyle: "rect",
                pointBorderColor: "blue",
                pointBackgroundColor: "white ",
                showLine: true,
            },
        ],
    };

    const graph2 = {
        labels: ["D", "I", "S", "C"],
        datasets: [
            {
                label: "First Dataset",
                data: [1, -7, 5, 3, 8],
                backgroundColor: "#4472C4",
                borderColor: "#4472C4",
                tension: 0.4,
                fill: false,
                pointStyle: "rect",
                pointBorderColor: "blue",
                pointBackgroundColor: "#fff",
                showLine: true,
            },
        ],
    };
    const graph3 = {
        labels: ["D", "I", "S", "C"],
        datasets: [
            {
                label: "First Dataset",
                data: [1, -8, 4, 8],
                backgroundColor: "#4472C4",
                borderColor: "#4472C4",
                tension: 0.4,
                fill: false,
                pointStyle: "rect",
                pointBorderColor: "blue",
                pointBackgroundColor: "#fff",
                showLine: true,
            },
        ],
    };

    const optionsgraph1 = {
        responsive: true,
        mainAspectRatio: false,
        aspectRatio: 1,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: "GRAPH 1 MOST Mask Public Self",
            },
        },
    };
    const optionsgraph2 = {
        responsive: true,
        mainAspectRatio: false,
        aspectRatio: 1,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: "GRAPH 2 LEAST Core Private Self",
            },
        },
    };
    const optionsgraph3 = {
        responsive: true,
        mainAspectRatio: false,
        aspectRatio: 1,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: "GRAPH 3 CHANGE Mirror Perceive Self ",
            },
        },
    };

    return (
        <>
            <NavbarAdmin />
            <div className="container-hasildisc">
                {/* ---top section--- */}
                <div className="header-hasil">
                    <h1>Pesonality System Graph Page</h1>
                </div>
                <div id="data-hasil-test">
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
                {/* ---end of top section--- */}
                {/* ---Gambaran karakter--- */}
                <div className="parent-gambaran-karakter">
                    <div className="gambaran-karakter">
                        <h3>Gambaran Karakter</h3>
                    </div>
                    <div className="most-karakter">
                        <b>Most</b>
                        <br></br>
                        <b>Mask Public Self </b>
                        <br></br>
                        <b>Kepribadian di muka Umum</b>
                        <br></br>
                        <p>
                            Gambaran bagaimana orang lain melihat diri
                            kita. <br></br>Persepsi tentang kita
                            dilihat dari sisi luar.
                        </p>
                    </div>
                    <div className="assesor1">
                        <h5>Assesor</h5>
                        <br></br>
                        <ul>
                            <li>
                                <p>
                                    Analitis Lorem ipsum dolor sit
                                    amet.
                                </p>
                            </li>
                            <li>
                                <p>Analitis</p>
                            </li>
                            <li>
                                <p>Analitis</p>
                            </li>
                            <li>
                                <p>Analitis</p>
                            </li>
                            <li>
                                <p>Analitis</p>
                            </li>
                            <li>
                                <p>Analitis</p>
                            </li>
                            <li>
                                <p>Analitis</p>
                            </li>
                            <li>
                                <p>Analitis</p>
                            </li>
                            <li>
                                <p>Analitis</p>
                            </li>
                            <li>
                                <p>Analitis</p>
                            </li>
                            <li>
                                <p>Analitis</p>
                            </li>
                        </ul>
                    </div>
                    <div className="least-karakter">
                        <b>Least</b>
                        <br></br>
                        <b>Core Private Self (Dalam) </b>
                        <br></br>
                        <b>Kepribadian Saat Mendapat Tekanan</b>
                        <br></br>
                        <p>
                            Gambaran utuh tentang diri inti kita
                            Sesungguhnya.
                        </p>
                    </div>
                    <div className="assesor2">
                        <h5>Assesor</h5>
                        <br></br>
                        <ul>
                            <li>
                                <p>Analitis</p>
                            </li>
                            <li>
                                <p>Analitis</p>
                            </li>
                            <li>
                                <p>Analitis</p>
                            </li>
                            <li>
                                <p>Analitis</p>
                            </li>
                            <li>
                                <p>Analitis</p>
                            </li>
                            <li>
                                <p>Analitis</p>
                            </li>
                            <li>
                                <p>Analitis</p>
                            </li>
                            <li>
                                <p>Analitis</p>
                            </li>
                            <li>
                                <p>Analitis</p>
                            </li>
                            <li>
                                <p>Analitis</p>
                            </li>
                            <li>
                                <p>Analitis</p>
                            </li>
                        </ul>
                    </div>
                    <div className="change-karakter">
                        <b>Change</b>
                        <br></br>
                        <b>Mirror Perceived Self </b>
                        <br></br>
                        <b>Kepribadian Asli Yang tersembunyi</b>
                        <br></br>
                        <p>
                            Gambaran bagaimana kita melihat diri kita
                            sendiri.
                        </p>
                    </div>

                    <div className="assesor3">
                        <h5>Assesor</h5>
                        <br></br>
                        <ul>
                            <li>
                                <p>Analitis</p>
                            </li>
                            <li>
                                <p>Analitis</p>
                            </li>
                            <li>
                                <p>Analitis</p>
                            </li>
                            <li>
                                <p>Analitis</p>
                            </li>
                            <li>
                                <p>Analitis</p>
                            </li>
                            <li>
                                <p>Analitis</p>
                            </li>
                            <li>
                                <p>Analitis</p>
                            </li>
                            <li>
                                <p>Analitis</p>
                            </li>
                            <li>
                                <p>Analitis</p>
                            </li>
                            <li>
                                <p>Analitis</p>
                            </li>
                            <li>
                                <p>Analitis</p>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* ---end of gambaran karakter--- */}
                {/* -----------grafik------------- */}

                <div className="chart-result">
                    <div className="graph-1" style={{ width: "90%" }}>
                        <Line
                            data={graph1}
                            options={optionsgraph1}
                        ></Line>
                    </div>
                    <div clasName="graph-2" style={{ width: "90%" }}>
                        <Line
                            data={graph2}
                            options={optionsgraph2}
                        ></Line>
                    </div>
                    <div className="graph-3" style={{ width: "90%" }}>
                        <Line
                            data={graph3}
                            options={optionsgraph3}
                        ></Line>
                    </div>
                </div>
                {/* -----------end of grafik------------- */}
                {/* <--------------Deskripsi kepribadian-----------> */}
                <div className="deskripsi-kepribadian">
                    <h2>Deskripsi kepribadian</h2>

                    <p>
                        Berpikir sistematis dan cenderung mengikuti
                        prosedur dalam kehidupan pribadi dan
                        pekerjaannya. Teraturt dan memiliki
                        perencanaan yang baik, ia teliti dan fokus
                        pada detil.  Bertindak dengan penuh
                        kebijaksanaan, diplomatis dan jarang menentang
                        rekan kerjanya dengan sengaja.  Ia sangat
                        berhati-hati, sungguh-sungguh mengharapkan
                        akurasi dan standard tinggi dalam
                        pekerjaannya. Ia cenderung terjebak dalam hal
                        detil, khususnya jika harus memutuskan. 
                        Menginginkan adanya petunjuk standard
                        pelaksanaan kerja dan tanpa perubahan
                        mendadak.
                    </p>
                </div>
                {/* <--------------End Deskripsi kepribadian-----------> */}
                {/* <----------saran Pekerjaan-----------------> */}
                <div className="job-match">
                    <h2>Job Match</h2>

                    <p>
                        Berpikir sistematis dan cenderung mengikuti
                        prosedur dalam kehidupan pribadi dan
                        pekerjaannya. Teraturt dan memiliki
                        perencanaan yang baik, ia teliti dan fokus
                        pada detil.  Bertindak dengan penuh
                        kebijaksanaan, diplomatis dan jarang menentang
                        rekan kerjanya dengan sengaja.  Ia sangat
                        berhati-hati, sungguh-sungguh mengharapkan
                        akurasi dan standard tinggi dalam
                        pekerjaannya. Ia cenderung terjebak dalam hal
                        detil, khususnya jika harus memutuskan. 
                        Menginginkan adanya petunjuk standard
                        pelaksanaan kerja dan tanpa perubahan
                        mendadak.
                    </p>
                </div>
                {/* <-------------------------End of saran pekerjaan-------------------> */}
            </div>
        </>
    );
}

export default HasilDisc;
