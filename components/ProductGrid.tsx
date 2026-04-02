"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

type Product = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  badge: string;
  badgeClass: string;
  cardClass: string;
  href: string;
  icon: React.ReactNode;
  tech: string;
  status: "live" | "coming-soon";
  accentColor: string;
};

const products: Product[] = [
  {
    id: "storage-cleaner",
    name: "Storage Cleaner",
    tagline: "Android · Free",
    description: "One-tap junk & duplicate file cleaner. Reclaim gigabytes without the headache.",
    badge: "Android",
    badgeClass: "badge-accent",
    cardClass: "card-android",
    href: "https://github.com/xdrkzx1/khalid-apps-releases/releases/download/v1.0.0/Storage_Cleaner_v1.0.0.apk",
    tech: "Kotlin · Vibe-coded",
    status: "live",
    accentColor: "#0ABFBC",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6"/>
        <path d="M10 11v6M14 11v6"/>
      </svg>
    ),
  },
  {
    id: "status-saver",
    name: "Status Saver",
    tagline: "Android · Free",
    description: "Download WhatsApp & Instagram statuses in one tap. No account needed.",
    badge: "Android",
    badgeClass: "badge-accent",
    cardClass: "card-android",
    href: "https://github.com/xdrkzx1/khalid-apps-releases/releases/download/v1.0.0/Status_Saver_v0.4.1.apk",
    tech: "Kotlin · Side project",
    status: "live",
    accentColor: "#0ABFBC",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 8v4l3 3"/>
      </svg>
    ),
  },
  {
    id: "card-optimizer",
    name: "Card Optimizer",
    tagline: "Android · Free",
    description: "Track spending, maximize rewards, never miss a cashback offer again.",
    badge: "Android",
    badgeClass: "badge-accent",
    cardClass: "card-android",
    href: "https://github.com/xdrkzx1/khalid-apps-releases/releases/download/v1.0.0/FloatMax_v1.0.0.apk",
    tech: "Kotlin · AI-assisted",
    status: "live",
    accentColor: "#0ABFBC",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="5" width="20" height="14" rx="2"/>
        <path d="M2 10h20"/>
      </svg>
    ),
  },
  {
    id: "pdf-merger",
    name: "PDF Merger",
    tagline: "Web Tool · Free",
    description: "Combine multiple PDFs into one. Zero uploads - runs 100% in your browser.",
    badge: "Web Tool",
    badgeClass: "badge-brand",
    cardClass: "card-tool",
    href: "https://xdrkzx1.github.io/pdf-merger/",
    tech: "React · pdf-lib",
    status: "live",
    accentColor: "#6C2BD9",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
        <path d="M14 2v6h6M12 12v6M9 15l3 3 3-3"/>
      </svg>
    ),
  },
  {
    id: "pdf-compressor",
    name: "PDF Compressor",
    tagline: "Web Tool · Free",
    description: "Shrink PDF file sizes without losing quality. Your files never leave your device.",
    badge: "Web Tool",
    badgeClass: "badge-brand",
    cardClass: "card-tool",
    href: "https://xdrkzx1.github.io/pdf-compressor/",
    tech: "React · pdf.js",
    status: "live",
    accentColor: "#6C2BD9",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
        <path d="M14 2v6h6M9 12l3-3 3 3M12 9v9"/>
      </svg>
    ),
  },
  {
    id: "pdf-splitter",
    name: "PDF Splitter",
    tagline: "Web Tool · Free",
    description: "Extract individual pages or ranges from any PDF. Fast, private, offline-capable.",
    badge: "Web Tool",
    badgeClass: "badge-brand",
    cardClass: "card-tool",
    href: "https://xdrkzx1.github.io/pdf-splitter/",
    tech: "React · pdf-lib",
    status: "live",
    accentColor: "#6C2BD9",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
        <path d="M14 2v6h6M3 15h18M3 9h5M16 9h5"/>
      </svg>
    ),
  },
  {
    id: "neural-pulse",
    name: "Neural Pulse",
    tagline: "AI News · Auto-updated",
    description: "Bloomberg for AI news. Auto-updated daily. Because manually checking is so 2023.",
    badge: "AI News",
    badgeClass: "badge-indigo",
    cardClass: "card-ai",
    href: "https://xdrkzx1.github.io/neural-pulse/",
    tech: "Next.js · Vibe-coded",
    status: "live",
    accentColor: "#818cf8",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2a2 2 0 012 2v2a2 2 0 01-4 0V4a2 2 0 012-2z"/>
        <path d="M12 18a2 2 0 012 2v2a2 2 0 01-4 0v-2a2 2 0 012-2z"/>
        <path d="M4.93 4.93a2 2 0 012.83 0l1.41 1.41a2 2 0 01-2.83 2.83L4.93 7.76a2 2 0 010-2.83z"/>
        <path d="M14.83 14.83a2 2 0 012.83 0l1.41 1.41a2 2 0 01-2.83 2.83l-1.41-1.41a2 2 0 010-2.83z"/>
        <path d="M2 12a2 2 0 012-2h2a2 2 0 010 4H4a2 2 0 01-2-2z"/>
        <path d="M18 12a2 2 0 012-2h2a2 2 0 010 4h-2a2 2 0 01-2-2z"/>
      </svg>
    ),
  },
  {
    id: "lean-erp",
    name: "Lean ERP",
    tagline: "SMB · India-first",
    description:
      "Affordable ERP for 10–200 person Indian companies. GST-ready. No bloat. Join the waitlist.",
    badge: "Coming Soon",
    badgeClass: "badge-orange",
    cardClass: "card-erp",
    href: "#erp",
    tech: "Next.js · Supabase",
    status: "coming-soon",
    accentColor: "#f97316",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
        <path d="M7 8h2M11 8h6M7 11h6M15 11h2"/>
      </svg>
    ),
  },
];

