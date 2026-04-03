"use client";

import { useEffect, useRef, useState } from "react";
import { CpuArchitecture } from "@/components/ui/cpu-architecture";

const schemes = [
  { name: "Default", colors: ["#8B5CF6", "#0ABFBC"], glow: "#8B5CF6" },
  { name: "Electric", colors: ["#6366F1", "#22D3EE"], glow: "#6366F1" },
  { name: "Hot", colors: ["#EC4899", "#F97316"], glow: "#EC4899" },
  { name: "Cyberpunk", colors: ["#00FF88", "#FF0080"], glow: "#00FF88" },
  { name: "Gold", colors: ["#F59E0B", "#EF4444"], glow: "#F59E0B" },
];

export default function LogoShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [activeScheme, setActiveScheme] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

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
      setActiveScheme((prev) => (prev + 1) % schemes.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const currentScheme = schemes[activeScheme];

  return (
    <>
      <style jsx global>{`
        @keyframes floatAnim {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(2deg); }
        }
        @keyframes rotateSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.5; filter: blur(40px); }
          50% { opacity: 0.8; filter: blur(50px); }
        }
        @keyframes scanLine {
          0% { top: -10%; }
          100% { top: 110%; }
        }
        @keyframes borderGlow {
          0%, 100% { 
            border-color: ${currentScheme.colors[0]}40;
            box-shadow: 0 0 20px ${currentScheme.colors[0]}20;
          }
          50% { 
            border-color: ${currentScheme.colors[0]}80;
            box-shadow: 0 0 40px ${currentScheme.colors[0]}40;
          }
        }
        .float-anim {
          animation: floatAnim 6s ease-in-out infinite;
        }
        .rotate-slow {
          animation: rotateSlow 20s linear infinite;
        }
        .pulse-glow {
          animation: pulseGlow 4s ease-in-out infinite;
        }
        .scan-line {
          animation: scanLine 3s linear infinite;
        }
        .border-glow-anim {
          animation: borderGlow 3s ease-in-out infinite;
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
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pulse-glow"
          style={{
            background: `radial-gradient(circle, ${currentScheme.colors[0]}15 0%, transparent 70%)`,
          }}
        />

        <div className="wrap relative z-10">
          <div
            className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
          >
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-6">
                <span
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ background: currentScheme.colors[0], boxShadow: `0 0 10px ${currentScheme.colors[0]}` }}
                />
                <span
                  className="text-xs font-bold uppercase tracking-widest"
                  style={{ color: currentScheme.colors[0], letterSpacing: "0.15em" }}
                >
                  Logo Animation
                </span>
              </div>

              <h2
                className="text-4xl md:text-5xl font-bold text-white mb-4"
                style={{ fontFamily: "var(--font-bricolage)", letterSpacing: "-0.02em", lineHeight: 1.1 }}
              >
                CPU Architecture{" "}
                <span
                  style={{
                    background: `linear-gradient(135deg, ${currentScheme.colors[0]}, ${currentScheme.colors[1]})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Logo
                </span>
              </h2>
              <p
                className="text-base max-w-2xl mx-auto"
                style={{ color: "var(--color-text-muted)", lineHeight: 1.7 }}
              >
                Animated CPU-style logo with flowing data packets and dynamic color schemes
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative flex items-center justify-center">
                <div
                  className="absolute inset-0 rounded-3xl border-glow-anim"
                  style={{
                    border: `1px solid ${currentScheme.colors[0]}40`,
                    background: `linear-gradient(145deg, rgba(15, 23, 42, 0.8) 0%, rgba(15, 23, 42, 0.95) 100%)`,
                  }}
                >
                  <div
                    className="absolute inset-0 overflow-hidden rounded-3xl"
                    style={{ pointerEvents: "none" }}
                  >
                    <div
                      className="absolute left-0 right-0 h-[2px] scan-line"
                      style={{
                        background: `linear-gradient(90deg, transparent, ${currentScheme.colors[0]}80, transparent)`,
                      }}
                    />
                  </div>
                </div>

                <div className="relative p-12">
                  <div className="float-anim" style={{ animationDelay: "0s" }}>
                    <CpuArchitecture
                      width="300"
                      height="200"
                      text="KS"
                      showCpuConnections={true}
                      animateText={true}
                      animateLines={true}
                      animateMarkers={true}
                    />
                  </div>

                  <div
                    className="absolute -top-4 -right-4 px-3 py-1 rounded-full text-xs font-bold"
                    style={{
                      background: `${currentScheme.colors[0]}20`,
                      color: currentScheme.colors[0],
                      border: `1px solid ${currentScheme.colors[0]}40`,
                    }}
                  >
                    Live
                  </div>

                  <div
                    className="absolute -bottom-4 -left-4 px-3 py-1 rounded-full text-xs font-medium"
                    style={{
                      background: "rgba(15, 23, 42, 0.9)",
                      color: "var(--color-text-muted)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    {schemes[activeScheme].name} Scheme
                  </div>
                </div>

                <div
                  className="absolute -z-10 w-64 h-64 rounded-full rotate-slow"
                  style={{
                    background: `radial-gradient(circle, ${currentScheme.colors[1]}10 0%, transparent 70%)`,
                  }}
                />
              </div>

              <div>
                <h3
                  className="text-2xl font-bold text-white mb-6"
                  style={{ fontFamily: "var(--font-bricolage)" }}
                >
                  Color Schemes
                </h3>

                <div className="space-y-4">
                  {schemes.map((scheme, i) => (
                    <div
                      key={scheme.name}
                      className="relative rounded-xl p-4 cursor-pointer transition-all duration-300"
                      style={{
                        background:
                          hoveredCard === i || activeScheme === i
                            ? `linear-gradient(145deg, rgba(${scheme.colors[0].replace("#", "")}, 0.1) 0%, rgba(15, 23, 42, 0.9) 100%)`
                            : "linear-gradient(145deg, rgba(30, 41, 59, 0.3) 0%, rgba(15, 23, 42, 0.5) 100%)",
                        border:
                          hoveredCard === i || activeScheme === i
                            ? `1px solid ${scheme.colors[0]}60`
                            : "1px solid rgba(255, 255, 255, 0.06)",
                        transform:
                          hoveredCard === i ? "scale(1.02) translateX(8px)" : "scale(1)",
                        boxShadow:
                          hoveredCard === i || activeScheme === i
                            ? `0 0 30px ${scheme.colors[0]}20`
                            : "none",
                      }}
                      onMouseEnter={() => setHoveredCard(i)}
                      onMouseLeave={() => setHoveredCard(null)}
                      onClick={() => setActiveScheme(i)}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center"
                          style={{
                            background: `linear-gradient(145deg, ${scheme.colors[0]}, ${scheme.colors[1]})`,
                            boxShadow: `0 0 20px ${scheme.colors[0]}40`,
                          }}
                        >
                          <span className="text-white font-bold text-sm">KS</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm font-bold text-white">{scheme.name}</h4>
                          <div className="flex gap-2 mt-1">
                            <div
                              className="w-4 h-4 rounded-full"
                              style={{ background: scheme.colors[0] }}
                            />
                            <div
                              className="w-4 h-4 rounded-full"
                              style={{ background: scheme.colors[1] }}
                            />
                          </div>
                        </div>
                        {activeScheme === i && (
                          <div
                            className="w-2 h-2 rounded-full animate-pulse"
                            style={{
                              background: scheme.colors[0],
                              boxShadow: `0 0 10px ${scheme.colors[0]}`,
                            }}
                          />
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div
                  className="mt-8 p-4 rounded-xl"
                  style={{
                    background: `${currentScheme.colors[0]}10`,
                    border: `1px solid ${currentScheme.colors[0]}30`,
                  }}
                >
                  <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>
                    <span style={{ color: currentScheme.colors[0], fontWeight: 600 }}>
                      Current:
                    </span>{" "}
                    {currentScheme.name} scheme with flowing data packets and animated markers.
                    Click any scheme to preview.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Animated Packets", value: "8", icon: "📦" },
                { label: "Color Schemes", value: "5", icon: "🎨" },
                { label: "Markers", value: "Dynamic", icon: "📍" },
                { label: "Text Animation", value: "Shimmer", icon: "✨" },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className="text-center p-4 rounded-xl"
                  style={{
                    background: "linear-gradient(145deg, rgba(30, 41, 59, 0.3) 0%, rgba(15, 23, 42, 0.5) 100%)",
                    border: "1px solid rgba(255, 255, 255, 0.06)",
                  }}
                >
                  <span className="text-2xl">{stat.icon}</span>
                  <p
                    className="text-lg font-bold mt-2"
                    style={{
                      background: `linear-gradient(135deg, ${currentScheme.colors[0]}, ${currentScheme.colors[1]})`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
