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
// import Button from "@mui/material/Button";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import Modal from "@mui/material/Modal";
import LightModeIcon from "@mui/icons-material/LightMode";
import { ThemeState } from "../../Context/UseContext";

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
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {
    state: { theme },
    dispatch,
  } = ThemeState();

  const toggleTheme = () => {
    const action = { type: "TOGGLE_THEME" };
    dispatch(action);
  };

  return (
    <div className="w-300px min-h-100vh flex flex-col justify-between">
      <div
        className={`${
          theme === "light" ? "bg-white" : "bg-662626"
        } flex justify-center border`}
      >
        <ul className="flex flex-col gap-2 items-center max-w-fit w-full">
          <Search />
          <li className="w-full flex justify-center">
            <NavLink
              to="/"
              className={`${
                theme === "light"
                  ? "bg-F3F4F6 text-black"
                  : "bg-F3F4F6 text-white"
              } text-xl w-full text-center p-10px rounded-lg flex justify-start items-center gap-5`}
            >
              <AddIcon className="text-1rem" />
              Nouveau projet
            </NavLink>
          </li>
          <div className="w-full">
            <li className="w-full">
              <Accordion defaultExpanded>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  className={`${
                    theme === "light"
                      ? "bg-F3F4F6 text-black"
                      : "bg-F3F4F6 text-white"
                  } text-lg`}
                >
                  <div className="flex justify-start items-center gap-2">
                    <FolderOpenOutlinedIcon className="text-505765" />
                    Projet labo 1
                  </div>
                </AccordionSummary>
                <AccordionDetails
                  className={`${
                    theme === "light"
                      ? "bg-white text-black"
                      : "bg-white text-white"
                  } w-full flex flex-col gap-1 text-center p-5px_0px`}
                >
                  <NavLink
                    className={`${
                      theme === "light" ? " bg-white" : "bg-white"
                    } text-base p-10px flex justify-start items-center gap-5`}
                  >
                    <AddIcon className="text-1rem" />
                    <p>Nouvel article</p>
                  </NavLink>
                  <NavLink
                    className={`${
                      theme === "light" ? " bg-white" : "bg-white"
                    } text-base p-10px`}
                  >
                    Documentation
                  </NavLink>
                  <NavLink
                    className={`${
                      theme === "light" ? " bg-white" : "bg-white"
                    } text-base p-10px`}
                  >
                    Documentation
                  </NavLink>
                  <NavLink
                    className={`${
                      theme === "light" ? " bg-white" : "bg-white"
                    } text-base p-10px`}
                  >
                    Documentation
                  </NavLink>
                </AccordionDetails>
              </Accordion>
            </li>
            <li className="w-full">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  className={`${
                    theme === "light"
                      ? "bg-F3F4F6 text-black"
                      : "bg-F3F4F6 text-white"
                  } text-lg`}
                >
                  <div className="flex justify-start items-center gap-2">
                    <FolderOpenOutlinedIcon className="text-505765" />
                    Projet labo 2
                  </div>
                </AccordionSummary>
                <AccordionDetails
                  className={`${
                    theme === "light"
                      ? "bg-white text-black"
                      : "bg-white text-white"
                  } w-full flex flex-col gap-1 text-center p-5px_0px`}
                >
                  <NavLink
                    className={`${
                      theme === "light" ? " bg-white" : "bg-white"
                    } text-base p-10px flex justify-start items-center gap-5`}
                  >
                    <AddIcon className="text-1rem" />
                    <p>Nouvel article</p>
                  </NavLink>
                  <NavLink
                    className={`${
                      theme === "light" ? " bg-white" : "bg-white"
                    } text-base p-10px`}
                  >
                    Documentation
                  </NavLink>
                  <NavLink
                    className={`${
                      theme === "light" ? " bg-white" : "bg-white"
                    } text-base p-10px`}
                  >
                    Documentation
                  </NavLink>
                  <NavLink
                    className={`${
                      theme === "light" ? " bg-white" : "bg-white"
                    } text-base p-10px`}
                  >
                    Documentation
                  </NavLink>
                </AccordionDetails>
              </Accordion>
            </li>
            <li className="w-full">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  className={`${
                    theme === "light"
                      ? "bg-F3F4F6 text-black"
                      : "bg-F3F4F6 text-white"
                  } text-lg`}
                >
                  <div className="flex justify-start items-center gap-2">
                    <FolderOpenOutlinedIcon className="text-505765" />
                    Projet labo 3
                  </div>
                </AccordionSummary>
                <AccordionDetails
                  className={`${
                    theme === "light"
                      ? "bg-white text-black"
                      : "bg-white text-white"
                  } w-full flex flex-col gap-1 text-center p-5px_0px`}
                >
                  <NavLink
                    className={`${
                      theme === "light" ? " bg-white" : "bg-white"
                    } text-base p-10px flex justify-start items-center gap-5`}
                  >
                    <AddIcon className="text-1rem" />
                    <p>Nouvel article</p>
                  </NavLink>
                  <NavLink
                    className={`${
                      theme === "light" ? " bg-white" : "bg-white"
                    } text-base p-10px`}
                  >
                    Documentation
                  </NavLink>
                  <NavLink
                    className={`${
                      theme === "light" ? " bg-white" : "bg-white"
                    } text-base p-10px`}
                  >
                    Documentation
                  </NavLink>
                  <NavLink
                    className={`${
                      theme === "light" ? " bg-white" : "bg-white"
                    } text-base p-10px`}
                  >
                    Documentation
                  </NavLink>
                </AccordionDetails>
              </Accordion>
            </li>
            <li className="w-full">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  className={`${
                    theme === "light"
                      ? "bg-F3F4F6 text-black"
                      : "bg-F3F4F6 text-white"
                  } text-lg`}
                >
                  <div className="flex justify-start items-center gap-2">
                    <FolderOpenOutlinedIcon className="text-505765" />
                    Projet labo 4
                  </div>
                </AccordionSummary>
                <AccordionDetails
                  className={`${
                    theme === "light"
                      ? "bg-white text-black"
                      : "bg-white text-white"
                  } w-full flex flex-col gap-1 text-center p-5px_0px`}
                >
                  <NavLink
                    className={`${
                      theme === "light" ? " bg-white" : "bg-white"
                    } text-base p-10px flex justify-start items-center gap-5`}
                  >
                    <AddIcon className="text-1rem" />
                    <p>Nouvel article</p>
                  </NavLink>
                  <NavLink
                    className={`${
                      theme === "light" ? " bg-white" : "bg-white"
                    } text-base p-10px`}
                  >
                    Documentation
                  </NavLink>
                  <NavLink
                    className={`${
                      theme === "light" ? " bg-white" : "bg-white"
                    } text-base p-10px`}
                  >
                    Documentation
                  </NavLink>
                  <NavLink
                    className={`${
                      theme === "light" ? " bg-white" : "bg-white"
                    } text-base p-10px`}
                  >
                    Documentation
                  </NavLink>
                </AccordionDetails>
              </Accordion>
            </li>
          </div>
        </ul>
      </div>
      <div className="flex flex-col gap-2 items-center mb-2">
        <button onClick={handleOpen} className="w-full text-6B7280">
          <div className="flex gap-5 justify-center items-center w-2/4">
            <SettingsOutlinedIcon />
            <button>Settings</button>
          </div>
        </button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <h1 className="text-center text-2rem">SETTINGS</h1>
            <div className="mt-5 pr-5 flex justify-start gap-5 items-center">
              <div className="rounded-full p-2 bg-7e7e7e">
                <button onClick={toggleTheme}>
                  {theme === "light" ? (
                    <NightsStayIcon className="text-2rem text-black cursor-pointer" />
                  ) : (
                    <LightModeIcon className="text-2rem text-white cursor-pointer" />
                  )}
                </button>
              </div>
              <p>Theme mode</p>
            </div>
          </Box>
        </Modal>
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
