import React from "react";
import { Cpu, Leaf, Database, LayoutGrid, Home } from "lucide-react";

function Projects() {
  return (
    <div className="flex flex-col overflow-hidden">
      {/* Header */}
      <h1 className="text-[clamp(1.5rem,2.5vw,1.875rem)] text-center mb-2 font-bold">
        Projects
      </h1>

      <p className="text-center text-slate-300 px-4 mb-4 text-sm">
        Selected projects showcasing system design, AI, and full-stack development.
      </p>

      {/* Scroll Area */}
      <div className="flex-1 overflow-y-auto glass-scroll px-4 pb-6">
        <div className="flex flex-col gap-6 items-center">
          <div className="flex flex-col gap-6 w-full max-w-3xl">

            {/* Project 1 */}
            <div className="bg-slate-800 rounded-xl p-6 shadow-xl border border-slate-700 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <Cpu className="w-5 h-5 text-blue-400" />
                <h2 className="font-semibold text-lg">
                  Local AI Assistant (JARVIS-Style System)
                </h2>
              </div>
              <ul className="list-disc list-inside text-sm text-slate-300 space-y-1">
                <li>Intent-based command execution system</li>
                <li>Task retry, fallback handling, and logging</li>
                <li>Modular and extensible architecture</li>
                <li>Runs locally with optional cloud integrations</li>
              </ul>
            </div>

            {/* Project 2 */}
            <div className="bg-slate-800 rounded-xl p-6 shadow-xl border border-slate-700 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <Leaf className="w-5 h-5 text-green-400" />
                <h2 className="font-semibold text-lg">
                  AI-Based Plant Recommendation System
                </h2>
              </div>
              <ul className="list-disc list-inside text-sm text-slate-300 space-y-1">
                <li>Combines satellite imagery and weather data</li>
                <li>Determines land feasibility for plantation</li>
                <li>Suggests plant types based on environmental conditions</li>
                <li>Designed for scalable real-world deployment</li>
              </ul>
            </div>

            {/* Project 3 */}
            <div className="bg-slate-800 rounded-xl p-6 shadow-xl border border-slate-700 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <Database className="w-5 h-5 text-purple-400" />
                <h2 className="font-semibold text-lg">
                  Custom CRM System
                </h2>
              </div>
              <ul className="list-disc list-inside text-sm text-slate-300 space-y-1">
                <li>Role-based access and approval workflows</li>
                <li>Lead and task management system</li>
                <li>Backend developed using PHP and MySQL</li>
                <li>Built to replace Excel-based processes</li>
              </ul>
            </div>

            {/* Project 4 */}
            <div className="bg-slate-800 rounded-xl p-6 shadow-xl border border-slate-700 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <LayoutGrid className="w-5 h-5 text-blue-500" />
                <h2 className="font-semibold text-lg">
                  Desktop-Style Web Interface
                </h2>
              </div>
              <ul className="list-disc list-inside text-sm text-slate-300 space-y-1">
                <li>Window management with open, close, minimize, maximize</li>
                <li>Z-index handling and focus management</li>
                <li>Drag and resize functionality</li>
                <li>Optimized for performance and UX without heavy libraries</li>
              </ul>
            </div>

            {/* Project 5 */}
            <div className="bg-slate-800 rounded-xl p-6 shadow-xl border border-slate-700 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <Home className="w-5 h-5 text-orange-400" />
                <h2 className="font-semibold text-lg">
                  Home Automation & Home Lab
                </h2>
              </div>
              <ul className="list-disc list-inside text-sm text-slate-300 space-y-1">
                <li>ESP32-based home automation system</li>
                <li>Remote access using Cloudflare Tunnel</li>
                <li>Operates without a static IP</li>
                <li>Centralized control via local PC server</li>
              </ul>
            </div>

          </div>

          <p className="text-xs text-slate-400 text-center mt-4">
            Focused on building scalable, secure, and real-world systems.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
