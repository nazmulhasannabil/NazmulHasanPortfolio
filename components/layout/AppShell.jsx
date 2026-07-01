"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GlobalFlyingRobot from "@/components/GlobalFlyingRobot";

export default function AppShell({ children }) {
  const pathname = usePathname();
  const isHobby = pathname.startsWith("/hobby");

  if (isHobby) {
    return children;
  }

  return (
    <div className="text-white min-h-screen">
      <Header />
      <GlobalFlyingRobot />
      {children}
      <Footer />
    </div>
  );
}