function ProductCard({ product, index }: { product: Product; index: number }) {
  const [visible, setVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const isComingSoon = product.status === "coming-soon";

  return (
    <div
      ref={cardRef}
      className={`transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <Link
        href={product.href}
        target={product.href.startsWith("http") ? "_blank" : undefined}
        rel={product.href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={`glass-card ${product.cardClass} group block h-full p-6 no-underline transition-all duration-300 hover:scale-[1.02]`}
        style={{ 
          minHeight: 220,
          background: "rgba(15, 23, 42, 0.3)",
          border: "1px solid rgba(255, 255, 255, 0.05)",
          boxShadow: "0 0 0 1px rgba(255, 255, 255, 0.02)"
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = `0 20px 40px -20px rgba(0,0,0,0.5), 0 0 20px -5px ${product.accentColor}30`;
          e.currentTarget.style.borderColor = `${product.accentColor}40`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = "0 0 0 1px rgba(255, 255, 255, 0.02)";
          e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.05)";
        }}
      >
        {/* Card Top */}
        <div className="flex items-start justify-between mb-4">
          {/* Icon */}
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
            style={{
              background: `${product.accentColor}15`,
              border: `1px solid ${product.accentColor}30`,
              color: product.accentColor,
            }}
          >
            {product.icon}
          </div>

          {/* Badge */}
          <div className="flex items-center gap-2">
            {product.status === "live" && (
              <span className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-wider" style={{ color: "#14b8a6" }}>
                <span
                  className="w-1.5 h-1.5 rounded-full animate-pulse-dot"
                  style={{ background: "#14b8a6" }}
                />
                Live
              </span>
            )}
            <span className={`badge ${product.badgeClass}`} style={{ fontSize: '9px', padding: '2px 8px' }}>{product.badge}</span>
          </div>
        </div>

        {/* Card Content */}
        <div className="mb-4">
          <h3
            className="text-base font-bold text-white mb-1 group-hover:text-white transition-colors"
            style={{ fontFamily: "var(--font-bricolage)" }}
          >
            {product.name}
          </h3>
          <p className="text-[10px] mb-2.5 opacity-60 font-bold uppercase tracking-widest" style={{ color: product.accentColor, fontFamily: "var(--font-mono)" }}>
            {product.tagline}
          </p>
          <p
            className="text-xs leading-relaxed opacity-70"
            style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-inter)" }}
          >
            {product.description}
          </p>
        </div>

        {/* Card Footer */}
        <div className="flex items-center justify-between mt-auto pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <span
            className="text-[10px] font-bold px-2 py-0.5 rounded-md"
            style={{
              background: "rgba(255,255,255,0.03)",
              color: "var(--color-text-muted)",
              fontFamily: "var(--font-mono)",
            }}
          >
            {product.tech}
          </span>
          <div
            className="flex items-center gap-1 text-[11px] font-bold transition-all duration-300 group-hover:gap-2"
            style={{ color: product.accentColor }}
          >
            {isComingSoon ? "Waitlist" : product.badge === "Android" ? "Download APK" : "Launch"}
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default function ProductGrid() {
  const titleRef = useRef<HTMLDivElement>(null);
  const [titleVisible, setTitleVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All Products");

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTitleVisible(true); },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const filters = [
    { label: "All Products", count: products.length },
    { label: "Android Apps", count: products.filter(p => p.badge === "Android").length },
    { label: "PDF Tools", count: products.filter(p => p.badge === "Web Tool").length },
    { label: "AI & News", count: products.filter(p => p.badge === "AI News").length },
    { label: "Coming Soon", count: products.filter(p => p.status === "coming-soon").length },
  ];

  const filteredProducts = products.filter(p => {
    if (activeFilter === "All Products") return true;
    if (activeFilter === "Android Apps") return p.badge === "Android";
    if (activeFilter === "PDF Tools") return p.badge === "Web Tool";
    if (activeFilter === "AI & News") return p.badge === "AI News";
    if (activeFilter === "Coming Soon") return p.status === "coming-soon";
    return true;
  });

  return (
    <section id="products" className="section-pad" style={{ background: "var(--color-bg-dark)" }}>
      <div className="wrap">
        {/* Section Header */}
        <div ref={titleRef} className="mb-14 max-w-2xl">
          <div
            className={`section-label transition-all duration-700 ${
              titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Products
          </div>
          <h2
            className={`text-4xl font-bold text-white transition-all duration-700 delay-100 ${
              titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ fontFamily: "var(--font-bricolage)", letterSpacing: "-0.02em" }}
          >
            Everything I&apos;ve Built
          </h2>
          <p
            className={`mt-3 text-base transition-all duration-700 delay-200 ${
              titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-inter)" }}
          >
            {products.length} products across Android, web, and AI - all built by one developer. No team. No VC. Just code.
          </p>
        </div>

        {/* Category Tabs */}
        <div
          id="tools"
          className={`flex flex-wrap gap-2 mb-10 transition-all duration-700 delay-300 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {filters.map((tab) => {
            const isActive = activeFilter === tab.label;
            return (
              <button
                key={tab.label}
                onClick={() => setActiveFilter(tab.label)}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer"
                style={{
                  background: isActive ? "rgba(99, 102, 241, 0.2)" : "rgba(255,255,255,0.05)",
                  border: `1px solid ${isActive ? "rgba(99, 102, 241, 0.35)" : "rgba(255,255,255,0.08)"}`,
                  color: isActive ? "#818cf8" : "var(--color-text-muted)",
                  fontFamily: "var(--font-inter)",
                }}
              >
                {tab.label}
                <span
                  className="w-4 h-4 rounded-full flex items-center justify-center text-[10px]"
                  style={{ background: isActive ? "rgba(99, 102, 241, 0.2)" : "rgba(255,255,255,0.08)" }}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        <div
          id="apps"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 min-h-[400px]"
        >
          {filteredProducts.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
