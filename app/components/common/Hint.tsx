"use client";

import { useEffect, useState } from "react";
import { MousePointerClick, Info, X } from "lucide-react";

export default function StartupHint() {
  const [visible, setVisible] = useState(true);
  const close = () =>{
    setVisible(false);
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      <div className="max-w-md rounded-2xl border border-cyan-400/30 bg-slate-900/80 backdrop-blur-xl shadow-2xl p-8 animate-fade-in">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-lg bg-cyan-400/10 text-cyan-400">
            <Info size={18} />
          </div>

          <div>
            <h4 className="text-md font-semibold text-slate-100">
              Quick Tip
            </h4>
            <p className="mt-1 text-sm text-slate-300 leading-relaxed">
              Click on the desktop icons to open windows.  
              Hover over icons to view more details.
            </p>
          </div>

          <X
            onClick={()=>close()}
            size={24}
            className="text-slate-400 mt-1"
          />
        </div>
      </div>
    </div>
  );
}
