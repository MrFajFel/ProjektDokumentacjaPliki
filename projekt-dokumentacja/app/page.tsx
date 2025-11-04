import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import "./globals.css";

export default function Home() {
  return (
      <div>
          <div className="root"></div>
          <div className="flex flex-col ">
            <Header/>
            <main className="flex mt-12">
              <Sidebar/>
              <div className="w-[85%] h-screen ml-[15%] text-black bg-white dark:bg-[#0E1111]
               dark:text-[#EAEAEA]">

                  <h1 id="Wstep" className=" mt-10 ml-5 font-bold  text-gray-500  dark:text-shadow-black dark:text-shadow-sm">
                      WSTĘP
                  </h1>

                  <h2 className="ml-10">
                      <span className="text-2xl font-bold">Historia rozwoju Linuxa </span>
                  </h2>
                  <p className="mt-10 ml-20 mr-20">
                      Historia Linuxa rozpoczęła się w 1991 roku, kiedy to fiński programista,
                      Linus Torvalds poinformował na grupie dyskusyjnej Miniksa o hobbystycznym tworzeniu przez siebie niedużego,
                      wolnego systemu operacyjnego,
                      przeznaczonego dla procesorów z rodzin i386 oraz i486.
                  </p>
              </div>
            </main>
          </div>
              <Footer/>
      </div>
  );
}
