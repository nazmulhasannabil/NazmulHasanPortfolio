import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import AppShell from "@/components/layout/AppShell";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrainsMono",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Nazmul Hasan | Software Engineer",
  description:
    "Software Engineer at BYDS building production web and mobile products with React, Next.js, Flutter, and AI-assisted development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.className} antialiased min-h-screen`}>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
