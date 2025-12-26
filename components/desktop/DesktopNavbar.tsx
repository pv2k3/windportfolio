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
import { useWindowStore } from "@/shared/state/windowStore";

export default function DesktopNavbar() {
  const [startOpen, setStartOpen] = useState(false);
  const openWindow = useWindowStore((s) => s.openWindow);

  return (
    <>
      {/* Start Menu */}
      <StartMenu
        open={startOpen}
        onClose={() => setStartOpen(false)}
      />

      <nav
        className="
          fixed bottom-1 left-1/2 -translate-x-1/2
          h-16 px-3
          rounded-[1rem]
          bg-white/20 backdrop-blur-2xl
          border border-white/25
          shadow-[0_20px_50px_rgba(0,0,0,0.35)]
          flex items-center gap-5
          z-50
        "
      >
        {/* START = MENU */}
        <DockButton
          label="Start"
          href="#"
          icon={LayoutGrid}
          onClick={() => setStartOpen((v) => !v)}
        />

        {/* APPS = WINDOWS */}
        <DockButton
          label="About"
          href="#"
          icon={User}
          onClick={() => openWindow("about")}
        />

        <DockButton
          label="Skills"
          href="#"
          icon={Code}
          onClick={() => openWindow("skills")}
        />

        <DockButton
          label="Projects"
          href="#"
          icon={Folder}
          onClick={() => openWindow("projects")}
        />

        <DockButton
          label="Experience"
          href="#"
          icon={Briefcase}
          onClick={() => openWindow("experience")}
        />

        <DockButton
          label="Contact"
          href="#"
          icon={Mail}
          onClick={() => openWindow("contact")}
        />
      </nav>
    </>
  );
}
