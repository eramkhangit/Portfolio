import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { GrNotes } from "react-icons/gr";
import resume from '../Resume/EramResume.pdf'

function SocialLink() {
    

    return (
        <div className='hidden lg:flex flex-col top-[30%] left-[-10rem] fixed'>
            <ul>
                <li className='flex justify-between items-center h-14 ml-[100px] bg-gray-500 p-2 hover:rounded-md duration-500 hover:bg-red-500'><a href="https://www.linkedin.com/in/eram-khan-9941262b2" className='flex gap-2 items-center text-white '>
                    <>LinkedIn <FaLinkedin size={25} /></>
                </a></li>

                <li className='flex justify-between items-center h-14 ml-[100px] bg-gray-500 p-5 hover:rounded-md duration-500  hover:bg-red-500 '><a href="eramkhan3747@gmail.com" className='flex gap-2 items-center text-white  '>
                    <>Gmail <SiGmail size={25} /></>
                </a></li>

                <li className='flex justify-between items-center h-14 ml-[100px] bg-gray-500 p-3 hover:rounded-md duration-500 hover:bg-red-500'><a href={resume} download={true} target='_blank' className='flex gap-2 items-center text-white '>
                    <>Resume <GrNotes size={25} /></>
                </a></li>

                <li className=' flex justify-between h-14 bg-gray-500 ml-[100px] p-4 hover:bg-red-500 duration-500'><a href="https://github.com/eramkhangit" className='flex gap-2 items-center text-white '>
                    <>GitHub <FaGithub size={25}/></>
                </a></li>

            </ul>
        </div>
    )
}

export default SocialLink