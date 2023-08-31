import React, { useState, useEffect } from "react";
import Circle1 from "./Circle1";
import debounce from "lodash.debounce";
import { usePageContext } from '../context/PageContext'
import Circle2 from "./Circle2";
import Circle3 from "./Circle3";
import Circle4 from "./Circle4";
import Circle5 from "./Circle5";

const Circle = () => {
    const { marker, setMarker } = usePageContext()
    const [startX, setStartX] = useState(null);
    const [startY, setStartY] = useState(null);

    const nextMarker = () => setMarker((prev) => Math.min(prev + 1, 5));
    const prevMarker = () => setMarker((prev) => Math.max(prev - 1, 1));

    const handleScroll = (event) => {
        if (event.deltaY > 0) {
            nextMarker();
        }
        if (event.deltaY < 0) {
            prevMarker();
        }
    };

    const handleTouchStart = (event) => {
        setStartX(event.touches[0].clientX);
        setStartY(event.touches[0].clientY);
    };

    const handleTouchMove = (event) => {
        if (!startX || !startY) return;
        const deltaX = event.touches[0].clientX - startX;
        const deltaY = event.touches[0].clientY - startY;

        if (Math.abs(deltaX) > Math.abs(deltaY)) {
            if (deltaX > 0) {
                nextMarker();
            } else {
                prevMarker();
            }
        } else {
            if (deltaY > 0) {
                nextMarker();
            } else {
                prevMarker();
            }
        }

        setStartX(null);
        setStartY(null);
    };
    const debouncedHandleScroll = debounce(handleScroll, 300, {
        leading: true,
        trailing: false,
    });
    const handleKeyUp = (event) => {
        if (event.key === "ArrowRight") {
            nextMarker();
        } else if (event.key === "ArrowLeft") {
            prevMarker();
        }
    };

    useEffect(() => {
        window.addEventListener("wheel", debouncedHandleScroll);
        window.addEventListener("touchstart", handleTouchStart);
        window.addEventListener("touchmove", handleTouchMove);
        window.addEventListener("keyup", handleKeyUp);
        return () => {
            window.removeEventListener("wheel", debouncedHandleScroll);
            debouncedHandleScroll.cancel();
            window.removeEventListener("touchstart", handleTouchStart);
            window.removeEventListener("touchmove", handleTouchMove);
            window.removeEventListener("keyup", handleKeyUp);
        };
    }, [startX, startY]);

    const circleStyle = {
        transform: `rotate(${(-66) + (marker - 1) * 33}deg)`,
    };

    return (
        <>
            <div className="w-full flex   justify-center items-center tall:mt-[75vh] mt-[75vh] sm:mt-[100vh]">
                <div className="absolute  m-0">
                    <div
                        className={`tall:w-[80vw] tall:h-[80vw] w-[80vw] h-[80vw] sm:w-[55vw]  sm:h-[55vw] wide:h-[100vh] wide:w-[100vh] border-2 ${marker >= 4 ? 'border-[#00000060]' : 'border-[#ffffff40]'} rounded-full relative transition-all ease-in-out duration-700`}
                        style={circleStyle}
                    >
                        <div className={`w-3 h-3 sm:w-5 sm:h-5 ${marker >= 4 ? 'bg-zinc-800' : 'bg-zinc-200'}   rounded-full absolute top-[-6px] sm:top-[-10px] left-1/2 transform translate-x-[-50%]`}></div>
                    </div>
                </div>
                <div className={`absolute ${marker===1?'z-[200]':''}`}>
                    <Circle1 />
                </div>
                <div className={`absolute ${marker===2?'z-[200]':''}`}>
                    <Circle2 />
                </div>
                <div className={`absolute ${marker===3?'z-[200]':''}`}>
                    <Circle3 />
                </div>
                <div className={`absolute ${marker===4?'z-[200]':''}`}>
                    <Circle4 />
                </div>
                <div className={`absolute ${marker===5?'z-[200]':''}`}>
                    <Circle5 />
                </div>
            </div>
        </>
    );
};

export default Circle;
