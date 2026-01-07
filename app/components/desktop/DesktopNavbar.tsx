"use client";

import { useState } from "react";

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

  /* ===================== RENDER ===================== */

  return (
    <>
      {/* START MENU */}
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
          imageSrc="/icons/start.png"
          active={startOpen}
          onClick={() => setStartOpen((v) => !v)}
        />

        {/* WINDOWS */}
        <DockButton
          label="About"
          imageSrc="/icons/about.png"
          opened={isOpened("about")}
          active={isActive("about")}
          onClick={() => openWindow("about")}
        />

        <DockButton
          label="Skills"
          imageSrc="/icons/skills.png"
          opened={isOpened("skills")}
          active={isActive("skills")}
          onClick={() => openWindow("skills")}
        />

        <DockButton
          label="Projects"
          imageSrc="/icons/projects.png"
          opened={isOpened("projects")}
          active={isActive("projects")}
          onClick={() => openWindow("projects")}
        />

        <DockButton
          label="Experience"
          imageSrc="/icons/experience.png"
          opened={isOpened("experience")}
          active={isActive("experience")}
          onClick={() => openWindow("experience")}
        />

        <DockButton
          label="Contact"
          imageSrc="/icons/contact.png"
          opened={isOpened("contact")}
          active={isActive("contact")}
          onClick={() => openWindow("contact")}
        />
      </nav>
    </>
  );
}
