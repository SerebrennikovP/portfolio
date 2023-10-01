import React, { useEffect, useState } from "react";
import { usePageContext } from "../context/PageContext";
import { useResizeDetector } from "react-resize-detector";
import TextTransition, { presets } from 'react-text-transition';

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
    }, 2000);
    return () => clearTimeout(timeoutText);
  }, [count]);

  return (
    <div
      ref={ref}
      className={`${
        marker === 1 ? "opacity-100" : "opacity-0 unselectable"
      } transition-all ease-in-out duration-700 flex flex-col mt-[10vh] sm:mt-0 sm:justify-center absolute h-[50vh] px-4 sm:px-2 bg-transparent z-[2] w-full`}
    >
      <div className="flex sm:flex-row flex-col">
        <div
          className={` ${
            marker === 1 ? "-mt-[0vw] blur-none" : "-mt-[5vh] sm:-mt-[5vw] blur"
          } transition-all ease-in-out duration-700 text-white flex flex-col justify-center text-5xl lg:text-8xl xxl:text-[10rem] w-full sm:w-1/2  pb-4 sm:pb-0 h-full sm:pe-5 xxl:pe-10 font-['Open Sans'] font-medium `}
          style={{
            textShadow: `${
              width + 16 > height * 2
                ? "0 0 0.15vw #fff,  0 0 0.3vw #fff, 0 0 0.45vw #fff, 0 0 0.6vw #fff"
                : "0 0 0.15vh #fff,  0 0 0.3vh #fff, 0 0 0.45vh #fff, 0 0 0.6vh #fff"
            } `,
          }}
        >
            <TextTransition className="justify-center sm:justify-end " springConfig={presets.wobbly}>{helloText[count % 12]}</TextTransition>
        </div>
        <div
          className={` ${
            marker === 1 ? "-mt-[0vw] blur-none" : "mt-[10vh] sm:mt-[5vw] blur"
          } transition-all ease-in-out duration-700 w-full  text-center sm:text-left sm:w-1/2 pt-4 sm:ps-5 xxl:ps-10 font-['Kanit'] border-l-0 border-t-4 sm:border-t-0 sm:border-l-4 `}
        >
          <div
            className="text-white text-5xl lg:text-8xl xxl:text-[10rem]"
            style={{
              textShadow: `${
                width + 16 > height * 2
                ? "0 0 0.15vw #fff,  0 0 0.3vw #fff, 0 0 0.45vw #fff"
                : "0 0 0.15vh #fff,  0 0 0.3vh #fff, 0 0 0.45vh #fff"
              } `,
            }}
          >
            I'M PAVEL
            <div className="text-white text-[1.7rem] lg:text-[3.4rem] xxl:text-[5.6rem]">
              SEREBRENNIKOV{" "}
            </div>
          </div>
          <div
            className="text-orange-400 text-sm pt-2 sm:pt-0 sm:text-base lg:text-xxl xxl:text-4xl xxl:leading-[4rem]"
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
