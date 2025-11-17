'use client';

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps){
    return(
        <>
            {/* Mobile overlay */}
            {isOpen && (
                <div 
                    className="fixed inset-0 z-40 lg:hidden"
                    onClick={onClose}
                />
            )}
            
            {/* Sidebar */}
            <div className={`
                fixed scroll-smooth h-full overflow-y-scroll 
                w-[280px] sm:w-[300px] lg:w-[15%] 
                bg-white border-gray-300 
                dark:text-[#EAEAEA] dark:bg-[#0E1111] 
                border-r-2 dark:border-[#1E1E1E]
                transition-transform duration-300 ease-in-out
                z-40
                ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
            `}>
                <ul className="flex flex-col text-center m-2 pt-12 lg:pt-2">
                    <li className="text-4xl sm:text-2xl mt-1 ml-4 w-fit p-1 pt-0 pb-0 border-l border-l-gray-400 hover:border-black dark:border-l-white dark:hover:border-l-gray-500 cursor-pointer">
                         <a href="/#wstep" onClick={onClose}>Wstęp</a>
                    </li>
                    <li className="mt-1 ml-4 w-fit p-1 pt-0 pb-0 border-l text-2xl sm:text-base text-gray-800 hover:text-gray-400 border-l-gray-400 hover:border-black dark:text-gray-400 dark:hover:text-gray-700 dark:border-l-gray-400 dark:hover:border-l-gray-500 cursor-pointer">
                        <a href="/#czym-jest-linux" onClick={onClose}>Czym jest Linux?</a>
                    </li>
                    <li className="mt-1 ml-4 w-fit p-1 pt-0 pb-0 border-l text-2xl sm:text-base text-gray-800 hover:text-gray-400 border-l-gray-400 hover:border-black dark:text-gray-400 dark:hover:text-gray-700 dark:border-l-gray-400 dark:hover:border-l-gray-500 cursor-pointer">
                        <a href="/#zalety-i-wady" onClick={onClose}>Zalety oraz Wady</a>
                    </li>
                    <li className="mt-1 ml-4 w-fit p-1 pt-0 pb-0 border-l text-2xl sm:text-base text-gray-800 hover:text-gray-400 border-l-gray-400 hover:border-black dark:text-gray-400 dark:hover:text-gray-700 dark:border-l-gray-400 dark:hover:border-l-gray-500 cursor-pointer">
                        <a href="/#dystrybucje-linux" onClick={onClose}>Dystrybucje Linuxa</a>
                    </li>
                </ul>
                        
                <ul className="flex flex-col text-center m-2">
                   <li className="text-2xl sm:text-2xl mt-1 ml-4 w-fit p-1 pt-0 pb-0 border-l border-l-gray-400 hover:border-black dark:border-l-white dark:hover:border-l-gray-500 cursor-pointer">
                         <a href="/#komendy_podstawowe" onClick={onClose}>Komendy</a>
                    </li>
                    <li className="mt-1 ml-4 w-fit p-1 pt-0 pb-0 border-l text-2xl sm:text-base text-gray-800 hover:text-gray-400 border-l-gray-400 hover:border-black dark:text-gray-400 dark:hover:text-gray-700 dark:border-l-gray-400 dark:hover:border-l-gray-500 cursor-pointer">
                        <a href="/#sudo-operacja" onClick={onClose}>Operacja sudo</a>
                    </li>
                     <li className="mt-1 ml-4 w-fit p-1 pt-0 pb-0 border-l text-2xl sm:text-base text-gray-800 hover:text-gray-400 border-l-gray-400 hover:border-black dark:text-gray-400 dark:hover:text-gray-700 dark:border-l-gray-400 dark:hover:border-l-gray-500 cursor-pointer">
                        <a href="/#operacje-na-adresach-plikow" onClick={onClose}>Operacja na adresach</a>
                    </li>
                </ul>

                <ul className="flex flex-col text-center m-2">
                   <li className="text-2xl sm:text-2xl mt-1 ml-4 w-fit p-1 pt-0 pb-0 border-l border-l-gray-400 hover:border-black dark:border-l-white dark:hover:border-l-gray-500 cursor-pointer">
                         <a href="/#pakiety" onClick={onClose}>Instalatory</a>
                    </li>
                     <li className="mt-1 ml-4 w-fit p-1 pt-0 pb-0 border-l text-2xl sm:text-base text-gray-800 hover:text-gray-400 border-l-gray-400 hover:border-black dark:text-gray-400 dark:hover:text-gray-700 dark:border-l-gray-400 dark:hover:border-l-gray-500 cursor-pointer">
                         <a href="/#apt" onClick={onClose}>apt</a>
                     </li>
                     <li className="mt-1 ml-4 w-fit p-1 pt-0 pb-0 border-l text-2xl sm:text-base text-gray-800 hover:text-gray-400 border-l-gray-400 hover:border-black dark:text-gray-400 dark:hover:text-gray-700 dark:border-l-gray-400 dark:hover:border-l-gray-500 cursor-pointer">
                         <a href="/#flatpack" onClick={onClose}>flatpack</a>
                     </li>
                </ul>

                <ul className="flex flex-col text-center m-2 pb-20">
                   <li className="text-2xl sm:text-2xl mt-1 ml-4 w-fit p-1 pt-0 pb-0 border-l border-l-gray-400 hover:border-black dark:border-l-white dark:hover:border-l-gray-500 cursor-pointer">
                         <a href="/#programy" onClick={onClose}>Programy</a>
                    </li>
                    <li className="mt-1 ml-4 w-fit p-1 pt-0 pb-0 border-l text-2xl sm:text-base text-gray-800 hover:text-gray-400 border-l-gray-400 hover:border-black dark:text-gray-400 dark:hover:text-gray-700 dark:border-l-gray-400 dark:hover:border-l-gray-500 cursor-pointer">
                        <a href="/#operacja-nano" onClick={onClose}>Edytor Nano</a>
                    </li>
                    <li className="mt-1 ml-4 w-fit p-1 pt-0 pb-0 border-l text-2xl sm:text-base text-gray-800 hover:text-gray-400 border-l-gray-400 hover:border-black dark:text-gray-400 dark:hover:text-gray-700 dark:border-l-gray-400 dark:hover:border-l-gray-500 cursor-pointer">
                        <a href="/#tmux" onClick={onClose}>Tmux</a>
                    </li>
                </ul>
            </div>
        </>
    );
}
