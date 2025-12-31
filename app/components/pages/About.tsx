"use client";

import {
  User,
  Brain,
  Layers,
  Target,
  MapPin,
  GraduationCap,
} from "lucide-react";

export default function AboutContent() {
  return (
    <div className="w-full h-full p-8 overflow-y-auto text-slate-100">
      {/* ===== HEADER ===== */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-semibold tracking-tight">
          Priyanshu Verma
        </h1>
        <p className="mt-2 text-sm text-slate-400">
          Full Stack Developer · AI & Systems Engineer (Student)
        </p>
      </div>

      {/* ===== PROFILE ===== */}
      <Section title="Profile" icon={<User size={18} />}>
        <InfoRow icon={<GraduationCap size={16} />} text="Final-Year BCA Student" />
        <InfoRow icon={<MapPin size={16} />} text="India" />

        <p className="mt-4 text-sm text-slate-300 leading-relaxed">
          A technically versatile developer with strong foundations in
          full-stack development, AI-driven systems, and software architecture,
          complemented by technical leadership and community coordination
          experience.
        </p>
      </Section>

      {/* ===== ABOUT ME ===== */}
      <Section title="About Me" icon={<Brain size={18} />}>
        <p className="text-sm text-slate-300 leading-relaxed">
          I’m a final-year BCA student focused on building scalable, real-world
          software systems — from modern web applications to AI-powered agents
          and automation tools.
        </p>

        <p className="mt-3 text-sm text-slate-300 leading-relaxed">
          Alongside development, I actively contribute to and manage technical
          communities, where I help organize activities, guide peers, and
          promote learning in cybersecurity and artificial intelligence.
        </p>
      </Section>

      {/* ===== WORK PHILOSOPHY ===== */}
      <Section title="Work Philosophy" icon={<Layers size={18} />}>
        <ul className="space-y-2 list-disc list-inside text-sm text-slate-300">
          <li>Understanding systems at a deeper architectural level</li>
          <li>Writing maintainable, secure, and efficient code</li>
          <li>Designing software for real-world usage, not demos</li>
          <li>Combining AI with practical engineering</li>
        </ul>
      </Section>

      {/* ===== INTERESTS & GOALS ===== */}
      <Section title="Interests & Future Goals" icon={<Target size={18} />}>
        <ul className="space-y-2 list-disc list-inside text-sm text-slate-300">
          <li>AI agents & autonomous systems</li>
          <li>Cybersecurity fundamentals & applied security</li>
          <li>Robotics & intelligent systems</li>
          <li>System design & backend architecture</li>
          <li>Building reliable, production-ready software</li>
        </ul>
      </Section>
    </div>
  );
}

/* ---------- UI BUILDING BLOCKS ---------- */

function Section({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-10 rounded-2xl bg-slate-900/70 border border-slate-700/60 backdrop-blur-md p-6 shadow-xl">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-slate-800 text-cyan-400">
          {icon}
        </div>
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
      {children}
    </div>
  );
}

function InfoRow({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="flex items-center gap-2 text-sm text-slate-300">
      <span className="text-cyan-400">{icon}</span>
      <span>{text}</span>
    </div>
  );
}
