import React, { useState } from "react";
import axios from "axios";
const AddPatient = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [numberPhone, setNumberPhone] = useState("");
  const [dateOfAppointment, setDateOfAppointment] = useState("");

  const addPatient = () => {
    var body = {
      firstName: firstName,
      lastName: lastName,
      numberPhone: numberPhone,
      dateOfAppointment: dateOfAppointment,
    };
    axios
      .post(`/api/patient`, body)
      .then((res) => console.log(res, "success save"));
  };

  return (
    <div>
      <div className="title">AddPatient:</div>
      <div className="container">
        <label className="label">
          First Name:
          <input
            className="input"
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <label className="label">
          Last Name:
          <input
            className="input"
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <br />
        <label className="label">
          Number Phone:
          <input
            className="input"
            type="text"
            placeholder="Number Phone"
            value={numberPhone}
            onChange={(e) => setNumberPhone(e.target.value)}
          />
        </label>
        <label className="label">
          Date of appointement:
          <input
            className="input"
            type="date"
            placeholder="Date of appointment"
            value={dateOfAppointment}
            onChange={(e) => setDateOfAppointment(e.target.value)}
          />
        </label>
      </div>
      <button className="btn" onClick={() => addPatient()}>Add Patient </button>
    </div>
  );
};

export default AddPatient;
