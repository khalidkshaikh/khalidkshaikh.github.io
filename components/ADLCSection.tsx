"use client";

import { useEffect, useRef, useState } from "react";

const phases = [
  { name: "Plan", sdlc: "Requirement Analysis\nFeasibility Study", adlc: "AI Trend Analysis\nInstant Feasibility" },
  { name: "Design", sdlc: "System Architecture\nUI/UX Wireframes", adlc: "AI Design\nInstant Prototypes" },
  { name: "Develop", sdlc: "Manual Coding\nSlow Iterations", adlc: "AI-Assisted\nRapid Dev" },
  { name: "Test", sdlc: "Dedicated QA Phase\nEnd-to-End", adlc: "Continuous AI\nAutomated QA" },
  { name: "Deploy", sdlc: "Manual Releases\nScheduled", adlc: "CI/CD Pipeline\nInstant Deploy" },
  { name: "Maintain", sdlc: "Bug Reports\nSlow Fixes", adlc: "AI Monitoring\nPredictive" },
];

const flowItems = [
  { label: "Data Input", items: ["Requirements", "Specs", "Feedback"], color: "#8B5CF6" },
  { label: "AI Processing", items: ["Analysis", "Generation", "Testing"], color: "#0ABFBC" },
  { label: "Output", items: ["Code", "Deploy", "Monitor"], color: "#10B981" },
];

