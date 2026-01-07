"use client";

import { useEffect, useState } from "react";

export default function Preloader({
  onFinish,
}: {
  onFinish: () => void;
}) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(timer);
          setTimeout(onFinish, 400);
          return 100;
        }
        return p + 1;
      });
    }, 8);

    return () => clearInterval(timer);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      {/* Ambient glow effect */}
      <div className="absolute inset-0 bg-blue-500/5" style={{ 
        backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.15), transparent 50%)'
      }} />
      
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)',
        backgroundSize: '50px 50px',
        animation: 'gridMove 20s linear infinite'
      }} />

      {/* HUD Container */}
      <div className="relative w-72 h-72 flex items-center justify-center">
        
        {/* Outer glow pulse */}
        <div 
          className="absolute inset-0 rounded-full"
          style={{ 
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4), transparent 70%)',
            animation: 'pulse 2s ease-in-out infinite'
          }}
        />

        {/* Outer ring with gradient */}
        <svg className="absolute inset-0 w-full h-full" style={{ animation: "spin 8s linear infinite" }}>
          <circle
            cx="50%"
            cy="50%"
            r="49%"
            fill="none"
            stroke="url(#outerGradient)"
            strokeWidth="2"
            style={{ filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.5))' }}
          />
          <defs>
            <linearGradient id="outerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.8)" />
              <stop offset="100%" stopColor="rgba(147, 197, 253, 0.4)" />
            </linearGradient>
          </defs>
        </svg>

        {/* Progress ring */}
        <svg className="absolute inset-3 w-[calc(100%-1.5rem)] h-[calc(100%-1.5rem)]" style={{ transform: 'rotate(-90deg)' }}>
          <circle
            cx="50%"
            cy="50%"
            r="45%"
            fill="none"
            stroke="rgba(59, 130, 246, 0.2)"
            strokeWidth="2"
          />
          <circle
            cx="50%"
            cy="50%"
            r="45%"
            fill="none"
            stroke="url(#progressGradient)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray={`${2 * Math.PI * 45} ${2 * Math.PI * 45}`}
            strokeDashoffset={`${2 * Math.PI * 45 * (1 - progress / 100)}`}
            style={{ 
              transition: 'stroke-dashoffset 0.3s ease',
              filter: 'drop-shadow(0 0 6px rgba(59, 130, 246, 0.8))'
            }}
          />
          <defs>
            <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#60a5fa" />
            </linearGradient>
          </defs>
        </svg>

        {/* Inner segmented ring */}
        <div
          className="absolute inset-8 rounded-full border border-dashed border-blue-400/40"
          style={{ 
            animation: "spinReverse 6s linear infinite",
            filter: 'drop-shadow(0 0 4px rgba(59, 130, 246, 0.3))'
          }}
        />

        {/* Rotating orbit circles */}
        <div className="absolute inset-12" style={{ animation: 'spin 4s linear infinite' }}>
          {[0, 120, 240].map((rotate) => (
            <div
              key={rotate}
              className="absolute w-2 h-2 rounded-full bg-blue-400"
              style={{
                top: '50%',
                left: '50%',
                transform: `translate(-50%, -50%) rotate(${rotate}deg) translateY(-50px)`,
                boxShadow: '0 0 8px rgba(59, 130, 246, 0.8)',
                animation: 'pulse 1.5s ease-in-out infinite'
              }}
            />
          ))}
        </div>

        {/* Core circle with pulse */}
        <div 
          className="absolute inset-16 rounded-full border-2 border-blue-500/50 bg-blue-950/30"
          style={{
            boxShadow: 'inset 0 0 20px rgba(59, 130, 246, 0.3), 0 0 20px rgba(59, 130, 246, 0.2)',
            animation: 'pulse 2s ease-in-out infinite'
          }}
        />

        {/* Scan line */}
        <div
          className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent"
          style={{ 
            animation: "scan 2.4s linear infinite",
            filter: 'drop-shadow(0 0 6px rgba(59, 130, 246, 0.8))'
          }}
        />

        {/* Center dot indicator */}
        <div 
          className="absolute w-2 h-2 rounded-full bg-blue-400"
          style={{
            boxShadow: '0 0 10px rgba(59, 130, 246, 0.8)',
            animation: 'pulse 1.5s ease-in-out infinite'
          }}
        />

        {/* Text content */}
        <div className="text-center select-none z-10">
          <p className="text-[10px] tracking-[0.3em] text-blue-300/90 font-light mb-1">
            INITIALIZING SYSTEM
          </p>
          <p className="font-mono text-3xl font-bold text-white mb-1" style={{
            textShadow: '0 0 10px rgba(59, 130, 246, 0.8)'
          }}>
            {progress}%
          </p>
          <div className="flex gap-1 justify-center mt-2">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-1 h-1 rounded-full bg-blue-400"
                style={{
                  animation: `blink 1.4s ease-in-out infinite`,
                  animationDelay: `${i * 0.2}s`,
                  boxShadow: '0 0 4px rgba(59, 130, 246, 0.6)'
                }}
              />
            ))}
          </div>
        </div>

        {/* Status indicators */}
        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 text-center">
          <p className="text-[9px] tracking-widest text-blue-300/60 font-light">
            {progress < 30 && 'LOADING RESOURCES'}
            {progress >= 30 && progress < 60 && 'VERIFYING MODULES'}
            {progress >= 60 && progress < 90 && 'CONFIGURING INTERFACE'}
            {progress >= 90 && 'READY TO LAUNCH'}
          </p>
        </div>
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes spinReverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        @keyframes scan {
          0% {
            transform: translateY(-150px);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(150px);
            opacity: 0;
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.05);
          }
        }

        @keyframes blink {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }
      `}</style>
    </div>
  );
}