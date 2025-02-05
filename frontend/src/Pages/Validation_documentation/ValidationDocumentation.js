import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ThemeState } from "../../Context/UseContext";

// Styling for the table cells
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#F9FAFB", // Background for header
    color: theme.palette.common.black, // Text color
    fontWeight: 700, // Font weight for header
    fontSize: 15, // Font size for header
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14, // Font size for body
    color: "#637381", // Text color for body
  },
}));

// Styling for the table rows
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.white, // Odd row background color
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0, // Remove border for last row
  },
}));

// Function to create row data for the table
function createData(titre, projet, date, type, statut) {
  return { titre, projet, date, type, statut };
}

// Sample data for table rows
const rows = [
  createData(
    "Présentation WikIpi",
    "WikIpi",
    "22/11/2023",
    "Validation",
    "Refusée"
  ),
  createData(
    "Présentation WikIpi",
    "WikIpi",
    "22/11/2023",
    "Suppression",
    "Validée"
  ),
  createData(
    "Présentation WikIpi",
    "WikIpi",
    "22/11/2023",
    "Validation",
    "En cours"
  ),
  createData(
    "Présentation WikIpi",
    "WikIpi",
    "22/11/2023",
    "Suppression",
    "Refusée"
  ),
  createData(
    "Présentation WikIpi",
    "WikIpi",
    "22/11/2023",
    "Validation",
    "En cours"
  ),
];

// Main functional component for the validation documentation page
function ValidationDocumentation() {
  const {
    state: { theme }, // Accessing the current theme from context
  } = ThemeState();
  return (
    <div
      className={`${
        theme === "light" ? "text-black bg-white" : "text-white bg-black"
      }  flex justify-centre items-start w-full min-h-100vh`}
    >
      <div className="m-4 size-full p-4 rounded-[12px] border-dotted border-2 border-stone-300">
        <h1 className="font-bold text-[30px]">Mes demandes</h1>
        <div className="mt-5">
          <TableContainer component={Paper}>
            <Table
              className={`${
                theme === "light"
                  ? "text-black bg-white"
                  : "text-white bg-black"
              }`}
              sx={{ minWidth: 700 }}
              aria-label="customized table"
            >
              <TableHead>
                <TableRow
                  className={`${
                    theme === "light"
                      ? "text-black bg-white"
                      : "text-white bg-black"
                  } h-[60px]`}
                >
                  {/* Table headers */}
                  <StyledTableCell
                    className={`${
                      theme === "light"
                        ? "text-black bg-white"
                        : "text-white bg-464646"
                    } font-bold text-[30px]`}
                    align="left"
                  >
                    TITRE
                  </StyledTableCell>
                  <StyledTableCell
                    className={`${
                      theme === "light"
                        ? "text-black bg-white"
                        : "text-white bg-464646"
                    } font-bold text-[30px]`}
                    align="center"
                  >
                    DATE DE SOUMISSION
                  </StyledTableCell>
                  <StyledTableCell
                    className={`${
                      theme === "light"
                        ? "text-black bg-white"
                        : "text-white bg-464646"
                    } font-bold text-[30px]`}
                    align="center"
                  >
                    PROJET
                  </StyledTableCell>
                  <StyledTableCell
                    className={`${
                      theme === "light"
                        ? "text-black bg-white"
                        : "text-white bg-464646"
                    } font-bold text-[30px]`}
                    align="center"
                  >
                    TYPE DE DEMANDE
                  </StyledTableCell>
                  <StyledTableCell
                    className={`${
                      theme === "light"
                        ? "text-black bg-white"
                        : "text-white bg-464646"
                    } font-bold text-[30px]`}
                    align="center"
                  >
                    STATUT
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* Mapping over rows to display data */}
                {rows.map((row) => (
                  <StyledTableRow className="h-[80px]" key={row.titre}>
                    {/* Table cells for each row */}
                    <StyledTableCell
                      className={`${
                        theme === "light"
                          ? "text-black bg-white"
                          : "text-white bg-252525"
                      } font-bold text-[30px]`}
                      align="left"
                    >
                      {row.titre}
                    </StyledTableCell>
                    <StyledTableCell
                      className={`${
                        theme === "light"
                          ? "text-black bg-white"
                          : "text-white bg-252525"
                      } font-bold text-[30px]`}
                      align="center"
                    >
                      {row.date}
                    </StyledTableCell>
                    <StyledTableCell
                      className={`${
                        theme === "light"
                          ? "text-black bg-white"
                          : "text-white bg-252525"
                      } font-bold text-[30px]`}
                      align="center"
                    >
                      {row.projet}
                    </StyledTableCell>
                    <StyledTableCell
                      className={`${
                        theme === "light"
                          ? "text-black bg-white"
                          : "text-white bg-252525"
                      } font-bold text-[30px]`}
                      align="center"
                    >
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
                    <StyledTableCell
                      className={`${
                        theme === "light"
                          ? "text-black bg-white"
                          : "text-white bg-252525"
                      } font-bold text-[30px]`}
                      align="center"
                    >
                      <span
                        className={`${
                          row.statut === "Refusée"
                            ? "bg-[#FEEBEB] text-[#E10E0E]"
                            : row.statut === "Validée"
                            ? "bg-green-300 bg-opacity-10 text-green-600"
                            : "bg-yellow-300 bg-opacity-10 text-yellow-600"
                        } pl-[10px] pr-[10px] pt-[3px] pb-[3px] rounded-[30px]`}
                      >
                        {row.statut}
                      </span>
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
