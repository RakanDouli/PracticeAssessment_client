import React from "react";
import { NavLink } from "react-router-dom";

const PatientCard = ({ DOB, id, fullName }) => {
  return (
    <div className="card">
      <ul>
        <h1>Name: {fullName}</h1>
        <li>ID:{id}</li>
        <li>Date of Birth:{DOB}</li>
      </ul>
      <div className="btnalike">
        <NavLink to={`/PatientDatabase/${id}`}>Show Details</NavLink>
      </div>
    </div>
  );
};

export default PatientCard;
