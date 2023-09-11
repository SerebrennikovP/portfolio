import React, { useEffect, useRef, useState } from "react";
import { usePageContext } from "../context/PageContext";
import "../CSS/homepage.css";
import { routes } from "../data/constData";
import { NavLink } from "react-router-dom";
import Watch_projects from "../images/Watch_projects.jpg";
import { FaPlayCircle } from "react-icons/fa";
import interior from "../images/interior.jpg";

const ProjectsHomepage = () => {
  const { marker, setMarker } = usePageContext();
  const [hover, setHover] = useState(true);

  return (
    <>
      <img
        src={interior}
        className={`${
          marker === 3 ? "opacity-100  blur-none" : "opacity-0 blur"
        } overflow-clip h-[100vh] object-cover  w-[100vw] projectpage-background unselectable transition-all ease-in-out duration-700   absolute z-[0]  `}
      ></img>
      <div
        className={`${
          marker === 3 ? "opacity-100  blur-none z-[260]" : "opacity-0 blur z-[0]"
        } overflow-hidden unselectable transition-all ease-in-out duration-700    tall:h-[40vh] h-[50vh]  absolute  w-full `}
      >
        <NavLink to={marker === 3 && routes.projects}>
          <div
            onMouseEnter={() => setHover(false)}
            onMouseLeave={() => setHover(true)}
            className={`${
              marker !== 3 ? "cursor-default" : ""
            } relative hover:scale-[1.1] transition-all ease-in-out duration-700 mt-[12vh]`}
          >
            <div
              style={{
                background: hover
                  ? "rgba(255, 255, 255, 0.3)"
                  : "rgba(0, 0, 0, 0.0)",
                boxShadow: hover
                  ? "0 4px 30px rgba(0, 0, 0, 0.3)"
                  : "0 0px 0px rgba(0, 0, 0, 0)",
                backdropFilter: hover ? "blur(8px)" : "blur(0.1px)",
                WebkitBackdropFilter: hover ? "blur(8px)" : "blur(0.1px)",
              }}
              className="z-[60] transition-all ease-in-out duration-700 left-1/2 absolute rounded-[1vw] tall:rounded-[2vh]  translate-x-[-50%]  tall:w-[60vw] w-[50vh] aspect-video"
            ></div>
            <div className="z-[70] left-1/2 absolute rounded-[1vw] tall:rounded-[2vh]   translate-x-[-50%]   tall:w-[60vw] w-[50vh] aspect-video font-[Open Sans]  justify-center text-zinc-700 flex flex-col ">
              <span
                className={`flex flex-row ${
                  hover ? "opacity-100" : "opacity-0"
                } transition-opacity ease-in-out duration-700 justify-center gap-[1vw] tall:gap-[2vh] text-[4.5vh] tall:text-[5vw]`}
              >
                <div className="flex flex-col justify-center">
                  <FaPlayCircle />
                </div>
                WATCH PROJECTS
              </span>
            </div>
            <div
              style={{
                backgroundImage: `url(${Watch_projects})`,
              }}
              className={`drop-shadow-md rounded-[1vw] tall:rounded-[2vh] ${
                hover ? "opacity-25" : "opacity-50"
              }   left-1/2 absolute translate-x-[-50%]  tall:w-[60vw] w-[50vh] z-50 aspect-video inset-0 bg-cover`}
            ></div>
          </div>
        </NavLink>
      </div>
    </>
  );
};

export default ProjectsHomepage;
