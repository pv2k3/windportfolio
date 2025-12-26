"use client";

import AppWindow from "./AppWindow";
import { useAppStore } from "@/shared/state/appStore";

import Start from "./pages/Start"
import About from "./pages/About"
import Skills from "./pages/Skills"
import Projects from "./pages/Projects"
import Experience from "./pages/Experience"
import Contact from "./pages/Contact"


export default function WindowManager() {
  const { apps } = useAppStore();

  return (
    <>
      {apps
        .filter((app) => app.isOpened)
        .map((app) => (
          <AppWindow
            key={app.id}
            id={app.id}
            title={app.type.toUpperCase()}
            >
            {app.type === "start" && <Start/>}
            {app.type === "about" && <About/>}
            {app.type === "skills" && <Skills/>}
            {app.type === "projects" && <Projects/>}
            {app.type === "experience" && <Experience/>}
            {app.type === "contact" && <Contact/>}
          </AppWindow>
        ))}
    </>
  );
}
