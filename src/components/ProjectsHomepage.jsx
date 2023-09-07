import React, { useEffect, useRef, useState } from 'react';
import { usePageContext } from "../context/PageContext";
import '../CSS/homepage.css'
import { routes } from "../data/constData"
import { NavLink } from 'react-router-dom'
import Watch_projects from '../images/Watch_projects.jpg'

const ProjectsHomepage = () => {
    const { marker, setMarker } = usePageContext();
    return (<>

        <div
            className={`${marker === 3 ? "opacity-100 text-5xl tall:text-[8vh] sm:text-5xl lg:text-[6vw]    wide:text-[13vh] blur-none" : "opacity-0 text-[0px] blur"
                } overflow-hidden unselectable transition-all ease-in-out duration-700 flex flex-col justify-center pt-10 h-[50vh]  absolute z-[260] w-full `}
        >

            <NavLink to={routes.projects}>
                <div style={{backgroundImage:`url(${Watch_projects})`}} className={`mx-auto -mt-[7vh] drop-shadow-[0vw_0vw_4vw_rgba(255,0,0,0.75)]  w-[50vh] aspect-video   inset-0 bg-cover`}></div>
            </NavLink>

        </div>

    </>
    );
};

export default ProjectsHomepage;
