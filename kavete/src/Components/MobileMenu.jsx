import React, { useState } from 'react'
import { Menu, X } from "lucide-react";

const navItems = [
{
    title: "About US",
    url: "/",
},
{
    title: "Features",
    url: "/",
},
{
    title: "Pricing",
    url: "/",
},
{
    title: "Login",
    url: "/",
},
{
    title: "Signup",
    url: "/",
}
]

const MobileMenu = () => {
    const [navOpen, setNavOpen] = useState(false)
  return (
    <div className='block md:hidden'>
    {
        !navOpen ? (<button onClick={() => setNavOpen(true)} >
        <Menu size={32} />
        </button>) :(<><button onClick={() => setNavOpen(false)} >
        <X size={32} />
        </button>

<div className='absolute left-0 w-full top-20 bg-white/60 backdrop-blur-lg border-b border-t '>
<ul className='flex flex-col items-center py-4'>
{
        navItems.map((item, index) => (
            <li>
            <a key={index} href={item.url} className='block text-gray-600 pt-4'>{item.title}</a> 
            </li>    
        ))
    }
    </ul>
</div>
</>
        
    )
    
    }
   
    
    </div>
  )
}

export default MobileMenu