"use client";

import AppWindow from "./AppWindow";
import { useWindowStore } from "@/app/shared/state/windowStore";

import Start from "@/app/components/pages/Start"
import About from "@/app/components/pages/About";
import Skills from "@/app/components/pages/Skills";
import Projects from "@/app/components/pages/Projects";
import Experience from "@/app/components/pages/Experience";
import Contact from "@/app/components/pages/Contact";

export default function WindowManager() {
  const windows = useWindowStore((s) => s.windows);
  const closeWindow = useWindowStore((s) => s.closeWindow);

  return (
    <>
      {windows
        .filter((win) => win.isOpened && !win.isMinimized)
        .map((win) => (
          <AppWindow
            key={win.id}
            id={win.id}
            title={win.type.toUpperCase()}
          >
            {win.type === "start" && (
              <Start onClose={() => closeWindow(win.id)} />
            )}
            {win.type === "about" && <About />}
            {win.type === "skills" && <Skills />}
            {win.type === "projects" && <Projects />}
            {win.type === "experience" && <Experience />}
            {win.type === "contact" && <Contact />}
          </AppWindow>
        ))}
    </>
  );
}
