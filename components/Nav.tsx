"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./Logo";

const navLinks = [
  { href: "/apps", label: "Apps" },
  { href: "#about", label: "About" },
  { href: "/blog", label: "Blog" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass py-2"
          : "py-5"
      }`}
      style={{
        background: scrolled ? undefined : "transparent",
      }}
    >
      <div className="wrap">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div
              className="relative w-11 h-11 rounded-xl flex items-center justify-center text-white overflow-hidden flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
              style={{
                boxShadow: "0 4px 20px rgba(124, 58, 237, 0.4), inset 0 1px 0 rgba(255,255,255,0.1)",
              }}
            >
              <Logo size={44} />
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
            </div>
            <div>
              <span
                className="text-base font-bold text-white leading-none block"
                style={{ fontFamily: "var(--font-bricolage)" }}
              >
                Khalid Shaikh
              </span>
              <span
                className="text-[10px] font-bold tracking-widest uppercase opacity-50"
                style={{ 
                  color: "var(--color-accent)",
                  fontFamily: "var(--font-mono)",
                  letterSpacing: "0.1em"
                }}
              >
                AI Enthusiast
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2.5 text-sm font-medium rounded-xl transition-all duration-200"
                style={{
                  color: "var(--color-text-muted)",
                  fontFamily: "var(--font-inter)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.background = "rgba(124, 58, 237, 0.1)";
                  e.currentTarget.style.boxShadow = "0 0 20px rgba(124, 58, 237, 0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--color-text-muted)";
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link href="#erp" className="btn-primary" style={{ padding: "10px 22px", fontSize: "13px" }}>
              Join ERP Waitlist
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <button
            className="md:hidden flex flex-col gap-[5px] p-2.5 rounded-xl transition-colors duration-200"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{ 
              color: "var(--color-text-muted)",
              background: menuOpen ? "rgba(124, 58, 237, 0.1)" : "transparent"
            }}
          >
            <span
              className={`block w-5 h-[1.5px] bg-current rounded-full transition-all duration-300 ${
                menuOpen ? "translate-y-[6.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-current rounded-full transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-current rounded-full transition-all duration-300 ${
                menuOpen ? "-translate-y-[6.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-80 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div
            className="rounded-2xl p-4 flex flex-col gap-1"
            style={{
              background: "linear-gradient(145deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.9) 100%)",
              border: "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(20px)",
              boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-3 text-sm font-medium rounded-xl transition-colors duration-200"
                style={{ 
                  color: "var(--color-text-muted)", 
                  fontFamily: "var(--font-inter)" 
                }}
                onClick={() => setMenuOpen(false)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.background = "rgba(124, 58, 237, 0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--color-text-muted)";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
