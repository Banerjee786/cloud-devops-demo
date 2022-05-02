import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 20,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
    fontSize: 20,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  list: number,
  topic: string,
  presentation: string,
  iscloud: string,
  prereq: string
) {
  return { list, topic, presentation, iscloud, prereq};
}

const rows = [
  createData(1,'RCC Institute of Information Technology', 'Presentation', 'Cloud', 'N/A'),
  createData(2,'Introduction to Public Cloud Platforms', 'Presentation', 'Cloud', 'N/A'),
  createData(3,'On-Premise VS IaaS VS PaaS VS SaaS', 'Presentation', 'Cloud', 'N/A'),
  createData(4,'6 Pillars of Well-architected Cloud Infrastructure', 'Presentation', 'General', 'N/A'),
  createData(5,'Introduction to DevOps', 'Presentation', 'DevOps', 'N/A'),
  createData(6,'DevOps Objective', 'Presentation', 'DevOps', 'N/A'),
  createData(7,'Softwares and tools for DevOps Automation', 'Presentation', 'DevOps', 'N/A'),
  createData(8,'Introduction to Source Control Management', 'Presentation & Demo', 'DevOps', 'N/A'),
  createData(9,'Introduction to Amazon Web Services (AWS)', 'Presentation & Demo', 'Cloud', 'GIT & AWS Account'),
  createData(10,'AWS Basic Services (EC2, S3, RDS, Lambda, Cloudfront)', 'Presentation & Demo', 'Cloud', 'AWS Account'),
  createData(11,'Set up a demo website using Cloud and DevOps practices', 'Demo', 'Cloud & DevOps', 'AWS Account')
];

export default function Agenda() {
  return (

    <TableContainer component={Paper}>
    <div>
          <h1 style={{color: "Blue", marginLeft : 500}}>WORKSHOP AGENDA FOR MAY-02-2022</h1>
    </div>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>LIST</StyledTableCell>
            <StyledTableCell>TOPIC</StyledTableCell>
            <StyledTableCell align="right">PPT/DEMO</StyledTableCell>
             <StyledTableCell align="right">CLOUD/DEVOPS</StyledTableCell>
            <StyledTableCell align="right">PRE-REQUISITE</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.list}>
              <StyledTableCell component="th" scope="row">
                {row.list}
              </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {row.topic}
                </StyledTableCell>
              <StyledTableCell align="right">{row.presentation}</StyledTableCell>
              <StyledTableCell align="right">{row.iscloud}</StyledTableCell>
              <StyledTableCell align="right">{row.prereq}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