export default function ADLCSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [activeFlowIndex, setActiveFlowIndex] = useState(0);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFlowIndex((prev) => (prev + 1) % flowItems.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style jsx global>{`
        @keyframes borderPulseRed {
          0%, 100% {
            border-color: rgba(239, 68, 68, 0.3);
            box-shadow: 0 0 20px rgba(239, 68, 68, 0.1);
          }
          50% {
            border-color: rgba(239, 68, 68, 0.6);
            box-shadow: 0 0 35px rgba(239, 68, 68, 0.25);
          }
        }
        @keyframes borderPulseGreen {
          0%, 100% {
            border-color: rgba(10, 191, 188, 0.4);
            box-shadow: 0 0 30px rgba(10, 191, 188, 0.15);
          }
          50% {
            border-color: rgba(10, 191, 188, 0.8);
            box-shadow: 0 0 45px rgba(10, 191, 188, 0.3);
          }
        }
        @keyframes dotFlowDown {
          0% { top: 0; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        @keyframes flowRightAnim {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(200%); opacity: 0; }
        }
        @keyframes fadeUpAnim {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeSlideLeftAnim {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeSlideRightAnim {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes pulseDot {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.2); opacity: 0.7; }
        }
        .adlc-border-glow {
          animation: borderPulseGreen 2s ease-in-out infinite;
        }
        .sdlc-border-glow {
          animation: borderPulseRed 3s ease-in-out infinite;
        }
        .dot-flow {
          animation: dotFlowDown 2s ease-in-out infinite;
        }
        .flow-arrow {
          animation: flowRightAnim 1.5s ease-in-out infinite;
        }
        .fade-up {
          animation: fadeUpAnim 0.5s ease-out forwards;
        }
        .fade-slide-left {
          animation: fadeSlideLeftAnim 0.5s ease-out forwards;
        }
        .fade-slide-right {
          animation: fadeSlideRightAnim 0.5s ease-out forwards;
        }
        .pulse-dot {
          animation: pulseDot 2s ease-in-out infinite;
        }
      `}</style>

      <section
        ref={sectionRef}
        className="relative overflow-hidden py-24 md:py-32"
        style={{
          background: "linear-gradient(180deg, var(--color-bg-dark) 0%, rgba(15, 23, 42, 0.5) 50%, var(--color-bg-dark) 100%)",
        }}
      >
        <div
          className="absolute top-1/4 left-0 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(239, 68, 68, 0.04) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(10, 191, 188, 0.04) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        <div className="wrap relative z-10">
          <div
            className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
          >
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-6">
                <span
                  className="w-2 h-2 rounded-full pulse-dot"
                  style={{ background: "#10B981", boxShadow: "0 0 10px #10B981" }}
                />
                <span
                  className="text-xs font-bold uppercase tracking-widest"
                  style={{ color: "#10B981", letterSpacing: "0.15em" }}
                >
                  My Approach
                </span>
              </div>

              <h2
                className="text-4xl md:text-5xl font-bold text-white mb-4"
                style={{ fontFamily: "var(--font-bricolage)", letterSpacing: "-0.02em", lineHeight: 1.1 }}
              >
                ADLC <span className="text-gradient-teal">vs</span> SDLC
              </h2>
              <p
                className="text-base max-w-2xl mx-auto"
                style={{ color: "var(--color-text-muted)", lineHeight: 1.7 }}
              >
                Traditional <span style={{ color: "#ef4444", fontWeight: 600 }}>Software Development Lifecycle</span> vs{" "}
                <span style={{ color: "#10B981", fontWeight: 600 }}>AI-Driven Development Lifecycle</span>
              </p>
            </div>

            <div
              className={`relative mb-16 transition-all duration-1000 ${visible ? "opacity-100" : "opacity-0"} hidden md:block`}
              style={{ transitionDelay: "200ms" }}
            >
              <div className="flex items-center justify-center gap-4 md:gap-8">
                {flowItems.map((item, i) => (
                  <div key={item.label} className="relative">
                    <div
                      className="relative z-10 px-4 py-3 rounded-xl transition-all duration-500"
                      style={{
                        background: activeFlowIndex === i
                          ? `linear-gradient(145deg, rgba(${i === 0 ? '139,92,246' : i === 1 ? '10,191,188' : '16,185,129'}, 0.2) 0%, rgba(15, 23, 42, 0.8) 100%)`
                          : "linear-gradient(145deg, rgba(30, 41, 59, 0.4) 0%, rgba(15, 23, 42, 0.6) 100%)",
                        border: `1px solid ${activeFlowIndex === i ? item.color : 'rgba(255, 255, 255, 0.06)'}`,
                        boxShadow: activeFlowIndex === i ? `0 0 30px ${item.color}30` : "none",
                        transform: activeFlowIndex === i ? "scale(1.1)" : "scale(1)",
                      }}
                    >
                      <p
                        className="text-xs font-bold whitespace-nowrap"
                        style={{ color: activeFlowIndex === i ? item.color : "var(--color-text-muted)" }}
                      >
                        {item.label}
                      </p>
                      <div className="mt-2 flex gap-1 justify-center">
                        {item.items.map((subItem) => (
                          <span
                            key={subItem}
                            className="text-[10px] px-2 py-0.5 rounded-full"
                            style={{
                              background: `${item.color}15`,
                              color: item.color,
                              opacity: activeFlowIndex === i ? 1 : 0.4,
                            }}
                          >
                            {subItem}
                          </span>
                        ))}
                      </div>
                    </div>

                    {i < flowItems.length - 1 && (
                      <div className="absolute top-1/2 -right-4 md:-right-6 z-20">
                        <div
                          className="w-8 md:w-12 h-0.5 relative overflow-hidden"
                          style={{ background: "rgba(255, 255, 255, 0.1)" }}
                        >
                          <div
                            className="absolute inset-y-0 left-0 w-1/2 flow-arrow"
                            style={{ background: `linear-gradient(90deg, transparent, ${item.color})` }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="md:hidden mb-8 text-center">
              <div
                className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl"
                style={{
                  background: "rgba(10, 191, 188, 0.1)",
                  border: "1px solid rgba(10, 191, 188, 0.3)",
                  boxShadow: "0 0 20px rgba(10, 191, 188, 0.15)",
                }}
              >
                <div className="flex items-center gap-2">
                  <span className="flex gap-1">
                    {flowItems.map((item, i) => (
                      <span
                        key={item.label}
                        className="w-2 h-2 rounded-full transition-all duration-300"
                        style={{
                          background: item.color,
                          opacity: activeFlowIndex === i ? 1 : 0.3,
                          transform: activeFlowIndex === i ? "scale(1.3)" : "scale(1)",
                        }}
                      />
                    ))}
                  </span>
                  <span className="text-xs font-medium" style={{ color: "#34D399" }}>
                    {flowItems[activeFlowIndex].label}
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <div
                className="relative rounded-2xl overflow-hidden sdlc-border-glow flex flex-col"
                style={{
                  background: "linear-gradient(180deg, rgba(30, 41, 59, 0.4) 0%, rgba(15, 23, 42, 0.6) 100%)",
                  border: "1px solid rgba(239, 68, 68, 0.3)",
                }}
              >
                <div
                  className="px-6 py-4 flex items-center justify-between"
                  style={{ background: "rgba(239, 68, 68, 0.1)", borderBottom: "1px solid rgba(239, 68, 68, 0.15)" }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-xl"
                      style={{ background: "rgba(239, 68, 68, 0.15)" }}
                    >
                      📦
                    </div>
                    <div>
                      <h3 className="text-lg font-bold" style={{ color: "#ef4444" }}>SDLC</h3>
                      <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>Traditional Approach</p>
                    </div>
                  </div>
                  <div
                    className="px-3 py-1 rounded-full text-xs font-bold"
                    style={{ background: "rgba(239, 68, 68, 0.15)", color: "#fca5a5" }}
                  >
                    Waterfall
                  </div>
                </div>

                <div className="p-6 flex-1 space-y-1">
                  {phases.map((phase, i) => (
                    <div
                      key={phase.name}
                      className={`relative flex items-start gap-4 ${visible ? 'fade-slide-left' : 'opacity-0'}`}
                      style={{ animationDelay: `${i * 100}ms` }}
                    >
                      <div className="flex flex-col items-center">
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0"
                          style={{
                            background: "rgba(239, 68, 68, 0.15)",
                            color: "#ef4444",
                            border: "1px solid rgba(239, 68, 68, 0.25)",
                          }}
                        >
                          {i + 1}
                        </div>
                        {i < phases.length - 1 && (
                          <div
                            className="w-0.5 flex-1 min-h-[40px]"
                            style={{
                              background: "linear-gradient(180deg, rgba(239, 68, 68, 0.4) 0%, rgba(239, 68, 68, 0.1) 100%)",
                            }}
                          />
                        )}
                      </div>
                      <div className="flex-1 pb-6">
                        <h4 className="text-sm font-bold text-white">{phase.name}</h4>
                        <p
                          className="text-xs mt-1 whitespace-pre-line"
                          style={{ color: "var(--color-text-muted)" }}
                        >
                          {phase.sdlc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div
                  className="px-6 py-4"
                  style={{ background: "rgba(239, 68, 68, 0.08)", borderTop: "1px solid rgba(239, 68, 68, 0.1)" }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs" style={{ color: "#fca5a5" }}>
                      ⏱️ Slow Iterations
                    </span>
                    <span className="text-xs" style={{ color: "#fca5a5" }}>
                      Linear Flow
                    </span>
                  </div>
                </div>
              </div>

              <div
                className="relative rounded-2xl overflow-hidden adlc-border-glow flex flex-col"
                style={{
                  background: "linear-gradient(180deg, rgba(30, 41, 59, 0.5) 0%, rgba(15, 23, 42, 0.7) 100%)",
                  border: "1px solid rgba(10, 191, 188, 0.4)",
                }}
              >
                <div
                  className="px-6 py-4 flex items-center justify-between"
                  style={{ background: "rgba(10, 191, 188, 0.1)", borderBottom: "1px solid rgba(10, 191, 188, 0.2)" }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-xl"
                      style={{
                        background: "rgba(10, 191, 188, 0.15)",
                        boxShadow: "0 0 15px rgba(10, 191, 188, 0.2)",
                      }}
                    >
                      ⚡
                    </div>
                    <div>
                      <h3 className="text-lg font-bold" style={{ color: "#10B981" }}>ADLC</h3>
                      <p className="text-xs" style={{ color: "#10B981" }}>My AI-Driven Approach</p>
                    </div>
                  </div>
                  <div
                    className="px-3 py-1 rounded-full text-xs font-bold"
                    style={{ background: "rgba(10, 191, 188, 0.15)", color: "#34D399" }}
                  >
                    Agile + AI
                  </div>
                </div>

                <div className="p-6 flex-1">
                  {phases.map((phase, i) => (
                    <div
                      key={phase.name}
                      className={`relative flex items-start gap-4 ${visible ? 'fade-slide-right' : 'opacity-0'}`}
                      style={{ animationDelay: `${i * 100}ms` }}
                    >
                      <div className="flex flex-col items-center">
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0 relative overflow-hidden"
                          style={{
                            background: "rgba(10, 191, 188, 0.15)",
                            color: "#10B981",
                            border: "1px solid rgba(10, 191, 188, 0.3)",
                            boxShadow: "0 0 15px rgba(10, 191, 188, 0.2)",
                          }}
                        >
                          <span className="relative z-10">{i + 1}</span>
                        </div>
                        {i < phases.length - 1 && (
                          <div
                            className="w-0.5 flex-1 min-h-[40px] relative overflow-hidden"
                            style={{
                              background: "linear-gradient(180deg, rgba(10, 191, 188, 0.5) 0%, rgba(10, 191, 188, 0.1) 100%)",
                            }}
                          >
                            <div
                              className="absolute w-1.5 h-1.5 rounded-full dot-flow"
                              style={{
                                background: "#10B981",
                                boxShadow: "0 0 8px #10B981",
                                left: "50%",
                                transform: "translateX(-50%)",
                                animationDelay: `${i * 0.3}s`,
                              }}
                            />
                          </div>
                        )}
                      </div>
                      <div className="flex-1" style={{ paddingBottom: i < phases.length - 1 ? "24px" : "0" }}>
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm font-bold text-white">{phase.name}</h4>
                          <span
                            className="px-2 py-0.5 rounded text-[10px] font-bold"
                            style={{
                              background: "rgba(139, 92, 246, 0.15)",
                              color: "#C4B5FD",
                              border: "1px solid rgba(139, 92, 246, 0.25)",
                            }}
                          >
                            AI
                          </span>
                        </div>
                        <p
                          className="text-xs mt-1 whitespace-pre-line"
                          style={{ color: "var(--color-text-muted)" }}
                        >
                          {phase.adlc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div
                  className="px-6 py-4"
                  style={{ background: "rgba(10, 191, 188, 0.08)", borderTop: "1px solid rgba(10, 191, 188, 0.15)" }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs" style={{ color: "#34D399" }}>
                      🚀 Rapid Iterations
                    </span>
                    <span className="text-xs" style={{ color: "#34D399" }}>
                      Continuous Flow
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { label: "Development Speed", sdlc: "2-6 months", adlc: "Days to weeks", icon: "⏱️", color: "#FBBF24" },
                { label: "Testing Coverage", sdlc: "Manual, limited", adlc: "AI-powered, 95%+", icon: "🔬", color: "#818CF8" },
                { label: "Iteration Cycles", sdlc: "Waterfall", adlc: "Agile + AI", icon: "🔄", color: "#34D399" },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className="relative rounded-xl p-6 transition-all duration-500 hover:scale-105"
                  style={{
                    background: "linear-gradient(145deg, rgba(30, 41, 59, 0.4) 0%, rgba(15, 23, 42, 0.5) 100%)",
                    border: "1px solid rgba(255, 255, 255, 0.06)",
                    animation: visible ? `fadeUpAnim 0.5s ease-out forwards` : "opacity: 0",
                    animationDelay: `${400 + i * 100}ms`,
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{stat.icon}</span>
                    <span className="text-sm font-bold" style={{ color: stat.color }}>
                      {stat.label}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-1">
                      <p className="text-xs mb-1" style={{ color: "#fca5a5" }}>SDLC</p>
                      <p className="text-sm font-medium text-white">{stat.sdlc}</p>
                    </div>
                    <div className="w-px h-10" style={{ background: "rgba(255, 255, 255, 0.1)" }} />
                    <div className="flex-1">
                      <p className="text-xs mb-1" style={{ color: "#34D399" }}>ADLC</p>
                      <p className="text-sm font-medium text-white">{stat.adlc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="mt-12 text-center transition-all duration-700"
              style={{ transitionDelay: "700ms" }}
            >
              <div
                className="relative inline-flex items-center gap-4 px-8 py-4 rounded-2xl overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(109, 40, 217, 0.1) 100%)",
                  border: "1px solid rgba(16, 185, 129, 0.3)",
                  boxShadow: "0 0 20px rgba(16, 185, 129, 0.1)",
                }}
              >
                <span className="text-2xl">💡</span>
                <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
                  This is how I build.{" "}
                  <span style={{ color: "#10B981", fontWeight: 600 }}>
                    Fast, smart, and always AI-assisted.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
