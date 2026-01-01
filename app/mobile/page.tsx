"use client";

import Navbar from "@/app/components/mobile/MobileNavbar";
import WindowManager from "@/app/components/mobile/WindowManager";
import StartupHint from "@/app/components/common/Hint";

import ProfilePic from "@/public/profilepic.jpg";

function Page() {
  return (
    <div className="w-screen h-screen overflow-hidden relative">
      <Navbar />
      <WindowManager />
      <StartupHint />

      {/* BACKGROUND BASE */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800" />

      {/* HERO CONTENT (MOBILE) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-6 pointer-events-none">
        {/* PROFILE IMAGE */}
        <div
          className="
            w-36 h-36 rounded-full overflow-hidden
            bg-slate-900/70
            border border-white/10
            shadow-[0_25px_70px_rgba(0,0,0,0.65)]
            relative
          "
        >
          <div
            className="
              absolute inset-0 bg-cover bg-center
              grayscale-[90%]
              brightness-70
              contrast-110
            "
            style={{
              backgroundImage: `url(${ProfilePic.src})`,
            }}
          />
          {/* subtle vignette */}
          <div className="absolute inset-0 bg-black/25" />
        </div>

        {/* TEXT */}
        <div className="text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-white">
            Priyanshu Verma
          </h1>

          <p className="mt-3 text-sm text-gray-400 tracking-wide">
            Full-Stack Developer <span className="text-gray-500">·</span>{" "}
            AI/ML Enthusiast
          </p>

          {/* accent line */}
          <div className="mx-auto mt-4 h-px w-20 bg-gradient-to-r from-cyan-400/60 to-transparent" />
        </div>
      </div>
    </div>
  );
}

export default Page;
