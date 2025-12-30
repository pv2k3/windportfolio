"use client";

import { useDevice } from "@/app/shared/hooks/useDevice";
import Desktop from "./desktop/page";
import Mobile from "./mobile/page";

export default function Home() {
  return useDevice() === "mobile" ? <Mobile /> : <Desktop />;
}
