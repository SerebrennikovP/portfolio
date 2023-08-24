import React, { useState, useEffect } from "react";
import Circle1 from "./Circle1";
import debounce from "lodash.debounce";
import { usePageContext } from '../context/PageContext'

const Circle = () => {
    const { marker, setMarker } = usePageContext()
    const [startX, setStartX] = useState(null);
    const [startY, setStartY] = useState(null);
    useEffect(() => console.log(marker), [marker])
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
            <div className="w-full flex   justify-center items-center mt-[75vh] sm:mt-[100vh]">
                <div className="absolute  m-0">
                    <div
                        className="w-[80vw] sm:w-[55vw] h-[80vw] sm:h-[55vw] wide:h-[100vh] wide:w-[100vh] border-2 border-[#ffffff40] rounded-full relative transition-all ease-in-out duration-700"
                        style={circleStyle}
                    >
                        <div className="w-3 h-3 sm:w-5 sm:h-5 bg-zinc-200  rounded-full absolute top-[-6px] sm:top-[-10px] left-1/2 transform translate-x-[-50%]"></div>
                    </div>
                </div>
                <div className="absolute">
                    <Circle1 />
                </div>
            </div>
        </>
    );
};

export default Circle;
