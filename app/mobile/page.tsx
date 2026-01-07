"use client";

import { useState } from "react";

import Navbar from "@/app/components/mobile/MobileNavbar";
import WindowManager from "@/app/components/mobile/WindowManager";
import StartupHint from "@/app/components/common/Hint";

import MobileClockWidget from "@/app/components/common/MobileClockWidget";
import MobileProfileWidget from "@/app/components/common/MobileProfileWidget";

import Preloader from "@/app/components/common/Preloader";

import Walpaper from "@/public/walpaper.jpg";

export default function Page() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="w-screen h-screen overflow-hidden relative">
      {/* WALLPAPER */}
      <div
        className="fixed inset-0 -z-10 bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${Walpaper.src})` }}
      />

      {/* PRELOADER OVERLAY */}
      {loading && (
        <Preloader onFinish={() => setLoading(false)} />
      )}

      {/* TOP WIDGETS */}
      <div className="fixed top-0 left-0 w-full z-40 pointer-events-auto">
        <MobileClockWidget />
        <MobileProfileWidget />
      </div>

      {/* CORE APP */}
      <Navbar />
      <WindowManager />
      <StartupHint />
    </div>
  );
}
