import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { NavLink } from "react-router-dom";
import Search from "../Header/Search/Search";
import AddIcon from "@mui/icons-material/Add";
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import Box from "@mui/material/Box";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import Modal from "@mui/material/Modal";
import LightModeIcon from "@mui/icons-material/LightMode";
import CheckIcon from "@mui/icons-material/Check";
import { ThemeState } from "../../Context/UseContext";

// Styling for the modal popup
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function SideNavigation() {
  // State to manage modal visibility
  const [open, setOpen] = React.useState(false);

  // State to store the list of new projects
  const [newProjectList, setNewProjectList] = React.useState([]);

  // State for editing project names
  const [editing, setEditing] = React.useState({ index: null, text: "" });

  // Function to open modal
  const handleOpen = () => setOpen(true);

  // Function to close modal
  const handleClose = () => setOpen(false);

  // Accessing theme state and dispatch function from context
  const {
    state: { theme },
    dispatch,
  } = ThemeState();

  // Function to toggle between light and dark themes
  const toggleTheme = () => dispatch({ type: "TOGGLE_THEME" });

  // Function to add a new project to the list
  const createNewProject = () => {
    setNewProjectList([...newProjectList, "New Project"]);
  };

  // Function to start editing a project name
  const startEditing = (index) => {
    setEditing({ index, text: newProjectList[index] });
  };

  // Function to save the edited project name
  const saveEdit = (index) => {
    const updatedValues = [...newProjectList];
    updatedValues[index] = editing.text;
    setNewProjectList(updatedValues);
    setEditing({ index: null, text: "" });
  };

  return (
    <div
      className={`${
        theme === "light" ? "bg-white" : "bg-662626"
      } w-300px min-h-100vh flex flex-col justify-between`}
    >
      {/* Sidebar navigation menu */}
      <div className="flex justify-center border">
        <ul className="flex flex-col gap-2 items-center max-w-fit w-full">
          {/* Search Component */}
          <Search />
          {/* Button to create a new project */}
          <li className="w-full flex justify-center">
            <button
              className={`${
                theme === "light"
                  ? "bg-F3F4F6 text-black"
                  : "bg-black text-white"
              } text-xl w-full text-center p-10px rounded-lg flex justify-start items-center gap-5`}
              onClick={createNewProject}
            >
              <AddIcon className="text-1rem" />
              Nouveau projet
            </button>
          </li>
          {/* Project List */}
          <div className="w-full">
            {newProjectList.map((project, index) => (
              <li key={index} className="w-full">
                <Accordion defaultExpanded>
                  <AccordionSummary
                    expandIcon={
                      <ExpandMoreIcon
                        className={`${
                          theme === "light" ? " text-black" : " text-white"
                        }`}
                      />
                    }
                    aria-controls="panel1-content"
                    id="panel1-header"
                    className={`${
                      theme === "light"
                        ? "bg-F3F4F6 text-black"
                        : "bg-252525 text-white"
                    } text-lg`}
                  >
                    <div className="flex justify-start items-center gap-2">
                      <FolderOpenOutlinedIcon className="text-505765" />
                      {/* Input field for editing project name */}
                      {editing.index === index ? (
                        <>
                          <input
                            className={`${
                              theme === "light"
                                ? "bg-white text-black"
                                : "bg-black text-white"
                            } w-full`}
                            type="text"
                            value={editing.text}
                            onChange={(e) =>
                              setEditing({ ...editing, text: e.target.value })
                            }
                          />
                          <button onClick={() => saveEdit(index)}>
                            <CheckIcon className="text-green-500" />
                          </button>
                        </>
                      ) : (
                        <div onClick={() => startEditing(index)}>{project}</div>
                      )}
                    </div>
                  </AccordionSummary>
                  {/* Project actions */}
                  <AccordionDetails
                    className={`${
                      theme === "light"
                        ? "bg-white text-black"
                        : "bg-black text-white"
                    } w-full flex flex-col gap-1 text-center p-5px_0px`}
                  >
                    <NavLink
                      className={`${
                        theme === "light" ? " bg-white" : "bg-black"
                      } text-base p-10px flex justify-start items-center gap-5`}
                    >
                      <AddIcon className="text-1rem" />
                      <p>Nouvel article</p>
                    </NavLink>
                  </AccordionDetails>
                </Accordion>
              </li>
            ))}
          </div>
        </ul>
      </div>
      {/* Settings and Logout Buttons */}
      <div className="flex flex-col gap-2 items-center mb-2">
        <button onClick={handleOpen} className="w-full text-6B7280">
          <div className="flex gap-5 justify-center items-center w-2/4">
            <SettingsOutlinedIcon />
            <button>Settings</button>
          </div>
        </button>
        {/* Settings Modal */}
        <Modal open={open} onClose={handleClose}>
          <Box sx={style}>
            <h1 className="text-center text-2rem">SETTINGS</h1>
            <div className="mt-5 flex gap-5 items-center">
              <button onClick={toggleTheme}>
                {theme === "light" ? <LightModeIcon /> : <NightsStayIcon />}
              </button>
              <p>{theme === "light" ? "Light Mode" : "Dark Mode"}</p>
            </div>
          </Box>
        </Modal>
        {/* Logout Button */}
        <button className=" w-full text-6B7280">
          <div className="flex gap-5 justify-center items-center w-2/4">
            <LogoutOutlinedIcon />
            <p>Log out</p>
          </div>
        </button>
      </div>
    </div>
  );
}

export default SideNavigation;
