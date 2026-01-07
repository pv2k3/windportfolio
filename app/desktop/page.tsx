"use client";

import Navbar from "@/app/components/desktop/DesktopNavbar";
import WindowManager from "@/app/components/desktop/WindowManager";
import StartupHint from "@/app/components/common/Hint";

import ProfileWidget from "@/app/components/common/ProfileWidget";
import ClockWidget from "@/app/components/common/ClockWidget";

import Walpaper from "@/public/walpaper.jpg";

export default function Page() {
  return (
    <div className="w-screen h-screen overflow-hidden relative">
      {/* WALLPAPER */}
      <div
        className="fixed inset-0 -z-10 bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${Walpaper.src})`,
        }}
      />

      {/* Optional dark overlay */}
      <div className="fixed inset-0 -z-10 bg-black/35 " />

      <Navbar />
      <WindowManager />
      <StartupHint />

      {/* WIDGETS */}
      <ProfileWidget />
      <ClockWidget />
    </div>
  );
}
