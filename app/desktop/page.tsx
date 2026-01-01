"use client";

import Navbar from "@/app/components/desktop/DesktopNavbar";
import WindowManager from "@/app/components/desktop/WindowManager";
import StartupHint from "@/app/components/common/Hint";

import ProfilePic from "@/public/profilepic.jpg";

export default function Page() {
  return (
    <div className="w-screen h-screen overflow-hidden relative">
      <Navbar />
      <WindowManager />
      <StartupHint />

      {/* BACKGROUND BASE */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800" />

      {/* HERO CONTENT */}
      <div className="w-10/12 lg:w-8/12 mx-auto h-full flex items-center justify-between">
        {/* LEFT – TEXT */}
        <div className="pointer-events-none">
          <div className="max-w-lg">
            <h1 className="text-5xl font-semibold tracking-tight text-white leading-tight">
              Priyanshu Verma
            </h1>

            <p className="mt-5 text-lg text-gray-400 tracking-wide">
              Full-Stack Developer <span className="text-gray-500">·</span>{" "}
              AI/ML Enthusiast
            </p>

            {/* subtle divider */}
            <div className="mt-6 h-px w-24 bg-gradient-to-r from-cyan-400/60 to-transparent" />
          </div>
        </div>

        {/* RIGHT – PROFILE IMAGE */}
        <div className="pointer-events-none">
          <div
            className="
              w-72 h-72 rounded-full overflow-hidden
              bg-slate-900/70
              backdrop-blur-2xl
              border border-white/10
              shadow-[0_40px_120px_rgba(0,0,0,0.65)]
              relative
            "
          >
            <div
              className="
                absolute inset-0
                bg-cover bg-center
                grayscale-[85%]
                brightness-70
                contrast-110
              "
              style={{
                backgroundImage: `url(${ProfilePic.src})`,
              }}
            />

            {/* inner vignette */}
            <div className="absolute inset-0 bg-black/20" />
          </div>
        </div>
      </div>
    </div>
  );
}
