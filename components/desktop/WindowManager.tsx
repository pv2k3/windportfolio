"use client";

import AppWindow from "./AppWindow";
import { useWindowStore } from "@/shared/state/windowStore";

import About from "./pages/About"
import Skills from "./pages/Skills"
import Projects from "./pages/Projects"
import Experience from "./pages/Experience"
import Contact from "./pages/Contact"


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
