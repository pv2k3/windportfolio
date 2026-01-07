"use client";

import DockButton from "./DockButton";
import { useAppStore } from "@/app/shared/state/appStore";

export default function DesktopNavbar() {
  const openApp = useAppStore((s) => s.openApp);
  // const activeApp = useAppStore((s) => s.activeApp);

  return (
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
          label="About"
          imageSrc="/icons/about.png"
          // active={activeApp === "about"}
          // opened={activeApp === "about"}
          onClick={() => openApp("about")}
        />

        <DockButton
          label="Skills"
          imageSrc="/icons/skills.png"
          // active={activeApp === "skills"}
          // opened={activeApp === "skills"}
          onClick={() => openApp("skills")}
        />
        <DockButton
          label="Experience"
          imageSrc="/icons/experience.png"
          // active={activeApp === "experience"}
          // opened={activeApp === "experience"}
          onClick={() => openApp("experience")}
        />

      </div>
      

      {/* BOTTOM ROW */}
      <div className="flex gap-5">
        <DockButton
          label="Projects"
          imageSrc="/icons/projects.png"
          // active={activeApp === "projects"}
          // opened={activeApp === "projects"}
          onClick={() => openApp("projects")}
        />

        
        <DockButton
          label="Start"
          imageSrc="/icons/start.png"
          // active={activeApp === "start"}
          // opened={activeApp === "start"}
          onClick={() => openApp("start")}
        />

        <DockButton
          label="Contact"
          imageSrc="/icons/contact.png"
          // active={activeApp === "contact"}
          // opened={activeApp === "contact"}
          onClick={() => openApp("contact")}
        />
      </div>
    </nav>
  );
}
