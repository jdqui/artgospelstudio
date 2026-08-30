"use client";

import Link from "next/link";
import Image from "next/image"
import Button from "./Button";

export default function Header({ variant="default" }) {
    const navLinks = [
        { name: "Projects", href: "/projects" },
        { name: "Schedule a Call", href: "/schedule-a-call" },
    ];

    const isWhite = variant === "white";

    return (
        <header className="relative flex justify-between items-center mx-15 lg:mx-25 my-10 lg:my-15">
            <div className="justify-start">   
                <Link href="/">
                    <Image
                        src={ isWhite ? "/logo-white.svg" : "/logo.svg"}
                        alt="Art Gospel Logo"
                        width={128}
                        height={48}
                        className="object-cover w-auto h-7 lg:h-10"
                    />
                </Link>
            </div>
            <div className="justify-end hidden md:block">
                <Link href="/">
                    <Image
                        src={ isWhite ? "/flower-logo-white.svg" : "/flower-logo.svg"}
                        alt="Art Gospel Icon"
                        width={128}
                        height={48}
                        className="absolute left-1/2 top-1/2 h-8 lg:h-12 w-auto -translate-x-1/2 -translate-y-1/2"
                    />
                </Link>
            </div>
            <nav className="flex justify-end gap-4">
                <Button href="/projects" variant="ghost" className={isWhite ? "text-white" : "" } >
                Projects
                </Button>
                <Button href="/#connect" variant="solid">
                    Let's Connect
                </Button>
            </nav>
        </header>
    )
}