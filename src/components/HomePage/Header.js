import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import "./Header.css";

import VaccinationDriveRequest from "../../Vaccination/VaccinationDriveRequest";
import VaccinationDriveApproval from "../../Vaccination/VaccinationDriveApproval";
import VaccinationDriveUpdate from "../../Vaccination/VaccinationDriveUpdate";
import DashBoard from "./DashBoard";

const VAC_DRIVES = [
  {
    id: "1",
    SchoolName: "Delhi Public School",
    Provider: "Vijaya Diagnostics",
    noOfSlots: "20",
    startDate: "2022-06-02T08:30",
    EndDate: "2022-06-02T16:30",
    Status: "Approved",
  },
  {
    id: "2",
    SchoolName: "Delhi Public School",
    Provider: "Medicover Hospitals",
    noOfSlots: "28",
    startDate: "2022-07-02T08:30",
    EndDate: "2022-07-02T16:30",
    Status: "Approved",
  },
  {
    id: "3",
    SchoolName: "Delhi Public School",
    Provider: "Image Hospitals",
    noOfSlots: "82",
    startDate: "2022-08-02T08:30",
    EndDate: "2022-08-02T16:30",
    Status: "In-Progress",
  },
];

const Header = () => {
  const [isVaccRequestPageOpen, setVaccRequestPageOpen] = useState(false);
  const [isVaccRequestUpdatePageOpen, setVaccRequestUpdatePageOpen] =
    useState(false);
  const [isVaccDrivePageOpen, setVaccDrivePageOpen] = useState(false);
  const [isHomePageOpen, setDisplayHomePage] = useState(true);

  const [vacDrivesList, setVacDrives] = useState(VAC_DRIVES);

  const addVacDriveHandler = (vacDrive) => {
    console.log(vacDrive);
    setVacDrives((prevvacDrives) => {
      return [vacDrive, ...prevvacDrives];
    });
    console.log(vacDrivesList);
  };

  const updateVacDriveHandler = (vacDrive) => {
    console.log("In Home");
    console.log(vacDrive);
    setVacDrives(() => {
      return vacDrive;
    });
  };

  const updateVacDriveRecordHandler = (vacDrive) => {
    console.log("In updateVacDriveRecordHandler");
    console.log(vacDrive);
    setVacDrives(() => {
      return vacDrive;
    });
  };

  const onPrintDetails = () => {
    console.log(vacDrivesList);
  };

  const onVaccinationRequestHandler = () => {
    console.log("1-onVaccinationRequestHandler");
    setVaccRequestPageOpen(true);
    setVaccRequestUpdatePageOpen(false);
    setVaccDrivePageOpen(false);
    setDisplayHomePage(false);
  };

  const onVaccinationRequestUpdateHandler = () => {
    console.log("2-onVaccinationRequestUpdateHandler");
    setVaccRequestPageOpen(false);
    setVaccRequestUpdatePageOpen(true);
    setVaccDrivePageOpen(false);
    setDisplayHomePage(false);
  };

  const onVaccinationDriveHandler = () => {
    console.log("3-onVaccinationDriveHandler");
    setVaccRequestPageOpen(false);
    setVaccRequestUpdatePageOpen(false);
    setVaccDrivePageOpen(true);
    setDisplayHomePage(false);
  };

  const onDisplayHomePageHandler = () => {
    console.log("4-onDisplayHomePageHandler");
    setVaccRequestPageOpen(false);
    setVaccRequestUpdatePageOpen(false);
    setVaccDrivePageOpen(false);
    setDisplayHomePage(true);
  };

  return (
    <div className="div-main">
      <Navbar className="navbar" bg="light" expand="lg">
        <Container>
          <Navbar.Brand onClick={onDisplayHomePageHandler}>
            <h2 className="fontstyle">VTrackS</h2>{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={onDisplayHomePageHandler}>Home </Nav.Link>

              <NavDropdown
                title="Vaccination Management"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item onClick={onVaccinationRequestHandler}>
                  Book Vaccination Drive
                </NavDropdown.Item>
                <NavDropdown.Item onClick={onVaccinationRequestUpdateHandler}>
                  Approve or Reject Vaccination Drive{" "}
                </NavDropdown.Item>
                <NavDropdown.Item onClick={onVaccinationDriveHandler}>
                  View/Modify Upcoming Vaccination Drives
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="School Management"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">
                  Student Information
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Request Vaccination
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="User Management" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  User Account Configuration
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Vaccination Center Configuration
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="/">Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div>
        {isVaccRequestPageOpen && (
          <VaccinationDriveRequest onAddVacDrive={addVacDriveHandler} />
        )}

        {isVaccRequestUpdatePageOpen && (
          <VaccinationDriveApproval
            vacDrives={vacDrivesList}
            onUpdateVacDrives={updateVacDriveHandler}
          />
        )}

        {isVaccDrivePageOpen && (
          <VaccinationDriveUpdate
            vacDrives={vacDrivesList}
            onUpdateVacDrives={updateVacDriveRecordHandler}
          />
        )}
        {isHomePageOpen && <DashBoard vacDrives={vacDrivesList} />}
      </div>
    </div>
  );
};

export default Header;
