import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
const PatientDetails = () => {
  const [detailData, setDetailData] = useState({ status: "idle" });
  //because params is an object we need to get the string inside of it
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setDetailData({ status: "searching" });
        const res = await axios.get(
          `http://localhost:4000/db/patients/${id}`||
          `https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/patients/${id}`
        );
        console.log("res", res.data);
        setDetailData({ status: "done", data: res.data });
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchData();
  }, [id]);
  console.log("detaildata", detailData);
  return (
    <div>
      {detailData.status === "searching" && "Loading..."}
      {detailData.status === "done" && (
        <div className="Detail-Page">
          <h1>{`${detailData.data.firstName} ${detailData.data.lastName}`}</h1>
          <div className="Detail-Card">
            <div>
              <h3>ID:{detailData.data.id}</h3>
              <h3>Date of Birth:{detailData.data.dateOfBirth}</h3>
              <h3>Gender:{detailData.data.gender}</h3>
            </div>
            <ul>
              <h3>Contact detials:</h3>
              <li>Email: {detailData.data.email} </li>
              <li>Phone: {detailData.data.phoneNumber} </li>
            </ul>
            <ul>
              <h3>Perscriptions:</h3>
              <li>Email: {detailData.data.email} </li>
              <li>
                prescriptions:{" "}
                {detailData.data.prescriptions.map((prescription, index) => {
                  return (
                    <div className="prescription" key={index}>
                      {prescription}
                    </div>
                  );
                })}{" "}
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default PatientDetails;
