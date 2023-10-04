import React from 'react'
import Construction from "../components/Construction"
import { IoHomeSharp } from "react-icons/io5";
import { routes } from "../data/constData";
import { NavLink } from "react-router-dom";

const AboutPage = () => {
  return (<>
        <NavLink to={routes.home}>
        <div
          className={`absolute  opacity-50 hover:opacity-[90%] cursor-pointer p-[1vw] rounded-full bg-zinc-700 text-[2.5vw] lg:text-[1.5vw] z-10 projectpage:text-[5vw] m-[1vw] projectpage:m-[2vw] projectpage:p-[2vw] right-0 text-white`}
        >
          {" "}
          <IoHomeSharp />
        </div>
      </NavLink>
    <Construction/>
    </>
  )
}

export default AboutPage