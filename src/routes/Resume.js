import React from 'react'
import Navbar from "../components/Navbar";
import Resumecomp from "../components/Resume";
import Footer from "../components/Footer";
import HeroImg2 from '../components/HeroImg2';

const Resume = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="View my Resume" text="Download my resume" />
      <Resumecomp/>
      <Footer />
    </div>
  )
}

export default Resume