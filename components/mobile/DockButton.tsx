"use client";

import { LucideIcon } from "lucide-react";

type DockButtonProps = {
  label: string;
  icon: LucideIcon;
  onClick?: () => void;
};

export default function DockButton({
  label,
  icon: Icon,
  onClick,
}: DockButtonProps) {
  const content = (
    <div
      className="
        group relative
        flex flex-col items-center justify-center
        w-18 h-18
        rounded-xl
        bg-white/70
        text-gray-800
        transition-all duration-300 ease-out
        hover:-translate-y-4
        hover:scale-105
        hover:bg-white
        hover:shadow-[0_12px_30px_rgba(0,0,0,0.3)]
        active:scale-95
      "
    >
      {/* Icon */}
      <Icon className="w-7 h-7" />
      {/* Hover Label */}
      <span
        className="
          absolute -bottom-6
          text-xs font-medium
          text-white
          opacity-0
          translate-y-1
          group-hover:opacity-100
          group-hover:translate-y-0
          transition-all duration-200
          pointer-events-none
          whitespace-nowrap
        "
      >
        {label}
      </span>
    </div>
  );

  // If onClick is provided, behave like a button (for window pane, etc.)
  if (onClick) {
    return (
      <button onClick={onClick} className="outline-none">
        {content}
      </button>
    );
  }

  // Otherwise behave like a link
  return (
    <button className="outline-none">
      {content}
    </button>
  );
}
