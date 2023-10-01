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
        } overflow-hidden transition-all absolute ease-in-out duration-700 absolute w-full flex flex-col h-1/2 justify-center`}
      >
        <div className="flex flex-col gap-[3vw]">
          <div className="flex tall:flex-col flex-row font-['Kanit'] font-light">
            <div className="flex flex-row tall:w-full w-3/5 justify-center gap-x-[5vw] my-auto">
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
                    } text-[10vw] tall:text-[9vh] wide:text-[15vh] transition-all ease-in-out duration-500 tall:p-[1.5vh] p-[2vw] wide:p-[3vh] `}
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
                    } text-[10vw] tall:text-[9vh] wide:text-[15vh] transition-all ease-in-out duration-500 tall:p-[1.5vh] p-[2vw] wide:p-[3vh]`}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col tall:my-[2vh] tall:mx-auto">
              <a
                href="https://maps.app.goo.gl/qBe5HYWNnaWT1woB9"
                target="_blank"
                className="underline-hover-effect text-gray-900 text-[1.5vw] tall:text-[2.2vh] wide:text-[3vh] wide:text-[3vh] flex flex-row gap-[0.5vw]"
              >
                <FaLocationDot className="text-[1.2vw] wide:text-[2.4vh] tall:text-[1.8vh]  my-auto" />
                Tel-Aviv, Israel{" "}
              </a>
              <a
                href="tel:+972536219815"
                className="underline-hover-effect text-gray-900 text-[1.5vw] tall:text-[2.2vh] wide:text-[3vh] flex flex-row gap-[0.5vw]"
              >
                <BsFillTelephoneFill className="text-[1.2vw] wide:text-[2.4vh] tall:text-[1.8vh] my-auto" />
                +972-53-621-98-15
              </a>
              <a
                href="mailto:serebrennikov.p.d@gmail.com"
                className="underline-hover-effect text-gray-900 text-[1.5vw] tall:text-[2.2vh] wide:text-[3vh] flex flex-row gap-[0.5vw]"
              >
                <MdEmail className="text-[1.2vw] wide:text-[2.4vh] tall:text-[1.8vh] my-auto" />
                Serebrennikov.P.D@gmail.com
              </a>

              <div className="flex flex-row tall:gap-[1.2vh] gap-[1.4vw] mt-[0.6vw]">
                <a href="https://wa.me/972536219815" target="_blank">
                  <IoLogoWhatsapp className="text-[3vw] tall:text-[4vh] hover:text-white text-[#25D366] my-auto tall:stroke-[0.5vh] stroke-[0.5vw] wide:stroke-[0.7vh] stroke-black" />
                </a>
                <a href="https://t.me/serebrennikov_p" target="_blank">
                  <FaTelegram className="text-[3vw] tall:text-[4vh]  hover:text-white text-[#229ED9] my-auto stroke-[0.5vw] tall:stroke-[0.5vh] wide:stroke-[0.7vh] stroke-black" />
                </a>
              </div>
            </div>
          </div>
          <div
            onMouseOver={() => setTranslate("cv")}
            onMouseLeave={() => setTranslate("")}
            className={`bg-black mx-auto tall:w-1/2 w-1/4 rounded-full cursor-pointer transition-all ease-in-out duration-500 ${
              translate === "cv" ? "scale-125" : "scale-100"
            }`}
          >
            <div
              className={` shadow-0 ${
                translate === "cv"
                  ? "shadow-[0.5vw_0.5vw_white] translate-x-[-1vw] translate-y-[-1vw]"
                  : "translate-x-0 translate-y-0"
              } transition-all ease-in-out duration-500 w-full rounded-full bg-fuchsia-600 tall:h-[5vh] h-[5vw] wide:h-[10vh] text-center flex flex-col justify-center font-['Orbitron'] text-white tall:text-[2vh] text-[2vw] wide:text-[4vh]`}
              style={{
                WebkitTextStroke: "0.08vw",
                WebkitTextStrokeColor: "#000",
              }}
            >
              DOWNLOAD CV
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactHomepage;
