import { useState } from "react";

import "./VaccinationDriveRequest.css";

const VaccinationDriveRequest = (props) => {
  const vaccinationProviders = [
    { Name: "Vijaya Diagnostics", Mobile: "9876543210" },
    { Name: "Medicover Hospitals", Mobile: "9876543211" },
    { Name: "Image Hospitals", Mobile: "9876543212" },
    { Name: "Continental Hospitals", Mobile: "9876543213" },
  ];

  const [enteredSchoolName, setEnteredSchoolName] = useState(
    "Delhi Public School"
  );
  const [enteredProvider, setEnteredProvider] = useState("");
  const [enteredNumberofSlots, setEnteredNumberofSlots] = useState("");
  const [enteredStartDate, setEnteredStartDate] = useState("");
  const [enteredEndDate, setEnteredEndDate] = useState("");

  const schoolNameChangeHandler = (event) => {
    setEnteredSchoolName(event.target.value);
  };
  const providerChangeHandler = (event) => {
    setEnteredProvider(event.target.value);
  };
  const numberofSlotsChangeHandler = (event) => {
    setEnteredNumberofSlots(event.target.value);
  };
  const startDateChangeHandler = (event) => {
    setEnteredStartDate(event.target.value);
  };
  const endDateChangeHandler = (event) => {
    setEnteredEndDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const vacDrive = {
      id: Math.floor(Math.random() * 1000),
      SchoolName: enteredSchoolName,
      Provider: enteredProvider,
      noOfSlots: enteredNumberofSlots,
      startDate: enteredStartDate,
      EndDate: enteredEndDate,
      Status: "In-Progress",
    };

    props.onAddVacDrive(vacDrive);
    setEnteredProvider("");
    setEnteredStartDate("");
    setEnteredEndDate("");
    setEnteredNumberofSlots("");
  };

  return (
    <div className="form-container">
      <h1> Book Vaccination Drive </h1>
      <br />
      <form onSubmit={submitHandler}>
        <div>
          <label> School Name</label>
          <input
            type="text"
            value={enteredSchoolName}
            onChange={schoolNameChangeHandler}
            disabled
          />
          <br />
          <br />
          <label> Vaccination Provider</label>
          <select onChange={providerChangeHandler} required>
            <option selected disabled value="">
              Choose...
            </option>
            <option value={vaccinationProviders[0].Name}>
              {vaccinationProviders[0].Name}
            </option>
            <option value={vaccinationProviders[1].Name}>
              {vaccinationProviders[1].Name}
            </option>
            <option value={vaccinationProviders[2].Name}>
              {vaccinationProviders[2].Name}
            </option>
            <option value={vaccinationProviders[3].Name}>
              {vaccinationProviders[3].Name}
            </option>
          </select>
          <br />
          <br />
          <label> Number of Slots</label>
          <input
            type="number"
            value={enteredNumberofSlots}
            onChange={numberofSlotsChangeHandler}
            min="1"
            max="100"
          />
          <br />
          <br />
          <label> Start Time </label>
          <input
            type="datetime-local"
            onChange={startDateChangeHandler}
          ></input>
          <br />
          <br />
          <label> End Time </label>
          <input type="datetime-local" onChange={endDateChangeHandler}></input>
          <br />
          <br />
        </div>

        <div>
          <button type="submit" className="reqbutton">
            Submit Request
          </button>
          <button type="reset" className="reqbutton">
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default VaccinationDriveRequest;
