"use client";

import Link from "next/link";
import Image from "next/image"

export default function Footer() {
    return (
        <footer className="relative flex flex-col justify-center items-center bg-[var(--secondary-accent)] text-xs md:text-lg gap-2 p-8 md:px-15 lg:px-25 md:py-10 lg:py-15">
            <Image
                src="/logo.svg"
                alt="Art Gospel Flower Logo"
                width={128}
                height={48}
                className="block md:hidden object-contain w-auto h-6 self-center"
            />
            
            <div className="flex flex-col md:flex-row items-center md:gap-8 lg:gap-12">
                <p> Copyright 2025 </p>
                <Image
                    src="/logo.svg"
                    alt="Art Gospel Logo"
                    width={128}
                    height={48}
                    className="hidden md:block object-contain w-auto h-10 self-center"
                />
                <p> All Rights Reserved </p>
            </div>
        </footer>   
    )
}