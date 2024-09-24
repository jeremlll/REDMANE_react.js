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
function createData(id, dId, date, name, source) {
    return { id, dId, date, name, source};
}

const rows = [
    createData(
      0,
      'BIOL10001',
      '16 Aug, 2024',
      'GeneFlow',
      'University of Melbourne',
    ),
    createData(
      1,
      'GENE10001',
      '26 Jun, 2024',
      'VitalMetrics',
      'University of Melbourne',
      
    ),
    createData(
      2,
      'GENE10002', 
      '16 Jun, 2024',
      'BioSpectrum', 
      'cBioPortal',

      ),
    createData(
      3,
      'BIOL10006',
      '16 May, 2024',
      'CellBase',
      'WEHI',
      
    ),
    createData(
      4,
      'GENE10003',
      '15 Apr, 2024',
      'GenomicAtlas',
      'USYD',
    ),
  ];
  
  function preventDefault(event) {
    event.preventDefault();
  }

export default function Datasets({ title = "Recent Datasets", size = "small", showSeeMore = true}) {
    const navigate = useNavigate();
    const handleViewDetails = (dId) => {
        navigate(`/dataset/${dId}`); // Navigates to the project page with the pId
    };
    const handleSeeMore = () => {
      navigate('/datasets'); // Replace with the actual route you want to navigate to
    };

    return (
      <React.Fragment>
        <Title>{title}</Title>
        <Table size={size}>
          <TableHead>
            <TableRow>
              <TableCell>Dataset ID</TableCell>
              <TableCell>Date Uploaded</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Source</TableCell>
              <TableCell align="right">View Files</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.dId}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.source}</TableCell>
                <TableCell align="right">
                <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    onClick={() => handleViewDetails(row.dId)}
                    sx={{ textTransform: 'none',
                      padding: '5px 10px', // Increase padding for a bigger button
                      fontSize: '10px', // Increase font size
                  }}
                  >
                    View Files
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {
          showSeeMore && 
          <Link
            component="button"
            variant="body2"
            onClick={handleSeeMore}
            sx={{ mt: 3 }}
          >
            See more...
          </Link>
        }
      </React.Fragment>
    );
}