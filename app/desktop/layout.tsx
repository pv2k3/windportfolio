"use client";

import DesktopNavbar from "@/app/shared/components/desktop/DesktopNavbar";

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
