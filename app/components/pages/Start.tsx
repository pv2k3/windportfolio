"use client";

import {
  User,
  Briefcase,
  FolderGit2,
  Layers,
  Mail,
  Github,
  Linkedin,
} from "lucide-react";

import { useAppStore } from "@/app/shared/state/appStore";

type StartProps = {
  onClose: () => void;
};

export default function Start({ onClose }: StartProps) {
  const openApp = useAppStore((s) => s.openApp);

  const launch = (app: Parameters<typeof openApp>[0]) => {
    // console.log(app)
    openApp(app);
    onClose(); // 👈 auto-close Start Menu
  };

  return (
    <div className="w-full h-full flex flex-col text-slate-100">
      {/* ===== PROFILE ===== */}
      <div className="px-8 pt-8 pb-6 flex items-center gap-4">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center font-bold text-slate-900 text-xl">
          PV
        </div>

        <div>
          <p className="text-xl font-semibold leading-tight">
            Priyanshu Verma
          </p>
          <p className="text-sm text-slate-400">
            Full Stack · AI Systems
          </p>
        </div>
      </div>

      {/* ===== PINNED ===== */}
      <div className="px-8 py-4 flex-1">
        <p className="text-xs uppercase tracking-widest text-slate-400 mb-4">
          Pinned
        </p>

        <div className="grid grid-cols-3 gap-6">
          <App icon={<User size={26} />} label="About" onClick={() => launch("about")} />
          <App icon={<Layers size={26} />} label="Skills" onClick={() => launch("skills")} />
          {/* <App icon={<Briefcase size={26} />} label="Experience" onClick={() => launch("experience")} />
          <App icon={<FolderGit2 size={26} />} label="Projects" onClick={() => launch("projects")} /> */}
          <App icon={<Mail size={26} />} label="Contact" onClick={() => launch("contact")} />
        </div>
      </div>

      {/* ===== FOOTER ===== */}
      <div className="px-8 py-5 border-t border-slate-700/40 flex items-center justify-between">
        <div className="flex gap-4">
          <IconLink href="https://github.com/pv2k3">
            <Github size={20} />
          </IconLink>

          <IconLink href="https://www.linkedin.com/in/priyanshu-verma-2k3/">
            <Linkedin size={20} />
          </IconLink>

          <IconLink href="mailto:vermapriyanshu001@gmail.com">
            <Mail size={20} />
          </IconLink>
        </div>
      </div>
    </div>
  );
}

/* ---------- SUB COMPONENTS ---------- */

function App({
  icon,
  label,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center gap-2 group"
    >
      <div
        className="
          w-16 h-16
          rounded-2xl
          bg-slate-800/90
          flex items-center justify-center
          group-hover:bg-slate-700
          transition
        "
      >
        <span className="text-cyan-400">{icon}</span>
      </div>
      <span className="text-sm text-slate-300">
        {label}
      </span>
    </button>
  );
}

function IconLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      className="
        p-2 rounded-lg
        hover:bg-slate-800
        text-slate-300 hover:text-white
        transition
      "
    >
      {children}
    </a>
  );
}
