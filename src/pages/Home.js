import React from "react";
import { Link } from "react-router-dom";
import IntroComponent from "../components/IntroComponent";

const Home = () => {
  return (
    <div>
      <IntroComponent header={"Welcome to AMS GPs"} />
      <div className="homebtn">
        <Link to="/doctorschedule"> Who is on Duty</Link>
      </div>
      <div className="homebtn">
        <Link to="/patientsignup"> I am a new patient</Link>
      </div>
    </div>
  );
};

export default Home;
