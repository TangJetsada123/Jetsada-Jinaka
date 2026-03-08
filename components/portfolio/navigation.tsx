"use client";

import { Menu, Satellite, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Certificates", href: "#certificates" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${scrolled
        ? "border-b border-border/60 bg-background/90 backdrop-blur-xl"
        : "bg-transparent"
        }`}
      style={scrolled ? { boxShadow: "0 1px 0 rgba(0,229,255,0.08)" } : {}}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="#home"
          className="flex items-center gap-2 font-mono text-sm font-bold uppercase tracking-widest text-foreground"
        >
          <Satellite
            className="h-4 w-4 text-primary"
            style={{ filter: "drop-shadow(0 0 6px rgba(0,229,255,0.6))" }}
          />
          <span className="text-primary">&lt;</span>Jetsada Jinaka<span className="text-primary">/&gt;</span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link, i) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="group font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
              >
                <span className="text-primary/60">0{i + 1}.</span>{" "}{link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Resume */}
        <Link
          href="/Jetsada_resume.pdf"
          className="hidden rounded border border-primary/50 px-4 py-2 font-mono text-xs text-primary transition-all hover:border-primary hover:bg-primary/10 md:inline-block"
          style={{ boxShadow: "0 0 12px rgba(0,229,255,0.1)" }}
        >
          Resume
        </Link>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-foreground md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 flex items-center justify-center bg-background/97 backdrop-blur-2xl transition-all duration-300 md:hidden ${isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
          }`}
      >
        <ul className="flex flex-col items-center gap-10">
          {navLinks.map((link, i) => (
            <li key={link.name}>
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-mono text-2xl text-foreground transition-colors hover:text-primary"
              >
                <span className="text-primary/60">0{i + 1}.</span>{" "}{link.name}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/Jetsada_resume.pdf"
              className="mt-2 inline-block rounded border border-primary px-8 py-3 font-mono text-sm text-primary transition-all hover:bg-primary/10"
            >
              Resume
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
