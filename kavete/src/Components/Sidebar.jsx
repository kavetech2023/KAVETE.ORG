import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    const [activeLink, setActiveLink] = useState(0)
    const handleClick = (index) => {
        setActiveLink(index)
    }
    const SIDEBAR_LINKS = [
        {id:1, path: "/", name : "Dashboard", icon: "Lubox"},
        {id:2, path: "/products", name : "Products", icon: "Lubox"},
        {id:3, path: "/orders", name : "Orders", icon: "Lubox"},
        {id:4, path: "/customers", name : "Customers", icon: "Lubox"},
        {id:5, path: "/reports", name : "Reports", icon: "Lubox"},
        {id:6, path: "/integrations", name : "Integrations", icon: "Lubox"},
        ]
  return (
    <div className='w-15 md:w-56 fixed left:0 top:0 z-10 h-screen border-r pt-8 px-4 bg-white'>
        {/* Logo */}
        <div>
            <img src="" alt="" className='w-28 hidden md:flex'/>
        </div>
        {/* Logo */}

        {/* Sidebar Links */}
            <ul className='mt-6 space-y-6'>
                {SIDEBAR_LINKS.map((link, index) => (
                    <li key={index} className={`font-medium rounded-md py-2 px-5 hover:bg-gray-100 hover:text-indigo-500 ${activeLink === index ? "bg-indigo-100 text-white":""}`}>
                        <Link to={link.path} className='flex items-center justify-center md:justify-start md:space-x-5 ' onClick={()=>handleClick(index)}>
                            <img src={link.icon} alt="" className='w-6'/>
                            <span className='text-sm text-gray-500 hidden md:flex'>{link.name}</span>
                        </Link>
                    </li>
                ))}
            </ul>

        {/* Sidebar Links */}

        <div className='w-full absolute bottom-12 left-0 px-4 py-2 cursor-pointer text-center'>
            <p className='flex items-center space-x-2 text-xs text-white py-2 px-5 bg-gradient-to-r from-indigo-500 to-violet-600'>
                {""}
                <span>?</span>
                <span>Need Help ?</span>
            </p>
        </div>
    </div>
  )
}

export default Sidebar