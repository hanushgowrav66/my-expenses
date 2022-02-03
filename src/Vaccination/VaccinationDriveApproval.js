import  { useState } from "react";
import VaccinationDriveApprovalRecord from "./VaccinationDriveApprovalRecord";
import './VaccinationDriveApproval.css';

const VaccinationDriveApproval = (props) =>
{
    const[vacDrivesList, setUpdatedVacDrives] = useState(props.vacDrives);

    const updateVacDriveHandler = (vacDrive) => {
        console.log(vacDrivesList);
        
        setUpdatedVacDrives((prevVacDrives) => {
            for (let i = 0; i < prevVacDrives.length; i++) {
                if (prevVacDrives[i].id === vacDrive.id)
                {
                    vacDrivesList[i] = vacDrive;
                }
                else
                {
                    vacDrivesList[i] = prevVacDrives[i];
                }
              }
            //console.log(prevVacDrives[i++].id);
            console.log(vacDrivesList);
            props.onUpdateVacDrives(vacDrivesList);
            return vacDrivesList;
            //return vacDrivesList;
          });
          
    };      
    
    const approveHandler = () =>
    {
        console.log('Inside Approve Handler');
    }

    const rejectHandler = () =>
    {
        console.log('Inside Reject Handler');
    }    

    if (props.vacDrives.length === 0) {
        return (
        <h2>No Vaccination drives data available.</h2>
         );
       }

    return (
        <div >
            <br/><br/><br/>
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
                        <th>Approve/Reject</th>
                    </tr>
                    {vacDrivesList.map((vacDrive) => (
                    <VaccinationDriveApprovalRecord 
                    id={vacDrive.id}
                    schoolName={vacDrive.SchoolName}
                    provider={vacDrive.Provider}
                    startDate={vacDrive.startDate}
                    noOfSlots={vacDrive.noOfSlots}
                    endDate={vacDrive.EndDate}
                    status={vacDrive.Status}
                    vacDrive={updateVacDriveHandler}
                    />
                    ))}
                </table>
            </center>
        </div>
    )
}

export default VaccinationDriveApproval;