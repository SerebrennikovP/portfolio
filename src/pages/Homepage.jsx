import React, { useState } from 'react'
import CircleWrapper from '../components/CircleWrapper'
import '../CSS/homepage.css'


const Homepage = () => {
    return (
        <div className="homepage w-[100vw] h-[100vh] overflow-hidden relative bg-gray-900" >
            <CircleWrapper />
        </div>
    )
}

export default Homepage