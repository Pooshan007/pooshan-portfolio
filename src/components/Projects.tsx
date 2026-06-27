"use client";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  githubLink: string;
  tags: string[];
}

const projects: Project[] = [
  {
    id: "voxtutor",
    title: "SkinDx",
    category: "DEEP LEARNING WEB APPLICATION",
    description: "A deep learning-powered web application that detects skin diseases from uploaded images using CNN models. Built with TensorFlow, Flask, and Streamlit.",
    githubLink: "https://github.com/Pooshan007/SkinDx",
    image: "/projects/skin.png",
    tags: ["AI", "TensorFlow", "CNN", "Healthcare"],
  },
  {
    id: "inevitable",
    title: "Sales Performance Dashboard",
    category: "BUSINESS INTELLIGENCE & DATA ANALYTICS",
    description: "An interactive Power BI dashboard that analyzes sales performance using KPIs, revenue trends, regional insights, product analysis, and customer segmentation. Built with data modeling, DAX measures, and dynamic visualizations to support business decision-making.",
    githubLink: "https://github.com/Pooshan007/Sales-Performance-Dashboard",
    image: "/projects/sales.png",
    tags: ["Power BI", "DAX", "SQL", "Data Analytics"],
  },
  {
    id: "fintrace",
     title: "Lung Cancer Detection",
  category: "MEDICAL IMAGE ANALYSIS",
  description:"An ensemble machine learning system combining CNN, Random Forest, XGBoost, and SVC to detect lung cancer from histopathology images.",
  image: "/projects/lungs.png",
  githubLink: "#",
  tags: ["Deep Learning", "CNN", "Medical AI"],
  },
];

interface Achievement {
  title: string;
  award: string;
  link: string;
}

const achievements: Achievement[] = [
  {
    title: "GFG Hackathon",
    award: "Top 10 Finalist",
    link: "#",
  },
  {
    title: "GSSoC Contribution",
    award: "Top 10 Contributor",
    link: "#",
  },
];

export default function Projects() {
  return (
    <div className="bg-black text-white w-full">
      {/* PROJECTS SECTION */}
      <section id="projects" className="relative py-32 px-6 md:px-16 border-t border-white/10 max-w-7xl mx-auto space-y-20">
        
        {/* Section Header */}
        <div className="space-y-4">
          <span className="font-sans text-[#FF5000] text-xs tracking-[0.35em] uppercase block font-black">
            ATHLETIC CRAFT // GRID
          </span>
          <h2 className="font-display font-normal text-6xl md:text-8xl text-white uppercase tracking-tighter leading-none select-none">
            PROJECTS
          </h2>
        </div>

        {/* Editorial Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="flex flex-col border border-white/10 bg-black rounded-none p-6 transition-all duration-300 hover:border-[#FF5000] h-full"
            >
              {/* Product Cover Style Image */}
              {/* Project Image */}
<div className="relative aspect-[16/10] overflow-hidden border border-white/10 rounded-sm group">

  <Image
    src={project.image}
    alt={project.title}
    fill
    sizes="(max-width: 768px) 100vw, 33vw"
    className="object-cover transition-all duration-700 group-hover:scale-110"
  />

  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition duration-500" />

  {/* Orange border on hover */}
  <div className="absolute inset-0 border border-[#FF5000]/0 group-hover:border-[#FF5000]/40 transition duration-500" />

</div>



              {/* Specs & Info */}
              <div className="flex-1 flex flex-col justify-between pt-6 space-y-6">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-1">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className="font-sans text-white/50 bg-white/5 border border-white/10 px-2 py-0.5 text-[8px] tracking-widest uppercase font-bold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="font-display font-normal text-3xl md:text-4xl text-white tracking-tight leading-none">
                    {project.title}
                  </h3>

                  <p className="font-sans text-white/60 text-xs md:text-sm leading-relaxed font-light">
                    {project.description}
                  </p>
                </div>

                {/* Sharp Nike-style Button Pairs */}
                <div className="pt-6 border-t border-white/10 flex justify-center">            
                  <a
  href={project.githubLink}
  target="_blank"
  rel="noopener noreferrer"
  className="mt-6 w-full flex items-center justify-center gap-3 border border-white/20 py-4 text-sm uppercase tracking-[0.25em] font-black hover:border-[#FF5000] hover:bg-white/5 transition-all duration-300"
>
  <FaGithub className="text-lg" />
  GitHub
</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ACHIEVEMENTS SECTION */}
      <section id="achievements" className="relative py-28 px-6 md:px-16 border-t border-white/10 bg-[#080808]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="space-y-4 text-center">
            <span className="font-sans text-[#FF5000] text-xs tracking-[0.35em] uppercase block font-black">
              PERFORMANCE RECORDS // STATS
            </span>
            <h2 className="font-display font-normal text-5xl md:text-7xl text-white uppercase tracking-tighter leading-none select-none">
              ACHIEVEMENTS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
  {achievements.map((item, idx) => (
    <div
      key={idx}
      className="p-10 border border-white/10 bg-black rounded-none text-center group hover:border-[#FF5000] transition-colors duration-300"
    >
      <div className="space-y-4">
        <span className="font-sans text-[#FF5000] text-[10px] tracking-[0.25em] uppercase font-black block">
          🏆 {item.award}
        </span>

        <h3 className="font-display font-normal text-3xl md:text-4xl text-white tracking-tight uppercase leading-none">
          {item.title}
        </h3>
      </div>
    </div>
  ))}
</div>
        </div>
      </section>
    </div>
  );
}
