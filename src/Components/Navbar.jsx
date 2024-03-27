import {React, useState } from 'react'
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import {Link} from 'react-scroll'

function Navbar() {

  const [menu , setMenu ] = useState(false)
  const handleMenu = () => setMenu(!menu)

    return (
        <div className='border-2 border-red-500 flex justify-between items-center w-full h-20 text-white bg-black px-4 fixed '>

            <h1 className='text-5xl ml-2'>Eram Khan</h1>

            <ul className='hidden md:flex '>

            <li className='px-4 cursor-pointer capitalize font-medium text-gray-300 hover:scale-105 duration-200'>
                <Link to='home' smooth duration={500}>Home</Link>
            </li>
            <li className='px-4 cursor-pointer capitalize font-medium text-gray-300 hover:scale-105 duration-200'>
            <Link to='about' smooth duration={500}>About</Link>
            </li>
            <li className='px-4 cursor-pointer capitalize font-medium text-gray-300 hover:scale-105 duration-200'>
            <Link to='portfolio' smooth duration={500}>Portfolio</Link>
            </li>
            <li className='px-4 cursor-pointer capitalize font-medium text-gray-300 hover:scale-105 duration-200'>
                <Link to='experience' smooth duration={500}>Experience</Link>
            </li>
            <li className='px-4 cursor-pointer capitalize font-medium text-gray-300 hover:scale-105 duration-200'>
            <Link to='contact' smooth duration={500}>Contact</Link>
            </li>

            </ul>

            {/* small screen menu bar */}
            <div onClick={handleMenu} className='md:hidden cursor-pointer pr-4 z-10 text-gray-300 '>
                { menu ? <RxCross2 size={30} /> : <IoMdMenu size={30} /> }
            </div>

            {/* small screen menu */}
             {menu && (
                
            <ul className='md:hidden flex flex-col justify-center items-center  absolute top-0 left-0 w-full h-screen bg-slate-800 text-white'>

            <li className='px-4 cursor-pointer py-1 text-3xl capitalize font-medium text-gray-300 '>
            <Link to='home' smooth duration={500}>Home</Link>
            </li>

            <li className='px-4 cursor-pointer py-1 text-3xl capitalize font-medium text-gray-300 '>
            <Link to='about' smooth duration={500}>About</Link>
            </li>
            <li className='px-4 cursor-pointer py-1 text-3xl capitalize font-medium text-gray-300 '>
            <Link to='portfolio' smooth duration={500}>Portfolio</Link>
            </li>
            <li className='px-4 cursor-pointer py-1 text-3xl capitalize font-medium text-gray-300 '>
            <Link to='experience' smooth duration={500}>Experience</Link>  
            </li>
            <li className='px-4 cursor-pointer py-1 text-3xl capitalize font-medium text-gray-300 '>
            <Link to='contact' smooth duration={500}>Contact</Link>
            </li>

            </ul>

             ) }

        

        </div>
    )
}

export default Navbar