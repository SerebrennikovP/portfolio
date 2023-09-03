import React, { useEffect, useRef,useState } from 'react';
import { usePageContext } from "../context/PageContext";
import Ztext from 'react-ztext'
import '../CSS/homepage.css'
import { useResizeDetector } from "react-resize-detector";


const AboutHomePage = () => {
    const { marker, setMarker } = usePageContext();
    const { width, height, ref } = useResizeDetector();
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);
    const [incrementX, setIncrementX] = useState(0.1);
    const [incrementY, setIncrementY] = useState(0.1);
  
    // useEffect(() => {
    //   const interval = setInterval(() => {
    //     setRotateX((prev) => {
    //       if (prev === 5) {
    //         setIncrementX(-0.1);
    //       } else if (prev === -5) {
    //         setIncrementX(0.1);
    //       }
    //       return prev + incrementX;
    //     });
  
    //     // setRotateY((prev) => {
    //     //   if (prev === 5) {
    //     //     setIncrementY(-0.1);
    //     //   } else if (prev === -5) {
    //     //     setIncrementY(0.1);
    //     //   }
    //     //   return prev + incrementY;
    //     // });
    //   }, 1);
  
    //   return () => clearInterval(interval);
    // }, [incrementX, incrementY]);
    return (
        <div ref={ref}
            className={`${marker === 2 ? "opacity-100 text-5xl tall:text-[8vh] sm:text-5xl lg:text-8xl 2xl:text-[12rem] wide:text-[13vh] blur-none" : "opacity-0 text-[0px] blur"
                } overflow-hidden unselectable transition-all ease-in-out duration-400 flex flex-col mt-[20vh] sm:mt-0 sm:justify-center absolute h-[50vh] lg:h-[60vh] px-4 sm:px-2 bg-transparent text-white text-center  z-[20000] w-full `}
        >
            <Ztext
                depth='1rem'
                direction='both'
                event='pointer'
                eventRotation='40deg'
                eventDirection='default'
                fade={false}
                layers={10}
                perspective='500px'
                style={{
                    textShadow: `${width + 16 > height * 2
                        ? "0 0 0.1vw #000,  0 0 0.2vw #000, 0 0 0.3vw #000"
                        : "0 0 0.1vh #000,  0 0 0.2vh #000, 0 0 0.3vh #000"
                        } `,
                }}
            >
                <span onClick={()=>console.log('asdasdasdasd')} className='hover:text-blue-500 transition-all ease-in-out duration-700'>MORE<br />ABOUT ME</span>
            </Ztext>


        </div>
    );
};

export default AboutHomePage;
