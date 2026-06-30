import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GlobalFlyingRobot from "@/components/GlobalFlyingRobot";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrainsMono",
  subsets: ["latin"],
  weight: ["100","200","300","400", "500", "600", "700"],
});


export const metadata = {
  title: "Nazmul Hasan | Full-Stack Developer",
  description: "Full-stack developer specializing in React, Next.js, Node.js, TypeScript, PostgreSQL & MongoDB. Building modern, scalable web applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${jetbrainsMono.className} antialiased text-white min-h-screen`}
      >
        <Header />
        <GlobalFlyingRobot />
        {children}
        <Footer />
      </body>
    </html>
  );
}
