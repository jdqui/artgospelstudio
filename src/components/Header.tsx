"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";

export default function Header({ variant = "default" }: { variant?: "default" | "white" }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const isWhite = variant === "white";

    return (
        <header className="relative z-50 flex justify-between items-center w-full px-10 lg:px-25 my-10 lg:my-15">
            <div className="justify-start">
                <Link href="/">
                    <Image
                        src={isWhite ? "/logo-white.svg" : "/logo.svg"}
                        alt="Art Gospel Logo"
                        width={128}
                        height={48}
                        className="object-cover w-auto h-7 lg:h-10"
                    />
                </Link>
            </div>

            <div className="hidden md:block justify-end pointer-events-none">
                <Link href="/" className="pointer-events-auto">
                    <Image
                        src={isWhite ? "/flower-logo-white.svg" : "/flower-logo.svg"}
                        alt="Art Gospel Icon"
                        width={128}
                        height={48}
                        className="absolute left-1/2 top-1/2 h-8 lg:h-12 w-auto -translate-x-1/2 -translate-y-1/2"
                    />
                </Link>
            </div>

            <nav className="hidden sm:flex justify-end gap-4">
                <Button href="/projects" variant="ghost" className={isWhite ? "text-white" : ""}>
                    Projects
                </Button>
                <Button href="/#connect" variant="solid">
                    Let's Connect
                </Button>
            </nav>

            <button
                type="button"
                onClick={() => setIsMenuOpen((prev) => !prev)}
                className="sm:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10 z-[60] relative cursor-pointer touch-manipulation"
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
            >
                <span className={`block h-0.5 w-6 transition-all duration-300 ${isWhite && !isMenuOpen ? "bg-white" : "bg-black"} ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
                <span className={`block h-0.5 w-6 transition-all duration-300 ${isWhite && !isMenuOpen ? "bg-white" : "bg-black"} ${isMenuOpen ? "opacity-0" : ""}`} />
                <span className={`block h-0.5 w-6 transition-all duration-300 ${isWhite && !isMenuOpen ? "bg-white" : "bg-black"} ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>


            <div
                className={`
                    ${isMenuOpen ? "flex" : "hidden"}
                    sm:hidden absolute top-full right-10 mt-3 flex-col gap-2 bg-white shadow-xl rounded-xl p-4 min-w-[200px] border border-gray-100 z-[55]
                `}
            >
                <Link
                    href="/projects"
                    className="text-black text-base px-4 py-2 hover:bg-gray-50 rounded-lg font-medium"
                    onClick={() => setIsMenuOpen(false)}
                >
                    Projects
                </Link>
                
                <Link
                    href="/#connect"
                    className="text-black text-base px-4 py-2 hover:bg-gray-50 rounded-lg font-medium"
                    onClick={() => setIsMenuOpen(false)}
                >
                    Let's Connect
                </Link>
            </div>
        </header>
    );
}
