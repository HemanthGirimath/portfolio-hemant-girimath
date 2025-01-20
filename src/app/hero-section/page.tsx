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
        <div className="min-h-max bg-black flex justify-center ">
          <Card className="bg-transparent border-none shadow-none ">
            <div className="flex items-center justify-center space-x-1 md:space-x-2">
              {name.split('').map((char, index) => (
                <span
                  key={index}
                  className={`
                    text-2xl md:text-8xl
                    transition-all duration-100 ease-in-out
                    text-emerald-400 
                    ${letterFonts[index]}
                    ${char === ' ' ? 'w-4 md:w-6' : ''}
                  `}
                >
                  {char}
                </span>
                
              ))}
              
            </div>
            <div className="flex flex-col items-center">
                
                <div className="flex justify-center items-center w-full">
                  <div className="text-black font-bold px-8 rounded-lg mt-10 tex-sm md:text-xl flex flex-start bg-emerald-400">
                    <p>Full-stack Developer/AI Engineer </p>
                  </div>
                  {/* <div>
                    <Badge variant="secondary" className="font-bold text-lg mt-10 ml-10">{skills[currentSkillIndex]}</Badge>
                  </div> */}
                </div>

                <div className="text-center text-gray-100 font-medium mt-4 text-md ">
                    <Badge variant="secondary" className="font-bold text-lg mt-10 ">{skills[currentSkillIndex]}</Badge>
                  <p className="mt-6 text-sm text-gray-400 md:text-lg glow">
                  Passionate about building innovative software solutions and leveraging cutting-edge technologies to drive digital transformation.
                  </p>

                </div>
              

            </div>
          </Card>
        </div>
      );
    };
export default HeroSection;