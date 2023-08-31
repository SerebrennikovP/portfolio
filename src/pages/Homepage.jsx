import React, { useState, useEffect } from "react";
import CircleWrapper from "../components/CircleWrapper";
import "../CSS/homepage.css";
import { usePageContext } from "../context/PageContext";
import bg_1 from "../video/bg_1.mp4"

const Homepage = () => {
  const { marker, setMarker } = usePageContext();

  return (<>
    <video className={`${marker === 1 ? 'opacity-100' : 'opacity-0'} transition-all ease-in-out duration-700 absolute w-full h-full object-cover blur-[2px]`} autoPlay muted loop>
      <source src={bg_1} type="video/mp4" />
    </video>
    <div
      className={`${marker === 1 ? "hello-section" : marker === 2 ? "about-section" : marker === 3 ? 'projects-section' : marker === 4 ? 'skills-section' : marker === 5 ? 'contact-section' : "bg-black"
        } w-[100vw] h-[100vh] overflow-hidden relative transition-all  ease-in-out duration-700`}
    >
      <CircleWrapper />
    </div></>
  );
};

export default Homepage;
