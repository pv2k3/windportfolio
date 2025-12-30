import React from "react";
import { Briefcase, Shield, Cpu } from "lucide-react";

function Experience() {
  return (
    <div className="flex flex-col overflow-hidden">
      {/* Header */}
      <h1 className="text-[clamp(1.5rem,2.5vw,1.875rem)] text-center mb-2 font-bold">
        Experience
      </h1>

      <p className="text-center text-slate-300 px-4 mb-4 text-sm">
        Practical experience across development, community leadership, and AI.
      </p>

      {/* Scroll Area */}
      <div className="flex-1 overflow-y-auto glass-scroll px-4 pb-6">
        <div className="flex flex-col gap-6 items-center">

          {/* Experience Cards */}
          <div className="flex flex-col gap-6 w-full max-w-3xl">

            {/* Experience 1 */}
            <div className="bg-slate-800 rounded-xl p-6 shadow-xl border border-slate-700 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <Briefcase className="w-5 h-5 text-blue-400" />
                <h2 className="font-semibold text-lg">
                  Web Development Intern — My Brand Manager
                </h2>
              </div>

              <ul className="list-disc list-inside text-sm text-slate-300 space-y-1">
                <li>Developed and maintained responsive, SEO-friendly websites</li>
                <li>Worked across frontend and backend stacks</li>
                <li>Implemented secure backend logic and APIs</li>
                <li>Contributed to production-level client projects</li>
              </ul>
            </div>

            {/* Experience 2 */}
            <div className="bg-slate-800 rounded-xl p-6 shadow-xl border border-slate-700 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-purple-400" />
                <h2 className="font-semibold text-lg">
                  Admin — Cyber Intelligence Community, Lucknow
                </h2>
              </div>

              <ul className="list-disc list-inside text-sm text-slate-300 space-y-1">
                <li>Actively involved in managing and moderating a technical community</li>
                <li>Supported initiatives related to cybersecurity awareness and technical learning</li>
                <li>Assisted in coordination, knowledge sharing, and event-related activities</li>
              </ul>
            </div>

            {/* Experience 3 */}
            <div className="bg-slate-800 rounded-xl p-6 shadow-xl border border-slate-700 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <Cpu className="w-5 h-5 text-green-400" />
                <h2 className="font-semibold text-lg">
                  Coordinator — AI Club, LPCPS
                </h2>
              </div>

              <ul className="list-disc list-inside text-sm text-slate-300 space-y-1">
                <li>Coordinated AI-focused learning sessions and activities</li>
                <li>Helped peers explore AI/ML concepts and practical applications</li>
                <li>Assisted in planning workshops, discussions, and collaborative projects</li>
              </ul>
            </div>

          </div>

          {/* Footer Note */}
          <div className="text-xs text-slate-400 text-center mt-4">
            Continuously learning, building, and contributing to real-world projects.
          </div>

        </div>
      </div>
    </div>
  );
}

export default Experience;
