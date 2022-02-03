import { useState } from "react";

const VaccinationDriveUpdateRecord = (props) => {
  const [id, setId] = useState(props.id);
  const [schoolName, setSchoolName] = useState(props.schoolName);
  const [provider, setProvider] = useState(props.provider);
  const [noOfSlots, setNoOfSlots] = useState(props.noOfSlots);
  const [startDate, setStartDate] = useState(props.startDate);
  const [endDate, setEndDate] = useState(props.endDate);
  const [status, setStatus] = useState(props.status);

  const vaccinationProviders = [
    { Name: "Vijaya Diagnostics", Mobile: "9876543210" },
    { Name: "Medicover Hospitals", Mobile: "9876543211" },
    { Name: "Image Hospitals", Mobile: "9876543212" },
    { Name: "Continental Hospitals", Mobile: "9876543213" },
  ];

  const updateProviderChangeHandler = (event) => {
    setProvider(event.target.value);
    setStatus("In-Progress");
    const vacDrive = {
      id: id,
      SchoolName: schoolName,
      Provider: event.target.value,
      noOfSlots: noOfSlots,
      startDate: startDate,
      EndDate: endDate,
      Status: "In-Progress",
    };
    props.onVacDriveUpdate(vacDrive);
  };

  const updateNoOfSlotsHandler = (event) => {
    setNoOfSlots(event.target.value);
    setStatus("In-Progress");
    const vacDrive = {
      id: id,
      SchoolName: schoolName,
      Provider: provider,
      noOfSlots: event.target.value,
      startDate: startDate,
      EndDate: endDate,
      Status: "In-Progress",
    };
    props.onVacDriveUpdate(vacDrive);
  };

  const updateStartDateHandler = (event) => {
    setStartDate(event.target.value);
    setStatus("In-Progress");
    const vacDrive = {
      id: id,
      SchoolName: schoolName,
      Provider: provider,
      noOfSlots: noOfSlots,
      startDate: event.target.value,
      EndDate: endDate,
      Status: "In-Progress",
    };
    props.onVacDriveUpdate(vacDrive);
  };

  const updateEndDateHandler = (event) => {
    setEndDate(event.target.value);
    setStatus("In-Progress");
    const vacDrive = {
      id: id,
      SchoolName: schoolName,
      Provider: provider,
      noOfSlots: noOfSlots,
      startDate: startDate,
      EndDate: event.target.value,
      Status: "In-Progress",
    };
    props.onVacDriveUpdate(vacDrive);
  };

  return (
    <>
      <tr>
        <td>{id}</td>
        <td>{schoolName}</td>
        <td>
          <select
            className="modify-select"
            onChange={updateProviderChangeHandler}
            required
          >
            <option selected value={provider}>
              {provider}
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
        </td>
        <td>
          <input
            className="modify-input"
            type="number"
            value={noOfSlots}
            onChange={updateNoOfSlotsHandler}
            min="1"
            max="100"
          />
        </td>

        <td>
          <input
            className="modify-input"
            type="datetime-local"
            value={startDate}
            onChange={updateStartDateHandler}
          />
        </td>
        <td>
          <input
            className="modify-input"
            type="datetime-local"
            value={endDate}
            onChange={updateEndDateHandler}
          />
        </td>
        <td>{status}</td>
      </tr>
    </>
  );
};

export default VaccinationDriveUpdateRecord;
