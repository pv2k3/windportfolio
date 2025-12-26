"use client";

import MobileNavbar from "@/app/shared/components/mobile/MobileNavbar";

export default function MobileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MobileNavbar />
      <main>{children}</main>
    </>
  );
}
