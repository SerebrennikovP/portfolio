import React, { useState, useEffect } from "react";
import Circle1 from "./Circle1";
import debounce from "lodash.debounce";
import { usePageContext } from "../context/PageContext";
import Circle2 from "./Circle2";
import Circle3 from "./Circle3";
import Circle4 from "./Circle4";
import Circle5 from "./Circle5";
import "../CSS/homepage.css";

const Circle = () => {
    const { marker, setMarker } = usePageContext();

    const nextMarker = () => setMarker((prev) => Math.min(prev + 1, 5));
    const prevMarker = () => setMarker((prev) => Math.max(prev - 1, 1));
    const debouncedNextMarker = debounce(nextMarker, 300, {
        leading: true,
        trailing: false,
    });
    const debouncedPrevMarker = debounce(prevMarker, 50, {
        leading: true,
        trailing: false,
    });
    const handleScroll = (event) => {
        if (event.deltaY > 50||event.deltaX < -50) {
            debouncedNextMarker()
        }
        if (event.deltaY < -50 || event.deltaX >50) {
            debouncedPrevMarker()
        }
    };

    const handleKeyUp = (event) => {
        if (event.key === "ArrowRight") {
            nextMarker();
        } else if (event.key === "ArrowLeft") {
            prevMarker();
        }
    };

    function createEmptySpaces(count) {
        const spaces = '\u00A0';
        return spaces.repeat(count);
    }

    useEffect(() => {
        window.addEventListener("wheel", handleScroll);
        window.addEventListener("keyup", handleKeyUp);
        return () => {
            window.removeEventListener("wheel", handleScroll);
            debouncedPrevMarker.cancel();
            debouncedNextMarker.cancel();
            window.removeEventListener("keyup", handleKeyUp);
        };
    }, []);

    const circleStyle = {
        transform: `rotate(${-66 + (marker - 1) * 33}deg)`,
    };

    return (
        <div className="w-full h-full overflow-hidden absolute">

            <div className="w-full flex   justify-center items-center  tall:mt-[75vh] mt-[100vh]">
                <div className="absolute  m-0">
                    <div
                        className={`z-[150] text-[2px] -mt-[17vw] -ms-[17vw]  w-[114vw] h-[114vw] sm:w-[60vw] sm:h-[60vw] sm:-ms-[9vw] sm:-mt-[9vw] tall:w-[114vw] tall:h-[114vw] tall:-mt-[17vw] tall:-ms-[17vw] wide:w-[117vh] wide:h-[117vh] wide:-mt-[17vh] wide:-ms-[17vh]   rounded-full absolute `}
                    >
                        <svg
                            viewBox="0 0 100 100"
                            width="100%"
                            height="100%"
                            fill={marker >= 3 ? "#000" : "#fff"}
                        >
                            <defs>
                                <path
                                    id="circle-menu"
                                    d="
        M 50, 50
        m -37, 0
        a 37,37 0 1,1 74,0
        a 37,37 0 1,1 -74,0"
                                />
                            </defs>
                            <text>
                                <textPath href="#circle-menu" className="unselectable font-['Kanit']">
                                    <tspan className="cursor-default text-[55px]">
                                        {/* {createEmptySpaces(27)} */}
                                        &nbsp;
                                    </tspan>
                                    <tspan
                                        className={`cursor-pointer hover:opacity-100 transition-all ease-in-out duration-400 ${marker === 1 ? "opacity-100" : "opacity-50"
                                            }`}
                                        onClick={() => setMarker(1)}
                                    >
                                        HELLO
                                    </tspan>
                                    <tspan className="cursor-default text-[59px]">
                                        {/* {createEmptySpaces(29)} */}
                                        &nbsp;
                                    </tspan>
                                    <tspan
                                        className={`cursor-pointer hover:opacity-100 transition-all ease-in-out duration-400 ${marker === 2 ? "opacity-100" : "opacity-50"
                                            }`}
                                        onClick={() => setMarker(2)}
                                    >
                                        ABOUT ME
                                    </tspan>
                                    <tspan className="cursor-default text-[52px]">
                                        {/* {createEmptySpaces(26)} */}
                                        &nbsp;
                                    </tspan>
                                    <tspan
                                        className={`cursor-pointer hover:opacity-100 transition-all ease-in-out duration-400 ${marker === 3 ? "opacity-100" : "opacity-50"
                                            }`}
                                        onClick={() => setMarker(3)}
                                    >
                                        PROJECTS
                                    </tspan>
                                    <tspan className="cursor-default text-[59px]">
                                        {/* {createEmptySpaces(30)} */}
                                        &nbsp;
                                    </tspan>
                                    <tspan
                                        className={`cursor-pointer hover:opacity-100 transition-all ease-in-out duration-400 ${marker === 4 ? "opacity-100" : "opacity-50"
                                            }`}
                                        onClick={() => setMarker(4)}
                                    >
                                        SKILLS
                                    </tspan>
                                    <tspan className="cursor-default text-[62px]">
                                        {/* {createEmptySpaces(29)} */}
                                        &nbsp;
                                    </tspan>
                                    <tspan
                                        className={`cursor-pointer hover:opacity-100 transition-all ease-in-out duration-400 ${marker === 5 ? "opacity-100" : "opacity-50"
                                            }`}
                                        onClick={() => setMarker(5)}
                                    >
                                        CONTACT
                                    </tspan>
                                </textPath>
                            </text>
                        </svg>
                    </div>
                    <div
                        className={`tall:w-[80vw] tall:h-[80vw] w-[80vw] h-[80vw] sm:w-[42vw]  sm:h-[42vw] wide:h-[83vh] wide:w-[83vh] border-2 ${marker >= 3 ? "border-[#00000060]" : "border-[#ffffff40]"
                            } rounded-full relative transition-all ease-in-out duration-700`}
                        style={circleStyle}
                    >
                        <div
                            className={`w-2 h-2 md:w-3 md:h-3 xxl:w-5 xxl:h-5 ${marker >= 3 ? "bg-zinc-800" : "bg-zinc-200"
                                }   rounded-full absolute top-[-4px] md:top-[-6px] xxl:top-[-10px] left-1/2 transform translate-x-[-50%]`}
                        ></div>
                    </div>
                </div>
                <div className={`absolute rounded-full ${marker === 1 ? "z-[200]" : ""}`}>
                    <Circle1 />
                </div>
                <div className={`absolute rounded-full ${marker === 2 ? "z-[200]" : ""}`}>
                    <Circle2 />
                </div>
                <div className={`absolute rounded-full ${marker === 3 ? "z-[200]" : ""}`}>
                    <Circle3 />
                </div>
                <div className={`absolute rounded-full ${marker === 4 ? "z-[200]" : ""}`}>
                    <Circle4 />
                </div>
                <div className={`absolute rounded-full ${marker === 5 ? "z-[200]" : ""}`}>
                    <Circle5 />
                </div>
            </div>
        </div>
    );
};

export default Circle;
