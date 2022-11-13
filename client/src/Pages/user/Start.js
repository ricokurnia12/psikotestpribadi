import React, { useState, useEffect } from "react";
import People from "../../Assets/Peoples.png";
import "./Start.css";
import { Navbar } from "../../Components/Navbar";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import decode from "jwt-decode";
import axios from "axios";
import url from "../../baseUrl";

const Start = () => {
    const navigate = useNavigate();
    const { token } = useParams();

    const [nama, setNama] = useState("");
    const [jenisTes, setJenisTes] = useState("");
    const [expired, setExpired] = useState(false);
    console.log(expired, "ini expired");
    console.log(nama, "ini nama");

    useEffect(() => {
        const getPesertaById = async () => {
            try {
                const peserta = await axios.get(
                    `${url}/getPesertaById/${decode(token).pesertaId}`
                );
                console.log(peserta, "ini peserta");
                setNama(peserta.data.NamaLengkap);
                setJenisTes(peserta.data.JenisTes);
            } catch (error) {
                console.log(error, "ini error");
                setExpired(true);
            }
        };
        getPesertaById();
    }, [token]);

    const handleClick = () => {
        if (jenisTes === "MBTI") {
            navigate(`/tes_mbti/${token}`);
        } else if (jenisTes === "DISC") {
            navigate(`/tes_disc/${token}`);
        }
    };

    if (expired) {
        return <Navigate to="/expired_link" />;
    } else {
        return (
            <div>
                <Navbar />
                <div className="containerstartpage">
                    <div className="start">
                        <p>
                            Halo {nama},<br></br>Selamat Datang!
                        </p>
                        <h1>TES {jenisTes}</h1>
                        <button
                            className="buttonmulai"
                            onClick={handleClick}
                        >
                            Mulai Tes
                        </button>
                    </div>
                    <div className="bgstartpage">
                        <img
                            src={People}
                            className="gambarstartpage"
                            alt="people"
                        />
                    </div>
                </div>
            </div>
        );
    }
};

export default Start;
