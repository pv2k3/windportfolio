"use client";

import Image from "next/image";
import Link from "next/link";

type DockButtonProps = {
  label: string;
  imageSrc: string;
  href?: string;
  active?: boolean;
  opened?: boolean;
  onClick?: () => void;
};

export default function DockButton({
  label,
  imageSrc,
  href,
  onClick,
  active = false,
  opened = false,
}: DockButtonProps) {
  // ✅ MUST be outside JSX
  const isStart = label === "Start";
  const size = isStart ? 32 : 40;

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
      {/* IMAGE ICON */}
      <Image
        src={imageSrc}
        alt={label}
        width={size}
        height={size}
        className="object-contain select-none pointer-events-none"
        draggable={false}
        priority
      />

      {/* OPEN INDICATOR DOT */}
      {opened && (
        <span
          className={`
            absolute bottom-1
            w-1.5 h-1.5 rounded-full
            ${active ? "bg-green-400" : "bg-white/70"}
          `}
        />
      )}

      {/* HOVER LABEL */}
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

  if (onClick) {
    return (
      <button
        onClick={onClick}
        aria-label={label}
        className="outline-none focus:outline-none"
      >
        {content}
      </button>
    );
  }

  if (href) {
    return (
      <Link href={href} aria-label={label} className="outline-none">
        {content}
      </Link>
    );
  }

  return null;
}
