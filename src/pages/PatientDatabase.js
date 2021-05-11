import axios from "axios";
import React, { useEffect, useState } from "react";
import PatientCard from "../components/PatientCard";

const PatientDatabase = () => {
  const [dataBase, setDataBase] = useState({ status: "idle" });
  const [patientFilter, setPatientFilter] = useState("all");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setDataBase({ status: "searching" });

        const response = await axios.get(
          "http://localhost:4000/db" ||
            "https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/db"
        );
        // console.log(response);
        setDataBase({ status: "done", data: response.data });
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
  }, []);
  const changeSorting = (e) => {
    setPatientFilter(e.target.value);
    console.log(e.target.value);
  };
  console.log(dataBase);
  const filterdPatients = dataBase.data?.patients?.filter(
    (patient) => patient.doctorId === parseInt(patientFilter)
  );
  console.log(filterdPatients);
  return (
    <div className="PatientDatabase-page">
      <h1>Patient Database</h1>
      <div className="Select">
        <label htmlFor="">Select Doctor </label>
        <select onChange={changeSorting} value={patientFilter}>
          <option value="all">All</option>
          {dataBase.status === "done" && "Loading"}
          {dataBase.status === "done" &&
            dataBase.data.doctors.map((doctor) => {
              return (
                <option key={doctor.doctor} value={doctor.id}>
                  {doctor.doctor}
                </option>
              );
            })}
        </select>

        <section className="card-section">
          {patientFilter === "all"
            ? dataBase.data?.patients?.map((patient) => {
                return (
                  <PatientCard
                    DOB={patient.dateOfBirth}
                    key={patient.id}
                    id={patient.id}
                    fullName={`${patient.firstName} ${patient.lastName}`}
                  />
                );
              })
            : ""}
          {dataBase.status === "done" &&
            filterdPatients?.map((patient) => {
              return (
                <PatientCard
                  DOB={patient.dateOfBirth}
                  key={patient.id}
                  id={patient.id}
                  fullName={`${patient.firstName} ${patient.lastName}`}
                />
              );
            })}
        </section>
      </div>
    </div>
  );
};

export default PatientDatabase;
