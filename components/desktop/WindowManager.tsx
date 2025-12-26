"use client";

import AppWindow from "./AppWindow";
import { useWindowStore } from "@/shared/state/windowStore";

import About from "@/components/desktop/pages/About"
import Skills from "@/components/desktop/pages/Skills"
import Projects from "@/components/desktop/pages/Projects"
import Experience from "@/components/desktop/pages/Experience"
import Contact from "@/components/desktop/pages/Contact"


export default function WindowManager() {
  const { windows } = useWindowStore();

  return (
    <>
      {windows
        .filter((win) => win.isOpened)
        .map((win) => (
          <AppWindow
            key={win.id}
            id={win.id}
            title={win.type.toUpperCase()}
          >
            {win.type === "about" && <About/>}
            {win.type === "skills" && <Skills/>}
            {win.type === "projects" && <Projects/>}
            {win.type === "experience" && <Experience/>}
            {win.type === "contact" && <Contact/>}
          </AppWindow>
        ))}
    </>
  );
}
