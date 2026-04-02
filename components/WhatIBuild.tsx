"use client";

import { useEffect, useRef, useState } from "react";

const pillars = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
    label: "Ship Fast",
    headline: "If it takes more than a weekend, I'm doing it wrong.",
    body:
      "I vibe code. I use AI to accelerate. I ship tools and automations that solve real problems - without over-engineering. Weekend projects that actually ship.",
    color: "#0ABFBC",
    bg: "rgba(10,191,188,0.08)",
    border: "rgba(10,191,188,0.15)",
    metrics: ["Weekend projects", "AI-assisted", "Shipped, not planned"],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2a10 10 0 1010 10H12V2z"/>
        <path d="M12 2a10 10 0 00-10 10h10V2z"/>
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 9v-2M12 17v-2M9 12H7M17 12h-2"/>
      </svg>
    ),
    label: "AI Workflows",
    headline: "Agents. Chains. Automations. Let AI do the grunt work.",
    body:
      "I build AI-powered workflows that think for themselves. LLM integrations, autonomous agents, smart pipelines - automating the boring stuff so you can focus on building.",
    color: "#B794F4",
    bg: "rgba(108,43,217,0.08)",
    border: "rgba(108,43,217,0.2)",
    metrics: ["LLM Integration", "AI Agents", "Smart Pipelines"],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
      </svg>
    ),
    label: "AI-First",
    headline: "Built with AI. For humans who use AI.",
    body:
      "Every tool leverages AI to amplify productivity. Not because it's trendy - because it works. AI-powered workflows, intelligent automations, tools that actually learn.",
    color: "#34d399",
    bg: "rgba(16,185,129,0.08)",
    border: "rgba(16,185,129,0.15)",
    metrics: ["AI-assisted", "Human-first", "Actually useful"],
  },
];

function PillarCard({
  pillar,
  index,
}: {
  pillar: (typeof pillars)[0];
  index: number;
}) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div
        className="relative h-full rounded-[20px] p-8 overflow-hidden group cursor-default"
        style={{
          background: pillar.bg,
          border: `1px solid ${pillar.border}`,
          transition: "box-shadow 0.3s ease, transform 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = `0 0 30px ${pillar.bg.replace("0.08", "0.2")}, 0 12px 40px rgba(0,0,0,0.3)`;
          e.currentTarget.style.transform = "translateY(-4px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = "none";
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        {/* Decorative corner glow */}
        <div
          className="absolute -top-12 -right-12 w-32 h-32 rounded-full pointer-events-none opacity-20"
          style={{ background: `radial-gradient(circle, ${pillar.color}, transparent 70%)` }}
        />

        {/* Icon */}
        <div
          className="w-12 h-12 rounded-[12px] flex items-center justify-center mb-6"
          style={{ background: pillar.bg, border: `1px solid ${pillar.border}`, color: pillar.color }}
        >
          {pillar.icon}
        </div>

        {/* Label */}
        <p
          className="text-xs font-bold uppercase tracking-widest mb-2"
          style={{ color: pillar.color, letterSpacing: "0.15em", fontFamily: "var(--font-inter)" }}
        >
          {pillar.label}
        </p>

        {/* Headline */}
        <h3
          className="text-xl font-bold text-white mb-4"
          style={{ fontFamily: "var(--font-bricolage)", lineHeight: 1.3 }}
        >
          {pillar.headline}
        </h3>

        {/* Body */}
        <p
          className="text-sm leading-relaxed mb-6"
          style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-inter)" }}
        >
          {pillar.body}
        </p>

        {/* Metrics */}
        <div className="flex flex-wrap gap-2">
          {pillar.metrics.map((m) => (
            <span
              key={m}
              className="text-xs px-3 py-1 rounded-full font-medium"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: pillar.color,
                fontFamily: "var(--font-mono)",
              }}
            >
              {m}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function WhatIBuild() {
  const titleRef = useRef<HTMLDivElement>(null);
  const [titleVisible, setTitleVisible] = useState(false);

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

  return (
    <section
      className="section-pad bg-grid"
      style={{ background: "var(--color-surface-2)" }}
    >
      <div className="wrap">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-16 max-w-xl mx-auto">
          <div
            className={`section-label justify-center transition-all duration-700 ${
              titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ display: "inline-flex" }}
          >
            How I Work
          </div>
          <h2
            className={`text-4xl font-bold text-white mt-2 transition-all duration-700 delay-100 ${
              titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ fontFamily: "var(--font-bricolage)", letterSpacing: "-0.02em" }}
          >
            Ship Fast. Break Less. Automate Everything.
          </h2>
          <p
            className={`mt-3 text-base transition-all duration-700 delay-200 ${
              titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-inter)" }}
          >
            Three things that drive everything I build.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <PillarCard key={pillar.label} pillar={pillar} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
