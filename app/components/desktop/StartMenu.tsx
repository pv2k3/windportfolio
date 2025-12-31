"use client";

import { useEffect, useState } from "react";
import Start from "@/app/components/pages/Start2";

type StartMenuProps = {
  open: boolean;
  onClose: () => void;
};

export default function StartMenu({ open, onClose }: StartMenuProps) {
  const [shouldRender, setShouldRender] = useState(false);
  const [animationState, setAnimationState] = useState<
    "opening" | "closing" | "open"
  >("open");

  useEffect(() => {
    if (open) {
      setShouldRender(true);
      setAnimationState("opening");
    } else if (shouldRender) {
      setAnimationState("closing");
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 600); // must match animation duration
      return () => clearTimeout(timer);
    }
  }, [open, shouldRender]);

  if (!shouldRender) return null;

  return (
    <>
      {/* Click-outside overlay */}
      <div
        className="fixed inset-0 z-40"
        onClick={onClose}
      />

      {/* Start Menu Container */}
      <div
        className={`
          fixed bottom-28
          left-1/2 -translate-x-1/2
          
          w-[360px]
          sm:w-[400px]
          md:w-[420px]

          rounded-3xl
          bg-slate-900/90
          backdrop-blur-2xl
          border border-slate-700/50
          shadow-[0_30px_80px_rgba(0,0,0,0.55)]
          z-50
          overflow-hidden

          ${animationState === "opening" ? "animate-start-open" : ""}
          ${animationState === "closing" ? "animate-start-close" : ""}
        `}
      >
        {/* Inner Start UI */}
        <Start onClose={onClose}/>
      </div>
    </>
  );
}
