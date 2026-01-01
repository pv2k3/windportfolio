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
import { useAppStore } from "@/app/shared/state/appStore";

export default function DesktopNavbar() {
  const openApp = useAppStore((s) => s.openApp);

  return (
    <>
      <nav
        className="
          fixed bottom-12 left-1/2 -translate-x-1/2
          p-1
          rounded-2xl
          flex flex-col items-center gap-5
          z-50
        "
      >
        {/* TOP ROW */}
        <div className="flex gap-5">
          <DockButton
            label="Start"
            icon={LayoutGrid}
            onClick={() => openApp("start")}
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
