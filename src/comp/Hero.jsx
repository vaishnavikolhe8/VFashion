import React from 'react'
import { Link } from 'react-router-dom'
import background from "../../public/assets/background.jpg";



const Hero = () => {
    return (
        <section className="relative h-screen overflow-hidden rounded-3xl text-white">
            <img src={background} alt="" className='absolute inset-0 h-full w-full object-cover blur-sm scale-110' />

            <div className='relative z-10 text-white h-full flex flex-col items-center justify-center gap-8 text-center'>
                <h1 className="text-4xl  md:text-6xl lg:text-7xl font-black leading-tight">
                    LET'S <br />
                    EXPLORE UNIQUE <br />
                    CLOTHES.
                </h1>
                <p >Live for Influential and Innovative fashion!</p>
                <Link to='/contact' >
                <button className="mt-2 bg-yellow-500 text-white px-8 py-3 rounded-lg " >
                    Contact Us
                </button>
                </Link>
            </div>
        </section>
    )
}

export default Hero
