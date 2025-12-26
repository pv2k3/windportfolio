"use client";

import AppWindow from "./AppWindow";
import { useWindowStore } from "@/shared/state/windowStore";

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
            {win.type === "about" && <div>About Content</div>}
            {win.type === "skills" && <div>Skills Content</div>}
            {win.type === "projects" && <div>Projects Content</div>}
            {win.type === "experience" && <div>Experience Content</div>}
            {win.type === "contact" && <div>Contact Content</div>}
          </AppWindow>
        ))}
    </>
  );
}
