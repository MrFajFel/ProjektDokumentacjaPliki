import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Linux Documentation",
  description: "Linux Documentation made by FiFi",
   icons: {
    icon: '/favicon.png',        // favicon dla przeglądarki
    shortcut: '/favicon.png',    // ikona skrótu
    apple: '/favicon.png',       // ikona dla iPhone/iPad
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-[#0E1111] dark:text-[#EAEAEA]`}
      >
        {children}
      </body>
    </html>
  );
}
