"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Work", href: "/work" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <header className="sticky top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border-subtle">
      <div className="flex justify-between items-center max-w-container-max mx-auto px-gutter h-44">
        <Link href="/" className="flex items-center gap-4 md:gap-5">
          <Image
            src="/logos/monogram-v2.webp"
            alt="Anthony Muhati monogram logo — Back to Home"
            width={112}
            height={167}
            className="w-20 md:w-24 lg:w-28 xl:w-28 h-auto"
            priority
          />
          <div className="flex flex-col justify-center">
            <span className="font-cormorant text-xl sm:text-2xl md:text-3xl font-semibold tracking-widest text-[#C8A97E] leading-none uppercase">
              Anthony Muhati
            </span>
            <span className="font-cormorant text-[10px] sm:text-xs tracking-[0.3em] text-[#C8A97E] uppercase mt-1 leading-none hidden sm:block">
              Crafted for Growth
            </span>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              className="font-button text-button text-on-surface-variant hover:text-primary transition-colors duration-300 inline-flex items-center min-h-[44px] px-2" 
              href={link.href}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <Link 
          className="hidden md:inline-flex font-button text-button bg-primary-container text-black px-8 py-4 rounded hover:bg-[#b0912d] transition-colors duration-300 scale-95 active:scale-90" 
          href="/contact"
        >
          Start Your Project
        </Link>

        {/* Mobile Menu Toggle button: touch target is 48px to comply with accessibility standard */}
        <button 
          onClick={toggleMenu}
          className="md:hidden text-on-surface flex items-center justify-center min-w-[44px] w-12 h-12 rounded focus:outline-none focus:ring-2 focus:ring-primary-container"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span className="material-symbols-outlined text-3xl">
            {isMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-44 left-0 w-full bg-background border-b border-border-subtle z-40 animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                onClick={() => setIsMenuOpen(false)}
                className="font-button text-button text-on-surface-variant hover:text-primary py-3.5 px-4 rounded hover:bg-surface-elevated transition-colors duration-200"
                href={link.href}
              >
                {link.name}
              </Link>
            ))}
            <Link
              onClick={() => setIsMenuOpen(false)}
              className="font-button text-button bg-primary-container text-black py-4 rounded text-center hover:bg-[#b0912d] transition-colors duration-300"
              href="/contact"
            >
              Start Your Project
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
