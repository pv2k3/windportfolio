"use client";

import AppWindow from "./AppWindow";
import { useAppStore } from "@/app/shared/state/appStore";

import Start from "@/app/components/pages/Start"
import About from "@/app/components/pages/About"
import Skills from "@/app/components/pages/Skills"
import Projects from "@/app/components/pages/Projects"
import Experience from "@/app/components/pages/Experience"
import Contact from "@/app/components/pages/Contact"


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
