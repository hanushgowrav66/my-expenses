import React from "react";
import "./DashBoard.css";
import DashBoardRecords from "./DashBoardRecords";

const DashBoard = (props) => {
  if (props.vacDrives.length === 0) {
    return (
      <>
        <h1 className="h1-SchoolName"> Welcome to Delhi Public School</h1>
        <br />
        <br />
        <h2>No Vaccination drives data available.</h2>
      </>
    );
  }
  return (
    <>
      <center>
        <h1 className="h1-SchoolName"> Welcome to Delhi Public School</h1>
        <br />
        <br />
        <table>
          <tr>
            <td className="td-heading" colSpan={"6"}>
              Upcoming Vaccination Drives
            </td>
          </tr>
          <tr>
            <th>ID</th>
            {/* <th>School Name</th> */}
            <th>Vaccination Provider</th>
            <th>Number of Slots</th>
            <th>Vaccination Start Time</th>
            <th>Vaccination End Time Time</th>
            <th>Status</th>
          </tr>
          {props.vacDrives.map((vacDrive) => (
            <DashBoardRecords
              id={vacDrive.id}
              schoolName={vacDrive.SchoolName}
              provider={vacDrive.Provider}
              startDate={vacDrive.startDate}
              noOfSlots={vacDrive.noOfSlots}
              endDate={vacDrive.EndDate}
              status={vacDrive.Status}
            />
          ))}
        </table>
      </center>
    </>
  );
};

export default DashBoard;
