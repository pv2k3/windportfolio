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
}: DockButtonProps) {
  const isStart = label === "Start";
  const iconSize = isStart ? 44 : 56;

  const content = (
    <div
      className="
        flex flex-col items-center justify-center
        w-24 h-24
        select-none
        transition-transform duration-200 ease-out
        hover:-translate-y-1 hover:scale-105
        active:scale-95
      "
    >
      {/* ICON */}
      <Image
        src={imageSrc}
        alt={label}
        width={iconSize}
        height={iconSize}
        draggable={false}
        priority
      />

      {/* LABEL */}
      <span
        className="
          mt-1.5
          text-sm
          text-white/90
          font-medium
          text-center
          leading-tight
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
      <Link href={href} aria-label={label}>
        {content}
      </Link>
    );
  }

  return null;
}
