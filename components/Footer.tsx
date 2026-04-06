"use client";

import Link from "next/link";
import Logo from "./Logo";

const products = [
  { label: "PDF Merger", href: "https://khalidkshaikh.github.io/pdf-merger/" },
  { label: "PDF Compressor", href: "https://khalidkshaikh.github.io/pdf-compressor/" },
  { label: "PDF Splitter", href: "https://khalidkshaikh.github.io/pdf-splitter/" },
  { label: "PDF Tools Hub", href: "https://khalidkshaikh.github.io/pdf-tools-hub/" },
  { label: "Neural Pulse", href: "https://khalidkshaikh.github.io/neural-pulse/" },
  { label: "Storage Cleaner", href: "https://github.com/xdrkzx1/khalid-apps-releases/releases/download/v1.0.0/Storage_Cleaner_v1.0.0.apk" },
  { label: "Status Saver", href: "https://github.com/xdrkzx1/khalid-apps-releases/releases/download/v1.0.0/Status_Saver_v0.4.1.apk" },
  { label: "Card Optimizer", href: "https://github.com/xdrkzx1/khalid-apps-releases/releases/download/v1.0.0/FloatMax_v1.0.0.apk" },
];

const pages = [
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Tools Hub", href: "/tools" },
  { label: "Android Apps", href: "/apps" },
  { label: "Lean ERP", href: "#erp" },
  { label: "Contact", href: "/contact" },
];

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    target={href.startsWith("http") ? "_blank" : undefined}
    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
    className="block text-sm py-1.5 transition-all duration-200"
    style={{ color: "var(--color-text-muted)" }}
    onMouseEnter={(e) => (e.currentTarget.style.color = "#fff", e.currentTarget.style.transform = "translateX(4px)")}
    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-muted)", e.currentTarget.style.transform = "translateX(0)")}
  >
    {children}
  </Link>
);

export default function Footer() {
  return (
    <footer id="about" style={{ background: "linear-gradient(180deg, var(--color-surface-2) 0%, #0a0e1a 100%)", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
      <div className="gradient-line" />

      <div className="wrap py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">

          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div
                className="relative w-11 h-11 rounded-xl flex items-center justify-center text-white overflow-hidden flex-shrink-0 transition-transform duration-300"
                style={{
                  boxShadow: "0 4px 20px rgba(124, 58, 237, 0.4), inset 0 1px 0 rgba(255,255,255,0.1)",
                }}
              >
                <Logo size={28} />
              </div>
              <div>
                <span
                  className="text-base font-bold text-white leading-none block"
                  style={{ fontFamily: "var(--font-bricolage)" }}
                >
                  Khalid Shaikh
                </span>
                <span className="text-[10px] font-bold tracking-widest uppercase opacity-50" style={{ color: "var(--color-accent)", fontFamily: "var(--font-mono)" }}>
                  AI Enthusiast
                </span>
              </div>
            </div>

            <p className="text-sm leading-relaxed mb-8" style={{ color: "var(--color-text-muted)", maxWidth: 260 }}>
              AI enthusiast shipping vibe-coded tools, AI workflows, and automations that actually ship.
            </p>

            <div className="flex items-center gap-3">
              {[
                {
                  href: "https://github.com/xdrkzx1",
                  label: "GitHub",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  ),
                },
                {
                  href: "https://linkedin.com/in/or-khalid-shaikh/",
                  label: "LinkedIn",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  ),
                },
                {
                  href: "https://wa.me/919503392390",
                  label: "WhatsApp",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.06 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  ),
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-300"
                  style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "var(--color-text-muted)",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "linear-gradient(135deg, rgba(124, 58, 237, 0.2) 0%, rgba(99, 102, 241, 0.15) 100%)";
                    e.currentTarget.style.borderColor = "rgba(124, 58, 237, 0.3)";
                    e.currentTarget.style.color = "#C4B5FD";
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 8px 20px rgba(124, 58, 237, 0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                    e.currentTarget.style.color = "var(--color-text-muted)";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 2px 10px rgba(0,0,0,0.2)";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4
              className="text-xs font-bold uppercase tracking-widest mb-6"
              style={{ color: "var(--color-text-muted)", letterSpacing: "0.15em" }}
            >
              Products
            </h4>
            <div className="flex flex-col">
              {products.map((p) => (
                <FooterLink key={p.label} href={p.href}>{p.label}</FooterLink>
              ))}
            </div>
          </div>

          <div>
            <h4
              className="text-xs font-bold uppercase tracking-widest mb-6"
              style={{ color: "var(--color-text-muted)", letterSpacing: "0.15em" }}
            >
              Pages
            </h4>
            <div className="flex flex-col">
              {pages.map((p) => (
                <FooterLink key={p.label} href={p.href}>{p.label}</FooterLink>
              ))}
            </div>
          </div>

          <div>
            <h4
              className="text-xs font-bold uppercase tracking-widest mb-6"
              style={{ color: "var(--color-text-muted)", letterSpacing: "0.15em" }}
            >
              Builder
            </h4>
            <div
              className="rounded-2xl p-5"
              style={{
                background: "linear-gradient(145deg, rgba(30, 41, 59, 0.6) 0%, rgba(15, 23, 42, 0.8) 100%)",
                border: "1px solid rgba(255,255,255,0.06)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)",
              }}
            >
              <div className="flex items-center gap-4 mb-5">
                <div
                  className="relative w-12 h-12 rounded-xl overflow-hidden flex-shrink-0"
                  style={{
                    boxShadow: "0 4px 15px rgba(124, 58, 237, 0.4), inset 0 1px 0 rgba(255,255,255,0.1)",
                  }}
                >
                  <img
                    src="/author.png"
                    alt="Khalid Shaikh"
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <p className="text-[11px]" style={{ color: "var(--color-text-muted)" }}>
                    Designed & built by
                  </p>
                  <p className="text-base font-bold text-white" style={{ fontFamily: "var(--font-bricolage)" }}>
                    Khalid Shaikh
                  </p>
                  <p className="text-[11px]" style={{ color: "var(--color-text-muted)" }}>
                    Indie Developer · Builder
                  </p>
                </div>
              </div>
              <a
                href="https://linkedin.com/in/or-khalid-shaikh/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold transition-all duration-200"
                style={{
                  background: "linear-gradient(135deg, rgba(37, 99, 235, 0.2) 0%, rgba(37, 99, 235, 0.1) 100%)",
                  border: "1px solid rgba(59, 130, 246, 0.3)",
                  color: "#93C5FD",
                  boxShadow: "0 2px 10px rgba(37, 99, 235, 0.2)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "linear-gradient(135deg, rgba(37, 99, 235, 0.3) 0%, rgba(37, 99, 235, 0.2) 100%)";
                  e.currentTarget.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "linear-gradient(135deg, rgba(37, 99, 235, 0.2) 0%, rgba(37, 99, 235, 0.1) 100%)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="gradient-line" />
      <div className="wrap py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>
            © 2026 Khalid Shaikh ·{" "}
            <span style={{ fontFamily: "var(--font-mono)" }}>khalidshaikh.dev</span>
          </p>
          <div className="flex items-center gap-6">
            {["Privacy", "Terms", "RSS"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-xs transition-all duration-200"
                style={{ color: "var(--color-text-muted)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-muted)")}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
