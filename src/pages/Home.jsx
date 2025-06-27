import React from 'react'
import HeroPage from "./HeroPage"
import Thoughts from "./Thoughts"
import OnlineCohort from "./OnlineCohort"
import ProgramFeatures from "../components/ProgramFeatures"
import ProgramFit from "../components/ProgramFit"
import HowToGetIn from "../components/HowToGetIn"
import ProgramDetails from "../components/ProgramDetails"
import VideoTestimonials from "../components/VideoTestimonials"
import TestimonialCarousel from "../components/TestimonialCarousel"
import Header from "../components/Header"
import SiteFAQs from "../components/SiteFAQs"
import ContactUs from "../components/ContactUs"
const Home = () => {
  return (
    <>
    <Header />
    <HeroPage />
    <Thoughts />
    <OnlineCohort />
    <ProgramFeatures />
    <ProgramFit />
    <HowToGetIn />
    <ProgramDetails />
    <VideoTestimonials />
    <TestimonialCarousel />
    <SiteFAQs />
    <ContactUs />
  </>
  )
}

export default Home
