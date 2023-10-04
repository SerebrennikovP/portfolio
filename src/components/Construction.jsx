import React from "react";
import { BsLinkedin } from "react-icons/bs";

const Construction = () => {
  return (
    <div className="w-full flex flex-col gap-7 text-center p-10">
      <p className='text-xl sm:text-3xl text-black font-["Orbitron"]'>
        The page is under construction...
      </p>
      <p className="text-base sm:text-xl  text-black font-[Montserrat]">
        But now you can find information on my LinkedIn Page
      </p>
      <BsLinkedin
        onClick={() =>
          window.open("https://www.linkedin.com/in/serebrennikovp/", "_blank")
        }
        className="text-[#0a66c2] mx-auto cursor-pointer hover:scale-125 sm:text-[7rem] text-[5rem] transition-all ease-in-out duration-500 p-[1.5vh] "
      />
      <a href="https://www.linkedin.com/in/serebrennikovp/" target="_blank" className="text-blue-400 hover:text-blue-600">www.linkedin.com/in/SerebrennikovP</a>
    </div>
  );
};

export default Construction;
