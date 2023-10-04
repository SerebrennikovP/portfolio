import React, { useEffect, useRef, useState } from "react";
import { usePageContext } from "../context/PageContext";
import "../CSS/homepage.css";
import { useResizeDetector } from "react-resize-detector";
import { Helmet } from "react-helmet";
import { routes } from "../data/constData";
import { NavLink } from "react-router-dom";

const AboutHomepage = () => {
  const { marker, setMarker } = usePageContext();
  const { width, height, ref } = useResizeDetector();
  return (
    <>
      <div
        ref={ref}
        className={`${
          marker === 2
            ? "opacity-100 text-5xl tall:text-[8vh] sm:text-5xl lg:text-[6vw] z-[260]   wide:text-[13vh] blur-none"
            : " z-0 opacity-0 text-[0px] blur"
        }   unselectable transition-all ease-in-out duration-400 flex flex-col mt-[20vh] sm:mt-[10vh] semilg:mt-[5vh] semilg:pt-[5vh] xxl:h-[47vh] absolute h-[29vh] tall:h-[25vh] semilg:h-[45vh]  px-4 sm:px-2 bg-transparent text-white text-center   w-full `}
      >
        <NavLink to={marker === 2 && routes.about}>
          <span
            data-z
            data-z-event="pointer"
            data-z-layers="10"
            data-z-depth="1rem"
            data-z-perspective="500px"
            className=" hover:text-blue-500 cursor-pointer transition-all ease-in-out duration-400"
            style={{
              textShadow: `${
                width + 16 > height * 2
                  ? "0 0 0.1vw #000,  0 0 0.2vw #000, 0 0 0.3vw #000"
                  : "0 0 0.1vh #000,  0 0 0.2vh #000, 0 0 0.3vh #000"
              } `,
            }}
          >
            MORE
            <br />
            ABOUT ME
          </span>
        </NavLink>
      </div>

      <Helmet>
        <script src="https://bennettfeely.com/ztext/js/ztext.min.js"></script>
      </Helmet>
    </>
  );
};

export default AboutHomepage;
