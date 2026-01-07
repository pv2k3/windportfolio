"use client";

import { Rnd } from "react-rnd";
import { useState, useEffect, useRef } from "react";
import { Lock, Unlock } from "lucide-react";
import ProfilePic from "@/public/profilepic.jpg";

export default function MobileProfileWidget() {
  const [position, setPosition] = useState({ x: 0, y: 200 });
  const [size] = useState({ width: 320, height: "auto" });
  const [zIndex, setZIndex] = useState(40);
  const [isEditMode, setIsEditMode] = useState(false);

  const longPressTimer = useRef<NodeJS.Timeout | null>(null);

  /* ---------- Center Horizontally ---------- */
  useEffect(() => {
    const calculatePosition = () => {
      const screenWidth = window.innerWidth;
      const cardWidth = 320;
      const x = Math.max(0, (screenWidth - cardWidth) / 2);
      setPosition((prev) => ({ ...prev, x }));
    };

    calculatePosition();
    window.addEventListener("resize", calculatePosition);
    return () => window.removeEventListener("resize", calculatePosition);
  }, []);

  /* ---------- Long Press ---------- */
  const startLongPress = () => {
    longPressTimer.current = setTimeout(() => {
      setIsEditMode(true);
    }, 500);
  };

  const cancelLongPress = () => {
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current);
      longPressTimer.current = null;
    }
  };

  return (
    <Rnd
      size={size}
      position={position}
      minWidth={280}
      minHeight={100}
      bounds="window"
      enableResizing={false}
      disableDragging={!isEditMode}
      dragHandleClassName="mobile-profile-drag-handle"
      style={{ zIndex }}
      onMouseDown={() => setZIndex(50)}
      onDragStop={(_, d) => setPosition({ x: d.x, y: d.y })}
      dragAxis="y"
    >
      <div
        className={`
          w-80 rounded-2xl
          bg-white/10 backdrop-blur-2xl
          border border-white/15
          shadow-[0_30px_80px_rgba(0,0,0,0.6)]
          p-5 select-none relative
          ${isEditMode ? "mobile-profile-drag-handle ring-2 ring-blue-400" : ""}
        `}
        onTouchStart={startLongPress}
        onTouchEnd={cancelLongPress}
        onMouseDown={startLongPress}
        onMouseUp={cancelLongPress}
      >
        {/* Edit Mode Hint */}
        {isEditMode && (
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-xs px-3 py-1 rounded-full flex items-center gap-2">
            <Unlock size={12} />
            Drag to reposition
          </div>
        )}

        {/* LOCK BUTTON (ONLY IN EDIT MODE) */}
        {isEditMode && (
          <button
            onClick={() => setIsEditMode(false)}
            className="absolute -top-3 -right-3 w-8 h-8 rounded-full
                       bg-white/20 backdrop-blur-xl
                       border border-white/30
                       flex items-center justify-center
                       hover:bg-white/30 transition-colors"
          >
            <Lock size={14} className="text-blue-400" />
          </button>
        )}

        {/* PROFILE */}
        <div className="flex items-center gap-4">
          <div
            className="w-16 h-16 rounded-full overflow-hidden border border-white/20"
            style={{
              backgroundImage: `url(${ProfilePic.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <div>
            <h2 className="text-white text-lg font-semibold">
              Priyanshu Verma
            </h2>
          </div>
        </div>
      </div>
    </Rnd>
  );
}
