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
import TeslaFinder_website from "../images/TeslaFinder_website.jpg";
import ZombieCats_website from "../images/ZombieCats_website.jpg";
import Solaris_website from "../images/Solaris_website.jpg";
import PawsCauseApplause_website from "../images/PawsCauseApplause_website.jpg";
import debounce from "lodash.debounce";
import { PiRewindLight } from "react-icons/pi";
import { PiFastForwardLight } from "react-icons/pi";
import { useResizeDetector } from "react-resize-detector";


const ProjectsPage = () => {
  const swiperRef = useRef(null);
  const { width, height, ref } = useResizeDetector();
  const [activeIndex, setActiveIndex] = useState(0)
  useEffect(() => {
    swiperRef.current.swiper.on('slideChange', () => {
      const activeIndex = swiperRef.current.swiper.realIndex;
      setActiveIndex(activeIndex);
    });
    return () => {
      swiperRef.current.swiper.off('slideChange');
    };
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
    <div ref={ref} className="h-[100vh] flex flex-col overflow-hidden  bg-black">
      <div className="flex-1  w-full flex flex-row projectpage:flex-col">
        <div className="w-1/4 projectpage:w-full">

        </div>
        <div className="w-3/4  projectpage:w-full ">

          <div className="max-h-[76vh] projectpage:max-h-[57vw] h-[42vw] projectpage:h-[67vh] image-website image-website-mask-bottom">
            <img src={TeslaFinder_website} className={` ${activeIndex === 0 || activeIndex === 4 ? 'opacity-100 blur-none top-0' : 'opacity-0 blur-[0.2vw] top-[-5vh]'} projectpage:w-full w-[75vw] absolute  image-website-mask-left transition-all ease-in-out duration-1000`}></img>
            <img src={ZombieCats_website} className={`${activeIndex === 1 || activeIndex === 5 ? 'opacity-100 blur-none top-0' : 'opacity-0 blur-[0.2vw] top-[-5vh]'} projectpage:w-full w-[75vw] absolute  image-website-mask-left transition-all ease-in-out duration-1000`}></img>
            <img src={Solaris_website} className={`${activeIndex === 2 || activeIndex === 6 ? 'opacity-100 blur-none top-0' : 'opacity-0 blur-[0.2vw] top-[-5vh]'} projectpage:w-full w-[75vw] absolute  image-website-mask-left transition-all ease-in-out duration-1000`}></img>
            <img src={PawsCauseApplause_website} className={`${activeIndex === 3 || activeIndex === 7 ? 'opacity-100 blur-none top-0' : 'opacity-0 blur-[0.2vw] top-[-5vh]'} projectpage:w-full w-[75vw] absolute  image-website-mask-left transition-all ease-in-out duration-1000`}></img>

          </div>

        </div>
      </div>
      <div className="mx-5 mb-[1vw] h-[10vw] tall:h-[30vw] tall:mb-[10vh]  flex flex-row justify-center">
        <div
          className="custom-prev-button cursor-pointer text-[3vw] text-white opacity-25 hover:opacity-100 flex flex-col justify-center transition-all ease-in-out duration-400 ms-auto -me-[5vw] tall:me-[0vw]"
          onClick={prevProject}
        >
          <PiRewindLight />
        </div>
        <Swiper
          ref={swiperRef}
          slidesPerView={width / height > 0.75 ? 3 : 1.5}
          centeredSlides={false}
          // spaceBetween={30}
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
            <img
              src={TeslaFinder_logo}
            ></img>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={ZombieCats_logo}
            ></img>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Solaris_logo}
            ></img>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={PawsCauseApplause_logo}
            ></img>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={TeslaFinder_logo}
            ></img>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={ZombieCats_logo}
            ></img>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Solaris_logo}
            ></img>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={PawsCauseApplause_logo}
            ></img>
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
