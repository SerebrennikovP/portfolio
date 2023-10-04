import React from 'react'
import "../CSS/loading.css"

const LoadingPage = () => {
    return (
        <div className='z-[999999999999] loading-parent overflow-hidden bg-black w-[100vw] h-[100vh] absolute'>
            <div className='loading-div'></div>
            <div className='loading-div'></div>
            <div className='loading-div'></div>
            <div className='loading-div'></div>
            <div className='loading-div'></div>
            <div className='loading-div'></div>
            <div className='loading-div'></div>
            <div className='loading-div'></div>
            <div className='loading-div'></div>
        </div>
    )
}

export default LoadingPage