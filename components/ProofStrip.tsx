"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  {
    value: 50000,
    suffix: "+",
    label: "App Downloads",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2a10 10 0 110 20A10 10 0 0112 2z"/>
        <path d="M8 12l4 4 4-4M12 8v8"/>
      </svg>
    ),
    color: "#5EEAD4",
  },
  {
    value: 7,
    suffix: "",
    label: "Live Products",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    color: "#C4B5FD",
  },
  {
    value: 3,
    suffix: "",
    label: "Android Apps",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6z"/>
        <path d="M9 22v-4h6v4M12 2v2"/>
      </svg>
    ),
    color: "#86EFAC",
  },
  {
    value: 100,
    suffix: "%",
    label: "Client-Side",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    color: "#FED7AA",
  },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const duration = 1600;
    const steps = 50;
    const increment = target / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(target, Math.round(increment * step));
      setCount(current);
      if (step >= steps) clearInterval(timer);
    }, duration / steps);

    return () => clearInterval(timer);
  }, [started, target]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function ProofStrip() {
  const stripRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = stripRef.current;
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
      ref={stripRef}
      style={{
        background: "linear-gradient(180deg, rgba(30, 41, 59, 0.3) 0%, rgba(15, 23, 42, 0.5) 100%)",
        borderTop: "1px solid rgba(255,255,255,0.04)",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      <div className="wrap">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: "rgba(255,255,255,0.03)" }}>
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`px-8 py-10 flex flex-col items-center text-center transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{
                background: "linear-gradient(180deg, rgba(15, 23, 42, 0.8) 0%, rgba(15, 23, 42, 0.95) 100%)",
                transitionDelay: `${i * 100}ms`,
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{
                  background: `linear-gradient(135deg, ${stat.color}15 0%, ${stat.color}08 100%)`,
                  border: `1px solid ${stat.color}25`,
                  color: stat.color,
                  boxShadow: `0 4px 20px ${stat.color}15, inset 0 1px 0 rgba(255,255,255,0.05)`,
                }}
              >
                {stat.icon}
              </div>
              <div
                className="text-4xl font-bold mb-2"
                style={{
                  fontFamily: "var(--font-bricolage)",
                  color: stat.color,
                  letterSpacing: "-0.02em",
                  textShadow: `0 0 40px ${stat.color}30`,
                }}
              >
                <Counter target={stat.value} suffix={stat.suffix} />
              </div>
              <div
                className="text-xs font-medium"
                style={{
                  color: "var(--color-text-muted)",
                  fontFamily: "var(--font-inter)",
                  letterSpacing: "0.05em",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
