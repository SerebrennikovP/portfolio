import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../CSS/projectspage.css'
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Solaris_logo from "../images/Solaris_logo.jpg"


const ProjectsPage = () => {
  const swiperRef = useRef(null);

  return (
    <div className="h-[100vh] overflow-hidden relative bg-white">

<Swiper
        ref={swiperRef}
        slidesPerView={4}
        centeredSlides={false}
        spaceBetween={30}
        grabCursor={true}
        navigation={true}
        loop={true}
        slideToClickedSlide={true}
        modules={[Navigation]}
        className="mx-10"
      >
        <SwiperSlide ><img src={Solaris_logo} className='h-full p-1 bg-cover bg-center opacity-[10%]'></img></SwiperSlide>
        <SwiperSlide  ><img src={Solaris_logo} className=' h-full p-1 bg-cover bg-center opacity-[20%]'></img></SwiperSlide>
        <SwiperSlide ><img src={Solaris_logo} className=' h-full p-1 bg-cover bg-center opacity-[30%]'></img></SwiperSlide>
        <SwiperSlide ><img src={Solaris_logo} className=' h-full p-1 bg-cover bg-center opacity-[40%]'></img></SwiperSlide>
        <SwiperSlide ><img src={Solaris_logo} className=' h-full p-1 bg-cover bg-center opacity-[50%]'></img></SwiperSlide>
        <SwiperSlide ><img src={Solaris_logo} className=' h-full p-1 bg-cover bg-center opacity-[60%]'></img></SwiperSlide>
        <SwiperSlide ><img src={Solaris_logo} className=' h-full p-1 bg-cover bg-center opacity-[70%]'></img></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default ProjectsPage