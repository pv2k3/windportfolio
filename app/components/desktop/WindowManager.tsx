"use client";

import AppWindow from "./AppWindow";
import { useWindowStore } from "@/app/shared/state/windowStore";

import About from "@/app/components/pages/About"
import Skills from "@/app/components/pages/Skills"
import Projects from "@/app/components/pages/Projects"
import Experience from "@/app/components/pages/Experience"
import Contact from "@/app/components/pages/Contact"


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
