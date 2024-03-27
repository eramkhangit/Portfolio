import React from 'react'

function About() {
    return (
        <div name="about" className='w-full h-screen bg-slate-800 text-white'>

            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>

                <div className='pb-8'>
                    <p className='text-4xl font-bold  border-b-4 border-gray-500 inline'>About</p>
                </div>

                <p className='text-lg md:text-xl mt-10 md:mt-20 '>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quae neque tenetur debitis repudiandae quod id odit pariatur provident error.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, architecto!
                </p>

                <br />

                <p className='text-lg md:text-xl'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quae neque tenetur debitis repudiandae quod id odit pariatur provident error.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, architecto!
                </p>
            </div>
        </div>
    )
}

export default About