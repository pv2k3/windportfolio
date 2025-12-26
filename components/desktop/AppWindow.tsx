"use client";

import { useState } from "react";
import { Rnd } from "react-rnd";
import { X, Minus, Square } from "lucide-react";

type AppWindowProps = {
  title: string;
  children: React.ReactNode;
  onClose?: () => void;
};

export default function AppWindow({
  title,
  children,
  onClose,
}: AppWindowProps) {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);

  const [size, setSize] = useState({
    width: 520,
    height: 420,
  });

  const [position, setPosition] = useState({
    x: 100,
    y: 80,
  });

  const handleMaximize = () => {
    if (!isMaximized) {
      setPosition({ x: 0, y: 0 });
      setSize({
        width: window.innerWidth,
        height: window.innerHeight - 80,
      });
    } else {
      setSize({ width: 520, height: 420 });
      setPosition({ x: 100, y: 80 });
    }
    setIsMaximized(!isMaximized);
  };

  if (isMinimized) return null;

  return (
    <Rnd
      size={size}
      position={position}
      minWidth={320}
      minHeight={240}
      bounds="window"
      dragHandleClassName="window-titlebar"
      onDragStop={(e, d) => {
        setPosition({ x: d.x, y: d.y });
      }}
      onResizeStop={(e, direction, ref, delta, pos) => {
        setSize({
          width: ref.offsetWidth,
          height: ref.offsetHeight,
        });
        setPosition(pos);
      }}
      className="z-40"
    >
      <div
        className="
          h-full w-full
          rounded-2xl
          bg-white/25 backdrop-blur-2xl
          border border-white/30
          shadow-[0_30px_80px_rgba(0,0,0,0.45)]
          flex flex-col
          overflow-hidden
        "
      >
        {/* Title Bar */}
        <div
          className="
            window-titlebar
            h-12 px-4
            flex items-center justify-between
            bg-white/30
            backdrop-blur-xl
            cursor-move
            select-none
          "
        >
          <span className="text-sm font-semibold text-gray-900">
            {title}
          </span>

          <div className="flex gap-2">
            <button
              onClick={() => setIsMinimized(true)}
              className="w-8 h-8 rounded-md hover:bg-black/10 flex items-center justify-center"
            >
              <Minus size={16} />
            </button>

            <button
              onClick={handleMaximize}
              className="w-8 h-8 rounded-md hover:bg-black/10 flex items-center justify-center"
            >
              <Square size={14} />
            </button>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-md hover:bg-red-500 hover:text-white flex items-center justify-center"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Window Content */}
        <div className="flex-1 p-4 overflow-auto">
          {children}
          child
        </div>
      </div>
    </Rnd>
  );
}
