"use client";

import Hero from "@/components/Hero";
import {Navbar} from "@/components/Navbar";
import Experience from "@/components/Experience";
import ProfessionalExperience from "@/components/ProfessionalExperience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import AnimatedCounter from "@/components/AnimatedCounter";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col w-full overflow-x-hidden">
      <div className="w-full">
        <Navbar />
        <Hero />
        <AnimatedCounter />
        <Experience />
        <ProfessionalExperience />
        <Approach />
        <Clients />
        <Footer />
      </div>
    </main>
  );
};
  
export default Home;