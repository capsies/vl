"use client"
import Image from "next/image";
import Logo from "/public/logo.svg";
import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react"; // Icons for responsiveness & dark mode

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    return (
        <header className="bg-[var(--background)] text-[var(--foreground)] shadow-md">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">

                {/* Logo */}
                <div className="flex items-center">
                    <Image src={Logo} alt="Virtual Labs Logo" width={150} height={50} priority />
                </div>

                {/* Navigation Links - Desktop */}
                <nav className="hidden md:flex space-x-6">
                    <a href="#" className="text-[var(--blue-text)] font-semibold hover:text-[var(--inner-card-blue)]">Home</a>
                    <a href="#" className="text-[var(--green-text)] font-semibold hover:text-[var(--inner-card-green)]">Experiments</a>
                    <a href="#" className="text-[var(--foreground)] font-semibold hover:text-[var(--shade-d)]">Workshops</a>
                    <a href="#" className="text-[var(--foreground)] font-semibold hover:text-[var(--shade-d)]">Research</a>
                    <a href="#" className="text-[var(--foreground)] font-semibold hover:text-[var(--shade-d)]">About</a>
                </nav>

                {/* Dark Mode Toggle */}
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="p-2 bg-[var(--shade-l)] rounded-md"
                >
                    {darkMode ? <Sun className="text-[var(--foreground)] w-5 h-5" /> : <Moon className="text-[var(--foreground)] w-5 h-5" />}
                </button>

                {/* Mobile Menu Button */}
                <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X className="w-6 h-6 text-[var(--foreground)]" /> : <Menu className="w-6 h-6 text-[var(--foreground)]" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <nav className="md:hidden bg-[var(--background)] text-[var(--foreground)] shadow-lg p-4">
                    <a href="#" className="block py-2 text-[var(--blue-text)] font-semibold hover:text-[var(--inner-card-blue)]">Home</a>
                    <a href="#" className="block py-2 text-[var(--green-text)] font-semibold hover:text-[var(--inner-card-green)]">Experiments</a>
                    <a href="#" className="block py-2 text-[var(--foreground)] font-semibold hover:text-[var(--shade-d)]">Workshops</a>
                    <a href="#" className="block py-2 text-[var(--foreground)] font-semibold hover:text-[var(--shade-d)]">Research</a>
                    <a href="#" className="block py-2 text-[var(--foreground)] font-semibold hover:text-[var(--shade-d)]">About</a>
                </nav>
            )}
        </header>
    );
};

export default Header;
