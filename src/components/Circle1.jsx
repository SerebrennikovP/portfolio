import React, { useState, useEffect } from 'react';
import Circle1Image from '../images/circle_1.png';
import { usePageContext } from '../context/PageContext'
import { initialText } from '../data/constData'


const Circle1 = () => {
    const { marker, setMarker } = usePageContext()
    const [matrixText, setMatrixText] = useState('');
    const [hover, setHover] = useState(false)

    const generateRandomChar = () => String.fromCharCode(Math.random() * (126 - 33) + 33);

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (currentIndex < initialText.length) {
                setMatrixText(prevText => prevText + initialText.charAt(currentIndex));
                setCurrentIndex(prevIndex => prevIndex + 1);
            } else {
                clearInterval(intervalId);
            }
        }, 1);
        return () => {
            clearInterval(intervalId);
        };
    }, [currentIndex]);

    useEffect(() => {
        let intervalIdSlow;

        if (hover) {
            intervalIdSlow = setInterval(() => {
                setMatrixText(prevText => {
                    const newText = [...prevText];
                    const randomChar = generateRandomChar();
                    const randomIndex = Math.floor(Math.random() * newText.length);
                    newText[randomIndex] = randomChar;
                    return newText.join('');
                });
            }, 5);
        } else {
            intervalIdSlow = setInterval(() => {
                setMatrixText(prevText => {
                    const newText = [...prevText];
                    const randomChar = generateRandomChar();
                    const randomIndex = Math.floor(Math.random() * newText.length);
                    newText[randomIndex] = randomChar;
                    return newText.join('');
                });
            }, 100);
        }

        return () => {
            clearInterval(intervalIdSlow);
        };
    }, [hover]);



    return (
        <div onMouseOver={() => { setHover(true) }} onMouseLeave={() => { setHover(false) }} className={`${marker === 1 ? 'opacity-100 ' : 'opacity-0 display-none rotate-[540deg] transition-transform'}transition-all  ease-in-out duration-700 tall:h-[70vw] tall:w-[70vw] h-[70vw] w-[70vw] cursor-default sm:h-[37vw] sm:w-[37vw] wide:h-[73vh] wide:w-[73vh] rotate-[0deg] rounded-full  relative`}
        style={{ clipPath: 'circle(50% at center)' }}
        >
            <div
                className="absolute  inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${Circle1Image})` }}
            ></div>
            <div className="absolute  inset-0 opacity-[65%] hover:text-green-600 text-[#F27405] flex break-all">
                <p
                    style={{ textShadow: `0 0 1px #fff,  0 0 2px #000, 0 0 3px #000, 0 0 4px #000` }}
                    className=" font-['Tektur'] text-xs sm:text-sm md:text-xl xl:text-xxl xxl:text-xxxl xxxl:text-4xl"
                >
                    {matrixText}
                </p>
            </div>
        </div>
    );
};

export default Circle1;
