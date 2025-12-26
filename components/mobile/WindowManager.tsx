"use client";

import AppWindow from "./AppWindow";
import { useAppStore } from "@/shared/state/appStore";

import Start from "@/components/mobile/pages/Start"
import About from "@/components/mobile/pages/About"
import Skills from "@/components/mobile/pages/Skills"
import Projects from "@/components/mobile/pages/Projects"
import Experience from "@/components/mobile/pages/Experience"
import Contact from "@/components/mobile/pages/Contact"


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
