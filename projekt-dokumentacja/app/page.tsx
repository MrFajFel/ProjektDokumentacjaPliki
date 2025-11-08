'use client';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import "./globals.css";
import Main from "./components/main.mdx";

export default function Home() {
  return (
      <div>
          <div className="root"></div>
          <div className="flex flex-col ">
            <Header/>
            <main className="flex mt-12">
              <Sidebar/>
              <div className="components w-[85%] ml-[15%] bg-white dark:bg-[#0E1111]">
                
                  <Main/>
              </div>
            </main>
          </div>
              <Footer/>
      </div>
  );
}
