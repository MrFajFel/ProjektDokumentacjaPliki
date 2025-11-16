'use client';
import {Ref, useRef} from "react";

export default function Sidebar(){
    return(
        <div className="fixed scroll-smooth h-screen overflow-y-scroll w-[15%] bg-white border-gray-300 dark:text-[#EAEAEA] dark:bg-[#0E1111] border-r-2 dark:border-[#1E1E1E]">
            <ul className="flex flex-col text-center m-2">
                <li className="text-2xl mt-1 ml-4 w-fit p-1 pt-0 pb-0 border-l border-l-gray-400 hover:border-black dark:border-l-white dark:hover:border-l-gray-500  cursor-pointer ">
                     <a href="/#wstep">Wstęp</a>
                </li>
                <li className="mt-1 ml-4 w-fit p-1 pt-0 pb-0 border-l text-gray-800 hover:text-gray-400   border-l-gray-400 hover:border-black dark:text-gray-400 dark:hover:text-gray-700  dark:border-l-gray-400 dark:hover:border-l-gray-500  cursor-pointer">
                    <a href="/#czym-jest-linux">Czym jest Linux? </a>
                </li>
                <li className="mt-1 ml-4 w-fit p-1 pt-0 pb-0 border-l text-gray-800 hover:text-gray-400   border-l-gray-400 hover:border-black dark:text-gray-400 dark:hover:text-gray-700  dark:border-l-gray-400 dark:hover:border-l-gray-500  cursor-pointer">
                    <a href="/#zalety-i-wady">Zalety oraz Wady </a>
                </li>
                <li className="mt-1 ml-4 w-fit p-1 pt-0 pb-0 border-l text-gray-800 hover:text-gray-400   border-l-gray-400 hover:border-black dark:text-gray-400 dark:hover:text-gray-700  dark:border-l-gray-400 dark:hover:border-l-gray-500  cursor-pointer">
                    <a href="/#dystrybucje-linux">Dystrybucje Linuxa</a>
                </li>
            </ul>
                    
            <ul className="flex flex-col text-center m-2">
               <li className="text-2xl mt-1 ml-4 w-fit p-1 pt-0 pb-0 border-l border-l-gray-400 hover:border-black dark:border-l-white dark:hover:border-l-gray-500  cursor-pointer ">
                     <a href="/#komendy_podstawowe">Komendy</a>
                </li>
                <li className="mt-1 ml-4 w-fit p-1 pt-0 pb-0 border-l text-gray-800 hover:text-gray-400   border-l-gray-400 hover:border-black dark:text-gray-400 dark:hover:text-gray-700  dark:border-l-gray-400 dark:hover:border-l-gray-500  cursor-pointer">
                    <a href="/#sudo-operacja">Operacja sudo</a>
                </li>
                <li className="mt-1 ml-4 w-fit p-1 pt-0 pb-0 border-l text-gray-800 hover:text-gray-400   border-l-gray-400 hover:border-black dark:text-gray-400 dark:hover:text-gray-700  dark:border-l-gray-400 dark:hover:border-l-gray-500  cursor-pointer">
                    <a href="/#systemowe-podstawowe-komendy">Podstawowe Komendy</a>
                </li>
                 <li className="mt-1 ml-4 w-fit p-1 pt-0 pb-0 border-l text-gray-800 hover:text-gray-400   border-l-gray-400 hover:border-black dark:text-gray-400 dark:hover:text-gray-700  dark:border-l-gray-400 dark:hover:border-l-gray-500  cursor-pointer">
                    <a href="/#operacje-na-adresach-plikow">Operacja na adresach</a>
                </li>
            </ul>


             <ul className="flex flex-col text-center m-2">
               <li className="text-2xl mt-1 ml-4 w-fit p-1 pt-0 pb-0 border-l border-l-gray-400 hover:border-black dark:border-l-white dark:hover:border-l-gray-500  cursor-pointer ">
                     <a href="/#pakiety">Instalatory</a>
                </li>
                 <li className="mt-1 ml-4 w-fit p-1 pt-0 pb-0 border-l text-gray-800 hover:text-gray-400   border-l-gray-400 hover:border-black dark:text-gray-400 dark:hover:text-gray-700  dark:border-l-gray-400 dark:hover:border-l-gray-500  cursor-pointer">
                     <a href="/#apt"> apt </a>
                 </li>
                 <li className="mt-1 ml-4 w-fit p-1 pt-0 pb-0 border-l text-gray-800 hover:text-gray-400   border-l-gray-400 hover:border-black dark:text-gray-400 dark:hover:text-gray-700  dark:border-l-gray-400 dark:hover:border-l-gray-500  cursor-pointer">
                     <a href="/#flatpack"> flatpack </a>
                 </li>
            </ul>



            <ul className="flex flex-col text-center m-2">
               <li className="text-2xl mt-1 ml-4 w-fit p-1 pt-0 pb-0 border-l border-l-gray-400 hover:border-black dark:border-l-white dark:hover:border-l-gray-500  cursor-pointer ">
                     <a href="/#programy">Programy</a>
                </li>
                <li className="mt-1 ml-4 w-fit p-1 pt-0 pb-0 border-l text-gray-800 hover:text-gray-400   border-l-gray-400 hover:border-black dark:text-gray-400 dark:hover:text-gray-700  dark:border-l-gray-400 dark:hover:border-l-gray-500  cursor-pointer">
                    <a href="/#operacja-nano">Edytor Nano</a>
                </li>
                <li className="mt-1 ml-4 w-fit p-1 pt-0 pb-0 border-l text-gray-800 hover:text-gray-400   border-l-gray-400 hover:border-black dark:text-gray-400 dark:hover:text-gray-700  dark:border-l-gray-400 dark:hover:border-l-gray-500  cursor-pointer">
                    <a href="/#tmux">Tmux</a>
                </li>
            </ul>
        </div>
    );
}