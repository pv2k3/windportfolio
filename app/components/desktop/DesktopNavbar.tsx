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
import { useWindowStore } from "@/app/shared/state/windowStore";
import type { WindowType } from "@/app/shared/state/windowStore";

export default function DesktopNavbar() {
  const [startOpen, setStartOpen] = useState(false);

  const openWindow = useWindowStore((s) => s.openWindow);
  const windows = useWindowStore((s) => s.windows);

  /* ===================== HELPERS ===================== */

  const getWindow = (type: WindowType) =>
    windows.find((w) => w.type === type);

  const isOpened = (type: WindowType) =>
    !!getWindow(type)?.isOpened;

  const isActive = (type: WindowType) =>
    !!getWindow(type)?.isActive;

  const isVisible = (type: WindowType) => {
    const w = getWindow(type);
    return !!w && w.isOpened && !w.isMinimized;
  };

  /* ===================== RENDER ===================== */

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
          rounded-2xl
          bg-white/20 backdrop-blur-2xl
          border border-white/25
          shadow-[0_20px_50px_rgba(0,0,0,0.35)]
          flex items-center gap-5
          z-50
        "
      >
        {/* START */}
        <DockButton
          label="Start"
          href="#"
          icon={LayoutGrid}
          active={startOpen}
          onClick={() => setStartOpen((v) => !v)}
        />

        {/* WINDOWS */}
        <DockButton
          label="About"
          href="#"
          icon={User}
          opened={isOpened("about")}
          active={isActive("about")}
          onClick={() => openWindow("about")}
        />

        <DockButton
          label="Skills"
          href="#"
          icon={Code}
          opened={isOpened("skills")}
          active={isActive("skills")}
          onClick={() => openWindow("skills")}
        />

        <DockButton
          label="Projects"
          href="#"
          icon={Folder}
          opened={isOpened("projects")}
          active={isActive("projects")}
          onClick={() => openWindow("projects")}
        />

        <DockButton
          label="Experience"
          href="#"
          icon={Briefcase}
          opened={isOpened("experience")}
          active={isActive("experience")}
          onClick={() => openWindow("experience")}
        />

        <DockButton
          label="Contact"
          href="#"
          icon={Mail}
          opened={isOpened("contact")}
          active={isActive("contact")}
          onClick={() => openWindow("contact")}
        />
      </nav>
    </>
  );
}
