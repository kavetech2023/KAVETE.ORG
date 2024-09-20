import Hero from '../Components/Hero'
import { partnersLogo } from '../Data/partners'
import Slider from '../Components/Slider'
import FeaturesSection from '../Components/FeaturesSection'
import Testimonials from '../Components/Testimonials'
import PricingSection from '../Components/PricingSection'
import Footer from '../Components/Footer'
import RoadMap from '../Components/RoadMap'
import Navbar from '../Components/Navbar'
import Features from '../Components/Features'
import AuthDetails from './AuthDetails'

const Home = ({setModal, modal}) => {
  return (
    <>
    
<Navbar />




<Hero />
<Slider images={partnersLogo} />
<RoadMap />
<FeaturesSection />
<Features />
<Testimonials />
<PricingSection />
<Footer />

    </>
  )
}

export default Home