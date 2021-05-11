import axios from "axios";
import React, { useEffect, useState } from "react";
import IntroComponent from "../components/IntroComponent";

const DoctorSchedule = () => {
  const [detailData, setDetailData] = useState({ status: "idle" });
  useEffect(() => {
    const fetchData = async () => {
      try {
        setDetailData({ status: "searching" });
        const res = await axios.get(
          `http://localhost:4000/db/doctors` ||
            `https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/doctors`
        );
        console.log("res", res.data);
        setDetailData({ status: "done", data: res.data });
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="DoctorSchedule">
      <IntroComponent header={"Who is on duty"} />
      <table>
        <tbody>
          <tr>
            <th>Doctor</th>
            <th>Avalibility</th>
          </tr>
          {detailData.status === "done" &&
            detailData.data.map((doc) => {
              return (
                <tr key={doc.id}>
                  <th>{doc.doctor}</th>
                  <th>{doc.OnDuty ? "On Duty" : "Off Duty"}</th>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default DoctorSchedule;
