'use client';
import {Ref, useRef} from "react";

export default function Sidebar(){
    return(
        <div className="fixed scroll-smooth h-screen overflow-y-scroll w-[15%] bg-white border-gray-300 dark:text-[#EAEAEA] dark:bg-[#0E1111] border-r-2 dark:border-[#1E1E1E]">
            <ul className="flex flex-col text-center m-2">
                <li className="mt-1 ml-4 w-fit p-1 pt-0 pb-0 border-l border-l-gray-400 hover:border-black dark:border-l-white dark:hover:border-l-gray-500  cursor-pointer ">
                     <a href="/#wstep">Wstęp</a>
                </li>
                <li className="mt-1 ml-4 w-fit p-1 pt-0 pb-0 border-l border-l-gray-400 hover:border-black dark:border-l-white dark:hover:border-l-gray-500  cursor-pointer ">
                    Kolejna rzecz
                </li>
            </ul>
        </div>
    );
}