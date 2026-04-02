"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const posts = [
  {
    tag: "Architecture",
    tagColor: "#B794F4",
    title: "How I Built 3 Android Apps as a Solo Dev - Architecture & Lessons",
    excerpt:
      "From idea to APK - the tools, patterns, and tradeoffs I used to ship three Android apps without a team.",
    readTime: "8 min read",
    date: "Mar 2026",
    href: "/blog/android-apps-solo-dev",
  },
  {
    tag: "Performance",
    tagColor: "#34d399",
    title: "Building Client-Side PDF Tools: Why WebAssembly Changes Everything",
    excerpt:
      "Zero server costs, zero privacy concerns, and faster processing than most cloud solutions. Here's how.",
    readTime: "6 min read",
    date: "Mar 2026",
    href: "/blog/client-side-pdf-tools",
  },
  {
    tag: "Product",
    tagColor: "#0ABFBC",
    title: "Lean ERP for Indian SMBs: What the Market Actually Needs",
    excerpt:
      "After talking to 40+ operations managers in Indian manufacturing, here's what they told me they actually need.",
    readTime: "10 min read",
    date: "Feb 2026",
    href: "/blog/lean-erp-india",
  },
];

export default function BlogStrip() {
  const titleRef = useRef<HTMLDivElement>(null);
  const [titleVisible, setTitleVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(false);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = titleRef.current;
    const c = cardsRef.current;
    if (!t || !c) return;

    const tObs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setTitleVisible(true); },
      { threshold: 0.2 }
    );
    const cObs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setCardsVisible(true); },
      { threshold: 0.1 }
    );
    tObs.observe(t);
    cObs.observe(c);
    return () => { tObs.disconnect(); cObs.disconnect(); };
  }, []);

  return (
    <section className="section-pad" style={{ background: "var(--color-bg-dark)" }}>
      <div className="wrap">
        {/* Header */}
        <div ref={titleRef} className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div
              className={`section-label transition-all duration-700 ${
                titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Blog
            </div>
            <h2
              className={`text-4xl font-bold text-white transition-all duration-700 delay-100 ${
                titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ fontFamily: "var(--font-bricolage)", letterSpacing: "-0.02em" }}
            >
              Writing & Thinking
            </h2>
          </div>
          <Link
            href="/blog"
            className={`flex items-center gap-2 text-sm font-semibold transition-all duration-700 delay-200 ${
              titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ color: "var(--color-accent)", fontFamily: "var(--font-inter)" }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "var(--color-accent-light)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "var(--color-accent)"; }}
          >
            All posts
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Posts Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {posts.map((post, i) => (
            <div
              key={post.title}
              className={`transition-all duration-700 ${
                cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <Link
                href={post.href}
                className="glass-card group block p-6 h-full no-underline"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span
                    className="text-[11px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      color: post.tagColor,
                      border: `1px solid ${post.tagColor}30`,
                      fontFamily: "var(--font-inter)",
                    }}
                  >
                    {post.tag}
                  </span>
                  <span
                    className="text-xs ml-auto"
                    style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-inter)" }}
                  >
                    {post.date}
                  </span>
                </div>

                <h3
                  className="text-base font-bold text-white mb-3 leading-snug group-hover:text-gradient transition-all duration-300"
                  style={{ fontFamily: "var(--font-bricolage)" }}
                >
                  {post.title}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-5"
                  style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-inter)" }}
                >
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <span
                    className="text-xs font-medium"
                    style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}
                  >
                    {post.readTime}
                  </span>
                  <div
                    className="flex items-center gap-1.5 text-xs font-semibold transition-all duration-200 group-hover:gap-2.5"
                    style={{ color: "var(--color-accent)" }}
                  >
                    Read
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
