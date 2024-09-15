import React, { useRef, useState } from 'react'
import { Menu, X } from "lucide-react";
import AnchorLink from 'react-anchor-link-smooth-scroll';

const MobileMenu = () => {
    const [navOpen, setNavOpen] = useState(false)
    const [menu, setMenu] = useState("home")
    const menuRef = useRef();
  return (
    <div className='block md:hidden'>
    {
        !navOpen ? (<button onClick={() => setNavOpen(true)} >
        <Menu size={32} />
        </button>) :(<><button onClick={() => setNavOpen(false)} >
        <X size={32} />
        </button>

<div className='absolute left-0 w-full top-8 bg-white/60 backdrop-blur-lg border-b border-t '>


    <ul ref={menuRef} className='flex flex-col items-center py-4 gap-4'>
    <li><AnchorLink className='anchor-link' offset={100} href="#home"><p className={`${menu==="home"? "font-bold" :""}`} onClick={()=>setMenu("home")}>Home</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={250} href="#work"><p className={`${menu==="about"? "font-bold" :""}`} onClick={()=>setMenu("about")}>How it Works</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={100} href="#services"><p className={`${menu==="services"? "font-bold" :""}`} onClick={()=>setMenu("services")}>Services</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={80} href="#testimonials"><p  className={`${menu==="testimonials"? "font-bold" :""}`} onClick={()=>setMenu("testimonials")}>Testimonials</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href="#contact"><p className={`${menu==="contact"? "font-bold" :""}`} onClick={()=>setMenu("contact")}>Contact</p></AnchorLink></li>
            </ul>
</div>
</>
        
    )
    
    }
   
    
    </div>
  )
}

export default MobileMenu