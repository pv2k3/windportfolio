"use client";

import AppWindow from "./AppWindow";
import { useWindowStore } from "@/shared/state/windowStore";

export default function WindowManager() {
  const { windows, closeWindow } = useWindowStore();

  return (
    <>
      {windows.map((win) => (
        <AppWindow
          key={win.id}
          title={win.type.toUpperCase()}
          onClose={() => closeWindow(win.id)}
        >
          {/* Window content based on type */}
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
