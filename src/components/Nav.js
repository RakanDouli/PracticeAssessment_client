import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <div>
        <NavLink className="navlink" exact to="/">
          Home
        </NavLink>
      </div>
      <div className="Nav-links">
        <NavLink className="navlink" to="/doctorschedule">
          Doctor Schedule
        </NavLink>
        <NavLink className="navlink" to="/patientsignup">
          Patient Sign-up
        </NavLink>
        <NavLink className="navlink" to="/PatientDatabase">
          Patient Database
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
