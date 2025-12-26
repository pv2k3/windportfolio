"use client";

import AppWindow from "./AppWindow";
import { useAppStore } from "@/shared/state/appStore";

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
            {app.type === "start" && <div>Start Content</div>}
            {app.type === "about" && <div>About Content</div>}
            {app.type === "skills" && <div>Skills Content</div>}
            {app.type === "projects" && <div>Projects Content</div>}
            {app.type === "experience" && <div>Experience Content</div>}
            {app.type === "contact" && <div>Contact Content</div>}
          </AppWindow>
        ))}
    </>
  );
}
