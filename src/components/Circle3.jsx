import React, { useState, useEffect } from 'react';
import Circle3Image from '../images/circle_3.png';
import { usePageContext } from '../context/PageContext'
import '../CSS/homepage.css'


const Circle3 = () => {
    const { marker, setMarker } = usePageContext()

    return (<>
        <div
            className={`${marker === 3 ? 'opacity-100 rotate-[0deg] ' : marker > 3 ? 'opacity-[0%]  rotate-[540deg]  ' : 'opacity-[0%]  rotate-[-540deg] '} transition-all  ease-in-out duration-700 absolute w-full h-full  z-[50] rotate-container  `}
            style={{
                background: "rgba(255, 255, 255, 0.05)",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.3)",
                backdropFilter: "blur(5px)",
                WebkitBackdropFilter: "blur(5px)",clipPath: 'circle(50% at center)'
            }}
        ></div>
        <div className={`${marker === 3 ? 'opacity-100 rotate-[0deg] ' : marker > 3 ? 'opacity-[0%]  rotate-[540deg]  ' : 'opacity-[0%]  rotate-[-540deg] '} transition-all  ease-in-out duration-700 tall:h-[70vw] tall:w-[70vw] h-[70vw] w-[70vw]  sm:h-[37vw] sm:w-[37vw] wide:h-[73vh] wide:w-[73vh]     relative `}
            style={{ clipPath: 'circle(50% at center)' }}
        >
            <div
                className="z-[40] opacity-[10%] absolute inset-0 bg-cover  bg-center rotate-container"
                style={{ backgroundImage: `url(${Circle3Image})` }}
            ></div>
        </div>
        </>
    );
};

export default Circle3;
