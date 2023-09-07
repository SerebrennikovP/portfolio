import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../CSS/projectspage.css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Solaris_logo from "../images/Solaris_logo.jpg";
import TeslaFinder_logo from "../images/TeslaFinder_logo.jpg";
import ZombieCats_logo from "../images/ZombieCats_logo.jpg";
import PawsCauseApplause_logo from "../images/PawsCauseApplause_logo.jpg";
import Portfolio_logo from "../images/Portfolio_logo.jpg";
import TeslaFinder_website from "../images/TeslaFinder_website.jpg";
import ZombieCats_website from "../images/ZombieCats_website.jpg";
import Solaris_website from "../images/Solaris_website.jpg";
import PawsCauseApplause_website from "../images/PawsCauseApplause_website.jpg";
import Portfolio_website from "../images/Portfolio_website.jpg";
import TeslaFinder_name from "../images/TeslaFinder_name.svg";
import Portfolio_name from "../images/Portfolio_name.svg";
import debounce from "lodash.debounce";
import { PiRewindLight } from "react-icons/pi";
import { PiFastForwardLight } from "react-icons/pi";
import { useResizeDetector } from "react-resize-detector";
import { BsFillPlayFill } from "react-icons/bs";
import { IoHomeSharp } from "react-icons/io5";
import { routes } from "../data/constData";
import { NavLink } from "react-router-dom";

