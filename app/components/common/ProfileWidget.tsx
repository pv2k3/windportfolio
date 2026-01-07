"use client";

import { Rnd } from "react-rnd";
import { useState, useEffect } from "react";
import ProfilePic from "@/public/profilepic.jpg";

export default function ProfileWidget() {
  const [position, setPosition] = useState({ x: 0, y: 50 });
  const [size] = useState({ width: 320, height: 'auto' });
  const [zIndex, setZIndex] = useState(40);

  useEffect(() => {
    const calculatePosition = () => {
      const screenWidth = window.innerWidth;
      const cardWidth = 320;
      const rightMargin = 64; // 16 * 4 = 64px (right-16 in Tailwind)
      const x = screenWidth - cardWidth - rightMargin;
      setPosition({ x, y: 50 }); // top-24 = 96px
    };

    calculatePosition();
    window.addEventListener("resize", calculatePosition);
    return () => window.removeEventListener("resize", calculatePosition);
  }, []);

  return (
    <Rnd
      size={size}
      position={position}
      minWidth={280}
      minHeight={150}
      bounds="parent"
      dragHandleClassName="profile-drag-handle"
      enableResizing={false}
      style={{ zIndex }}
      onMouseDown={() => setZIndex(50)}
      onDragStop={(_, d) => setPosition({ x: d.x, y: d.y })}
    >
      <div
        className="
          profile-drag-handle
          w-80
          rounded-2xl
          bg-white/10 backdrop-blur-2xl
          border border-white/15
          shadow-[0_30px_80px_rgba(0,0,0,0.6)]
          p-5
          cursor-move
          select-none
        "
      >
        {/* PROFILE IMAGE */}
        <div className="flex items-center gap-4">
          <div
            className="
              w-16 h-16 rounded-full overflow-hidden
              border border-white/20
            "
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
            <p className="text-sm text-gray-400">
              Full-Stack · AI/ML
            </p>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-4 h-px bg-white/10" />

        {/* STATUS */}
        <div className="text-sm text-gray-300">
          <span className="text-green-400">●</span> Available for work
        </div>
      </div>
    </Rnd>
  );
}