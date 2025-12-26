"use client";

import { useState } from "react";
import {
  User,
  Code,
  Folder,
  Briefcase,
  Mail,
  LayoutGrid,
} from "lucide-react";

import DockButton from "./DockButton";
import StartMenu from "./StartMenu";
import { useAppStore } from "@/shared/state/appStore";

export default function DesktopNavbar() {
  const [startOpen, setStartOpen] = useState(false);
  const openApp = useAppStore((s) => s.openApp);

  return (
    <>
      {/* Start Menu */}
      <StartMenu
        open={startOpen}
        onClose={() => setStartOpen(false)}
      />

      <nav
        className="
          fixed bottom-16 left-1/2 -translate-x-1/2
          p-3
          rounded-2xl
          bg-white/20 backdrop-blur-2xl
          border border-white/25
          shadow-[0_20px_50px_rgba(0,0,0,0.35)]
          flex flex-col items-center gap-5
          z-50
        "
      >
        {/* TOP ROW */}
        <div className="flex gap-5">
          <DockButton
            label="Start"
            icon={LayoutGrid}
            onClick={() => setStartOpen((v) => !v)}
          />

          <DockButton
            label="About"
            icon={User}
            onClick={() => openApp("about")}
          />

          <DockButton
            label="Skills"
            icon={Code}
            onClick={() => openApp("skills")}
          />
        </div>

        {/* BOTTOM ROW */}
        <div className="flex gap-5">
          <DockButton
            label="Projects"
            icon={Folder}
            onClick={() => openApp("projects")}
          />

          <DockButton
            label="Experience"
            icon={Briefcase}
            onClick={() => openApp("experience")}
          />

          <DockButton
            label="Contact"
            icon={Mail}
            onClick={() => openApp("contact")}
          />
        </div>
      </nav>
    </>
  );
}