const ProjectsPage = () => {
  const swiperRef = useRef(null);
  const { width, height, ref } = useResizeDetector();
  const [activeIndexName, setActiveIndexName] = useState("tesla");
  const projects = [
    { name: "tesla", link: "https://www.teslafinder.eu/" },
    { name: "zombie", link: "https://fred-vs-zombie-cats.vercel.app/" },
    { name: "solaris", link: "" },
    { name: "paws", link: "https://paws-cause-applause.vercel.app/" },
    { name: "portfolio", link: "https://serebrennikov.vercel.app/" },
    // ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
    { name: "tesla", link: "https://www.teslafinder.eu/" },
    { name: "zombie", link: "https://fred-vs-zombie-cats.vercel.app/" },
    { name: "solaris", link: "" },
    { name: "paws", link: "https://paws-cause-applause.vercel.app/" },
    { name: "portfolio", link: "https://serebrennikov.vercel.app/" },
  ];

  useEffect(() => {
    const swiper = swiperRef.current?.swiper;
    if (swiper) {
      swiper.on("slideChange", () => {
        const activeIndex = swiper.realIndex;
        setActiveIndexName(projects[activeIndex].name);
      });
      return () => {
        swiper.off("slideChange");
      };
    }
  }, []);

  const nextProject = () => {
    swiperRef.current.swiper?.slideNext();
  };
  const prevProject = () => {
    swiperRef.current.swiper?.slidePrev();
  };
  const debouncedNextProject = debounce(nextProject, 300, {
    leading: true,
    trailing: false,
  });
  const debouncedPrevProject = debounce(prevProject, 50, {
    leading: true,
    trailing: false,
  });
  const handleScroll = (event) => {
    if (event.deltaY > 50 || event.deltaX < -50) {
      debouncedNextProject();
    }
    if (event.deltaY < -50 || event.deltaX > 50) {
      debouncedPrevProject();
    }
  };

  const handleKeyUp = (event) => {
    if (event.key === "ArrowRight") {
      nextProject();
    } else if (event.key === "ArrowLeft") {
      prevProject();
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("wheel", handleScroll);
      debouncedPrevProject.cancel();
      debouncedNextProject.cancel();
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);
  return (
    <div ref={ref} className="h-[100vh] flex flex-col  bg-black">
      <NavLink to={routes.home}>
        <div
          className={`absolute z-50 opacity-50 hover:opacity-[90%] cursor-pointer p-[1vw] rounded-full bg-zinc-700 text-[2.5vw] lg:text-[1.5vw] projectpage:text-[5vw] m-[1vw] projectpage:m-[2vw] projectpage:p-[2vw] right-0 text-white`}
        >
          {" "}
          <IoHomeSharp />
        </div>
      </NavLink>

      <div className="flex-1 projectpage:flex-none w-full flex flex-row projectpage:flex-col ">
        <div className="w-1/4  projectpage:w-full ps-[3vw] projectpage:ps-[8vw]">
          <div
            className={` ${
              activeIndexName === "tesla"
                ? "opacity-100 blur-none top-0"
                : "opacity-0 blur-[0.2vw] top-[5vh]"
            }  pt-[6vw] absolute z-10 image-website transition-all ease-in-out duration-1000
              projectpage:pt-[63vw]`}
          >
            <img
              className="w-[33vw]  projectpage:w-[50vw]"
              src={TeslaFinder_name}
            ></img>
          </div>
          <p
            className={` ${
              activeIndexName === "tesla"
                ? "  top-0"
                : "opacity-0 blur-[0.2vw] top-[-5vh]"
            } text-white absolute z-10  w-1/3 pt-[14vw] text-[1vw] font-[Montserrat] transition-all ease-in-out duration-1000 image-website
              projectpage:pt-[73vw]  projectpage:text-[3vw] projectpage:w-3/4`}
          >
            With "TeslaFinder," a compelling web application that provides
            access to real-time Tesla inventory tracking and special discount
            notifications, set off on an adventurous journey. Experience the
            hunt for hidden Tesla jewels.
          </p>
          <h1
            className={` ${
              activeIndexName === "zombie"
                ? "opacity-100 blur-none top-0"
                : "opacity-0 blur-[0.2vw] top-[5vh]"
            } text-[3.5vw]  pt-[3vw] absolute z-10 text-[#BF1B1B] font-[FVRIOSA] image-website transition-all ease-in-out duration-1000 projectpage:pt-[60vw] projectpage:text-[5.5vw] projectpage:flex projectpage:flex-row`}
          >
            <div className="">FRED VS</div>
            <div className="-mt-[0.5vw] projectpage:mt-[0vw]">
              <span className="text-[#2D6D30] ">&nbsp;ZOMBIE</span>CATS
            </div>
          </h1>
          <p
            className={` ${
              activeIndexName === "zombie"
                ? "  top-0"
                : "opacity-0 blur-[0.2vw] top-[-5vh]"
            } text-white absolute z-10  w-1/3 pt-[15vw] text-[1vw] font-[Montserrat] transition-all ease-in-out duration-1000 image-website  projectpage:pt-[73vw]  projectpage:text-[3vw] projectpage:w-3/4`}
          >
            In Pleasantville, a catastrophic experiment at a local lab unleashed
            a virus, turning cats into flesh-eating zombies. Fred, an animal
            lover, becomes the town's last hope armed with enchanted hearts. He
            captures infected cats, using the hearts to heal them.
          </p>
          <h1
            className={` ${
              activeIndexName === "solaris"
                ? "opacity-100 blur-none top-0"
                : "opacity-0 blur-[0.2vw] top-[5vh]"
            } text-[7vw] pt-[4vw] absolute z-10 text-[#294be3] font-[Alien-Encounters-Regular] image-website transition-all ease-in-out duration-1000 projectpage:pt-[52vw] projectpage:text-[14vw]`}
          >
            SOLARIS
          </h1>
          <p
            className={` ${
              activeIndexName === "solaris"
                ? "  top-0"
                : "opacity-0 blur-[0.2vw] top-[-5vh]"
            } text-white absolute z-10  w-1/3 pt-[14vw] text-[1vw] font-[Montserrat] transition-all ease-in-out duration-1000 image-website  projectpage:pt-[73vw]  projectpage:text-[3vw] projectpage:w-3/4`}
          >
            Solaris, the champion of the ITC Smart Cities June 2023{" "}
            <strong>Hackathon</strong>, envisions a future where rooftops, aided
            by Computer vision, unite technology and nature, transforming cities
            into eco-friendly havens while saving costs and the environment.
          </p>
          <h1
            className={` ${
              activeIndexName === "paws"
                ? "opacity-100 blur-none top-0"
                : "opacity-0 blur-[0.2vw] top-[5vh]"
            } text-[4vw] pt-[3vw] absolute z-10 text-[#f9eee2] font-[Unbounded] image-website transition-all ease-in-out duration-1000 projectpage:pt-[63vw] projectpage:text-[5.5vw] projectpage:flex projectpage:flex-row`}
          >
            <div className="">
              PAWS <span className="text-[#ffbdff] ">CAUSE</span>
            </div>
            <div className="-mt-[1.3vw] projectpage:mt-0 ">&nbsp;APPLAUSE</div>
          </h1>
          <p
            className={` ${
              activeIndexName === "paws"
                ? "  top-0"
                : "opacity-0 blur-[0.2vw] top-[-5vh]"
            } text-white absolute z-10  w-1/3 pt-[15vw] text-[1vw] font-[Montserrat] transition-all ease-in-out duration-1000 image-website  projectpage:pt-[73vw]  projectpage:text-[3vw] projectpage:w-3/4`}
          >
            Paws Cause Applause is your portal to pet adoption. Discover and
            provide loving homes for furry friends in need. Join a compassionate
            community, find your next companion, and help pets in need.
            Connecting souls, changing lives.
          </p>
          <div
            className={` ${
              activeIndexName === "portfolio"
                ? "opacity-100 blur-none top-0"
                : "opacity-0 blur-[0.2vw] top-[5vh]"
            }  pt-[4vw] absolute z-10 image-website transition-all ease-in-out duration-1000 projectpage:pt-[53vw]`}
          >
            <img
              className="w-[26vw] projectpage:w-[45vw]"
              src={Portfolio_name}
            ></img>
            <div className="-mt-[0.7vw] ms-[0.92vw] projectpage:ms-[1.7vw] text-white text-[1vw] projectpage:text-[1.6vw] font-[Montserrat] tracking-[0.63vw] projectpage:tracking-[1.2vw]">
              PAVEL SEREBRENNIKOV
            </div>
          </div>
          <p
            className={` ${
              activeIndexName === "portfolio"
                ? "  top-0"
                : "opacity-0 blur-[0.2vw] top-[-5vh]"
            } text-white absolute z-10  w-1/3 pt-[14vw] text-[1vw] font-[Montserrat] transition-all ease-in-out duration-1000 image-website  projectpage:pt-[73vw]  projectpage:text-[3vw] projectpage:w-[85%]`}
          >
            What exactly do you understand about recursion? What would happen if
            you were about to view what you are currently watching? We might
            never know the complete truth, but we can learn more about what
            you're seeing right now or re-immerse ourselves in the location
            where you are right now.
          </p>
          <div className="flex flex-row pt-[24vw] projectpage:absolute projectpage:mt-[80vw] gap-[1vw] projectpage:gap-[3vw]  ">
            {activeIndexName !== "solaris" && (
              <button
                onClick={() =>
                  window.open(
                    (
                      projects.find(
                        (project) => project.name === activeIndexName
                      ) || {}
                    ).link,
                    "_blank"
                  )
                }
                className="bg-white transition-all ease-in-out duration-500 hover:text-white hover:bg-[#e50914] p-[1vw] font-[Montserrat] text-[1.2vw] projectpage:text-[4vw] font-bold rounded-[0.3vw] projectpage:rounded-[1vw] px-[2vw] projectpage:px-[4vw] flex flex-row"
              >
                <div className="flex flex-col justify-center h-full">
                  <BsFillPlayFill />
                </div>
                Play
              </button>
            )}
            <button className="text-white p-[1vw] text-[1.2vw] bg-[#ffffff30] rounded-[0.3vw] projectpage:rounded-[1vw] projectpage:px-[4vw]  px-[2vw] hover:bg-[#ffffff60] projectpage:text-[4vw]  transition-all ease-in-out duration-500 font-[Montserrat] ">
              More info
            </button>
          </div>
        </div>
        <div className="w-3/4 h-full projectpage:w-full ">
          <div className="max-h-[76vh] projectpage:max-h-[57vw] h-[42vw] projectpage:h-[67vh] image-website image-website-mask-bottom unselectable">
            <img
              src={TeslaFinder_website}
              className={` ${
                activeIndexName === "tesla"
                  ? "opacity-100 blur-none top-0"
                  : "opacity-0 blur-[0.2vw] top-[-5vh]"
              } projectpage:w-full w-[75vw] absolute ${
                width / height >= 1.25
                  ? "image-website-mask-left"
                  : "image-website-mask-right"
              }  transition-all ease-in-out duration-1000`}
            ></img>
            <img
              src={ZombieCats_website}
              className={`${
                activeIndexName === "zombie"
                  ? "opacity-100 blur-none top-0"
                  : "opacity-0 blur-[0.2vw] top-[-5vh]"
              } projectpage:w-full w-[75vw] absolute  ${
                width / height >= 1.25
                  ? "image-website-mask-left"
                  : "image-website-mask-right"
              } transition-all ease-in-out duration-1000`}
            ></img>
            <img
              src={Solaris_website}
              className={`${
                activeIndexName === "solaris"
                  ? "opacity-100 blur-none top-0"
                  : "opacity-0 blur-[0.2vw] top-[-5vh]"
              } projectpage:w-full w-[75vw] absolute  ${
                width / height >= 1.25
                  ? "image-website-mask-left"
                  : "image-website-mask-right"
              } transition-all ease-in-out duration-1000`}
            ></img>
            <img
              src={PawsCauseApplause_website}
              className={`${
                activeIndexName === "paws"
                  ? "opacity-100 blur-none top-0"
                  : "opacity-0 blur-[0.2vw] top-[-5vh]"
              } projectpage:w-full w-[75vw] absolute  ${
                width / height >= 1.25
                  ? "image-website-mask-left"
                  : "image-website-mask-right"
              } transition-all ease-in-out duration-1000`}
            ></img>
            <img
              src={Portfolio_website}
              className={`${
                activeIndexName === "portfolio"
                  ? "opacity-100 blur-none top-0"
                  : "opacity-0 blur-[0.2vw] top-[-5vh]"
              } projectpage:w-full w-[75vw] absolute  ${
                width / height >= 1.25
                  ? "image-website-mask-left"
                  : "image-website-mask-right"
              } transition-all ease-in-out duration-1000`}
            ></img>
          </div>
        </div>
      </div>
      <div className="mx-5 mb-[1vw] h-[10vw] projectpage:h-[40vw]  projectpage:mt-[70vw] projectpage:pb-[10vw]  flex flex-row justify-center">
        <div
          className="custom-prev-button cursor-pointer text-[3vw] text-white opacity-25 hover:opacity-100 flex flex-col justify-center transition-all ease-in-out duration-400 ms-auto -me-[5vw] projectpage:me-[0vw]"
          onClick={prevProject}
        >
          <PiRewindLight />
        </div>
        <Swiper
          ref={swiperRef}
          slidesPerView={width > 640 ? 3 : 1.5}
          centeredSlides={false}
          spaceBetween={30}
          speed={900}
          grabCursor={true}
          navigation={{
            nextEl: ".custom-next-button",
            prevEl: ".custom-prev-button",
          }}
          loop={true}
          slideToClickedSlide={true}
          modules={[Navigation]}
          className="w-2/4 tall:w-4/5 unselectable"
        >
          <SwiperSlide>
            <img src={TeslaFinder_logo}></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src={ZombieCats_logo}></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Solaris_logo}></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src={PawsCauseApplause_logo}></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Portfolio_logo}></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src={TeslaFinder_logo}></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src={ZombieCats_logo}></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Solaris_logo}></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src={PawsCauseApplause_logo}></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Portfolio_logo}></img>
          </SwiperSlide>
        </Swiper>

        <div
          className="custom-next-button cursor-pointer text-[3vw] text-white opacity-25 hover:opacity-100 flex flex-col justify-center transition-all ease-in-out duration-400 me-auto -ms-[5vw] tall:ms-[0vw]"
          onClick={nextProject}
        >
          <PiFastForwardLight />
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
