'use client';

import HeroSection from './hero-section/page'
import ProjectsSection from "./main-section/page";
import Footer from "./footer/page";

export default function Home() {
  return (
    <>
      <div className="container mx-auto w-full h-screen flex flex-col ">
       
        <div className="mb-20">
        <HeroSection />
        </div>
        <div>
        <ProjectsSection />
        </div>
        <div>
        <Footer />
        </div>
      </div>
    </>
  );
}