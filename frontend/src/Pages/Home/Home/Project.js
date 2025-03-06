import React from "react";
import { ThemeState } from "../../Context/UseContext";
// import logo from "../../images/Logo_wikiPi_panda.png";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import XIcon from "@mui/icons-material/X";
// import FacebookIcon from "@mui/icons-material/Facebook";

function Project() {
  const {
    state: { theme },
  } = ThemeState();
  return (
    <div
      className={`${theme === "light" ? "bg-white" : "bg-252525"
        } flex justify-centre items-start w-full min-h-100vh`}
    >
      <div className={`m-4 p-4 size-full p-4 rounded-[12px] border-dotted border-2 border-stone-300`}>
        <div className="bg-C81B1B rounded-[8px] p-12 text-balance text-white flex justify-between"
        ><div className="gap-3"><p>La base documentaire pour le Labo</p><h1 className="text-2xl font-bold">WikIpi</h1></div>
          <div className="justify-content: flex-end;">
            <div className="flex space-x-4"><button className="bg-white rounded-[4px] p-4 text-red-600 content-center">Créer un nouveau projet</button><button className="bg-black rounded-[4px] p-4 text-white content-center">Devenir Modérateur</button></div>
          </div>
        </div>
        <div className="pt-4">
          <p class="text-2xl font-bold">Actualités</p>
          <div className="pt-4 justify-between flex space-x-8">
            <div className={`size-full border-solid border border-stone-400 shadow-lg shadow-stone-300`}>
              <div className="m-4">
                <div className="w-24 bg-stone-300 rounded-[16px] p-2 text-center mb-2"><p class="text-xs font-bold text-stone-700">Nom Projet</p></div>
                <p class="text-lg font-bold mb-2">Lorem ipsum</p>
                <p class="text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                <div className="justify-start flex space-x-4">
                  <div className="w-10 h-10 bg-red-300 rounded-[22px] p-2 text-center mb-2"><p class="text-sm">;)</p></div>
                  <div className="text-sm align-middle">
                    <p>Astrid Pierron</p><p>06/03/2024</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={`size-full border-solid border border-stone-400 shadow-lg shadow-stone-300`}>
            <div className="m-4">
                <div className="w-24 bg-stone-300 rounded-[16px] p-2 text-center mb-2"><p class="text-xs font-bold text-stone-700">Nom Projet</p></div>
                <p class="text-lg font-bold mb-2">Lorem ipsum</p>
                <p class="text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                <div className="justify-start flex space-x-4">
                  <div className="w-10 h-10 bg-red-300 rounded-[22px] p-2 text-center mb-2"><p class="text-sm">;)</p></div>
                  <div className="text-sm align-middle">
                    <p>Astrid Pierron</p><p>06/03/2024</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={`size-full border-solid border border-stone-400 shadow-lg shadow-stone-300`}>
            <div className="m-4">
                <div className="w-24 bg-stone-300 rounded-[16px] p-2 text-center mb-2"><p class="text-xs font-bold text-stone-700">Nom Projet</p></div>
                <p class="text-lg font-bold mb-2">Lorem ipsum</p>
                <p class="text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                <div className="justify-start flex space-x-4">
                  <div className="w-10 h-10 bg-red-300 rounded-[22px] p-2 text-center mb-2"><p class="text-sm">;)</p></div>
                  <div className="text-sm align-middle">
                    <p>Astrid Pierron</p><p>06/03/2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
