import React from 'react'
import myImg from '../Image/myImg.jpg'
import { IoIosArrowForward } from "react-icons/io";

function Home() {
    return (
        <div name="home" className='h-screen w-full bg-slate-800'>

            <div className='max-w-screen-lg mx-auto flex-col flex items-center justify-center h-full pt-[8rem] md:pt-14  md:flex-row md:px-4'>

                <div className='w-full px-4 md:w-[53%] flex flex-col justify-center h-[50%] md:h-[70%] '>
                    <h2 className='text-4xl sm:text-5xl font-bold text-white'>I'm a Frontend Developer</h2>
                    <p className='text-gray-400 py-4 max-w-md'>
                        I worked in naazchikankari as customer support job for 3 years ,But i don't want to continue that job for long time. So i dicided to go in web development. I up skill myself in HTML, CSS, TailwindCSS , JavaScript and ReactJS. And now i'm ready for work.
                    </p>
                    <div>
                        <button className='text-slate-800 w-fit px-6 py-3 my-3 flex items-center rounded-md  bg-blue-300 cursor-pointer'>
                            Portfolio
                            <span className='hover:rotate-90 duration-400 ml-4'><IoIosArrowForward  size={25}  /></span>
                        </button>
                    </div>

                </div>

                {/* Image */}
                <div className=' overflow-hidden mx-auto rounded-2xl mt-8 max-w-[45%] min-w-[40%] md:max-w-[40%] md:min-w-[35%] min-h-[70%] md:min-h-[70%]'>
                    <img src={myImg} alt="my profile" 
                    className='rounded-2xl w-[100%] object-cover h-[100%]' />
                </div>

            </div>
        </div>
    )
}

export default Home