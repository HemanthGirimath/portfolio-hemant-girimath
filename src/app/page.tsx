'use client';

import HeroSection from './hero-section/page'
import ProjectsSection from "./main-section/page";
import Footer from "./footer/page";

export default function Home() {
  return (
    <>
      <div className="flex flex-col">
       
        <div >
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