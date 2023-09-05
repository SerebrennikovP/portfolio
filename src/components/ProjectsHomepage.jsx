import React, { useEffect, useRef, useState } from 'react';
import { usePageContext } from "../context/PageContext";
import '../CSS/homepage.css'
import { routes } from "../data/constData"
import { NavLink } from 'react-router-dom'

const ProjectsHomepage = () => {
    const { marker, setMarker } = usePageContext();
    return (<>

        <div
            className={`${marker === 3 ? "opacity-100 text-5xl tall:text-[8vh] sm:text-5xl lg:text-[6vw]    wide:text-[13vh] blur-none" : "opacity-0 text-[0px] blur"
                } overflow-hidden unselectable transition-all ease-in-out duration-400 flex flex-col mt-[20vh] sm:mt-[10vh] semilg:mt-[5vh] semilg:pt-[5vh] xxl:h-[47vh] absolute h-[29vh] tall:h-[25vh] semilg:h-[45vh]  px-4 sm:px-2 bg-transparent text-white text-center  z-[260] w-full `}
        >
            <NavLink to={routes.projects}>
                <p className='text-xl text-white hover:underline' >Watch my projects</p>
            </NavLink>

        </div>

    </>
    );
};

export default ProjectsHomepage;
