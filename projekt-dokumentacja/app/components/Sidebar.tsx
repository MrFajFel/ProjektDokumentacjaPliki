'use client';
import {Ref, useRef} from "react";

export default function Sidebar(){
    const test:Ref<HTMLLIElement> = useRef(null)

    //     function scrollTo(){
    //     document.getElementById(test?.current.id)?.scrollIntoView({behavior: "smooth"});
    //     window.scrollBy(0,-50)
    // }

    return(
        <div className="fixed scroll-smooth h-screen overflow-y-scroll w-[15%] bg-white border-gray-300 dark:text-[#EAEAEA] dark:bg-[#0E1111] border-r-2 dark:border-[#1E1E1E]">
            <ul className="flex flex-col text-center m-2">
                <li ref={test} className="mt-1 ml-4 w-fit p-1 pt-0 pb-0 border-l border-l-gray-400 hover:border-black dark:border-l-white dark:hover:border-l-gray-500  cursor-pointer "
                    onClick={()=>{
                        document.getElementById("Wstep")?.scrollIntoView({behavior: "smooth"});
                        window.scrollBy(0,-50)
                    }}>Wstęp</li>

                <li ref={test}  onClick={()=> {
                    console.log(test.current?.id)
                }} className="mt-1 ml-4 w-fit p-1 pt-0 pb-0 border-l border-l-gray-400 hover:border-black dark:border-l-white dark:hover:border-l-gray-500  cursor-pointer ">
                    Kolejna rzecz
                </li>
            </ul>
        </div>
    );
}