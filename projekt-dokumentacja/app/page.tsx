'use client';
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import "./globals.css";
import Main from "./components/main.mdx";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
      <div>
          <div className="root"></div>
          <div className="flex flex-col">
            <Header onMenuToggle={toggleMobileMenu} isMobileMenuOpen={isMobileMenuOpen} />
            <main className="flex mt-12">
              <Sidebar isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
              <div className="components w-full lg:w-[85%] lg:ml-[15%] bg-white dark:bg-[#0E1111] px-4 sm:px-6 lg:px-8">
                  <Main/>
              </div>
            </main>
          </div>
          <Footer/>
      </div>
  );
}
