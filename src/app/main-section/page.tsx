'use client';
import React from 'react';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const projects = [
  {
    title: "InterViewAdvanced",
    description: "Interview Advanced helps job seekers prepare for, and ace their next interview(s). Enter a job role (and job description if available), and open-API generates tailored interview questions. When you record your answers, they are evaluated using Google AI and Gemini. It then scores your response against our scoring rubric.",
    techStack: ["Vite", "TypeScript", "OpenAI API", "Tailwind CSS","shadcn/ui"],
    type: "Personal",
    liveUrl: "https://interviewadvanced.com/",
    githubUrl: "https://github.com/Team-Number-1"
  },
  {
    title: "Text-Behind-Image",
    description: "Text-Behind-Image is a powerful tool that allows users to add text behind any image. It is designed to be easy to use and customize, making it ideal for adding text to any type of image.",
    techStack: ["Next.js", "PostgreSQL", "Tailwind CSS","Shadcn/ui","Razor-pay"],
    type: "AI-Assisted",
    liveUrl: "https://text-behind-image-phi-seven.vercel.app/",
    githubUrl: "https://github.com/HemanthGirimath/text-behind-image"
  },
  {
    title: "Text-To-SQL",
    description: "Text-To-SQL is a app that allows user to talk the database using Natural language",
    techStack: ["Next.js", "Tailwind CSS","Supabase","Groq LLM","Shadcn/ui"],
    type: "Personal",
    liveUrl: "https://text-to-sql-lanchain.vercel.app/chat",
    githubUrl: "https://github.com/HemanthGirimath/text_to_sql_lanchain"
  },
  {
    title: "Test-Case-Generator",
    description: "Test-Case-Generator is a tool that generates test cases for a given screen-shots of flow of application and small description.",
    techStack: ["Next.js", "Tailwind CSS", "shadcn/ui"],
    type: "Personal",
    liveUrl: "https://test-case-generator-vqyz.vercel.app/",
    githubUrl: "https://github.com/HemanthGirimath/test-case-generator"
  },
  {
    title:"WishCraft",
    description:"WishCraft is smart app that uses LLM to find loop-holes in your wish and forcess you to form sentences that exactly matches your wish thought",
    techStack: ["Next.js", "Tailwind CSS", "shadcn/ui","Groq LLM"],
    type: "Personal",
    liveUrl: "https://github.com/HemanthGirimath/WishCraft",
    githubUrl: "https://github.com/HemanthGirimath/WishCraft"
  }
 
  
];

const ProjectCard = ({ project }) => {
  return (
    <div className="group transition-all duration-300 ease-in-out">
      <Card className="h-full  bg-black/40 hover:bg-black/60 border border-emerald-500/20 
                     hover:border-emerald-500/40 transition-all duration-300 p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-emerald-400 group-hover:text-emerald-300 
                       transition-colors">{project.title}</h3>
          <Badge variant="outline" 
                className="bg-emerald-950/50 text-emerald-300">
            {project.type}
          </Badge>
        </div>
        
        <p className="text-gray-300 mb-4 line-clamp-3">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map(tech => (
            <Badge key={tech} 
                   className="bg-black/60 text-emerald-400 border-emerald-500/20">
              {tech}
            </Badge>
          ))}
        </div>
        
        <div className="flex gap-4 mt-4">
          <a href={project.liveUrl}
             className="text-emerald-400 hover:text-emerald-300 transition-colors"
             target="_blank"
             rel="noopener noreferrer">
            Live Demo →
          </a>
          <a href={project.githubUrl}
             className="text-gray-400 hover:text-gray-300 transition-colors"
             target="_blank"
             rel="noopener noreferrer">
            GitHub →
          </a>
        </div>
      </Card>
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <div className="min-h-max  bg-gradient-to-br from-black via-zinc-950/90 to-black">
      <h2 className="text-4xl font-bold text-emerald-400 mb-12 text-center">
        Projects
      </h2>

      <Tabs defaultValue="all" className="max-w-7xl mx-auto mb-8 ">
        <div className="flex justify-center mb-8">
          <TabsList className="bg-black/40 border border-emerald-500/20">
            <TabsTrigger value="all" className="data-[state=active]:bg-emerald-950">
              All Projects
            </TabsTrigger>
            <TabsTrigger value="personal" className="data-[state=active]:bg-emerald-950">
              Personal Projects
            </TabsTrigger>
            <TabsTrigger value="ai" className="data-[state=active]:bg-emerald-950">
              AI-Assisted Projects
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="all" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="personal" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .filter(project => project.type === "Personal")
              .map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="ai" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .filter(project => project.type === "AI-Assisted")
              .map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProjectsSection;