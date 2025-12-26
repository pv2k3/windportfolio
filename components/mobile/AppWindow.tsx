"use client";

import { Rnd } from "react-rnd";
import { X, Minus, Square } from "lucide-react";
import { useAppStore } from "@/shared/state/appStore";

type AppWindowProps = {
  id: string;
  title: string;
  children: React.ReactNode;
};

export default function AppWindow({ id, title, children }: AppWindowProps) {
  const {
    apps,
    setPosition,
    setSize,
    setActive,
    toggleMaximize,
    closeApp,
    minimizeApp,
  } = useAppStore();

  const app = apps.find((a) => a.id === id);

  // 🔒 Safety guards
  if (!app || !app.isOpened || app.isMinimized) return null;

  return (
    <Rnd
      size={app.size}
      position={app.position}
      minWidth={200}
      minHeight={120}
      bounds="#parent"
      disableDragging={true}
      enableResizing={false}
      dragHandleClassName="window-titlebar"
      style={{ zIndex: app.zIndex + 100}}
      onMouseDown={() => setActive(app.id)}
      onDragStop={(_, d) =>
        setPosition(app.id, { x: d.x, y: d.y })
      }
      onResizeStop={(_, __, ref, ___, pos) => {
        setSize(app.id, {
          width: ref.offsetWidth,
          height: ref.offsetHeight,
        });
        setPosition(app.id, pos);
      }}
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
        {/* ================= TITLE BAR ================= */}
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
            {/* Minimize */}
            {/* <button
              onClick={() => minimizeApp(app.id)}
              className="w-8 h-8 rounded-md hover:bg-black/10 flex items-center justify-center"
            >
              <Minus size={16} />
            </button> */}

            {/* Maximize / Restore */}
            {/* <button
              onClick={() => toggleMaximize(app.id)}
              className="w-8 h-8 rounded-md hover:bg-black/10 flex items-center justify-center"
            >
              <Square size={14} />
            </button> */}

            {/* Close */}
            <button
              onClick={() => closeApp(app.id)}
              className="w-8 h-8 rounded-md hover:bg-red-500 hover:text-white flex items-center justify-center"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* ================= CONTENT ================= */}
        <div className="flex-1 p-4 overflow-auto">
          {children}
        </div>
      </div>
    </Rnd>
  );
}
