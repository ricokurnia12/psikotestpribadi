import { useState } from "react";
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
    const [data, setData] = useState({
        labels: ["D", "I", "S", "C"],
        datasets: [
            {
                label: "First Dataset",
                data: [
                    10, 20, 30, 42, 51, 82, 31, 59, 61, 73, 91, 58,
                ],
                backgroundColor: "yellow",
                borderColor: "green",
                tension: 0.4,
                fill: true,
                pointStyle: "rect",
                pointBorderColor: "blue",
                pointBackgroundColor: "#fff",
                showLine: true,
            },
        ],
    });
    return (
        <>
        <div className="header-hasil">
        <p>Pesonality System Graph Page</p>
      </div>
      <div id="data-hasil-test">
        <ul>
          <li>
            <b>Nama</b>: Rico Kurnia
          </li>
        </ul>
        <ul>
          <li>
            <b>Umur</b>: 23
          </li>
        </ul>
        <ul>
          <li>
            <b>Jenis Kelamin</b>: Laki-laki
          </li>
        </ul>
        <ul>
          <li>
            <b>Tanggal Tes</b>: 14 November 2022
          </li>
        </ul>
        <ul className="penempatan-jabatan">
          <li>
            <b>Proyeksi Penempatan Jabatan</b>:
          </li>
          <li>Pusat</li>
        </ul>
      </div>
        <div
            className="App"
            style={{ width: "800px", height: "800px" }}
        >
            <Line data={data}>Hello</Line>
        </div>
        </>
    );
}

export default HasilDisc;
