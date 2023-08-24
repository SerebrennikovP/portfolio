import React, { useState, useEffect } from 'react';
import Circle1Image from '../images/circle_1.png';

const generateRandomChar = () => String.fromCharCode(Math.random() * (126 - 33) + 33);

const Circle1 = () => {
    const [matrixText, setMatrixText] = useState([]);

    useEffect(() => {
        const initialText = [];
        setMatrixText(initialText);

        const intervalId = setInterval(() => {
            setMatrixText(prevText => {
                const newText = [...prevText];
                const randomChar = generateRandomChar();
                newText.push(randomChar)
                return newText;
            });
        }, 4);

        const intervalIdSlow = setInterval(() => {
            setMatrixText(prevText => {
                const newText = [...prevText];
                const randomChar = generateRandomChar();
                newText[Math.floor(Math.random() * newText.length)] = randomChar;
                return newText;
            });
        }, 50);
        setTimeout(() => {
            clearInterval(intervalId);
        }, 6000);

        return () => {
            clearInterval(intervalId);
            clearInterval(intervalIdSlow);
        };
    }, []);


    return (
            <div className=" h-[65vw] w-[65vw] sm:h-[45vw] sm:w-[45vw] wide:h-[87vh] wide:w-[87vh] rounded-full overflow-hidden relative">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${Circle1Image})` }}
                ></div>
                <div className="absolute inset-0 opacity-50 text-green-600 flex break-all">
                    <p
                        className=" font-['Tektur'] text-xs sm:text-base md:text-2xl"
                    >
                        {matrixText.join('')}
                    </p>
                </div>
            </div>
    );
};

export default Circle1;
