import React, { useState, useEffect } from 'react';
import Circle3Image from '../images/circle_3.png';
import { usePageContext } from '../context/PageContext'
import '../CSS/homepage.css'


const Circle3 = () => {
    const { marker, setMarker } = usePageContext()

    return (
        <div className={`${marker === 3 ? 'opacity-100 rotate-[0deg] ' : marker > 3 ? 'opacity-[0%]  rotate-[540deg]  ' : 'opacity-[0%]  rotate-[-540deg] '}transition-all  ease-in-out duration-700 tall:h-[65vw] tall:w-[65vw] h-[65vw] w-[65vw]  sm:h-[45vw] sm:w-[45vw] wide:h-[87vh] wide:w-[87vh]  rounded-full overflow-hidden relative `}>
            <div
                className="absolute inset-0 bg-cover bg-center rotate-container"
                style={{ backgroundImage: `url(${Circle3Image})` }}
            ></div>
        </div>
    );
};

export default Circle3;
