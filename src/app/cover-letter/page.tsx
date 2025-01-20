'use client';   

import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from 'lucide-react';

const CoverLetterPage = () => {
  return (
    <div className="min-h-screen bg-black px-4 py-8">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-green-400">Cover Letter</h1>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 text-zinc-400">
              <Calendar className="w-5 h-5" />
              <span>{new Date().toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-400">
              <MapPin className="w-5 h-5" />
              <span>Your Location</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-400">
              <Building className="w-5 h-5" />
              <span>Full-stack Developer Position</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <Card className="bg-zinc-900/50 border-zinc-800">
          <CardContent className="p-8 space-y-6">
            <p className="text-zinc-300 leading-relaxed">
              Dear Hiring Manager,
            </p>
            
            <p className="text-zinc-300 leading-relaxed">
              I am writing to express my strong interest in the Full-stack Developer position. With my MCA degree and hands-on experience at Lloyd Harrington, Australia, I bring a unique combination of academic excellence and practical expertise in modern web development technologies.
            </p>

            <p className="text-zinc-300 leading-relaxed">
              During my internship, I have had the opportunity to work with Angular, Express.js, and various modern web technologies, contributing to real-world projects while mentoring new team members. My recent focus on AI/ML and development of a Retrieval-Augmented Generation project demonstrates my commitment to staying at the forefront of technology.
            </p>

            <p className="text-zinc-300 leading-relaxed">
              What sets me apart is my diverse project portfolio, spanning from AI and NLP to cryptocurrency and web3 technologies. My DevOps on AWS certification further showcases my commitment to understanding the complete development lifecycle. I am particularly excited about the possibility of bringing this comprehensive skill set to your team.
            </p>

            <p className="text-zinc-300 leading-relaxed">
              I would welcome the opportunity to discuss how my background, technical skills, and enthusiasm for innovation align with your teams needs.
            </p>

            <p className="text-zinc-300 leading-relaxed">
              Best regards,<br />
              Hemant Girimath
            </p>
          </CardContent>
        </Card>

        {/* Skills Highlight */}
        <div className="flex flex-wrap gap-2">
          {[
            'Angular','Next.js', 'Express.js', 'TypeScript', 'AI/ML', 
            'Web3', 'DevOps', 'AWS', 'Team Leadership'
          ].map((skill) => (
            <Badge 
              key={skill} 
              variant="outline" 
              className="bg-zinc-900 text-green-400 border-green-400/20"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoverLetterPage;