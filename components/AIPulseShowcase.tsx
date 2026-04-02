"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const headlines = [
  { text: "Claude 4 Released with 1M token context", source: "Anthropic", time: "2h ago", category: "Models" },
  { text: "GPT-5 Benchmark Leaks Show 40% Improvement", source: "OpenAI", time: "4h ago", category: "Models" },
  { text: "Mistral Releases Code专用 Model", source: "Mistral AI", time: "6h ago", category: "Open Source" },
  { text: "Google Gemini 2.0 Ultra Performance", source: "Google", time: "8h ago", category: "Models" },
  { text: "Llama 4 Training Complete", source: "Meta", time: "10h ago", category: "Open Source" },
  { text: "AI Agents Framework Released", source: "Microsoft", time: "12h ago", category: "Tools" },
];

const features = [
  { icon: "🤖", label: "AI Models", desc: "LLM releases & benchmarks" },
  { icon: "🛠️", label: "AI Tools", desc: "New launches & updates" },
  { icon: "📦", label: "Open Source", desc: "Models & datasets" },
  { icon: "💼", label: "Enterprise", desc: "SAP & enterprise AI" },
];

const latestNews = [
  { title: "Anthropic Releases Claude 4 with Extended Context", tag: "Breaking", time: "2h ago", color: "#818cf8" },
  { title: "OpenAI Announces GPT-5 Release Timeline", tag: "Models", time: "5h ago", color: "#C4B5FD" },
  { title: "Meta Open Sources Llama 4 Weights", tag: "Open Source", time: "8h ago", color: "#5EEAD4" },
];

export default function AIPulseShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % headlines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, var(--color-bg-dark) 0%, rgba(30, 41, 59, 0.3) 50%, var(--color-bg-dark) 100%)" }}
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(129, 140, 248, 0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="wrap py-24 relative z-10">
        <div
          className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="flex items-center gap-3 mb-6">
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: "#818cf8", boxShadow: "0 0 10px #818cf8" }}
            />
            <span
              className="text-xs font-bold uppercase tracking-widest"
              style={{ color: "#818cf8", letterSpacing: "0.15em" }}
            >
              Live AI Intelligence
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className="text-4xl md:text-5xl font-bold text-white mb-6"
                style={{ fontFamily: "var(--font-bricolage)", letterSpacing: "-0.02em", lineHeight: 1.1 }}
              >
                Neural Pulse{" "}
                <span className="text-gradient-indigo">- AI News,</span>
                <br />
                Automated Daily.
              </h2>
              <p
                className="text-base mb-8"
                style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-inter)", lineHeight: 1.7 }}
              >
                One of my vibe-coded projects. Stay ahead with automated updates on AI model releases,
                tools, open-source repos, and the SAP ecosystem - because who has time to manually check everything?
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {features.map((f) => (
                  <div
                    key={f.label}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl"
                    style={{
                      background: "rgba(129, 140, 248, 0.08)",
                      border: "1px solid rgba(129, 140, 248, 0.15)",
                    }}
                  >
                    <span className="text-base">{f.icon}</span>
                    <div>
                      <p className="text-xs font-semibold text-white">{f.label}</p>
                      <p className="text-[10px]" style={{ color: "var(--color-text-muted)" }}>{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="https://xdrkzx1.github.io/neural-pulse/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex"
                style={{ padding: "14px 28px" }}
              >
                <span className="relative flex h-3 w-3 mr-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: "#818cf8" }} />
                  <span className="relative inline-flex rounded-full h-3 w-3" style={{ background: "#818cf8" }} />
                </span>
                View Neural Pulse
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="relative">
              <div
                className="rounded-2xl overflow-hidden"
                style={{
                  background: "linear-gradient(145deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.7) 100%)",
                  border: "1px solid rgba(129, 140, 248, 0.15)",
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 40px rgba(129, 140, 248, 0.1)",
                }}
              >
                <div
                  className="px-5 py-4 flex items-center justify-between"
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full" style={{ background: "#ef4444" }} />
                      <div className="w-3 h-3 rounded-full" style={{ background: "#eab308" }} />
                      <div className="w-3 h-3 rounded-full" style={{ background: "#22c55e" }} />
                    </div>
                    <span
                      className="text-xs font-semibold"
                      style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}
                    >
                      neuralpulse.live
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className="w-2 h-2 rounded-full animate-pulse"
                      style={{ background: "#22c55e" }}
                    />
                    <span className="text-xs" style={{ color: "#22c55e", fontFamily: "var(--font-mono)" }}>
                      Live
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <div
                    className="mb-4 px-4 py-3 rounded-xl relative overflow-hidden"
                    style={{
                      background: "rgba(129, 140, 248, 0.1)",
                      border: "1px solid rgba(129, 140, 248, 0.2)",
                    }}
                  >
                    <div className="absolute top-0 left-0 right-0 h-full">
                      <div
                        className="h-full opacity-20"
                        style={{
                          background: "linear-gradient(90deg, transparent, rgba(129, 140, 248, 0.3), transparent)",
                          animation: "shimmer 2s infinite",
                          width: "50%",
                        }}
                      />
                    </div>
                    <p className="text-sm font-medium text-white relative z-10">
                      {headlines[activeIndex].text}
                    </p>
                    <div className="flex items-center gap-3 mt-2 relative z-10">
                      <span
                        className="text-xs px-2 py-0.5 rounded"
                        style={{ background: "rgba(129, 140, 248, 0.2)", color: "#818cf8" }}
                      >
                        {headlines[activeIndex].category}
                      </span>
                      <span className="text-xs" style={{ color: "var(--color-text-muted)" }}>
                        {headlines[activeIndex].source} · {headlines[activeIndex].time}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {latestNews.map((news, i) => (
                      <div
                        key={news.title}
                        className="flex items-start gap-3 p-3 rounded-xl transition-all duration-200"
                        style={{
                          background: i === 0 ? "rgba(129, 140, 248, 0.05)" : "transparent",
                          border: `1px solid ${i === 0 ? "rgba(129, 140, 248, 0.1)" : "transparent"}`,
                        }}
                      >
                        <div
                          className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0"
                          style={{ background: news.color }}
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-white truncate">{news.title}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <span
                              className="text-[10px] px-1.5 py-0.5 rounded"
                              style={{ background: `${news.color}15`, color: news.color }}
                            >
                              {news.tag}
                            </span>
                            <span className="text-[10px]" style={{ color: "var(--color-text-muted)" }}>
                              {news.time}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div
                    className="mt-4 pt-4 flex items-center justify-between"
                    style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
                  >
                    <span className="text-xs" style={{ color: "var(--color-text-muted)" }}>
                      Updated every 24h
                    </span>
                    <span className="text-xs font-semibold" style={{ color: "#818cf8" }}>
                      Auto-synced ✓
                    </span>
                  </div>
                </div>
              </div>

              <div
                className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full pointer-events-none"
                style={{
                  background: "radial-gradient(circle, rgba(129, 140, 248, 0.15) 0%, transparent 70%)",
                  filter: "blur(20px)",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        .text-gradient-indigo {
          background: linear-gradient(135deg, #818cf8 0%, #6366f1 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
    </section>
  );
}
