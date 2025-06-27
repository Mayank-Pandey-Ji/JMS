import './App.css'
import HeroSection from './pages/HeroSection'
import ProblemStatementSection from './pages/ProblemStatementSection'
import HowToGetIn from './components/HowToGetIn'
import TestimonialCarousel from './components/TestimonialCarousel'
import ProgramDetails from './components/ProgramDetails'
import ProgramFeatures from './components/ProgramFeatures'
import ProgramFit from './components/ProgramFit'
import VideoTestimonials from './components/VideoTestimonials'
import SiteFAQs from './components/SiteFAQs'
import ContactUs from './components/ContactUs'
function App() {

  return (
    <>
    <ProgramFeatures />
      <ProgramFit />
      <HowToGetIn />
      <ProgramDetails />
      <VideoTestimonials />
      <TestimonialCarousel/>
      <SiteFAQs/>
      <ContactUs/>
    </>
  )
}

export default App
