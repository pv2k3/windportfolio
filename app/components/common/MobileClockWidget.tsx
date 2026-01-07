"use client";

import { useEffect, useState } from "react";

// Add custom font CSS
const fontStyles = `
  @font-face {
    font-family: 'Anurati';
    src: url('/fonts/Anurati-Regular.otf') format('opentype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  
  @font-face {
    font-family: 'Quicksand';
    src: url('/fonts/Quicksand-Regular.otf') format('opentype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
`;

export default function MobileClockWidget() {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    setTime(new Date());
    const i = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(i);
  }, []);

  if (!time) return null;

  const dayName = time.toLocaleDateString("en-GB", { weekday: "long" }).toUpperCase();
  const date = time.toLocaleDateString("en-GB", { 
    day: "2-digit", 
    month: "long", 
    year: "numeric" 
  }).toUpperCase();
  const timeString = time.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  return (
    <>
      <style>{fontStyles}</style>
      <div
        className="
          mt-12
          mx-auto
          w-9/12
          py-4
          text-center
          rounded-2xl
          bg-white/20 backdrop-blur-2xl
          border-b border-white/25
          shadow-[0_20px_50px_rgba(0,0,0,0.35)]
        "
      >
        {/* Day Name */}
        <div 
          className="text-2xl font-bold mb-2"
          style={{
            color: "#e6e6e6",
            textShadow: "0 0 15px rgba(0, 100, 255, 0.8), 0 0 20px rgba(0, 100, 255, 0.6)",
            letterSpacing: "0.3em",
            fontFamily: "Anurati, sans-serif",
            fontWeight: "400",
            textTransform: "uppercase"
          }}
        >
          {dayName}
        </div>

        {/* Date */}
        <div 
          className="text-sm mb-1"
          style={{
            color: "#e6e6e6",
            textShadow: "0 0 10px rgba(0, 100, 255, 0.8), 0 0 15px rgba(0, 100, 255, 0.5)",
            letterSpacing: "0.05em",
            fontFamily: "Quicksand, sans-serif",
            fontWeight: "400"
          }}
        >
          {date}
        </div>

        {/* Time with dashes */}
        <div 
          className="text-lg"
          style={{
            color: "#e6e6e6",
            textShadow: "0 0 10px rgba(0, 100, 255, 0.8), 0 0 15px rgba(0, 100, 255, 0.5)",
            letterSpacing: "0.1em",
            fontFamily: "Quicksand, sans-serif",
            fontWeight: "400"
          }}
        >
          - {timeString} -
        </div>

        {/* System Clock Label */}
        {/* <div 
          className="text-[10px] opacity-70"
          style={{
            color: "#e6e6e6",
            textShadow: "0 0 8px rgba(0, 100, 255, 0.6)",
            letterSpacing: "0.2em",
            fontFamily: "Quicksand, sans-serif",
            fontWeight: "400"
          }}
        >
          SYSTEM CLOCK
        </div> */}
      </div>
    </>
  );
}