'use client';

import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge"


const name = "HEMANT GIRIMATH";
const fontClasses = [
    'font-serif italic',
    'font-mono font-bold',
    'font-sans font-extrabold',
    'font-serif font-black',
    'font-mono italic',
    'font-sans font-light',
    'font-serif font-extrabold',
    'font-mono font-black',
  ];

const skills = [
  'Next.js',
  'React.js',
  'Node.js',
  'Express.js',
  'MongoDB',
  'Tailwind CSS',
  'JavaScript',
  'TypeScript',
  'Python',
  'SQl/MySQL',
  'postgresql',
]

 

const  HeroSection =()=> {
    const [letterFonts, setLetterFonts] = useState(
        Array(name.length).fill(fontClasses[0]).map(() => fontClasses[0])
      );
      
      useEffect(() => {
        // Create separate intervals for each letter
        const intervals = name.split('').map((_, index) => {
          return setInterval(() => {
            setLetterFonts(prevFonts => {
              const newFonts = [...prevFonts];
              // Get random font class excluding the current one
              const currentFont = newFonts[index];
              let newFont;
              do {
                newFont = fontClasses[Math.floor(Math.random() * fontClasses.length)];
              } while (newFont === currentFont);
              newFonts[index] = newFont;
              return newFonts;
            });
          // Random interval between 500ms and 1500ms for each letter
          }, Math.random() * 4000 + 800);
        });
    
        // Cleanup intervals
        return () => intervals.forEach(interval => clearInterval(interval));
      }, []);

      const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentSkillIndex(prevIndex => (prevIndex + 1) % skills.length);
        }, 2000); // Change skill every 2 seconds

        return () => clearInterval(interval);
      }, []);

      return (
        <div className="h-max bg-black flex items-center mt-20 mb-20">
          <Card className="bg-transparent border-none shadow-none w-full">
            {/* Name Container */}
            <div className="flex items-center justify-center flex-wrap">
              {name.split('').map((char, index) => (
                <span
                  key={index}
                  className={`
                    text-xl sm:text-4xl md:text-6xl lg:text-8xl
                    transition-all duration-100 ease-in-out
                    text-emerald-400 
                    ${letterFonts[index]}
                    ${char === ' ' ? 'w-2 sm:w-3 md:w-4 lg:w-6' : ''}
                  `}
                >
                  {char}
                </span>
              ))}
            </div>
      
            {/* Title and Skills Section */}
            <div className="flex flex-col items-center">
            <p className="text-sm sm:text-base md:text-lg text-gray-400 mt-4">
                  Passionate about building innovative software solutions and leveraging 
                  cutting-edge technologies to drive digital transformation.
                </p>
              {/* Title */}
              <div className="w-full flex justify-center mt-4 sm:mt-6">
                <div className="text-black font-bold px-4 sm:px-6 py-2 rounded-lg 
                              text-sm sm:text-base md:text-lg lg:text-xl 
                              bg-emerald-400">
                  <p>Full-stack Developer/AI Engineer</p>
                </div>
              </div>
      
              {/* Skills and Description */}
              <div className="text-center mt-4">
                <Badge variant="secondary" className="font-bold text-sm sm:text-base md:text-lg">
                  {skills[currentSkillIndex]}
                </Badge>
                
               
              </div>
            </div>
          </Card>
        </div>
      );
    };
export default HeroSection;