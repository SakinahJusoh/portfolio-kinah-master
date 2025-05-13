"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const MenuBar = () => {

    const pathName = usePathname()
    const [isOpen, setIsOpen] = useState(false);

    console.log(pathName)

    return (
        <div className="w-full justify-end mb-12">
            <div className=" absolute right-0 top-[45px]">
                <Link 
                    href="/about"
                    className={`[font family: 'Inter-Medium', Helvetica] font medium text-black text-xl px-2 py-2 ${pathName == "/about" ? 'active font-bold' : ''}`}>
                        About Me
                </Link>
                <Link 
                    href="/project"
                     className={`[font family: 'Inter-Medium', Helvetica] font medium text-black text-xl px-2 py-2 ${pathName == "/project" ? 'active font-bold' : ''}`}>
                        Projects
                </Link>
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden px-4">
                <button 
                    className="text-black text-xl mb-4"
                    onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? "✕" : "☰"}
                    </button>
            </div>

            {isOpen && (
                <div className="md:hidden flex flex-col items-center w-full bg-white py-4 shadow-md">
                    <Link
                        href="/about"
                        className={`text-black text-xl px-2 py-2 w-full text-center ${pathName == "/about" ? 'active font bold' : ''}`}
                        onClick={() => setIsOpen(false)}>
                            About Me
                    </Link>
                    <Link 
                        href="/project"
                        className={`text-black text-xl px-2 py-2 w-full text-center ${pathName == "/skill" ? 'active font bold' : ''}`}
                        onClick={() => setIsOpen(false)}>
                            Projects
                    </Link>
                    </div>
            )}

        </div>
    )
}

export default MenuBar;