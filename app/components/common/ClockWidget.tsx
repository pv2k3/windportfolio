"use client";

import { useEffect, useState } from "react";

/* ---------- Custom Fonts ---------- */
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

export default function ClockWidget() {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    setTime(new Date());
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Prevent SSR / hydration mismatch
  if (!time) return null;

  const dayName = time
    .toLocaleDateString("en-GB", { weekday: "long" })
    .toUpperCase();

  const date = time
    .toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    })
    .toUpperCase();

  const timeString = time.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  return (
    <>
      <style>{fontStyles}</style>

      {/* 
        Hidden below md ( < 768px )
        Position & spacing scale with screen width
      */}
      <div
        className="
          hidden md:flex
          items-start
          min-h-screen
          bg-transparent
          pt-32
          
          /* LEFT OFFSET BASED ON SCREEN WIDTH */
          md:pl-8
          lg:pl-16
          xl:pl-24
          2xl:pl-32
        "
      >
        <div className="text-center">
          {/* DAY NAME */}
          <div
            className="
              font-bold mb-4
              text-4xl
              lg:text-4xl
              xl:text-5xl
              2xl:text-6xl
            "
            style={{
              color: "#e6e6e6",
              textShadow:
                "0 0 20px rgba(0, 100, 255, 0.8), 0 0 30px rgba(0, 100, 255, 0.6)",
              letterSpacing: "0.2em",
              fontFamily: "Anurati, sans-serif",
              fontWeight: "400",
              textTransform: "uppercase",
            }}
          >
            {dayName}
          </div>

          {/* DATE */}
          <div
            className="
              mb-2
              text-sm
              md:text-base
              lg:text-lg
              xl:text-xl
            "
            style={{
              color: "#e6e6e6",
              textShadow:
                "0 0 15px rgba(0, 100, 255, 0.8), 0 0 25px rgba(0, 100, 255, 0.5)",
              letterSpacing: "0.05em",
              fontFamily: "Quicksand, sans-serif",
              fontWeight: "400",
            }}
          >
            {date}
          </div>

          {/* TIME */}
          <div
            className="
              mt-3
              text-sm
              md:text-base
              lg:text-lg
              xl:text-xl
            "
            style={{
              color: "#e6e6e6",
              textShadow:
                "0 0 15px rgba(0, 100, 255, 0.8), 0 0 25px rgba(0, 100, 255, 0.5)",
              letterSpacing: "0.1em",
              fontFamily: "Quicksand, sans-serif",
              fontWeight: "400",
            }}
          >
            - {timeString} -
          </div>
        </div>
      </div>
    </>
  );
}
