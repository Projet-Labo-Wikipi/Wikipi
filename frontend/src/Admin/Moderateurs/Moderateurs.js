import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

// Custom styled table cell component
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

// Custom styled table row component
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.white,
  },
  // Hide last border in the table
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

// Function to create new data entries for moderator requests
function createData(titre, date) {
  return { titre, date };
}

// Data for pending moderator requests
const rows = [
  createData("Marie Dupont", "22/11/2023"),
  createData("Pierre Martin", "22/11/2023"),
  createData("Thomas Dubois", "22/11/2023"),
];

// Function to create new moderator entries
function gestionModerateurs(nom) {
  return { nom };
}

// Data for existing moderators
const gestionModerateursRows = [
  gestionModerateurs("Julien Mercier"),
  gestionModerateurs("Nicolas Dupuis"),
  gestionModerateurs("Claire Laurent"),
];

// Main component for displaying moderator validation and management tables
function Moderateurs() {
  return (
    <div className="bg-white flex justify-centre items-start w-full min-h-100vh">
      <div className="m-4 p-4 size-full rounded-[12px] border-dotted border-2 border-stone-300">
        {/* Section for validating moderators */}
        <h1 className="font-bold text-[30px]">Validation modérateurs</h1>
        <div className="mt-5">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow className="h-[60px]">
                  <StyledTableCell
                    className="font-bold text-[30px]"
                    align="left"
                  >
                    NOM
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
                  ></StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow className="h-[80px]" key={row.titre}>
                    <StyledTableCell align="left">{row.titre}</StyledTableCell>
                    <StyledTableCell align="center">{row.date}</StyledTableCell>
                    <StyledTableCell align="center">
                      <div className="text-[30px] text-[#2f2e2e] flex justify-end gap-2 ">
                        {/* Approve moderator button */}
                        <button>
                          <CheckCircleIcon />
                        </button>
                        {/* Delete request button */}
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

        {/* Section for managing existing moderators */}
        <h1 className="font-bold text-[30px] mt-5">Gestion des modérateurs</h1>
        <div className="mt-5">
          <TableContainer component={Paper}>
            <Table sx={{ width: "100%" }} aria-label="customized table">
              <TableHead>
                <TableRow className="h-[60px]">
                  <StyledTableCell
                    className="font-bold text-[30px]"
                    align="left"
                  >
                    NOM
                  </StyledTableCell>
                  <StyledTableCell
                    className="font-bold text-[30px]"
                    align="center"
                  ></StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {gestionModerateursRows.map((row) => (
                  <StyledTableRow className="h-[80px]" key={row.nom}>
                    <StyledTableCell align="left">{row.nom}</StyledTableCell>
                    <StyledTableCell align="center">
                      <div className="text-[30px] text-[#2f2e2e] flex justify-end gap-2 ">
                        {/* Delete moderator button */}
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

export default Moderateurs;
