import React from 'react'
import HTML from '../Image/html.webp'
import CSS from '../Image/CSS.png'
import TailwindCSS from '../Image/tailwindCS.S.png'
import javaScript from '../Image/javascript.png'
import ReactJS from '../Image/Reactjs.png'
import Git from '../Image/git.png'

function Experience() {
    return (
        <div name='experience' className='bg-slate-800 text-white'>

            <div className='max-w-screen-lg mx-auto p-4 pt-[10rem] flex flex-col justify-center w-full h-full text-white'>

                <div>
                    <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline '>Experience</p>
                    <p className='py-6'>These are the technologies I've worked with</p>
                </div>

                {/* Worked on  */}
                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

                    <div className='shadow-md shadow-orange-500 hover:scale-105 duration-500 py-2 rounded-lg'>
                        <div className=' w-[80%] h-[70%] mx-auto'>
                            <img src={HTML} alt="No Image found" className='w-[100%] h-[100%] rounded-lg' />
                            <p>HTML</p>
                        </div>
                    </div>

                    <div className='shadow-md shadow-blue-500 hover:scale-105 duration-500 py-2 rounded-lg'>
                        <div className='w-[80%] h-[70%] mx-auto'>
                            <img src={CSS} alt="No Image found" className='w-[100%] h-[100%] rounded-lg' />
                            <p>CSS</p>
                        </div>
                    </div>

                    <div className='shadow-md shadow-white hover:scale-105 duration-500 py-2 rounded-lg'>
                        <div className=' w-[80%] h-[70%] mx-auto'>
                            <img src={TailwindCSS} alt="No Image found" className='w-[100%] h-[100%] rounded-lg' />
                        </div>
                        <p className='pt-12'>TailwindCSS</p>
                    </div>

                    <div className='shadow-md shadow-yellow-500 hover:scale-105 duration-500 py-2 rounded-lg'>
                        <div className=' w-[80%] h-[70%] mx-auto'>
                            <img src={javaScript} alt="No Image found" className='w-[100%] h-[100%] rounded-lg' />
                            <p>JavaScript</p>
                        </div>
                    </div>

                    <div className='shadow-md shadow-blue-500 hover:scale-105 duration-500 py-2 rounded-lg'>
                        <div className=' w-[80%] h-[70%] mx-auto'>
                            <img src={ReactJS} alt="No Image found" className='w-[100%] h-[100%] rounded-lg' />
                            <p>ReactJS</p>
                        </div>
                    </div>

                    <div className='shadow-md shadow-slate-400 hover:scale-105 duration-500 py-2 rounded-lg'>
                        <div className=' w-[80%] h-[70%] mx-auto'>
                            <img src={Git} alt="No Image found" className='w-[100%] h-[100%] rounded-lg' />
                            <p>Git</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Experience