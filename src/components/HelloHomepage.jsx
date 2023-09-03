import React, { useEffect, useState } from "react";
import { usePageContext } from "../context/PageContext";
import { useResizeDetector } from "react-resize-detector";

const HelloHomepage = () => {
  const { marker, setMarker } = usePageContext();
  const { width, height, ref } = useResizeDetector();
  const helloText = [
    "HELLO",
    "BONJOUR",
    "مرحبًا",
    "CIAO",
    "你好",
    "ПРИВЕТ",
    "HALLO",
    "שלום",
    "HOLA",
    "ПРИВІТ",
    "नमस्ते",
    "こんにちは",
  ];
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timeoutText = setTimeout(() => {
      setCount((prev) => (prev + 1) % 12);
    }, 1000);
    return () => clearTimeout(timeoutText);
  }, [count]);

  return (
    <div
      ref={ref}
      className={`${
        marker === 1 ? "opacity-100" : "opacity-0"
      } transition-all ease-in-out duration-700 flex flex-col mt-[5vh] sm:mt-0 sm:justify-center absolute h-[50vh] px-4 sm:px-2 bg-transparent z-10 w-full`}
    >
      <div className="flex sm:flex-row flex-col">
        <div
          className={` ${
            marker === 1 ? "-mt-[0vw] blur-none" : "-mt-[5vh] sm:-mt-[5vw] blur"
          } transition-all ease-in-out duration-700 text-white flex flex-col justify-center text-5xl lg:text-8xl 2xl:text-[10rem] w-full sm:w-1/2 text-center sm:text-right pb-4 sm:pe-5 2xl:pe-10 font-['Open Sans'] font-medium `}
          style={{
            textShadow: `${
              width + 16 > height * 2
                ? "0 0 0.1vw #fff,  0 0 0.2vw #fff, 0 0 0.3vw #fff, 0 0 0.4vw #fff"
                : "0 0 0.1vh #fff,  0 0 0.2vh #fff, 0 0 0.3vh #fff, 0 0 0.4vh #fff"
            } `,
          }}
        >
          {helloText[count]}
        </div>
        <div
          className={` ${
            marker === 1 ? "-mt-[0vw] blur-none" : "mt-[10vh] sm:mt-[5vw] blur"
          } transition-all ease-in-out duration-700 w-full  text-center sm:text-left sm:w-1/2 pt-4 sm:ps-5 2xl:ps-10 font-['Kanit'] border-l-0 border-t-4 sm:border-t-0 sm:border-l-4 `}
        >
          <div
            className="text-white text-5xl lg:text-8xl 2xl:text-[10rem]"
            style={{
              textShadow: `${
                width + 16 > height * 2
                  ? "0 0 0.1vw #fff,  0 0 0.2vw #fff, 0 0 0.3vw #fff"
                  : "0 0 0.1vh #fff,  0 0 0.2vh #fff, 0 0 0.3vh #fff"
              } `,
            }}
          >
            I'M PAVEL
            <div className="text-white text-[1.7rem] lg:text-[3.4rem] 2xl:text-[5.6rem]">
              SEREBRENNIKOV{" "}
            </div>
          </div>
          <div
            className="text-orange-400 text-sm pt-2 sm:pt-0 sm:text-base lg:text-2xl 2xl:text-4xl 2xl:leading-[4rem]"
            style={{
              textShadow: `${
                width + 16 > height * 2
                  ? "0 0 0.1vw #FFAF04,  0 0 0.2vw #FFAF04, 0 0 0.3vw #FFAF04"
                  : "0 0 0.1vh #FFAF04,  0 0 0.2vh #FFAF04, 0 0 0.3vh #FFAF04"
              } `,
            }}
          >
            FULL-STACK DEVELOPER
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelloHomepage;
