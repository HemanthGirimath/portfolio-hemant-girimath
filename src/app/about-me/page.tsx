'use client';
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Code, Gift, Rocket, Users, Award } from 'lucide-react';

const AboutMePage = () => {
  const highlights = [
    {
      icon: Award,
      title: "Education",
      content: "MCA Graduate with 7.8 CGPA"
    },
    {
      icon: Code,
      title: "Tech Stack",
      content: "Angular, Express.js, Tailwind CSS, HTML, CSS, JavaScript/TypeScript"
    },
    {
      icon: Brain,
      title: "Current Focus",
      content: "AI/ML and Retrieval-Augmented Generation with LLMs"
    },
    {
      icon: Gift,
      title: "Key Projects",
      content: "Crypto News Aggregator (NLP), Crypto Web3 Wallet"
    },
    {
      icon: Users,
      title: "Leadership",
      content: "Mentored new interns at Lloyd Harrington, Australia"
    },
    {
      icon: Rocket,
      title: "Certification",
      content: "DevOps on AWS Certified"
    }
  ];

  return (
    <div className="min-h-screen bg-black px-4 py-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Section */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-green-400">About Me</h1>
          <div className="flex flex-wrap gap-2">
            {['Full-stack Development', 'AI/ML', 'Web3', 'DevOps'].map((skill) => (
              <Badge key={skill} variant="outline" className="bg-zinc-900 text-green-400 border-green-400/20">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <Card className="bg-zinc-900/50 border-zinc-800">
          <CardContent className="p-6">
            <p className="text-lg text-zinc-300 leading-relaxed">
              As an MCA graduate with a strong 7.8 CGPA, I bring a solid foundation in computer science complemented by practical experience as a front-end developer intern at Lloyd Harrington, Australia. My skillset spans full-stack development, with proficiency in Angular, Express.js, Tailwind CSS, HTML, CSS, and JavaScript/TypeScript.
            </p>
          </CardContent>
        </Card>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item) => (
            <Card key={item.title} className="bg-zinc-900/50 border-zinc-800 hover:border-green-400/50 transition-colors">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <item.icon className="w-6 h-6 text-green-400" />
                  <h3 className="text-lg font-semibold text-green-400">{item.title}</h3>
                </div>
                <p className="text-zinc-300">{item.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Section */}
        <Card className="bg-zinc-900/50 border-zinc-800">
          <CardContent className="p-6">
            <p className="text-zinc-300 leading-relaxed">
              I have demonstrated my abilities through various projects, all available on my GitHub. Currently focusing on enhancing my AI/ML knowledge and developing a Retrieval-Augmented Generation project using LLMs. With a diverse project portfolio spanning AI, NLP, cryptocurrency, and web3, I have proven my adaptability and broad understanding of different technologies. I am eager to contribute my knowledge and continue growing in a dynamic development environment.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AboutMePage;