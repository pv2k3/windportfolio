"use client";

import DesktopNavbar from "@/components/desktop/DesktopNavbar";

export default function DesktopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <DesktopNavbar />
      <main>{children}</main>
    </>
  );
}
