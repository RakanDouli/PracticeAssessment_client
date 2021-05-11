import React, { useState } from "react";

const PatientSignup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    gender: "",
    dateOfBirth: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      formData.firstName.length < 1 ||
      formData.lastName.length < 1 ||
      formData.gender.length < 1 ||
      formData.phoneNumber.length < 1 ||
      formData.email.length < 1 ||
      formData.dateOfBirth.length < 1
    ) {
      alert(`The Sign Up form is not fully filled,
      please fill all fields `);
    } else {
      console.log(formData);
    }
  };

  return (
    <div className="PatientSignup">
      <div className="PatientSignup-heading">
        <h1>Patients Sign-Up</h1>
        <p>Please fill in this form to create an account.</p>
      </div>
      <form onSubmit={onSubmit}>
        <div className="field">
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            type="text"
            value={formData.firstName}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
          />
        </div>
        <div className="field">
          <label htmlFor="lastName">last Name</label>
          <input
            value={formData.lastName}
            id="lastName"
            type="text"
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
          />
        </div>
        <div className="field">
          <label htmlFor="email">E-Mail</label>
          <input
            value={formData.email}
            id="email"
            type="email"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>
        <div className="field">
          <label htmlFor="phoneNumber">phone</label>
          <input
            value={formData.phoneNumber}
            id="phoneNumber"
            type="number"
            onChange={(e) =>
              setFormData({ ...formData, phoneNumber: e.target.value })
            }
          />
        </div>
        <div className="field">
          <label htmlFor="gender">Gender</label>
          <select
            id="gender"
            value={formData.gender}
            onChange={(e) =>
              setFormData({ ...formData, gender: e.target.value })
            }>
            <option value="male">Male</option>
            <option value="female">FeMale</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="dateOfBirth">Birthday</label>
          <input
            value={formData.dateOfBirth}
            type="date"
            id="dateOfBirth"
            onChange={(e) =>
              setFormData({ ...formData, dateOfBirth: e.target.value })
            }
          />
        </div>
        <button>Register</button>
      </form>
    </div>
  );
};

export default PatientSignup;
