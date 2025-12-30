"use client";

import { useEffect, useState } from "react";

type DeviceType = "desktop" | "mobile";

export function useDevice(): DeviceType {
  const [device, setDevice] = useState<DeviceType>("desktop");

  useEffect(() => {
    const checkDevice = () => {
      setDevice(window.innerWidth < 768 ? "mobile" : "desktop");
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  return device;
}
