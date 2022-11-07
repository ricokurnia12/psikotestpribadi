import React from "react";
import People from "../../Assets/Peoples.png";
import "./Start.css";

const Start = () => {
    return (
        <div className="containerstartpage">
            <div className="start">
                <p>
                    Halo Kiki,
                    <br></br>Selamat Datang!
                </p>
                <h1>TES MBTI</h1>
                <button className="buttonmulai">Mulai Tes</button>
            </div>
            <div className="bgstartpage">
                <img src={People} className="gambarstartpage" />
            </div>
        </div>
    );
};

export default Start;