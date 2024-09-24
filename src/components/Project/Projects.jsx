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
function createData(id, pId, date, name, status) {
    return { id, pId, date, name, status};
}

const rows = [
    createData(
      0,
      'BU250',
      '16 Aug, 2024',
      'WOw',
      'Active',
    ),
    createData(
      1,
      'YAO666',
      '26 Jun, 2024',
      'SHIne',
      'Active',
    ),
    createData(
      2,
      'ZUO690', 
      '16 Jun, 2024',
      'GEnius', 
      'Active',
      ),
    createData(
      3,
      'TIAN88',
      '16 May, 2024',
      'SHAke',
      'Active',
    ),
    createData(
      4,
      'GOU468',
      '15 Apr, 2024',
      'BIte',
      'Active',
    ),
  ];
  
  function preventDefault(event) {
    event.preventDefault();
  }

export default function Projects() {
    const navigate = useNavigate();
    const handleViewDetails = (pId) => {
        navigate(`/project/${pId}`); // Navigates to the project page with the pId
    };
    const handleSeeMore = () => {
        navigate('/projects'); // Replace with the actual route you want to navigate to
      };

    return (
        <React.Fragment>
      <Title>Recent Projects</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Project ID</TableCell>
            <TableCell>Date Created</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Status</TableCell>
            <TableCell align="right">View Details</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.pId}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell align="right">
              <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  onClick={() => handleViewDetails(row.pId)}
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