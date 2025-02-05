import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

// Styled TableCell for customization
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#F9FAFB",
    color: theme.palette.common.black,
    fontWeight: 700,
    fontSize: 15,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    color: "#637381",
  },
}));

// Styled TableRow for alternating row colors and removing the last row border
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.white,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

// Function to create data objects for each table row (it would come from the database in a real application)
function createData(titre, auteur, date, projet, type) {
  return { titre, auteur, date, projet, type };
}

// Sample data for table rows
const rows = [
  createData(
    "Présentation WikIpi",
    "Astrid Pierron",
    "22/11/2023",
    "WikIpi",
    "Validation"
  ),
  createData(
    "Présentation WikIpi",
    "Astrid Pierron",
    "22/11/2023",
    "WikIpi",
    "Suppression"
  ),
  createData(
    "Présentation WikIpi",
    "Astrid Pierron",
    "22/11/2023",
    "WikIpi",
    "Validation"
  ),
  createData(
    "Présentation WikIpi",
    "Astrid Pierron",
    "22/11/2023",
    "WikIpi",
    "Suppression"
  ),
  createData(
    "Présentation WikIpi",
    "Astrid Pierron",
    "22/11/2023",
    "WikIpi",
    "Validation"
  ),
];

// Component for displaying validation documentation table
function ValidationDocumentation() {
  return (
    <div className="bg-white flex justify-centre items-start w-full min-h-100vh">
      <div className="m-4 p-4 size-full rounded-[12px] border-dotted border-2 border-stone-300">
        <h1 className="font-bold text-[30px]">Validation Documentation</h1>
        <div className="mt-5">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow className="h-[60px]">
                  {/* Table Headers */}
                  <StyledTableCell
                    className="font-bold text-[30px]"
                    align="left"
                  >
                    TITRE
                  </StyledTableCell>
                  <StyledTableCell
                    className="font-bold text-[30px]"
                    align="center"
                  >
                    AUTEUR
                  </StyledTableCell>
                  <StyledTableCell
                    className="font-bold text-[30px]"
                    align="center"
                  >
                    DATE DE SOUMISSION
                  </StyledTableCell>
                  <StyledTableCell
                    className="font-bold text-[30px]"
                    align="center"
                  >
                    PROJET
                  </StyledTableCell>
                  <StyledTableCell
                    className="font-bold text-[30px]"
                    align="center"
                  >
                    TYPE DE DEMANDE
                  </StyledTableCell>
                  <StyledTableCell
                    className="font-bold text-[30px]"
                    align="center"
                  ></StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* Mapping rows to table data */}
                {rows.map((row) => (
                  <StyledTableRow className="h-[80px]" key={row.titre}>
                    {/* Table Data Cells */}
                    <StyledTableCell align="left">{row.titre}</StyledTableCell>
                    <StyledTableCell align="center">
                      {row.auteur}
                    </StyledTableCell>
                    <StyledTableCell align="center">{row.date}</StyledTableCell>
                    <StyledTableCell align="center">
                      {row.projet}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {/* Display type with different styles based on the type */}
                      <span
                        className={`${
                          row.type === "Validation"
                            ? "bg-[#FEEBEB] text-[#E10E0E]"
                            : "bg-[#4361FF] bg-opacity-10 text-[#3758F9]"
                        } pl-[10px] pr-[10px] pt-[3px] pb-[3px] rounded-[30px]`}
                      >
                        {row.type}
                      </span>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {/* Action buttons */}
                      <div className="text-[30px] text-[#2f2e2e] flex gap-2 ">
                        <button>
                          <VisibilityIcon />
                        </button>
                        <button>
                          <CheckCircleIcon />
                        </button>
                        <button>
                          <DeleteIcon />
                        </button>
                      </div>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
}

export default ValidationDocumentation;
