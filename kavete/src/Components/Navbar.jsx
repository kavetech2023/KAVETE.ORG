import { Link } from 'react-router-dom'
import React from 'react'

const Navbar = () => {
  return (
    <div className='sticky inset-x-0 top-0 w-full z-30 bg-white shadow-sm bg-opacity-50 '>
      <div className='mx-auto w-full max-w-screen-xl px-2.5 lg:px-20 relative'>
      <div className='flex items-center justify-between'>
        <div>
          logo
        </div>
        <nav>
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
        <div>
          <a href="Login" className='bg-black px-4 py-2 rounded-md text-white cursor-pointer'>Login</a>
          <a href="" className='bg-black px-4 py-2 rounded-md text-white cursor-pointer'>Signup</a>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Navbar