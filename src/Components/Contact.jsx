import React from 'react'

function Contact() {
    return (
        <div name='contact' className='w-full h-screen bg-slate-800 text-white p-4'>

            <div className='flex flex-col p-4 pt-[10rem] justify-center max-w-screen-lg mx-auto h-full'>

                <div className='pb-8'>
                    <p className='text-4xl inline border-b-4 border-gray-500'>Contact</p>
                </div>
                 
                <div className='flex justify-center items-center'>
                    <form action="" className='flex flex-col w-full md:w-1/2'>

                       <input type="text" name="name" id="" placeholder='Enter your name' className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus::outline-non ' />

                       <input type="email" name="name" id="" placeholder='Enter your email' className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus::outline-non ' />

                       <textarea name="message" id="" rows="10" placeholder='Type your message' className='p-2 bg-transparent border-2 rounded-md text-white focus::outline-non '></textarea>
                     
                        <button className='text-white bg-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-100 duration-500'>Let's talk</button>
                    </form>

                </div> 

            </div>
        </div>
    )
}

export default Contact