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

<div className='absolute left-0 w-full top-20 bg-white/60 backdrop-blur-lg border-b border-t '>


    <ul ref={menuRef} className='flex flex-col items-center py-4'>
          <li><AnchorLink className='anchor-link' offset={50} href="#home"><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"?<span>_</span>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={250} href="#work"><p onClick={()=>setMenu("about")}>How it Works</p></AnchorLink>{menu==="about"?<span>_</span>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={100} href="#services"><p onClick={()=>setMenu("services")}>Services</p></AnchorLink>{menu==="services"?<span>_</span>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={100} href="#testimonials"><p onClick={()=>setMenu("testimonials")}>Testimonials</p></AnchorLink>{menu==="work"?<span>_</span>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href="#contact"><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"?<span>_</span>:<></>}</li>
          </ul>
</div>
</>
        
    )
    
    }
   
    
    </div>
  )
}

export default MobileMenu