import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrainsMono",
  subsets: ["latin"],
  weight: ["100","200","300","400", "500", "600", "700"],
});


export const metadata = {
  title: "Nazmul Hasan",
  description: "Web Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${jetbrainsMono.className} antialiased px-[8%] bg-gray-900 text-white `}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
