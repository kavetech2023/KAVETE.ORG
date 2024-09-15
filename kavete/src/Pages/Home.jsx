import Hero from '../Components/Hero'
import { partnersLogo } from '../Data/partners'
import Slider from '../Components/Slider'
import FeaturesSection from '../Components/FeaturesSection'
import Testimonials from '../Components/Testimonials'
import PricingSection from '../Components/PricingSection'
import Footer from '../Components/Footer'
import RoadMap from '../Components/RoadMap'
import Navbar from '../Components/Navbar'
import Contact from '../Components/Contact'

const Home = () => {
  return (
    <>
    <div className='container mx-auto'>
<Navbar />
<Hero />
<Slider images={partnersLogo} />
<RoadMap />
<FeaturesSection />
<Testimonials />
<Contact />
<Footer />
</div>
    </>
  )
}

export default Home