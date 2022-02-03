import { useState } from "react";
import './DashBoard.css';

const DashBoardRecords = (upcomingVacDrives) => {

    const [id, setId] = useState(upcomingVacDrives.id);
    const [provider, setProvider] = useState(upcomingVacDrives.provider);
    const [noOfSlots, setNoOfSlots] = useState(upcomingVacDrives.noOfSlots);
    const [startDate, setStartDate] = useState(upcomingVacDrives.startDate);
    const [endDate, setEndDate] = useState(upcomingVacDrives.endDate);
    const [status, setStatus] = useState(upcomingVacDrives.status);

    const statustag = (pstatus) =>
    {
        console.log(pstatus);
        if (pstatus === 'In-Progress')
        {  
            return pstatus+'--';
        }
            
    }

    return (
            <tr>
                <td>{id}</td>
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
            </tr>
    )
}

export default DashBoardRecords;