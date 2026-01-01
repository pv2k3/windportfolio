"use client";

import React from "react";

const BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/";

const skills = [
  // ================= LANGUAGES =================
  { name: "Python", icon: `${BASE}python/python-original.svg` },
  { name: "JavaScript", icon: `${BASE}javascript/javascript-original.svg` },
  { name: "PHP", icon: `${BASE}php/php-original.svg` },
  { name: "SQL", icon: `https://www.acuitytraining.co.uk/wp-content/uploads/2025/07/SQL-Image.png` },
  { name: "Bash", icon: `${BASE}bash/bash-original.svg` },

  // ================= FRONTEND =================
  { name: "HTML5", icon: `${BASE}html5/html5-original.svg` },
  { name: "CSS3", icon: `${BASE}css3/css3-original.svg` },
  { name: "React.js", icon: `${BASE}react/react-original.svg` },
  { name: "Next.js", icon: `${BASE}nextjs/nextjs-original.svg` },
  { name: "Responsive UI / UX", icon: `${BASE}figma/figma-original.svg` },
  { name: "Desktop UI Systems", icon: `${BASE}apple/apple-original.svg` },

  // ================= BACKEND =================
  { name: "Node.js", icon: `${BASE}nodejs/nodejs-original.svg` },
  { name: "Express.js", icon: `${BASE}express/express-original.svg` },
  { name: "FastAPI", icon: `${BASE}fastapi/fastapi-original.svg` },
  { name: "Core PHP", icon: `${BASE}php/php-original.svg` },
  { name: "REST APIs", icon: `${BASE}postman/postman-original.svg` },
  { name: "Auth Systems", icon: `https://img.icons8.com/?size=100&id=sUU7wwvo6G2l&format=png&color=000000` },
  { name: "Caching", icon: `${BASE}redis/redis-original.svg` },
  { name: "Logging", icon: `${BASE}datadog/datadog-original.svg` },

  // ================= AI / ML =================
  { name: "AI Agents", icon: `https://img.icons8.com/?size=100&id=ij6f4GUUwLE8&format=png&color=000000` },
  { name: "Intent Classification", icon: `${BASE}tensorflow/tensorflow-original.svg` },
  { name: "NLP", icon: `https://cdn-icons-png.flaticon.com/512/10176/10176693.png` },
  { name: "OpenCV", icon: `${BASE}opencv/opencv-original.svg` },
  { name: "YOLO", icon: `${BASE}python/python-original.svg` }, // YOLO has no official logo
  { name: "Gemini", icon: `${BASE}google/google-original.svg` },
  { name: "Hugging Face", icon: `https://huggingface.co/front/assets/huggingface_logo-noborder.svg` },
  { name: "Ollama", icon: `${BASE}linux/linux-original.svg` },
  { name: "Hybrid AI", icon: `${BASE}pytorch/pytorch-original.svg` },

  // ================= DATABASES =================
  { name: "MySQL", icon: `${BASE}mysql/mysql-original.svg` },
  { name: "MongoDB", icon: `${BASE}mongodb/mongodb-original.svg` },
  { name: "Data Modeling", icon: `${BASE}apache/apache-original.svg` },
  { name: "Schema Design", icon: `${BASE}postgresql/postgresql-original.svg` },

  // ================= DEVOPS =================
  { name: "Docker", icon: `${BASE}docker/docker-original.svg` },
  { name: "Docker Desktop", icon: `${BASE}docker/docker-original.svg` },
  { name: "Cloudflare Tunnel", icon: `${BASE}cloudflare/cloudflare-original.svg` },
  { name: "Azure App Service", icon: `${BASE}azure/azure-original.svg` },
  { name: "Git", icon: `${BASE}git/git-original.svg` },
  { name: "GitHub", icon: `${BASE}github/github-original.svg` },
  { name: "Home Lab", icon: `${BASE}linux/linux-original.svg` },
  { name: "Local Server", icon: `${BASE}nginx/nginx-original.svg` },

  // ================= ROBOTICS =================
  { name: "ESP32", icon: `${BASE}arduino/arduino-original.svg` },
  { name: "ROS", icon: `${BASE}ros/ros-original.svg` },
  { name: "HW–SW Integration", icon: `${BASE}embeddedc/embeddedc-original.svg` },
];

export default function Skills() {
  return (
    <div className="flex flex-col overflow-hidden">
      <h1 className="text-[clamp(1.5rem,2.5vw,1.875rem)] text-center mb-3 font-bold text-white">
        Skills
      </h1>

      <div className="flex-1 overflow-y-auto glass-scroll px-6 py-4">
        <div className="flex flex-wrap justify-center gap-4 max-w-7xl mx-auto">
          {skills.map(({ name, icon }) => (
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
              <img
                src={icon}
                alt={name}
                loading="lazy"
                className="w-10 h-10 object-contain"
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
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
