"use client";

import Link from "next/link";
import { LucideIcon } from "lucide-react";

type DockButtonProps = {
  label: string;
  icon: LucideIcon;
  href?: string;
  active?: boolean;
  opened?: boolean;
  onClick?: () => void;
};

export default function DockButton({
  label,
  icon: Icon,
  href,
  onClick,
  active = false,
  opened = false,
}: DockButtonProps) {
  const content = (
    <div
      className={`
        group relative
        flex flex-col items-center justify-center
        w-12 h-12
        rounded-xl
        transition-all duration-300 ease-out
        hover:-translate-y-4
        hover:scale-105
        hover:shadow-[0_12px_30px_rgba(0,0,0,0.3)]
        active:scale-95

        ${active ? "bg-white/40 scale-110 shadow-lg" : "bg-white/15"}
      `}
    >
      {/* Icon */}
      <Icon className="w-7 h-7 text-white" />

      {/* OPEN INDICATOR */}
      {opened && (
        <span
          className={`
            absolute bottom-1
            w-1.5 h-1.5 rounded-full
            ${active ? "bg-green-400" : "bg-white/70"}
          `}
        />
      )}

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

  // Button behavior (window actions)
  if (onClick) {
    return (
      <button
        onClick={onClick}
        className="outline-none focus:outline-none"
        aria-label={label}
      >
        {content}
      </button>
    );
  }

  // Link behavior (navigation)
  if (href) {
    return (
      <Link href={href} className="outline-none" aria-label={label}>
        {content}
      </Link>
    );
  }

  return null;
}
