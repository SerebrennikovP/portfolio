import React, { useState, useEffect } from "react";
import { usePageContext } from "../context/PageContext";
import "../CSS/homepage.css";
import { ImStarFull } from "react-icons/im";
import { FaSquareFull } from "react-icons/fa";
import { IoTriangleSharp } from "react-icons/io5";
import { FaCircle } from "react-icons/fa";

const Circle5 = () => {
    const { marker, setMarker } = usePageContext();
    const [count, setCount] = useState(1);
    const [hideCircle, setHideCircle] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prev) => (prev === 4 ? 1 : prev + 1));
        }, 3000);
        return () => {
            clearInterval(interval);
        };
    }, []);
    useEffect(() => {
        if (count === 1) {
            setTimeout(() => {
                setHideCircle(false);
            }, 1500);
        } else setHideCircle(true);
    }, [count]);
    return (
        <>
            <div
                className={`${marker === 5
                        ? "opacity-100 rotate-[0deg] "
                        : "opacity-[0%]  rotate-[-540deg]"
                    } tall:h-[70vw] tall:w-[70vw] h-[70vw] w-[70vw]  sm:h-[37vw] sm:w-[37vw] wide:h-[73vh] wide:w-[73vh] bg-red-600 rounded-full  overflow-clip relative flex flex-col justify-center  transition-all   ease-in-out duration-700`}
                    style={{ clipPath: 'circle(50% at center)' }}
            >
                <svg
                    className="unselectable rounded-svg rotate-container-contact hover:fill-white cursor-default text-xs tracking-[.09em] absolute z-[100] font-['Orbitron'] rounded-full"
                    viewBox="0 0 100 100"
                    width="100%"
                    height="100%"
                    stroke="black"
                    strokeWidth="0.2"
                    fill="#ffffff00"
                >
                    <defs>
                        <path
                            id="circle"
                            d="
        M 50, 50
        m -37, 0
        a 37,37 0 1,1 74,0
        a 37,37 0 1,1 -74,0"
                        />
                    </defs>
                    <text>
                        <textPath
                            href="#circle"
                            className="rotate-container-contact "
                        >
                            CONTACT ME | CONTACT ME | CONTACT ME | CONTACT ME | CONTACT ME | CONTACT ME | CONTACT ME | CONTACT ME | CONTACT ME | CONTACT ME | CONTACT ME | CONTACT ME |
                        </textPath>
                    </text>
                </svg>

                <ImStarFull
                    className={`${count === 1 || count === 2 ? "scale-[120]" : "scale-[0] "
                        } z-[30] text-[1.5vw] sm:text-[1vw] tall:text-[1.2vh] wide:text-[3vh] transition-transform  ease-in-out duration-1000 text-blue-500 place-self-center`}
                />
                <FaSquareFull
                    className={`${count === 2 || count === 3 ? "scale-[50]" : "scale-[0] "
                        } z-[40] text-[1.5vw] sm:text-[1vw] tall:text-[1.2vh] wide:text-[3vh] transition-transform ease-in-out duration-1000 text-pink-500 place-self-center`}
                />
                <IoTriangleSharp
                    className={`${count === 3 || count === 4 ? "scale-[125]" : "scale-[0] "
                        } z-[50] text-[1.5vw] sm:text-[1vw] tall:text-[1.2vh] wide:text-[3vh] transition-transform  ease-in-out duration-1000 text-green-500 place-self-center`}
                />
                <FaCircle
                    className={`${count === 4 || count === 1 ? "scale-[55] " : "scale-[0]"
                        } ${!hideCircle ? "hidden" : ""
                        } z-[60] text-[1.5vw] sm:text-[1vw] tall:text-[1.2vh] wide:text-[3vh] transition-transform  ease-in-out duration-1000 text-fuchsia-600 place-self-center`}
                />
                <ImStarFull
                    className={`${count === 1 ? "scale-[120]" : "scale-[0] "} z-[70] ${count === 2 ? "hidden" : ""
                        } text-[1.5vw] sm:text-[1vw] tall:text-[1.2vh] wide:text-[3vh] transition-transform  ease-in-out duration-1000 text-blue-500 place-self-center`}
                />
            </div>
        </>
    );
};

export default Circle5;
