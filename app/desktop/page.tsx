"use client";

import Navbar from "@/app/components/desktop/DesktopNavbar";
import WindowManager from "@/app/components/desktop/WindowManager";
import StartupHint from "@/app/components/common/Hint"

export default function Page() {
  return (
    <div className="w-screen max-h-screen overflow-hidden">
      <Navbar />
      <WindowManager />
      <StartupHint />
      {/* Optional background */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-slate-900 to-slate-800" />
    </div>
  );
}
