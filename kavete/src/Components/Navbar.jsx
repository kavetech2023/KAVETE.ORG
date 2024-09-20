import { Link, NavLink, useNavigate } from 'react-router-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import MobileMenu from './MobileMenu';
import logo from "../assets/logo.png";
import { useRef, useState } from 'react';




const Navbar = ({setModal}) => {

  const [menu, setMenu] = useState("home")
  const menuRef = useRef();

  return (
    <div className='sticky inset-x-0 top-0  w-full z-30'>
      <div className="border-b border-black/10 bg-white/75 backdrop-blur-lg transition-all absolute inset-0 -z-1"></div>
      <div className='mx-auto w-full max-w-screen-xl px-2.5  lg:px-20 relative'>
      <div className='flex items-center p-2 justify-between'>
        <div>
          <Link to={"/"}>
          <img src={logo} alt="logo" className='w-20'/>
          </Link>
    
        </div>
        <nav className='hidden md:block'>
          <ul ref={menuRef} className='flex flex-row space-x-4 p-4'>
          <li><AnchorLink className='anchor-link' offset={100} href="#home"><p className={`${menu==="home"? "font-bold" :""}`} onClick={()=>setMenu("home")}>Home</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={250} href="#work"><p className={`${menu==="about"? "font-bold" :""}`} onClick={()=>setMenu("about")}>How it Works</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={100} href="#services"><p className={`${menu==="services"? "font-bold" :""}`} onClick={()=>setMenu("services")}>Services</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={80} href="#testimonials"><p  className={`${menu==="testimonials"? "font-bold" :""}`} onClick={()=>setMenu("testimonials")}>Testimonials</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href="#pricing"><p className={`${menu==="pricing"? "font-bold" :""}`} onClick={()=>setMenu("pricing")}>FAQs</p></AnchorLink></li>
          </ul>

        </nav>
        <div className='hidden md:block'>
       
                        <button className='bg-black px-4 py-2 rounded-md text-white cursor-pointer' onClick={()=>setModal}>LogIn</button>
          
         
          
        </div>
        <MobileMenu />
      </div>
      </div>
    </div>
  )
}

export default Navbar