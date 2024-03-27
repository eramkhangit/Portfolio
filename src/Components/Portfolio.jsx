import React from 'react'
import Todo from '../Image/todo.jpg'
import groceryStore from '../Image/groceryStore.jpg'
import hamburgMenu from '../Image/hamburgMenu.png'
import dictionary from '../Image/dictionary.png'
import randomJokes from '../Image/randomJokes.png'
import colorCode from '../Image/colorCode.jpg'

function Portfolio() {
    return (
        <div name="portfolio" className='bg-slate-800 w-full  text-white md:h-screen'>

            <div className='max-w-screen-lg mx-auto p-4 pt-[10rem] flex flex-col justify-center w-full h-full'>

                <div className='pb-2'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                    <p className='py-6'>Check out some of my work right here</p>
                </div>

                <div className=' flex flex-col md:grid  md:grid-cols-3 gap-8 px-12 sm:px-0'>

                    <div className='shadow-lg shadow-white rounded-lg'>
                        <img src={groceryStore} alt="No Image Found" className='rounded-md w-[100%] h-[40%] md:w-[80%] md:h-[60%] duration-200 hover:scale-105' />
                        <div className='flex items-center justify-center gap-4'>
                            <button className='w-1/2 py-3 m-2 md:py-1 md:mt-2 duration-200 hover:scale-105'>Demo</button>
                            <button className='w-1/2 py-3 m-2 md:py-1 md:mt-2  duration-200 hover:scale-105'>Code</button>
                        </div>
                    </div>

                    <div className='shadow-lg shadow-white rounded-lg'>
                        <img src={Todo} alt="No Image Found" className='rounded-md duration-200 hover:scale-105 w-[100%] h-[30%] md:w-[80%] md:h-[60%] ' />
                        <div className='flex items-center justify-center gap-4'>
                            <button className='w-1/2 py-3 m-2 md:py-1 md:mt-2 duration-200 hover:scale-105'>Demo</button>
                            <button className='w-1/2 py-3 m-2 md:py-1 md:mt-2 duration-200 hover:scale-105'>Code</button>
                        </div>
                    </div>

                    <div className='shadow-lg shadow-white rounded-lg'>
                        <img src={randomJokes} alt="No Image Found" className='rounded-md duration-200 hover:scale-105  w-[100%] h-[30%] md:w-[80%] md:h-[60%]'/>
                        <div className='flex items-center justify-center gap-4'>
                            <button className='w-1/2 py-3 m-2 md:py-1 md:mt-2 duration-200 hover:scale-105'>Demo</button>
                            <button className='w-1/2 py-3 m-2 md:py-1 md:mt-2 duration-200 hover:scale-105'>Code</button>
                        </div>
                    </div>

                    <div className='shadow-lg shadow-white rounded-lg'>
                        <img src={hamburgMenu} alt="No Image Found"  className='rounded-md duration-200 hover:scale-105  w-[100%] h-[30%] md:w-[80%] md:h-[60%] '/>
                        <div className='flex items-center justify-center gap-4'>
                            <button className='w-1/2 py-3 m-2 md:py-1 md:mt-2 duration-200 hover:scale-105'>Demo</button>
                            <button className='w-1/2py-3 m-2 md:py-1 md:mt-2  duration-200 hover:scale-105'>Code</button>
                        </div>
                    </div>

                    <div className='shadow-lg shadow-white rounded-lg'>
                        <img src={dictionary} alt="No Image Found" className='rounded-md duration-200 hover:scale-105  w-[100%] h-[30%] md:w-[80%] md:h-[60%] '/>
                        <div className='flex items-center justify-center gap-4'>
                            <button className='w-1/2 py-3 m-2 md:py-1 md:mt-2 duration-200 hover:scale-105'>Demo</button>
                            <button className='w-1/2py-3 m-2 md:py-1 md:mt-2 duration-200 hover:scale-105'>Code</button>
                        </div>
                    </div>

                    <div className='shadow-lg shadow-white rounded-lg'>
                        <img src={colorCode} alt="No Image Found" className='rounded-md duration-200 hover:scale-105  w-[100%] h-[30%] md:w-[80%] md:h-[60%]'/>
                        <div className='flex items-center justify-center gap-4'>
                            <button className='w-1/2 py-3 m-2 md:py-1 md:mt-2 duration-200 hover:scale-105'>Demo</button>
                            <button className='w-1/2 duration-200 py-3 m-2 md:py-1 md:mt-2 hover:scale-105'>Code</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Portfolio