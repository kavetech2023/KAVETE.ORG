import Hero from '../Components/Hero'
import { partnersLogo } from '../Data/partners'
import FeaturesSection from '../Components/FeaturesSection'
import Testimonials from '../Components/Testimonials'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import FAQSection from '../Components/FAQSection'



const Home = () => {
  return (
    <>
    
<Navbar/>
<Hero />
<FeaturesSection />
<Testimonials />
<FAQSection />
<Footer />

    </>
  )
}

export default Home