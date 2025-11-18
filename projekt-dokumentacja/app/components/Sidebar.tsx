'use client';

import { PropsWithChildren } from "react";

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}


function MyLinksContainer(props: PropsWithChildren){
    return(
        <ul className="flex flex-col text-center m-2 pt-6 lg:pt-2">
            {props.children}
        </ul>
    );
}

function MainLinks(props: PropsWithChildren){
    return(
        <li className="text-2xl sm:text-2xl mt-1 ml-4 w-fit p-1 pt-0 pb-0 border-l border-l-gray-400 hover:border-black dark:border-l-white dark:hover:border-l-gray-500 cursor-pointer">
            {props.children}
        </li>
    );
}

function SubLinks(props: PropsWithChildren){
    return(
        <li className="mt-1 ml-4 w-fit p-1 pt-0 pb-0 border-l text-2xl sm:text-base text-gray-800 hover:text-gray-400 border-l-gray-400 hover:border-black dark:text-gray-400 dark:hover:text-gray-700 dark:border-l-gray-400 dark:hover:border-l-gray-500 cursor-pointer">
            {props.children}
        </li>
    );
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
                fixed scroll-smooth h-full overflow-auto 
                w-[280px] sm:w-[300px] lg:w-[15%] 
                bg-white border-gray-300 
                dark:text-[#EAEAEA] dark:bg-[#0E1111] 
                border-r-2 dark:border-[#1E1E1E]
                transition-transform duration-300 ease-in-out
                z-40
                ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
            `}>
                <MyLinksContainer>
                    <MainLinks>
                         <a href="/#wstep" onClick={onClose}>Wstęp</a>
                    </MainLinks>
                    <SubLinks>
                        <a href="/#czym-jest-linux" onClick={onClose}>Czym jest Linux?</a>
                    </SubLinks>
                    <SubLinks>
                        <a href="/#zalety-i-wady" onClick={onClose}>Zalety oraz Wady</a>
                    </SubLinks>
                    <SubLinks>
                        <a href="/#dystrybucje-linux" onClick={onClose}>Dystrybucje Linuxa</a>
                    </SubLinks>
                </MyLinksContainer>
                        
                <MyLinksContainer>
                    <MainLinks>
                        <a href="/#komendy_podstawowe" onClick={onClose}>Komendy</a>
                    </MainLinks>
                    <SubLinks>
                        <a href="/#sudo-operacja" onClick={onClose}>Operacja sudo</a>
                    </SubLinks>
                     <SubLinks>
                        <a href="/#operacje-na-adresach-plikow" onClick={onClose}>Operacja na adresach</a>
                    </SubLinks>
                </MyLinksContainer>

                <MyLinksContainer>
                   <MainLinks>
                         <a href="/#pakiety" onClick={onClose}>Instalatory</a>
                    </MainLinks>
                     <SubLinks>
                         <a href="/#apt" onClick={onClose}>apt</a>
                     </SubLinks>
                     <SubLinks>
                         <a href="/#flatpack" onClick={onClose}>flatpack</a>
                     </SubLinks>
                </MyLinksContainer>

                <MyLinksContainer>
                   <MainLinks>
                         <a href="/#programy" onClick={onClose}>Programy</a>
                    </MainLinks>
                    <SubLinks>
                        <a href="/#operacja-nano" onClick={onClose}>Edytor Nano</a>
                    </SubLinks>
                    <SubLinks>
                        <a href="/#tmux" onClick={onClose}>Tmux</a>
                    </SubLinks>
                </MyLinksContainer>
            </div>
        </>
    );
}
