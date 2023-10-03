import React, { useEffect, useState } from "react";
import { usePageContext } from "../context/PageContext";
import "../CSS/homepage.css";
import { BsLinkedin, BsGithub, BsFillTelephoneFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTelegram } from "react-icons/fa";

const ContactHomepage = () => {
  const [translate, setTranslate] = useState("");
  const { marker, setMarker } = usePageContext();

  return (
    <>
      <div
        className={`${
          marker === 5 ? "opacity-100 z-[300] blur-none translate-y-0" : "translate-y-[10vh] opacity-0 unselectable z-[0] blur-lg"
        }   transition-all absolute ease-in-out duration-700 absolute w-full flex flex-col mt-[5vh] h-[40%] justify-center`}
      >
        <div className="flex flex-col gap-[3vw]">
          <div className="flex flex-col sm:flex-row font-['Kanit'] font-light">
            <div className="flex flex-row w-full sm:w-3/5 justify-center gap-x-[5vw] my-auto">
              <div
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/serebrennikovp/",
                    "_blank"
                  )
                }
                onMouseOver={() => setTranslate("link")}
                onMouseLeave={() => setTranslate("")}
                className={`bg-black cursor-pointer transition-all ease-in-out duration-500 ${
                  translate === "link" ? "scale-125" : "scale-100"
                }`}
              >
                <div
                  className={` bg-[#0a66c2] shadow-0 ${
                    translate === "link"
                      ? "shadow-[0.5vw_0.5vw_white] translate-x-[-1vw] translate-y-[-1vw]"
                      : "translate-x-0 translate-y-0"
                  } transition-all ease-in-out duration-500`}
                >
                  <BsLinkedin
                    className={`${
                      translate === "link"
                        ? "text-white"
                        : "text-[#ffd900] translate-y-0"
                    } sm:text-[10vw] text-[9vh] wide:text-[15vh] transition-all ease-in-out duration-500 p-[1.5vh]  sm:p-[2vw] wide:p-[3vh] `}
                  />
                </div>
              </div>

              <div
                onClick={() =>
                  window.open("https://github.com/SerebrennikovP", "_blank")
                }
                onMouseOver={() => setTranslate("git")}
                onMouseLeave={() => setTranslate("")}
                className={`bg-black cursor-pointer transition-all ease-in-out duration-500 ${
                  translate === "git" ? "scale-125" : "scale-100"
                }`}
              >
                <div
                  className={` bg-[#333] shadow-0 ${
                    translate === "git"
                      ? "shadow-[0.5vw_0.5vw_white] translate-x-[-1vw] translate-y-[-1vw]"
                      : "translate-x-0 translate-y-0"
                  } transition-all ease-in-out duration-500`}
                >
                  <BsGithub
                    className={`${
                      translate === "git"
                        ? "text-white"
                        : "text-[#ffd900] translate-y-0"
                    } sm:text-[10vw] text-[9vh] wide:text-[15vh] transition-all ease-in-out duration-500 p-[1.5vh] sm:p-[2vw] wide:p-[3vh]`}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col my-[1vh] sm:my-[0vh] mx-auto">
              <a
                href="https://maps.app.goo.gl/qBe5HYWNnaWT1woB9"
                target="_blank"
                className="underline-hover-effect text-gray-900 sm:text-[1.5vw] text-[2.2vh] wide:text-[3vh] wide:text-[3vh] flex flex-row gap-[0.5vw]"
              >
                <FaLocationDot className="sm:text-[1.2vw] wide:text-[2.4vh] text-[1.8vh]  my-auto" />
                Tel-Aviv, Israel{" "}
              </a>
              <a
                href="tel:+972536219815"
                className="underline-hover-effect text-gray-900 sm:text-[1.5vw] text-[2.2vh] wide:text-[3vh] flex flex-row gap-[0.5vw]"
              >
                <BsFillTelephoneFill className="sm:text-[1.2vw] wide:text-[2.4vh] text-[1.8vh] my-auto" />
                +972-53-621-98-15
              </a>
              <a
                href="mailto:serebrennikov.p.d@gmail.com"
                className="underline-hover-effect text-gray-900 sm:text-[1.5vw] text-[2.2vh] wide:text-[3vh] flex flex-row gap-[0.5vw]"
              >
                <MdEmail className="sm:text-[1.2vw] wide:text-[2.4vh] text-[1.8vh] my-auto" />
                Serebrennikov.P.D@gmail.com
              </a>

              <div className="flex flex-row gap-[1.2vh] sm:gap-[1.4vw] mt-[0.6vw]">
                <a href="https://wa.me/972536219815" target="_blank">
                  <IoLogoWhatsapp className="sm:text-[3vw] text-[4vh] hover:text-white text-[#25D366] my-auto stroke-[0.5vh] sm:stroke-[0.5vw] wide:stroke-[0.7vh] stroke-black" />
                </a>
                <a href="https://t.me/serebrennikov_p" target="_blank">
                  <FaTelegram className="sm:text-[3vw] text-[4vh]  hover:text-white text-[#229ED9] my-auto sm:stroke-[0.5vw] stroke-[0.5vh] wide:stroke-[0.7vh] stroke-black" />
                </a>
              </div>
            </div>
          </div>
          <div
            onMouseOver={() => setTranslate("cv")}
            onMouseLeave={() => setTranslate("")}
            className={`bg-black mx-auto w-1/2 sm:w-1/4 rounded-full cursor-pointer transition-all ease-in-out duration-500 ${
              translate === "cv" ? "scale-125" : "scale-100"
            }`}
          >
            <a
            href="https://drive.google.com/file/d/1I6VD3OfHSCg1D6Z764FjF5tsaBATcjDD/view"
            target="_blank"
              className={` shadow-0 ${
                translate === "cv"
                  ? "shadow-[0.5vw_0.5vw_white] translate-x-[-1vw] translate-y-[-1vw]"
                  : "translate-x-0 translate-y-0"
              } transition-all ease-in-out duration-500 w-full rounded-full bg-fuchsia-600 h-[5vh] sm:h-[5vw] wide:h-[10vh] text-center flex flex-col justify-center font-['Orbitron'] text-white text-[2vh] sm:text-[2vw] wide:text-[4vh]`}
              style={{
                WebkitTextStroke: "0.08vw",
                WebkitTextStrokeColor: "#000",
              }}
            >
              DOWNLOAD CV
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactHomepage;
