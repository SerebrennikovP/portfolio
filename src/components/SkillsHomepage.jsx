import React, { useEffect, useRef, useState } from 'react';
import { usePageContext } from "../context/PageContext";
import '../CSS/homepage.css'
import { useResizeDetector } from "react-resize-detector";
import StockChart from './StockChart';
import { routes } from "../data/constData";
import { NavLink } from "react-router-dom";

const SkillsHomepage = () => {
    const { marker, setMarker } = usePageContext();
    const { width, height, ref } = useResizeDetector();
    return (<>
        <NavLink to={marker === 4 && routes.skills}>
            <div ref={ref}
                className={`${marker === 4 ? "opacity-100 z-[60] blur-none" : " z-0 opacity-0 text-[0px] blur"
                    }   unselectable transition-all ease-in-out duration-700 flex flex-col  absolute h-[45vh] tall:h-[40vh]  p-4 sm:px-2 justify-center w-full `}
            >
                <StockChart />
            </div>
        </NavLink>
    </>
    );
};

export default SkillsHomepage;
