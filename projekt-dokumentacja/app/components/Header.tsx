import Link from "next/link";
import Image from "next/image";

interface HeaderProps {
    onMenuToggle: () => void;
    isMobileMenuOpen: boolean;
}

export default function Header({ onMenuToggle, isMobileMenuOpen }: HeaderProps){
    return(
        <header className='fixed h-12 w-full bg-white border-gray-300 dark:bg-[#0E1111] dark:text-[#EAEAEA] border-b-2 dark:border-[#1E1E1E] z-50 overflow-hidden'>
            <div className="flex justify-between items-center h-full">
                <div className="flex items-center">
                    {/* Mobile menu button */}
                    <button 
                        onClick={onMenuToggle}
                        className="lg:hidden ml-2 mr-2 p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
                        aria-label="Toggle menu"
                    >
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            strokeWidth={1.5} 
                            stroke="currentColor" 
                            className="w-6 h-6"
                        >
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            )}
                        </svg>
                    </button>
                    
                    <div className="w-fit m-2">
                        <Link href="/">
                            <Image src="/LogoV1.png" alt="Logo" width={50} height={20} />
                        </Link>
                    </div>
                </div>
                
                <div className="fit m-2 flex h-full items-center">
                    <Link target="_blank" className="mr-3 sm:mr-6 text-center flex items-center gap-1 sm:gap-2 text-sm sm:text-base" href="https://buymeacoffee.com/FajFaj">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                        </svg>
                        <span className="hidden sm:inline">Donate</span>
                    </Link>
                    <div className="mr-2 sm:mr-6 h-full flex items-center">
                        {/* księżyc - tylko w dark mode */}
                        <svg className="w-5 h-5 sm:w-6 sm:h-7 dark:block hidden" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"/>
                        </svg>

                        {/* słońce - tylko w light mode */}
                        <svg className="w-5 h-5 sm:w-6 sm:h-7 dark:hidden block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"/>
                        </svg>
                    </div>
                </div>
            </div>
        </header>
    );
}
