import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Siwagron Kamonrattanasuk | Portfolio",
  description: "Portfolio of Siwagron Kamonrattanasuk, Full Stack Developer.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en"><body className="min-h-full flex flex-col bg-[#f7f8fc] text-[#172033]"><Navbar />{children}</body></html>;
}
