import React from 'react'
import {Navbar} from "@/components/Navbar";
import Footer from "@/components/Footer";
import {AboutSection} from "@/components/about-section";
const About = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
    <div className="max-w-7xl w-full">
      <Navbar />
      <AboutSection />
      <Footer />
    </div>
  </main>
  )
}

export default About