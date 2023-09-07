import React, { useState, useEffect } from "react";
import CircleWrapper from "../components/CircleWrapper";
import "../CSS/homepage.css";
import { usePageContext } from "../context/PageContext";
import bg_1 from "../video/bg_1.gif";
import HelloHomepage from "../components/HelloHomepage"
import AboutHomepage from "../components/AboutHomepage"
import ProjectsHomepage from "../components/ProjectsHomepage"
import { useSwipeable } from 'react-swipeable';

const Homepage = () => {
  const { marker, setMarker } = usePageContext();
  const handlers = useSwipeable({
    onSwipedRight: () =>setMarker((prev) => Math.max(prev - 1, 1)), 
    onSwipedLeft:() => setMarker((prev) => Math.min(prev + 1, 5)),
    delta: 40, 
    preventScrollOnSwipe: true,
  });
  return (<div {...handlers} className="overflow-clip">
    <div
      className={`${marker === 1 ? 'opacity-100' : 'opacity-0'} w-[100%] h-[100%] overflow-clip transition-all ease-in-out duration-700 absolute   blur-[3px]`}
      style={{
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100vw 100vh',
        backgroundImage: `url(${bg_1})`,
      }}>
    </div>
    <HelloHomepage/>
    <AboutHomepage/>
    <ProjectsHomepage/>
    <div
      className={`${marker === 1 ? "hello-section" : marker === 2 ? "about-section" : marker === 3 ? 'projects-section' : marker === 4 ? 'skills-section' : marker === 5 ? 'contact-section' : "bg-black"
        } w-[100vw] h-[100vh] overflow-clip relative transition-all  ease-in-out duration-700`}
    >
      <CircleWrapper />
    </div></div>
  );
};

export default Homepage;
