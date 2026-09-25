import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import { LanguageProvider } from "./components/LanguageProvider";

export const metadata: Metadata = {
  title: {
    default: "Siwagron Kamonrattanasuk | Full Stack Developer",
    template: "%s | Siwagron Kamonrattanasuk",
  },
  description:
    "Portfolio of Siwagron Kamonrattanasuk, a Full Stack Developer building web applications with React, Node.js, and modern tools.",
  keywords: [
    "Siwagron Kamonrattanasuk",
    "Full Stack Developer",
    "React Developer",
    "Node.js Developer",
    "Web Developer Portfolio",
  ],
  openGraph: {
    title: "Siwagron Kamonrattanasuk | Full Stack Developer",
    description:
      "Explore selected full-stack projects by Siwagron Kamonrattanasuk.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en"><body className="min-h-full flex flex-col bg-[#f7f8fc] text-[#172033]"><LanguageProvider><Navbar />{children}</LanguageProvider></body></html>;
}
