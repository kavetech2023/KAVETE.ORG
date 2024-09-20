import React, { useRef, useState } from 'react'
import { Menu, X } from "lucide-react";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link } from 'react-router-dom';

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
    <li><AnchorLink className='anchor-link' offset={100} href="#home"><p className={`${menu==="home"? "font-bold" :""}`} onClick={()=>{setMenu("home"); setNavOpen(false);}}>Home</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={250} href="#work"><p className={`${menu==="about"? "font-bold" :""}`} onClick={()=>{setMenu("about"); setNavOpen(false);}}>How it Works</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={100} href="#services"><p className={`${menu==="services"? "font-bold" :""}`} onClick={()=>{setMenu("services"); setNavOpen(false)}}>Our Services</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href="#testimonials"><p  className={`${menu==="testimonials"? "font-bold" :""}`} onClick={()=>{setMenu("testimonials"); setNavOpen(false)}}>Testimonials</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={100} href="#contact"><p className={`${menu==="pricing"? "font-bold" :""}`} onClick={()=>{setMenu("contact"); setNavOpen(false)}}>FAQs</p></AnchorLink></li>
            <li><Link to={"/dashboard"}>Go to Jobs</Link></li>
            </ul>
</div>
</>
        
    )
    
    }
   
    
    </div>
  )
}

export default MobileMenu