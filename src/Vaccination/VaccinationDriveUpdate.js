import { useState } from "react";
import VaccinationDriveUpdateRecord from "./VaccinationDriveUpdateRecord";
import "./VaccinationDriveUpdate.css";

const VaccinationDriveUpdate = (props) => {
  const [vacDriveList, setUpdatedVacDrives] = useState(props.vacDrives);

  const printConsole = () => {
    console.log(vacDriveList);
  };

  const updateVacDriveHandler = (vacDrive) => {
    console.log("VaccinationDriveUpdate-updateVacDriveHandler");
    setUpdatedVacDrives((prevVacDrives) => {
      for (let i = 0; i < prevVacDrives.length; i++) {
        if (prevVacDrives[i].id === vacDrive.id) {
          vacDriveList[i] = vacDrive;
        } else {
          vacDriveList[i] = prevVacDrives[i];
        }
      }
      return vacDriveList;
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log("Inside Submit Handler");
    props.onUpdateVacDrives(vacDriveList);
  };

  return (
    <div>
      <br />
      <center>
        <table>
          <tr>
            <th>ID</th>
            <th>School Name</th>
            <th>Vaccination Provider</th>
            <th>Number of Slots</th>
            <th>Start Date and Time</th>
            <th>End Date and Time</th>
            <th>Status</th>
          </tr>
          {vacDriveList.map((vacDrive) => (
            <VaccinationDriveUpdateRecord
              id={vacDrive.id}
              schoolName={vacDrive.SchoolName}
              provider={vacDrive.Provider}
              startDate={vacDrive.startDate}
              noOfSlots={vacDrive.noOfSlots}
              endDate={vacDrive.EndDate}
              status={vacDrive.Status}
              onVacDriveUpdate={updateVacDriveHandler}
            />
          ))}
        </table>
      </center>
      <br />
      <br />
    </div>
  );
};

export default VaccinationDriveUpdate;
