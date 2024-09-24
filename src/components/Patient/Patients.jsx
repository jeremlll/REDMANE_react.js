import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from '../Dashboard/Title';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

// Generate Order Data
function createData(id, eId, source, numSamples) {
    return { id, eId, source, numSamples};
}

const rows = [
    createData(
      0,
      'UOM_520',
      'University of Melbourne',
      1,
    ),
    createData(
      1,
      'UOM_123',
      'University of Melbourne',
      2,
      
    ),
    createData(
      2,
      'CBP-369', 
      'cBioPortal',
      3,
      ),
    createData(
      3,
      'WH_211',
      'WEHI',
      2,
    ),
    createData(
      4,
      'USYD985',
      'USYD',
      1,
    ),
  ];
  
  function preventDefault(event) {
    event.preventDefault();
  }

export default function Patients() {
    const navigate = useNavigate();
    const handleViewDetails = (id) => {
        navigate(`/patient/${id}`); // Navigates to the project page with the pId
    };
    const handleSeeMore = () => {
      navigate('/patients'); // Replace with the actual route you want to navigate to
    };

    return (
        <React.Fragment>
      <Title>Patients</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell align='center'>ID</TableCell>
            <TableCell align='center'>External ID</TableCell>
            <TableCell>Source</TableCell>
            <TableCell align='center'>Number of Samples</TableCell>
            <TableCell align="right">View Details</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell align='center'>{row.id}</TableCell>
              <TableCell align='center'>{row.eId}</TableCell>
              <TableCell>{row.source}</TableCell>
              <TableCell align='center'>{row.numSamples}</TableCell>
              <TableCell align="right">
              <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  onClick={() => handleViewDetails(row.id)}
                  sx={{ textTransform: 'none',
                    padding: '5px 10px', // Increase padding for a bigger button
                    fontSize: '10px', // Increase font size
                 }}
                >
                  View Details
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link
        component="button"
        variant="body2"
        onClick={handleSeeMore}
        sx={{ mt: 3 }}
      >
        See more...
      </Link>
    </React.Fragment>
    );
}