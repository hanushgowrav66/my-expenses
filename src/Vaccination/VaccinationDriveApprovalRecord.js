import React, { useState } from "react";

const VaccinationDriveApprovalRecord = (props) =>
{
    const [id, setId] = useState(props.id);
    const [schoolName, setSchoolName] = useState(props.schoolName);
    const [provider, setProvider] = useState(props.provider);
    const [noOfSlots, setNoOfSlots] = useState(props.noOfSlots);
    const [startDate, setStartDate] = useState(props.startDate);
    const [endDate, setEndDate] = useState(props.endDate);
    const [status, setStatus] = useState(props.status);

    const approveHandler = () =>
    {
        setStatus('Approved');
        console.log('Inside Approve Handler');

        const vacDrive = {
            id: id,
            SchoolName: schoolName,
            Provider: provider,
            noOfSlots: noOfSlots,
            startDate: startDate,
            EndDate: endDate,
            Status: 'Approved'
          };
      
        props.vacDrive(vacDrive);
    }

    const rejectHandler = () =>
    {
        setStatus('Rejected');
        console.log('Inside Reject Handler');

        const vacDrive = {
            id: id,
            SchoolName: schoolName,
            Provider: provider,
            noOfSlots: noOfSlots,
            startDate: startDate,
            EndDate: endDate,
            Status: 'Rejected'
          };
      
        props.vacDrive(vacDrive);
    }
    const printConsole = () =>
    {
        console.log(props);
    }
    
    return (
        <tr>
            <td>{id}</td>
            <td>{schoolName}</td>
            <td>{provider}</td>
            <td>{noOfSlots}</td>
            <td>{startDate}</td>
            <td>{endDate}</td>
            {status === 'Approved' &&
                <td className="td-approved">{status}</td>}
            {status === 'In-Progress' &&
                <td className="td-inProgress">{status}</td>}
            {status === 'Rejected' &&
                <td className="td-rejected">{status}</td>}
            { (status === 'In-Progress') ?
                <td><button className= 'approve-button' onClick={approveHandler}>Approve /</button><br/>
                    <button className= 'reject-button' onClick={rejectHandler}>Reject</button></td>
                :
                <td>-</td>
            }
        </tr>
    )
}

export default VaccinationDriveApprovalRecord;