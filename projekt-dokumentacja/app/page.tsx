import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <div>
      <div className="root"></div>


      <div className="flex flex-col">
        <Header/>
        <main className="flex mt-12">
          <Sidebar/>
          <div className="w-[85%] h-screen ml-[15%]">Tu beda informacje</div>
        </main>
        <Footer/>
      </div>
    </div>
  );
}
