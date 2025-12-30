"use client";

import { Rnd } from "react-rnd";
import { X } from "lucide-react";
import { useAppStore } from "@/app/shared/state/appStore";
import { useEffect, useState } from "react";

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
    closeApp,
  } = useAppStore();

  const app = apps.find((a) => a.id === id);

  const [shouldRender, setShouldRender] = useState(false);
  const [animationState, setAnimationState] =
    useState<"opening" | "closing">("opening");

  /* ===================== MOUNT / UNMOUNT ===================== */
  useEffect(() => {
    if (app?.isOpened && !app.isMinimized) {
      setShouldRender(true);
      setAnimationState("opening");
    }
  }, [app?.isOpened, app?.isMinimized]);

  const handleClose = () => {
    setAnimationState("closing");

    setTimeout(() => {
      closeApp(id);
      setShouldRender(false);
    }, 500); // must match animation duration
  };

  if (!shouldRender || !app) return null;

  return (
    <Rnd
      size={app.size}
      position={app.position}
      minWidth={200}
      minHeight={120}
      bounds="#parent"
      disableDragging
      enableResizing={false}
      dragHandleClassName="window-titlebar"
      style={{ zIndex: app.zIndex + 100 }}
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
        className={`
          h-full w-full
          rounded-2xl
          bg-white/25 backdrop-blur-2xl
          border border-white/30
          shadow-[0_30px_80px_rgba(0,0,0,0.45)]
          flex flex-col
          overflow-hidden
          ${animationState === "opening" ? "animate-window-open" : ""}
          ${animationState === "closing" ? "animate-window-close" : ""}
        `}
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

          <button
            onClick={handleClose}
            className="w-8 h-8 rounded-md hover:bg-red-500 hover:text-white flex items-center justify-center"
          >
            <X size={16} />
          </button>
        </div>

        {/* ================= CONTENT ================= */}
        <div className="flex-1 p-4 overflow-auto">
          {children}
        </div>
      </div>
    </Rnd>
  );
}
