import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import { partnersLogo } from './Data/partners'
import Slider from './Components/Slider'
import FeaturesSection from './Components/FeaturesSection'
import Testimonials from './Components/Testimonials'

const App = () => {
  return (
    <>
<div className='w-screen min-h-screen fixed z-0 flex justify-center px-6 py-40 pointer-events-none'>
<div className="absolute inset-0 bg-[url('/grid.svg')] opacity-25"></div>
<img src="/mesh.svg" className='opacity-15 absolute bottom-1 h-[600px] z-10' alt="" />
</div> 

<div className='bg-gradient-to-c from-transparent via-transparent to-white absolute inset-0 z-20'></div>


<div className='relative z-20'> 
<Navbar />

<div className='container mx-auto'>
<Hero />
<Slider images={partnersLogo} />
<FeaturesSection />
<Testimonials />
</div>
</div>


    </>
  )
}

export default App