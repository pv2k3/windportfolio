"use client";

import { useEffect, useState } from "react";

type StartMenuProps = {
  open: boolean;
  onClose: () => void;
};

export default function StartMenu({ open, onClose }: StartMenuProps) {
  const [shouldRender, setShouldRender] = useState(false);
  const [animationState, setAnimationState] = useState<'opening' | 'closing' | 'open'>('open');

  useEffect(() => {
    if (open) {
      setShouldRender(true);
      setAnimationState('opening');
    } else if (shouldRender) {
      setAnimationState('closing');
      // Wait for animation to finish before unmounting
      setTimeout(() => {
        setShouldRender(false);
      }, 600); // Match the animation duration
    }
  }, [open, shouldRender]);

  if (!shouldRender) return null;

  return (
    <>
      {/* Click outside overlay */}
      <div
        className="fixed inset-0 z-40"
        onClick={onClose}
      />

      {/* Start Menu */}
      <div
        className={`
          fixed bottom-32 left-1/2
          md:w-[65dvw]
          md:h-[70dvh]

          lg:w-[50dvw]
          lg:h-[70dvh]

          xl:w-[40dvw]

          rounded-3xl
          bg-white/25 backdrop-blur-2xl
          border border-white/30
          shadow-[0_30px_80px_rgba(0,0,0,0.45)]
          z-50
          p-4
          ${animationState === 'opening' ? 'animate-start-open' : ''}
          ${animationState === 'closing' ? 'animate-start-close' : ''}
        `}
        style={{ transform: 'translate(-50%, 0)' }}
      >
        <h3 className="text-white text-sm font-semibold mb-4">
          Start
        </h3>

        <div className="grid grid-cols-2 gap-3">
          {["About", "Skills", "Projects", "Experience", "Contact"].map(
            (item) => (
              <button
                key={item}
                className="
                  h-20 rounded-2xl
                  bg-white/70
                  hover:bg-white
                  transition-all duration-200
                  shadow hover:shadow-lg
                  text-sm font-medium
                "
              >
                {item}
              </button>
            )
          )}
        </div>
      </div>
    </>
  );
}