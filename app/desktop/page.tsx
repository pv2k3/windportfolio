"use client";

import DesktopNavbar from "@/app/shared/components/desktop/DesktopNavbar";
import WindowManager from "@/app/shared/components/desktop/WindowManager";

export default function Page() {
  return (
    <>
      <DesktopNavbar />
      <WindowManager />

      {/* Optional background */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-slate-900 to-slate-800" />
    </>
  );
}
