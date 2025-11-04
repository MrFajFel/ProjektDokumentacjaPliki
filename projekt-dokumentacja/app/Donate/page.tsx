import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function DonatePage(){
    return(
        <div className="flex">
            <Header />
            <main className="flex mt-12 h-screen text-center w-full flex-col text-black bg-white dark:bg-[#131314] dark:text-[#EAEAEA]">
                <h1 className="text-3xl h-fit w-full">
                    Send donation please here 👽
                </h1>
                <p>smth here</p>
            </main>
        </div>
    );
}