"use client";

import React from "react";
import {
  Code, FileCode, Database, Server, Cloud,
  Brain, Cpu, GitBranch, Box, Layout
} from "lucide-react";

const skills = [
  // Languages
  { name: "Python", icon: Code },
  { name: "JavaScript", icon: FileCode },
  { name: "PHP", icon: FileCode },
  { name: "SQL", icon: Database },
  { name: "Bash", icon: Code },

  // Frontend
  { name: "HTML5", icon: Layout },
  { name: "CSS3", icon: Layout },
  { name: "React.js", icon: Layout },
  { name: "Next.js", icon: Layout },
  { name: "Responsive UI / UX", icon: Layout },
  { name: "Desktop UI Systems", icon: Layout },

  // Backend
  { name: "Node.js", icon: Server },
  { name: "Express.js", icon: Server },
  { name: "FastAPI", icon: Server },
  { name: "Core PHP", icon: Server },
  { name: "REST APIs", icon: Server },
  { name: "Auth Systems", icon: Server },
  { name: "Caching", icon: Server },
  { name: "Logging", icon: Server },

  // AI / ML
  { name: "AI Agents", icon: Brain },
  { name: "Intent Classification", icon: Brain },
  { name: "NLP", icon: Brain },
  { name: "OpenCV", icon: Brain },
  { name: "YOLO", icon: Brain },
  { name: "Gemini", icon: Brain },
  { name: "Hugging Face", icon: Brain },
  { name: "Ollama", icon: Brain },
  { name: "Hybrid AI", icon: Brain },

  // Databases
  { name: "MySQL", icon: Database },
  { name: "MongoDB", icon: Database },
  { name: "Data Modeling", icon: Database },
  { name: "Schema Design", icon: Database },

  // DevOps
  { name: "Docker", icon: Box },
  { name: "Docker Desktop", icon: Box },
  { name: "Cloudflare Tunnel", icon: Cloud },
  { name: "Azure App Service", icon: Cloud },
  { name: "Git", icon: GitBranch },
  { name: "GitHub", icon: GitBranch },
  { name: "Home Lab", icon: Cloud },
  { name: "Local Server", icon: Cloud },

  // Robotics
  { name: "ESP32", icon: Cpu },
  { name: "ROS", icon: Cpu },
  { name: "HW–SW Integration", icon: Cpu },
];

export default function Skills() {
  return (
    <div className="flex flex-col overflow-hidden">
      <h1 className="text-[clamp(1.5rem,2.5vw,1.875rem)] text-center mb-3 font-bold">
        Skills
      </h1>

      <div className="flex-1 overflow-y-auto glass-scroll px-6 py-4">
        <div className="flex flex-wrap justify-center gap-4 max-w-7xl mx-auto">
          {skills.map(({ name, icon: Icon }) => (
            <div
              key={name}
              className="
                w-[calc(33.333%-0.67rem)]
                max-w-[120px]
                aspect-square
                flex flex-col items-center justify-center gap-2
                bg-slate-800/60 backdrop-blur
                border border-slate-700 rounded-xl
                shadow-md cursor-pointer
                hover:bg-slate-700/70 hover:scale-105 hover:shadow-lg
                transition-all duration-200
                p-4
              "
            >
              <Icon className="w-10 h-10 text-blue-400 flex-shrink-0" />
              <span className="text-xs text-slate-200 text-center leading-tight font-medium">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}