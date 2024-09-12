import { Link } from 'react-router-dom'
import { useState } from 'react';
import MobileMenu from './MobileMenu';
import logo from "../assets/logo.png";

const Navbar = () => {


  return (
    <div className='sticky inset-x-0 top-0 w-full z-30'>
      <div className="border-b border-black/10 bg-white/75 backdrop-blur-lg transition-all absolute inset-0 -z-1"></div>
      <div className='mx-auto w-full max-w-screen-xl px-2.5 lg:px-20 relative'>
      <div className='flex items-center justify-between'>
        <div>
    <img src={logo} alt="logo" className='w-20'/>
        </div>
        <nav className='hidden md:block'>
          <ul className='flex flex-row space-x-4 p-4'>
            <li>
              <a href='/' className='text-gray-600'>About us</a>
              </li>
              <li>
              <a href='/' className='text-gray-600'>Features</a>
              </li><li>
              <a href='/' className='text-gray-600'>Pricing</a>
              </li>
          </ul>

        </nav>
        <div className='hidden md:block'>
          <a href="Login" className='bg-black px-4 py-2 rounded-md text-white cursor-pointer'>Login</a>
          <a href="" className='bg-black px-4 py-2 rounded-md text-white cursor-pointer ml-2'>Signup</a>
        </div>
        <MobileMenu />
      </div>
      </div>
    </div>
  )
}

export default Navbar