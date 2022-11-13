import React from "react";
import "./FinishSubmitTest.css";
import Peoplestar from "../Assets/Peoples.png";
import { Navbar } from "../Components/Navbar";

const FinishSubmitTest = () => {
    return (
        <div>
            <Navbar />
            <div className="position-absolute top-50 start-50 translate-middle ">
                <div className="bgg">
                    <img
                        className="peoplesubmit"
                        src={Peoplestar}
                        alt="people"
                    />
                </div>
            </div>

            <div className="position-absolute top-50 start-50 translate-middle">
                <div className="Jawabantersimpan">
                    <h2>Jawaban Tersimpan</h2>

                    <i
                        className="bi bi-check-circle-fill"
                        style={{ fontSize: "700%" }}
                    />
                </div>
            </div>
        </div>
    );
};

export default FinishSubmitTest;
