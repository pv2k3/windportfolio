"use client";

import { Rnd } from "react-rnd";
import { X, Minus, Square } from "lucide-react";
import { useWindowStore } from "@/app/shared/state/windowStore";
import { useEffect, useState } from "react";

type AppWindowProps = {
  id: string;
  title: string;
  children: React.ReactNode;
};

export default function AppWindow({ id, title, children }: AppWindowProps) {
  const {
    windows,
    setPosition,
    setSize,
    setActive,
    toggleMaximize,
    closeWindow,
    minimizeWindow,
  } = useWindowStore();

  const win = windows.find((w) => w.id === id);

  const [shouldRender, setShouldRender] = useState(false);
  const [animationState, setAnimationState] =
    useState<"opening" | "closing">("opening");

  /* ===================== MOUNT / UNMOUNT ===================== */
  useEffect(() => {
    if (win?.isOpened && !win.isMinimized) {
      setShouldRender(true);
      setAnimationState("opening");
    }
  }, [win?.isOpened, win?.isMinimized]);

  const handleClose = () => {
    setAnimationState("closing");

    setTimeout(() => {
      closeWindow(id);
      setShouldRender(false);
    }, 400); // must match animation duration
  };

  if (!shouldRender || !win) return null;

  return (
    <Rnd
      size={win.size}
      position={win.position}
      minWidth={400}
      minHeight={320}
      bounds="#parent"
      disableDragging={win.isMaximized}
      enableResizing={!win.isMaximized}
      dragHandleClassName="window-titlebar"
      style={{ zIndex: win.zIndex }}
      onMouseDown={() => setActive(win.id)}
      onDragStop={(_, d) =>
        setPosition(win.id, { x: d.x, y: d.y })
      }
      onResizeStop={(_, __, ref, ___, pos) => {
        setSize(win.id, {
          width: ref.offsetWidth,
          height: ref.offsetHeight,
        });
        setPosition(win.id, pos);
      }}
    >
      <div
        className={`
          h-full w-full
          rounded-2xl
          bg-white/30 backdrop-blur-xl
          border border-white/10
          shadow-[0_30px_80px_rgba(0,0,0,0.15)]
          flex flex-col
          overflow-hidden
          ${
            animationState === "opening"
              ? "animate-window-open"
              : ""
          }
          ${
            animationState === "closing"
              ? "animate-window-close"
              : ""
          }
        `}
      >
        {/* ================= TITLE BAR ================= */}
        <div
          className="
            window-titlebar
            h-10 px-4
            flex items-center justify-between
            bg-white/15
            backdrop-blur-xl
            cursor-move
            select-none
          "
        >
          <span className="text-sm font-semibold text-gray-900">
            {title}
          </span>

          <div className="flex gap-2">
            {/* Minimize */}
            <button
              onClick={() => minimizeWindow(win.id)}
              className="w-8 h-8 rounded-md hover:bg-black/10 flex items-center justify-center"
            >
              <Minus size={16} />
            </button>

            {/* Maximize */}
            <button
              onClick={() => toggleMaximize(win.id)}
              className="w-8 h-8 rounded-md hover:bg-black/10 flex items-center justify-center"
            >
              <Square size={14} />
            </button>

            {/* Close */}
            <button
              onClick={handleClose}
              className="w-8 h-8 rounded-md hover:bg-red-500 hover:text-white flex items-center justify-center"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* ================= CONTENT ================= */}
        <div className="flex-1 p-4 overflow-auto custom-scroll">
          {children}
        </div>
      </div>
    </Rnd>
  );
}
