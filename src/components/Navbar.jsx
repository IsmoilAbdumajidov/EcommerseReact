import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const [isopen, setIsopen] = useState(false)
    return (
        <div className='flex lg:flex-row flex-col  w-full bg-white py-4  lg:items-center justify-between main-container'>
            <div className='flex justify-between px-2 lg:px-0'>
                <NavLink to={"/"}>
                    <h1 className='text-3xl font-semibold'>
                        <span className='text-red-500'>React</span><span>Cart</span>
                    </h1>
                </NavLink>
                    <button onClick={()=>setIsopen(!isopen)} className='bg-transparent block lg:hidden'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>

                    </button>
            </div>
            <div className={`${isopen ? "h-auto" :"h-0 lg:h-auto"} flex flex-col lg:flex-row w-[100%] overflow-hidden`}>
            <ul className='flex flex-col lg:flex-row lg:items-center lg:ml-20 lg:gap-6 text-[15px]'>
                <li className='py-1 hover:bg-red-300 hover:lg:bg-transparent hover:pl-3 hover:lg:pl-0 transition-all mx-2 rounded-md'><a className='hover:text-red-500 transition-all duration-300' href="#">Home</a></li>
                <li className='py-1 hover:bg-red-300 hover:lg:bg-transparent hover:pl-3 hover:lg:pl-0 transition-all mx-2 rounded-md'><a className='hover:text-red-500 transition-all duration-300' href="#">Shopping</a></li>
                <li className='py-1 hover:bg-red-300 hover:lg:bg-transparent hover:pl-3 hover:lg:pl-0 transition-all mx-2 rounded-md'><a className='hover:text-red-500 transition-all duration-300' href="#">Pages</a></li>
                <li className='py-1 hover:bg-red-300 hover:lg:bg-transparent hover:pl-3 hover:lg:pl-0 transition-all mx-2 rounded-md'><a className='hover:text-red-500 transition-all duration-300' href="#">Contact</a></li>
            </ul>
            <ul className='flex flex-col lg:flex-row lg:items-center lg:ml-auto text-[13px] lg:gap-6 font-[600]'>
                <li className='py-1 hover:bg-red-300 hover:lg:bg-transparent hover:pl-3 hover:lg:pl-0 transition-all mx-2 rounded-md' >
                    <a className='hover:text-red-500 transition-all duration-300' href="#">Login</a>/
                    <a className='hover:text-red-500 transition-all duration-300' href="#">Register</a>
                </li>
                <li className='py-1 hover:bg-red-300 hover:lg:bg-transparent hover:pl-3 hover:lg:pl-0 transition-all mx-2 rounded-md' ><a className='hover:text-red-500 transition-all duration-300' href="#">Language</a></li>
                <li className='py-1 hover:bg-red-300 hover:lg:bg-transparent hover:pl-3 hover:lg:pl-0 transition-all mx-2 rounded-md' ><a className='hover:text-red-500 transition-all duration-300' href="#">Currency</a></li>

            </ul>
            </div>
        </div>
    )
}

export default Navbar